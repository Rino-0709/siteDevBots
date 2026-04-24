"use client";
import { FadeIn, SectionHeader } from "./Section";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

const CASES = [
  {
    tag: "Услуги",
    title: "Бот для салона / клиники",
    bullets: [
      "Онлайн-запись",
      "Напоминания",
      "Сбор контактов",
      "Передача заявок в таблицу или CRM",
    ],
    accent: "from-neon-cyan/40 to-neon-blue/40",
  },
  {
    tag: "Образование",
    title: "Бот для онлайн-школы",
    bullets: [
      "Выдача материалов",
      "Приём оплат",
      "Проверка доступа",
      "Уведомления ученикам",
    ],
    accent: "from-neon-violet/40 to-neon-pink/40",
  },
  {
    tag: "E-commerce",
    title: "Бот для магазина",
    bullets: [
      "Каталог товаров",
      "Корзина",
      "Оформление заказа",
      "Уведомление менеджера",
    ],
    accent: "from-neon-blue/40 to-neon-violet/40",
  },
];

export default function Cases() {
  return (
    <section id="cases" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Примеры"
          title={
            <>
              Примеры <span className="text-gradient">решений</span>
            </>
          }
          subtitle="Это типовые сценарии, которые показывают, как может выглядеть бот под вашу задачу. Логика и интеграции подбираются под бизнес."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {CASES.map((c, i) => (
            <FadeIn key={c.title} delay={i * 0.1}>
              <div className="group relative h-full glass-strong rounded-2xl p-6 overflow-hidden hover:-translate-y-1 transition-all">
                <div
                  className={`absolute -top-20 -right-20 h-60 w-60 rounded-full bg-gradient-to-br ${c.accent} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity`}
                />
                <div className="relative">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-neon-cyan">
                    {c.tag}
                  </span>
                  <h3 className="mt-2 text-xl font-display font-bold text-white">
                    {c.title}
                  </h3>
                  <ul className="mt-5 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm text-gray-300"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-4">
              Хотите похожего бота? Напишите мне — консультация бесплатная.
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <TgIcon className="h-4 w-4" />
              Написать в Telegram
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
