
// src/components/layout/Header.tsx
"use client";
import Link from 'next/link';
import Logo from '@/components/shared/Logo';
import WalletConnectButton from '@/components/shared/WalletConnectButton';
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Search, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";

const navItems = [
  { name: 'Features', href: '/#features', hasDropdown: false },
  { name: 'How It Works', href: '/#how-it-works', hasDropdown: false },
  { name: 'Learn', href: '/#learn', hasDropdown: true },
  { name: 'Developers', href: '/#developers', hasDropdown: true },
  { name: 'Solutions', href: '/#solutions', hasDropdown: true },
  { name: 'Dashboard', href: '/dashboard', hasDropdown: false },
];

const Header = () => {
  const pathname = usePathname();
  const [showSearchInput, setShowSearchInput] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/80">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-1 text-sm font-medium">
          {navItems.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className={cn(
                "transition-colors hover:text-primary hover:bg-accent/50 px-3 py-2",
                pathname === item.href ? "text-primary bg-accent/50" : "text-foreground/80 hover:text-foreground"
              )}
            >
              <Link href={item.href} className="flex items-center">
                {item.name}
                {item.hasDropdown && <ChevronDown className="ml-1 h-4 w-4" />}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
          {showSearchInput ? (
            <Input
              type="text"
              placeholder="Search..."
              className="h-9 w-48 rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              autoFocus
              onBlur={() => setShowSearchInput(false)}
              onKeyDown={(e) => {
                if (e.key === 'Escape') {
                  setShowSearchInput(false);
                }
                // Future: if (e.key === 'Enter') { /* Handle search submission */ }
              }}
            />
          ) : (
            <Button
              variant="ghost"
              className="text-muted-foreground hover:bg-transparent hover:text-foreground px-3"
              onClick={() => setShowSearchInput(true)}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Button>
          )}
          <WalletConnectButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
