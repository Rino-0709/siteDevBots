"use client";
import { FadeIn, SectionHeader } from "./Section";

const ITEMS = [
  {
    title: "Отвечает клиентам 24/7",
    text: "Бот не уходит на перерыв и не теряет заявки ночью.",
    icon: ClockIcon,
  },
  {
    title: "Собирает и квалифицирует лиды",
    text: "Квиз, формы, вопросы, сегментация и передача данных в таблицы или CRM.",
    icon: LeadIcon,
  },
  {
    title: "Автоматизирует рутину",
    text: "Запись, уведомления, статусы заказов, рассылки, повторные касания.",
    icon: GearIcon,
  },
  {
    title: "Принимает оплаты",
    text: "Интеграция с платежными системами и автоматическая выдача доступа или подтверждений.",
    icon: CardIcon,
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Зачем"
          title={
            <>
              Зачем бизнесу <span className="text-gradient">Telegram-бот</span>?
            </>
          }
          subtitle="Бот закрывает рутинные задачи, экономит время команды и помогает не терять клиентов."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.08}>
              <div className="group glass rounded-2xl p-6 h-full hover:border-white/20 transition-all hover:-translate-y-1 hover:shadow-glow">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 border border-white/10 grid place-items-center mb-4 group-hover:scale-110 transition-transform">
                  <it.icon className="h-5 w-5 text-neon-cyan" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  {it.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{it.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path
        d="M12 7v5l3 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
function LeadIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 7h16M4 12h10M4 17h7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
function GearIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      <path
        d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1A2 2 0 1 1 4.3 17l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.7 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1A2 2 0 1 1 7.1 4.3l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1A2 2 0 1 1 19.7 7l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
function CardIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="2" />
      <path
        d="M7 15h4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
