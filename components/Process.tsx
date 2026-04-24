"use client";
import { FadeIn, SectionHeader } from "./Section";

const STEPS = [
  { t: "Бесплатная консультация", d: "Знакомлюсь с задачей и контекстом бизнеса." },
  { t: "Разбор задачи и сценариев", d: "Составляем карту сценариев и приоритеты." },
  { t: "Техническое задание и оценка", d: "Фиксируем функции, сроки и стоимость." },
  { t: "Прототип / демо логики", d: "Показываю работающую логику до полной реализации." },
  { t: "Разработка и интеграции", d: "Бот, админка, CRM, оплаты, AI и аналитика." },
  { t: "Тестирование, запуск и поддержка", d: "Тесты, развёртывание и сопровождение после релиза." },
];

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Процесс"
          title={
            <>
              Как проходит <span className="text-gradient">работа</span>
            </>
          }
          subtitle="Прозрачный процесс от первого сообщения до запуска и поддержки."
        />

        <div className="relative">
          {/* Vertical gradient line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-violet/40 to-transparent sm:-translate-x-px" />

          <ol className="space-y-6 sm:space-y-10">
            {STEPS.map((s, i) => {
              const left = i % 2 === 0;
              return (
                <FadeIn key={s.t} delay={i * 0.06} y={20}>
                  <li
                    className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${
                      left ? "" : "sm:[&>div:first-child]:order-2"
                    }`}
                  >
                    {/* Dot */}
                    <span className="absolute left-4 sm:left-1/2 top-3 -translate-x-1/2 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet shadow-glow" />

                    <div
                      className={`pl-12 sm:pl-0 ${
                        left ? "sm:text-right sm:pr-10" : "sm:pl-10"
                      }`}
                    >
                      <div
                        className={`inline-block glass rounded-2xl p-5 hover:-translate-y-1 hover:border-white/20 transition-all ${
                          left ? "sm:ml-auto" : ""
                        }`}
                      >
                        <div className="text-xs font-semibold text-neon-cyan mb-1">
                          Шаг {i + 1}
                        </div>
                        <h3 className="text-white font-semibold text-lg">{s.t}</h3>
                        <p className="text-sm text-gray-400 mt-1.5 max-w-sm">
                          {s.d}
                        </p>
                      </div>
                    </div>
                    <div />
                  </li>
                </FadeIn>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
