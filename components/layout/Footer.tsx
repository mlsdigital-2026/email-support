import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Providers", href: "/providers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  { name: "Account Recovery", href: "/services/account-recovery" },
  { name: "Password Reset", href: "/services/password-reset" },
  { name: "Login Help", href: "/services/login-help" },
  { name: "Email Security", href: "/services/email-security" },
];

const resources = [
  { name: "Blog", href: "/blog" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#031728] text-slate-300">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-10">

          {/* Brand */}
          <div className="lg:pr-12">
            <Link
              href="/"
              aria-label="SBCMailMe home"
              className="mb-6 inline-flex h-[68px] w-[145px] items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_0_24px_rgba(255,255,255,0.16)]"
            >
              <Image
                src="/logo.png"
                alt="SBCMailMe"
                width={220}
                height={72}
                priority
                className="h-auto w-[235px] max-w-none object-contain"
              />
            </Link>

            <p className="max-w-md text-[15px] leading-7 text-slate-300">
            SBC Mail Me provides clear, practical guidance for email account
  access, password recovery, login issues, and email security. We help
  users understand common email problems and follow straightforward
  steps toward resolving them.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3.5">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-3.5">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-5 text-base font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-3.5">
              {resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        {/* Disclaimer */}
<div className="mt-14 border-t border-slate-700/70 pt-9">
  <div className="mx-auto max-w-5xl text-center">
    <h2 className="mb-4 text-xl font-semibold text-white">
      Disclaimer
    </h2>

    <p className="text-[15px] leading-7 text-slate-300">
      SBC Mail Me is an independent third-party provider of email account recovery, password recovery, troubleshooting, and technical guidance. We are not affiliated with, authorized by, endorsed by, or sponsored by any email service provider or brand.
    </p>

    <p className="mt-4 text-[15px] leading-7 text-slate-300">
      All trademarks, logos, brand names, and product names are the property of their respective owners and are used solely for identification purposes.
    </p>
  </div>
</div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center md:flex-row md:px-8 md:text-left">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-slate-400 transition-colors hover:text-blue-400"
            >
              SBCMailMe.com
            </Link>
            . All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <Link
              href="/privacy-policy"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/refund-policy"
              className="text-slate-500 transition-colors hover:text-blue-400"
            >
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}