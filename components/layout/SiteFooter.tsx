import Link from "next/link";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

import { footerNav } from "@/data/navigation";

const socialLinks = [
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export function SiteFooter() {
  return (
    <footer className="bg-zinc-950 text-zinc-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
            Dagar Prime Estates
          </p>
          <p className="max-w-sm text-sm text-zinc-400">
            A modern brokerage experience for Delhi NCR with premium listings, trusted advisors, and concierge-first service.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="rounded-full border border-zinc-800 p-2 text-zinc-300 transition hover:border-zinc-500 hover:text-white"
                >
                  <Icon className="size-4" />
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Company</h3>
          <ul className="space-y-2 text-sm">
            {footerNav.company.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-zinc-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            {footerNav.explore.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-zinc-400 transition hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-zinc-500 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dagar Prime Estates. All rights reserved.</p>
          <p>
            Listings and pricing shown are illustrative dummy content for demo purposes only and do not constitute an offer or legal commitment.
          </p>
        </div>
      </div>
    </footer>
  );
}
