import Link from "next/link";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0b1512] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6">
              <div className="w-50 h-50 relative">
                <Image
                  src="/images/logo1.png"
                  alt="Cambodia Travel Guide"
                  fill
                  sizes="150px"
                  className="object-cover"
                />
              </div>

              {/* <span className="font-display text-xl tracking-wide">
                Cambodia
                <span className="text-yellow-500">.</span>
              </span> */}
            </Link>

            <p className="max-w-md text-sm leading-7 text-white/55">
              Discover the beauty, culture, history, and hidden gems of
              Cambodia. Your guide to unforgettable places and experiences.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-7">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10
                flex items-center justify-center
                text-white/60 hover:text-yellow-400
                hover:border-yellow-400/50 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.406.593 24 1.326 24H12.84v-9.294H9.612V10.31h3.228V7.538c0-3.2 1.942-4.788 4.656-4.788 1.332 0 2.48.124 2.795.185v3.23h-1.912c-1.504 0-2.19.922-2.19 2.13v2.837h4.38l-.57 4.276h-3.806V24h7.357c.731 0 1.326-.594 1.326-1.326V1.326C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>

              {/* <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10
                flex items-center justify-center
                text-white/60 hover:text-yellow-400
                hover:border-yellow-400/50 transition"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 0C8.74 0 8.333.012 11.02.07 13.71.13 15.05.345 15.82.64c.865.326 1.474.793 1.988 1.307.51.51.978 1.116 1.31 1.973.3.839.514 2.211.524 5.446.01 3.278-.083 4.72-1.997 6.666-1.914 1.94-4.345 2.033-7.58 2.033-3.23 0-4.71-.094-6.62-1.99-1.92-1.91-2.03-4.33-2.03-7.57 0-3.24.102-4.722 1.99-6.64C4.41 3.34 6.37 1.99 9.52 1.99c3.14 0 4.98.17 6.31.95.77.42 1.51.91 2.33 1.65l-.02-.02c0 3.37-.09 4.86-2.39 7.16-2.28 2.28-5.01 2.31-8.42 2.31-3.41 0-6.16-.03-8.42-2.34-2.24-2.29-2.3-5.05-2.3-8.45 0-3.41.06-6.17 2.34-8.45.01-.02.03-.04.04-.06 1.66-2.69 3.91-4.21 6.97-4.74.04-.01.07-.01.11-.01z" />
                </svg>
              </a> */}

              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/10
                flex items-center justify-center
                text-white/60 hover:text-yellow-400
                hover:border-yellow-400/50 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-yellow-500 mb-6">
              Explore
            </h3>

            <ul className="space-y-4 text-sm text-white/55">
              <li>
                <Link href="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>

              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/destinations"
                  className="hover:text-white transition"
                >
                  Destinations
                </Link>
              </li>

              <li>
                <Link href="/gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>

              <li>
                <Link
                  href="/cost-estimator"
                  className="hover:text-white transition"
                >
                  Cost Estimator
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.25em] text-yellow-500 mb-6">
              Information
            </h3>

            <ul className="space-y-4 text-sm text-white/55">
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms & Conditions
                </Link>
              </li>

              <li>
                <a
                  href="mailto:hello@example.com"
                  className="hover:text-white transition"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div
          className="mt-16 pt-10 border-t border-white/10
          flex flex-col lg:flex-row
          lg:items-center lg:justify-between gap-6"
        >
          <div>
            <p className="text-lg font-medium">Stay inspired.</p>

            <p className="text-sm text-white/40 mt-1">
              Get Cambodia travel inspiration in your inbox.
            </p>
          </div>

          <form className="flex w-full lg:w-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full lg:w-72 px-5 py-3
              bg-white/5 border border-white/10
              rounded-l-full outline-none
              text-sm placeholder:text-white/30
              focus:border-yellow-500/50"
            />

            <button
              type="submit"
              className="px-6 py-3
              bg-yellow-500 text-black
              rounded-r-full text-sm font-semibold
              hover:bg-yellow-400 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div
          className="mx-auto max-w-7xl px-5 md:px-8 py-5
          flex flex-col md:flex-row
          items-center justify-between gap-3"
        >
          <p className="text-xs text-white/35">
            © 2026 Cambodia Travel Guide. All rights reserved.
          </p>

          <p className="text-xs text-white/35">
            Made with <span className="text-yellow-500">♥</span> in Cambodia
          </p>
        </div>
      </div>
    </footer>
  );
}
