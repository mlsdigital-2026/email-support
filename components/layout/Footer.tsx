import Link from "next/link";
// import {
//   FaFacebookF,
//   FaXTwitter,
//   FaLinkedinIn,
//   FaGithub,
// } from "react-icons/fa6";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Providers", href: "/providers" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  {
    name: "Account Recovery",
    href: "/services/account-recovery",
  },
  {
    name: "Password Reset",
    href: "/services/password-reset",
  },
  {
    name: "Login Help",
    href: "/services/login-help",
  },
  {
    name: "Email Security",
    href: "/services/email-security",
  },
];

const resources = [
  {
    name: "Latest Articles",
    href: "/blog",
  },
  {
    name: "FAQs",
    href: "/faq",
  },
  // {
  //   name: "Support Center",
  //   href: "/services",
  // },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

         {/* Disclaimer */}

<div>

  <h2 className="text-2xl font-bold text-white">
    Disclaimer
  </h2>

  <p className="mt-6 leading-8 text-slate-300">
    SBC Mail Me is an independent third-party provider of email account
    recovery, password recovery, troubleshooting, and technical guidance.
    We are not affiliated with, authorized by, endorsed by, or sponsored
    by any email service provider or brand.
  </p>

  <p className="mt-6 leading-8 text-slate-400">
    All trademarks, logos, brand names, and product names are the property
    of their respective owners and are used solely for identification
    purposes.
  </p>

</div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((item) => (

                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>

              ))}

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Services
            </h3>

            <ul className="space-y-4">

              {services.map((item) => (

                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="transition hover:text-blue-400"
                  >
                    {item.name}
                  </Link>
                </li>

              ))}

            </ul>

          </div>

          {/* Providers */}

          <div>

            <h3 className="mb-6 text-xl font-semibold text-white">
              Resources
            </h3>

            <ul className="space-y-4">

              {resources.map((item) => (
  <li key={item.name}>
    <Link
      href={item.href}
      className="transition hover:text-blue-400"
    >
      {item.name}
    </Link>
  </li>
))}

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

         <p className="text-sm text-slate-400">
  © {new Date().getFullYear()}{" "}
  <Link href="/" className="hover:text-blue-400">
    SBCMailMe.com
  </Link>
  . All rights reserved.
</p>

          <div className="flex gap-5">

            {/* <Link href="#" className="hover:text-blue-400">
              <FaFacebookF size={20} />
            </Link>

            <Link href="#" className="hover:text-blue-400">
              <FaXTwitter size={20} />
            </Link>

            <Link href="#" className="hover:text-blue-400">
              <FaLinkedinIn size={20} />
            </Link>

            <Link href="#" className="hover:text-blue-400">
              <FaGithub size={20} />
            </Link> */}

          </div>

          <div className="flex gap-6 text-sm">

            <Link
              href="/privacy-policy"
              className="hover:text-blue-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="hover:text-blue-400"
            >
              Terms & Conditions
            </Link>
             <Link
              href="/refund-policy"
              className="hover:text-blue-400"
            >
              Refund Policy
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}