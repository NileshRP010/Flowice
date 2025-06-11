// src/components/layout/Footer.tsx
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 md:py-12 border-t border-border/40 mt-auto bg-background text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-8">
          <div>
            <h5 className="font-semibold text-foreground mb-3">Flowice</h5>
            <ul className="space-y-2">
              <li><Link href="/#features" className="text-sm hover:text-primary">Features</Link></li>
              <li><Link href="/#how-it-works" className="text-sm hover:text-primary">How It Works</Link></li>
              <li><Link href="/dashboard" className="text-sm hover:text-primary">Dashboard</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Resources</h5>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-sm hover:text-primary">Blog</Link></li>
              <li><Link href="/docs" className="text-sm hover:text-primary">Documentation</Link></li>
              <li><Link href="/dashboard/support" className="text-sm hover:text-primary">Support</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-primary">FAQ</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Company</h5>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="/careers" className="text-sm hover:text-primary">Careers</Link></li>
              <li><Link href="/press" className="text-sm hover:text-primary">Press</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Legal</h5>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-sm hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="text-sm hover:text-primary">Cookie Policy</Link></li>
            </ul>
          </div>
           <div className="col-span-2 lg:col-span-1">
            <h5 className="font-semibold text-foreground mb-3">Connect</h5>
             <ul className="space-y-2">
              <li><Link href="/community" className="text-sm hover:text-primary">Community</Link></li>
              <li><Link href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">Twitter (X)</Link></li>
              <li><Link href="#" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-primary">LinkedIn</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/40 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-balance text-center md:text-left">
            © {currentYear} Flowice Finance. All rights reserved.
          </p>
          {/* Placeholder for social media icons if desired */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* Example: <Link href="#" aria-label="Twitter">X</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
