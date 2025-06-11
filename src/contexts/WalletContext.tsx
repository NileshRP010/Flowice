// src/contexts/WalletContext.tsx
"use client";
import type React from 'react';
import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';

interface WalletContextType {
  isConnected: boolean;
  walletAddress: string | null;
  connectWallet: () => void;
  disconnectWallet: () => void;
  provider: any; // Placeholder for actual Solana provider
}

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export const WalletProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [provider, setProvider] = useState<any>(null); // Placeholder for Solana provider
  const { toast } = useToast();

  // Check for Phantom wallet on component mount
  useEffect(() => {
    const getProvider = () => {
      if ('phantom' in window) {
        const solanaProvider = (window as any).phantom?.solana;
        if (solanaProvider?.isPhantom) {
          setProvider(solanaProvider);
          // Attempt to connect if already connected
          solanaProvider.connect({ onlyIfTrusted: true })
            .then(({ publicKey }: { publicKey: any }) => {
              setIsConnected(true);
              setWalletAddress(publicKey.toString());
            })
            .catch(() => {
              // Not connected or user chose not to connect
            });
          return solanaProvider;
        }
      }
      // Prompt to install Phantom if not found, but only once or if relevant.
      // For MVP, simple console log or no action.
      // console.log("Phantom wallet not found. Please install Phantom.");
    };
    getProvider();
  }, []);
  
  const connectWallet = useCallback(async () => {
    if (provider) {
      try {
        const resp = await provider.connect();
        setWalletAddress(resp.publicKey.toString());
        setIsConnected(true);
        toast({
          title: "Wallet Connected",
          description: `Address: ${resp.publicKey.toString().substring(0,6)}...${resp.publicKey.toString().substring(resp.publicKey.toString().length - 4)}`,
          variant: "default",
        });
      } catch (err: any) {
        console.error("Failed to connect wallet:", err);
        toast({
          title: "Connection Failed",
          description: err.message || "Could not connect to the wallet.",
          variant: "destructive",
        });
      }
    } else {
       toast({
        title: "Phantom Wallet Not Found",
        description: "Please install the Phantom browser extension.",
        variant: "destructive",
      });
      // Attempt to open Phantom installation page
      window.open("https://phantom.app/", "_blank");
    }
  }, [provider, toast]);

  const disconnectWallet = useCallback(async () => {
    if (provider) {
      try {
        await provider.disconnect();
      } catch (err) {
        console.error("Failed to disconnect wallet:", err);
      } finally {
        setIsConnected(false);
        setWalletAddress(null);
        toast({
          title: "Wallet Disconnected",
        });
      }
    }
  }, [provider, toast]);

  return (
    <WalletContext.Provider value={{ isConnected, walletAddress, connectWallet, disconnectWallet, provider }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = (): WalletContextType => {
  const context = useContext(WalletContext);
  if (!context) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};
