"use client";

import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Providers", href: "/providers" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-lg">
     <div className="relative mx-auto flex h-20 max-w-7xl items-center justify-center px-6">

        {/* Logo */}

        {/* <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="SBCMailMe"
            width={170}
            height={55}
            priority
            className="object-contain"
          />
        </Link> */}

        {/* Desktop Navigation */}

   <nav className="hidden items-center gap-10 lg:flex">
  {navLinks.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className="font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600"
    >
      {item.name}
    </Link>
  ))}
</nav>

        {/* Right Side */}

        <div className="absolute right-6 hidden items-center gap-4 lg:flex">

  <button className="rounded-xl bg-slate-100 p-3 text-slate-700 transition hover:bg-blue-50 hover:text-blue-600">
    <Search size={19} />
  </button>

<Link
  href="tel:+18555290095"
  className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700"
>
   +1 855-529-0095
</Link>
</div>

        {/* Mobile Button */}

        <button
          className="text-slate-700 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-slate-100 bg-white shadow-lg lg:hidden">
          <div className="flex flex-col px-6 py-5">

            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 font-medium text-slate-700 transition hover:bg-slate-50 hover:text-blue-600"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-xl bg-blue-600 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
            >
              Get Help
            </Link>

          </div>
        </div>
      )}
    </header>
  );
}