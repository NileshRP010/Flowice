// src/components/shared/WalletConnectButton.tsx
"use client";
import { Button } from "@/components/ui/button";
import { useWallet } from "@/contexts/WalletContext";
import { LogIn, LogOut, Wallet } from "lucide-react";

const WalletConnectButton = () => {
  const { isConnected, walletAddress, connectWallet, disconnectWallet } = useWallet();

  if (isConnected && walletAddress) {
    return (
      <div className="flex items-center space-x-2">
        <Button variant="outline" size="sm" disabled>
          <Wallet className="mr-2 h-4 w-4" />
          {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
        </Button>
        <Button variant="ghost" size="sm" onClick={disconnectWallet}>
          <LogOut className="mr-2 h-4 w-4" />
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={connectWallet} variant="default" size="sm">
      <LogIn className="mr-2 h-4 w-4" />
      Connect Wallet
    </Button>
  );
};

export default WalletConnectButton;
