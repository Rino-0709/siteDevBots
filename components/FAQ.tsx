"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FadeIn, SectionHeader } from "./Section";

const ITEMS = [
  {
    q: "Сколько стоит Telegram-бот?",
    a: "Простые решения начинаются от 15 000 ₽. Более сложные боты с CRM, оплатами, админ-панелью или AI оцениваются индивидуально.",
  },
  {
    q: "Консультация действительно бесплатная?",
    a: "Да. Вы можете написать мне в Telegram, описать задачу, и я бесплатно подскажу возможное решение и примерный бюджет.",
  },
  {
    q: "Сколько занимает разработка?",
    a: "Простой бот можно запустить за несколько дней. Бизнес-бот обычно занимает 1–2 недели. Сложные проекты — от 2–4 недель.",
  },
  {
    q: "Можно ли подключить CRM или Google Sheets?",
    a: "Да, можно интегрировать бота с Google Sheets, CRM, внешними API, платежами и другими сервисами.",
  },
  {
    q: "Можно ли сделать бота с искусственным интеллектом?",
    a: "Да, можно добавить AI-ассистента для консультаций, поддержки, обработки вопросов и автоматизации общения.",
  },
  {
    q: "Вы помогаете после запуска?",
    a: "Да, можно договориться о поддержке, мониторинге, исправлениях и развитии бота.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FAQ"
          title={
            <>
              Частые <span className="text-gradient">вопросы</span>
            </>
          }
          subtitle="Если вашего вопроса нет в списке — задайте его в Telegram. Отвечу бесплатно."
        />

        <div className="space-y-3">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <FadeIn key={it.q} delay={i * 0.04} y={12}>
                <div
                  className={`glass rounded-2xl overflow-hidden transition-colors ${
                    isOpen ? "border-white/20" : ""
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-medium">{it.q}</span>
                    <span
                      className={`h-7 w-7 rounded-full grid place-items-center border border-white/15 transition-transform shrink-0 ${
                        isOpen ? "rotate-45 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20" : ""
                      }`}
                    >
                      <PlusIcon className="h-3.5 w-3.5 text-white" />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      >
                        <div className="px-5 sm:px-6 pb-5 text-gray-300 text-sm leading-relaxed">
                          {it.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlusIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
