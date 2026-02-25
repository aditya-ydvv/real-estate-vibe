import { Building2 } from "lucide-react";

import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = ["Buy", "Rent", "Sell", "Neighborhoods", "Agents"];

export function HomeNavbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
          <Building2 className="size-5 text-primary" />
          <span>Velour Estates</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navLinks.map((link) => (
            <a key={link} href="#" className={cn(buttonVariants({ variant: "ghost", size: "sm" }))}>
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="hidden sm:inline-flex">
            List Property
          </Button>
          <Button size="sm">Contact</Button>
        </div>
      </div>
    </header>
  );
}
