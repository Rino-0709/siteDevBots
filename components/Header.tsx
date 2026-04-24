"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { TELEGRAM_LINK, BRAND_NAME } from "@/lib/config";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Примеры" },
  { href: "#pricing", label: "Цены" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-2 backdrop-blur-xl bg-bg-900/70 border-b border-white/5"
          : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="relative h-8 w-8 grid place-items-center rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet shadow-glow-cyan">
            <BotIcon className="h-5 w-5 text-white" />
            <span className="absolute -inset-0.5 rounded-lg blur-md bg-gradient-to-br from-neon-cyan/40 to-neon-violet/40 -z-10" />
          </div>
          <span className="font-display font-bold tracking-tight text-white">
            {BRAND_NAME}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-gray-300 hover:text-white transition-colors relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-gradient-to-r after:from-neon-cyan after:to-neon-violet hover:after:w-full after:transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
            aria-label="Написать в Telegram"
          >
            <TgIcon className="h-4 w-4" />
            Написать в Telegram
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden h-10 w-10 grid place-items-center rounded-lg glass"
            aria-label="Открыть меню"
            aria-expanded={open}
          >
            <span className="sr-only">Меню</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  open ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-opacity ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-white transition-transform ${
                  open ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-3 pb-5 space-y-2 bg-bg-900/95 backdrop-blur-xl border-t border-white/5">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-gray-200 hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full mt-2"
          >
            <TgIcon className="h-4 w-4" />
            Написать в Telegram
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

function BotIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="7" width="16" height="12" rx="3" stroke="white" strokeWidth="2" />
      <circle cx="9" cy="13" r="1.4" fill="white" />
      <circle cx="15" cy="13" r="1.4" fill="white" />
      <path d="M12 4v3" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="3.5" r="1.2" fill="white" />
    </svg>
  );
}

export function TgIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M21.94 4.18 18.7 19.6c-.24 1.07-.88 1.34-1.78.83l-4.93-3.63-2.38 2.29c-.26.26-.49.49-1 .49l.36-5.05 9.18-8.3c.4-.36-.09-.56-.62-.2L6.18 13.2 1.3 11.66c-1.06-.33-1.08-1.06.22-1.57L20.55 2.6c.88-.33 1.65.21 1.39 1.58Z" />
    </svg>
  );
}
