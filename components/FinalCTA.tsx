"use client";
import { FadeIn } from "./Section";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

export default function FinalCTA() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl text-center p-10 sm:p-16 glass-strong">
            <div className="absolute inset-0 -z-0 opacity-70 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.18),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.25),transparent_60%)]" />
            <div className="relative">
              <span className="eyebrow">Готовы начать?</span>
              <h2 className="section-title text-white mt-4 mx-auto max-w-3xl">
                Готовы автоматизировать заявки, продажи или{" "}
                <span className="text-gradient">поддержку</span>?
              </h2>
              <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                Напишите мне в Telegram — обсудим задачу и подберём оптимальное
                решение. Консультация бесплатная.
              </p>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-7 text-base"
              >
                <TgIcon className="h-4 w-4" />
                Написать в Telegram
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
