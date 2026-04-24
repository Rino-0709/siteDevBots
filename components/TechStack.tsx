"use client";
import { FadeIn, SectionHeader } from "./Section";

const TECH = [
  "Python", "Aiogram", "Node.js", "TypeScript", "FastAPI",
  "PostgreSQL", "Redis", "Docker", "Telegram Bot API", "Telegram Payments",
  "Google Sheets", "CRM", "REST API", "OpenAI / Claude API", "Webhooks",
];

export default function TechStack() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Стек"
          title={
            <>
              Технологии и <span className="text-gradient">интеграции</span>
            </>
          }
          subtitle="Подбираю инструменты под задачу: производительность, надёжность, гибкие интеграции."
        />

        <FadeIn>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap gap-2.5 justify-center">
              {TECH.map((t) => (
                <span
                  key={t}
                  className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-sm border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20 transition-colors"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-neon-cyan to-neon-violet group-hover:scale-150 transition-transform" />
                  <span className="text-gray-200">{t}</span>
                </span>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
