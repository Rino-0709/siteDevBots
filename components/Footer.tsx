"use client";
import {
  TELEGRAM_LINK,
  TELEGRAM_USERNAME,
  BRAND_NAME,
} from "@/lib/config";
import { TgIcon } from "./Header";

const NAV = [
  { href: "#services", label: "Услуги" },
  { href: "#cases", label: "Примеры" },
  { href: "#pricing", label: "Цены" },
  { href: "#process", label: "Процесс" },
  { href: "#faq", label: "FAQ" },
];

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-neon-cyan to-neon-violet grid place-items-center">
                <TgIcon className="h-4 w-4 text-white" />
              </div>
              <span className="font-display font-bold text-white">
                {BRAND_NAME}
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Разработка Telegram-ботов под ключ. Автоматизация заявок, продаж,
              поддержки и AI.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-200 mb-3">
              Навигация
            </div>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-200 mb-3">
              Контакты
            </div>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
            >
              <TgIcon className="h-4 w-4 text-neon-cyan" />
              {TELEGRAM_USERNAME}
            </a>
            <p className="mt-3 text-xs text-gray-500 max-w-xs">
              Бесплатная консультация — напишите мне в Telegram, опишите задачу.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <div>
            © {new Date().getFullYear()} {BRAND_NAME}. Все права защищены.
          </div>
          <div>Сделано с любовью к автоматизации.</div>
        </div>
      </div>
    </footer>
  );
}
