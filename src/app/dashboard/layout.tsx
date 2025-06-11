// src/app/dashboard/layout.tsx
"use client";
import type React from 'react';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
  SidebarInset,
  SidebarMenuSkeleton,
} from '@/components/ui/sidebar';
import Logo from '@/components/shared/Logo';
import WalletConnectButton from '@/components/shared/WalletConnectButton';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FilePlus2, ListChecks, Settings, LogOut, ShieldAlert, Share2, UserPlus, UserCircle2, CreditCard, Bell, BarChart3, LifeBuoy } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { useWallet } from '@/contexts/WalletContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

const navItems = [
  { href: "/dashboard", label: "Overview", icon: Home },
  { href: "/dashboard/profile", label: "Profile", icon: UserCircle2 },
  { href: "/dashboard/submit-invoice", label: "Submit Invoice", icon: FilePlus2 },
  { href: "/dashboard/invoices", label: "Marketplace", icon: ListChecks },
  { href: "/dashboard/payments", label: "Payments", icon: CreditCard },
  { href: "/dashboard/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/dashboard/risk-management", label: "Risk Tool", icon: ShieldAlert },
  { href: "/dashboard/integrations", label: "Integrations", icon: Share2 },
  { href: "/dashboard/supplier-onboarding", label: "Suppliers", icon: UserPlus },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { href: "/dashboard/support", label: "Support", icon: LifeBuoy },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isConnected, walletAddress, disconnectWallet } = useWallet();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render skeleton or loading state until client-side hydration
    return (
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-40 w-full border-b bg-background h-16 flex items-center px-6 justify-between">
          <div className="h-8 w-24 bg-muted rounded animate-pulse"></div>
          <div className="h-8 w-32 bg-muted rounded animate-pulse"></div>
        </header>
        <div className="flex flex-1">
          <div className="w-64 border-r bg-muted p-4 space-y-2 hidden md:block">
             {[...Array(navItems.length)].map((_, i) => <div key={i} className="h-8 w-full bg-background rounded animate-pulse"></div>)}
          </div>
          <main className="flex-1 p-6 bg-muted/50 animate-pulse"></main>
        </div>
      </div>
    );
  }

  return (
    <SidebarProvider defaultOpen>
      <div className="min-h-screen flex flex-col">
        <header className="sticky top-0 z-40 w-full border-b bg-background">
          <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center">
              <div className="md:hidden">
                <SidebarTrigger />
              </div>
              <div className="hidden md:block">
                <Logo />
              </div>
            </div>
            <div className="md:hidden"> {/* Logo for mobile when sidebar is closed */}
               <Logo />
            </div>
            {isConnected && walletAddress ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                    <Avatar className="h-8 w-8">
                       {/* Placeholder for user avatar if available */}
                       <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${walletAddress}`} alt={walletAddress} />
                      <AvatarFallback>{walletAddress.substring(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">My Account</p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {`${walletAddress.substring(0, 6)}...${walletAddress.substring(walletAddress.length - 4)}`}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/profile">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Settings</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={disconnectWallet}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <WalletConnectButton />
            )}
          </div>
        </header>

        <div className="flex flex-1">
          <Sidebar side="left" collapsible="icon" className="border-r">
            <SidebarContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <Link href={item.href} legacyBehavior passHref>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === item.href || (pathname.startsWith(item.href) && item.href !== "/dashboard")}
                        tooltip={{ children: item.label, side: 'right', className: 'bg-primary text-primary-foreground' }}
                      >
                        <a>
                          <item.icon />
                          <span>{item.label}</span>
                        </a>
                      </SidebarMenuButton>
                    </Link>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarContent>
            {/* <SidebarFooter className="mt-auto">
              <Separator className="my-2" />
               <SidebarMenu>
                 <SidebarMenuItem>
                  <SidebarMenuButton onClick={disconnectWallet} tooltip={{ children: "Log Out", side: 'right' }}>
                    <LogOut/>
                    <span>Log Out</span>
                  </SidebarMenuButton>
                 </SidebarMenuItem>
               </SidebarMenu>
            </SidebarFooter> */}
          </Sidebar>
          <SidebarInset className="flex-1 bg-background">
            {children}
          </SidebarInset>
        </div>
      </div>
    </SidebarProvider>
  );
}
