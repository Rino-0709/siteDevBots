"use client";
import { FadeIn } from "./Section";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

const STEPS = [
  "Вы пишете мне в Telegram",
  "Я задаю уточняющие вопросы",
  "Вы получаете примерную оценку и план реализации",
];

export default function Consultation() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl glass-strong p-8 sm:p-12">
            <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-neon-cyan/40 via-neon-blue/30 to-neon-violet/40 blur-3xl" />
            <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-neon-violet/40 to-neon-pink/30 blur-3xl" />

            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="eyebrow">Бесплатная консультация</span>
                <h2 className="section-title text-white mt-4">
                  Бесплатно разберу вашу задачу и предложу{" "}
                  <span className="text-gradient">лучший формат бота</span>
                </h2>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  Напишите мне в Telegram, кратко опишите задачу — я подскажу,
                  какой бот подойдёт, какие функции нужны, сколько это может
                  стоить и с чего лучше начать.
                </p>

                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-7"
                >
                  <TgIcon className="h-4 w-4" />
                  Получить бесплатную консультацию
                </a>
              </div>

              <ol className="space-y-3">
                {STEPS.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-4 glass rounded-2xl p-4 hover:border-white/20 transition-all"
                  >
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-white grid place-items-center font-bold shrink-0 shadow-glow">
                      {i + 1}
                    </div>
                    <div className="pt-1.5 text-gray-200">{s}</div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
