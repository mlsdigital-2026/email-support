"use client";

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Providers", href: "/providers" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}

    <Link href="/" className="flex items-center">
  <Image
    src="/logo.png"
    alt="SBC Mail Me"
    width={140}
    height={50}
    className="object-contain"
  />
</Link>

          {/* <div>
            <h1 className="text-lg font-bold text-slate-900">
              Email Support
            </h1>

            <p className="text-xs text-slate-500">
              Help & Recovery Guides
            </p>
          </div>
        </Link> */}

        {/* Desktop */}

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="font-medium text-slate-700 transition hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Right */}

        <div className="hidden items-center gap-4 lg:flex">

          <button className="rounded-xl bg-slate-100 p-3 transition hover:bg-slate-200">
            <Search size={18} />
          </button>

          <Link
            href="/contact"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Get Help
          </Link>
        </div>

        {/* Mobile */}

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

      {open && (
        <div className="border-t bg-white lg:hidden">
          <div className="flex flex-col p-6">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="py-3"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              className="mt-4 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white"
            >
              Get Help
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}