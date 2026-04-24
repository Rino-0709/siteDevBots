"use client";
import { useMemo, useState } from "react";
import { FadeIn, SectionHeader } from "./Section";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

type Q = {
  id: string;
  label: string;
  options: { value: string; label: string }[];
};

const QUESTIONS: Q[] = [
  {
    id: "type",
    label: "Какой бот нужен?",
    options: [
      { value: "leads", label: "Заявки / квиз" },
      { value: "shop", label: "Магазин" },
      { value: "booking", label: "Запись" },
      { value: "course", label: "Курсы / клуб" },
      { value: "support", label: "Поддержка" },
    ],
  },
  {
    id: "pay",
    label: "Нужны ли оплаты?",
    options: [
      { value: "no", label: "Нет" },
      { value: "yes", label: "Да" },
    ],
  },
  {
    id: "crm",
    label: "Нужна ли CRM или Google Sheets?",
    options: [
      { value: "no", label: "Нет" },
      { value: "sheets", label: "Google Sheets" },
      { value: "crm", label: "CRM" },
    ],
  },
  {
    id: "admin",
    label: "Нужна ли админ-панель?",
    options: [
      { value: "no", label: "Нет" },
      { value: "yes", label: "Да" },
    ],
  },
  {
    id: "ai",
    label: "Нужен ли AI?",
    options: [
      { value: "no", label: "Нет" },
      { value: "yes", label: "Да, AI-ассистент" },
    ],
  },
];

export default function Calculator() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const progress = useMemo(() => {
    const filled = Object.keys(answers).length;
    return Math.round((filled / QUESTIONS.length) * 100);
  }, [answers]);

  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Калькулятор"
          title={
            <>
              Хотите узнать <span className="text-gradient">примерную стоимость</span>?
            </>
          }
          subtitle="Ответьте на 5 коротких вопросов — отправлю расчёт и план реализации в Telegram."
        />

        <FadeIn>
          <div className="glass-strong rounded-3xl p-6 sm:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-violet transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="text-xs text-gray-400 tabular-nums">
                {progress}%
              </div>
            </div>

            <div className="space-y-6">
              {QUESTIONS.map((q) => (
                <div key={q.id}>
                  <div className="text-sm text-gray-300 mb-2.5 font-medium">
                    {q.label}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {q.options.map((o) => {
                      const active = answers[q.id] === o.value;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          onClick={() =>
                            setAnswers((s) => ({ ...s, [q.id]: o.value }))
                          }
                          className={`px-4 py-2 rounded-full text-sm border transition-all ${
                            active
                              ? "bg-gradient-to-r from-neon-cyan/30 to-neon-violet/30 border-neon-violet/50 text-white shadow-glow-violet"
                              : "bg-white/[0.03] border-white/10 text-gray-300 hover:border-white/25"
                          }`}
                          aria-pressed={active}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
              <p className="text-sm text-gray-400 max-w-md">
                Точную оценку и список интеграций отправлю после короткой
                переписки в Telegram. Консультация — бесплатная.
              </p>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary shrink-0"
              >
                <TgIcon className="h-4 w-4" />
                Рассчитать стоимость в Telegram
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
