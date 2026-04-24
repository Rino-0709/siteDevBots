"use client";
import { FadeIn, SectionHeader } from "./Section";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

const PLANS = [
  {
    name: "Start",
    price: "от 15 000 ₽",
    desc: "Простой бот для заявок или FAQ",
    features: [
      "До 10 команд или простых сценариев",
      "Кнопки и меню",
      "Сбор контактов",
      "Передача заявки в Telegram",
      "Базовая настройка",
      "Срок: 3–5 дней",
    ],
    highlight: false,
  },
  {
    name: "Business",
    price: "от 35 000 ₽",
    desc: "Бот для продаж, записи или заявок",
    features: [
      "Многошаговые сценарии",
      "Квиз или форма заявки",
      "Интеграция с Google Sheets / CRM",
      "Уведомления менеджеру",
      "Простая админ-настройка",
      "Срок: 7–14 дней",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    price: "от 70 000 ₽",
    desc: "Сложная автоматизация",
    features: [
      "Оплаты",
      "Личный кабинет или роли пользователей",
      "Админ-панель",
      "API-интеграции",
      "Аналитика",
      "Рассылки и сегментация",
      "Срок: 2–4 недели",
    ],
    highlight: false,
  },
  {
    name: "Custom / AI",
    price: "индивидуально",
    desc: "AI-боты, Mini Apps и нестандартные проекты",
    features: [
      "AI-ассистент",
      "Telegram Mini App",
      "Высокая нагрузка",
      "Сложные интеграции",
      "Архитектура под проект",
      "Техническая поддержка",
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Цены"
          title={
            <>
              Примерные <span className="text-gradient">цены</span>
            </>
          }
          subtitle="Финальная стоимость зависит от логики, интеграций, дизайна, нагрузки и сроков. Точную оценку дам после бесплатной консультации."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {PLANS.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.08}>
              <div
                className={`relative h-full rounded-2xl p-6 transition-all hover:-translate-y-1.5 ${
                  p.highlight
                    ? "glass-strong border-neon-violet/40 shadow-glow-violet"
                    : "glass hover:border-white/20"
                }`}
              >
                {p.highlight && (
                  <>
                    <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-neon-cyan/30 via-neon-violet/30 to-neon-pink/30 -z-10 blur-md" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet text-white shadow-glow">
                      Популярный
                    </span>
                  </>
                )}

                <div className="flex items-baseline justify-between">
                  <h3 className="text-white font-display font-bold text-xl">
                    {p.name}
                  </h3>
                </div>
                <p className="mt-1 text-xs text-gray-400">{p.desc}</p>

                <div className="mt-5">
                  <div className="text-3xl font-display font-extrabold text-white">
                    {p.price}
                  </div>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <CheckIcon className="h-4 w-4 mt-0.5 text-neon-cyan shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 w-full ${
                    p.highlight ? "btn-primary" : "btn-secondary"
                  }`}
                >
                  <TgIcon className="h-4 w-4" />
                  Обсудить проект
                </a>
              </div>
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Не уверены, какой пакет подойдёт?{" "}
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-cyan hover:underline"
          >
            Запросите бесплатную консультацию
          </a>
          .
        </p>
      </div>
    </section>
  );
}

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m5 12 5 5L20 7"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
