"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { headerNav } from "@/data/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition duration-300",
        scrolled
          ? "border-zinc-200 bg-white/96 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className={cn(
            "text-sm font-semibold tracking-[0.12em] uppercase transition",
            scrolled ? "text-zinc-900" : "text-white",
          )}
        >
          Dagar Prime Estates
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {headerNav.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                scrolled ? "text-zinc-700 hover:bg-zinc-100" : "text-white hover:bg-white/15",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/signin"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              scrolled
                ? "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-100"
                : "border-white/60 bg-white/10 text-white hover:bg-white/20",
            )}
          >
            Register / Sign In
          </Link>
        </div>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          className={cn("md:hidden", scrolled ? "text-zinc-900" : "text-white")}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-panel"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </Button>
      </div>

      {menuOpen ? (
        <div id="mobile-nav-panel" className="border-t border-zinc-200 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {headerNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/signin"
              className="mt-2 rounded-md px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-100"
              onClick={() => setMenuOpen(false)}
            >
              Register / Sign In
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
