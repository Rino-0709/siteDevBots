"use client";
import { FadeIn, SectionHeader } from "./Section";

const ITEMS = [
  {
    title: "Разработка под задачу, а не шаблон",
    text: "Каждый бот проектируется под бизнес-сценарий и реальные процессы.",
  },
  {
    title: "Понятная коммуникация",
    text: "Без воды и сложного жаргона. Регулярные апдейты по статусу.",
  },
  {
    title: "Помогаю продумать логику",
    text: "Подсказываю, как упростить пользовательский путь и не перегрузить бота.",
  },
  {
    title: "Делаю аккуратный UX внутри Telegram",
    text: "Кнопки, меню, сценарии и сообщения, с которыми удобно взаимодействовать.",
  },
  {
    title: "Поддерживаю и дорабатываю проект",
    text: "После запуска можно договориться о развитии, поддержке и мониторинге.",
  },
];

export default function WhyMe() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Почему я"
          title={
            <>
              Почему стоит обратиться <span className="text-gradient">ко мне</span>
            </>
          }
          subtitle="Делаю продуманные, поддерживаемые и удобные для пользователей решения."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ITEMS.map((it, i) => (
            <FadeIn key={it.title} delay={i * 0.07}>
              <div className="group relative h-full glass rounded-2xl p-6 hover:-translate-y-1 hover:border-white/20 transition-all">
                <div className="text-3xl font-display font-extrabold text-gradient">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-3 text-white font-semibold text-lg">
                  {it.title}
                </h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">
                  {it.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        {/*
          ===== TESTIMONIALS PLACEHOLDER (commented out) =====
          When you have real client reviews, paste them here.
          Avoid fake testimonials.

          <div className="mt-10 glass rounded-2xl p-6">
            <blockquote className="text-gray-300 italic">
              "Реальный отзыв от клиента..."
            </blockquote>
            <div className="mt-3 text-sm text-gray-400">— Имя, Компания</div>
          </div>
        */}
      </div>
    </section>
  );
}
