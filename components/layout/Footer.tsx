import Link from "next/link";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa6";
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

const providers = [
  {
    name: "Gmail",
    href: "/providers/gmail",
  },
  {
    name: "Outlook",
    href: "/providers/outlook",
  },
  {
    name: "Yahoo Mail",
    href: "/providers/yahoo-mail",
  },
  {
    name: "AOL Mail",
    href: "/providers/aol-mail",
  },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">

      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold text-white">
                E
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">
                  Email Support
                </h2>

                <p className="text-sm text-slate-400">
                  Educational Resources
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8">
              Helpful educational guides covering email account recovery,
              password reset, login issues, and security best practices.
            </p>

            <div className="mt-8 space-y-3">

              <div className="flex items-center gap-3">
                <Mail size={18} />
                support@example.com
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} />
                +1 (000) 000-0000
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} />
                United States
              </div>

            </div>

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
              Email Providers
            </h3>

            <ul className="space-y-4">

              {providers.map((item) => (

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
            © {new Date().getFullYear()} Email Support Portal. All rights reserved.
          </p>

          <div className="flex gap-5">

            <Link href="#" className="hover:text-blue-400">
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
            </Link>

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
              Terms of Service
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}