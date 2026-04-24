"use client";
import { motion, useReducedMotion } from "framer-motion";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

const BULLETS = [
  "Бесплатная консультация",
  "Быстрый запуск MVP",
  "Интеграции с CRM, Google Sheets, API и платежами",
  "Поддержка после запуска",
];

const BADGES = [
  "Telegram Bots",
  "AI Automation",
  "CRM Integrations",
  "Payments",
  "Mini Apps",
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Доступен для новых проектов
          </span>

          <h1 className="mt-5 font-display font-extrabold tracking-tight text-white text-[clamp(2rem,5vw,3.6rem)] leading-[1.05]">
            Разрабатываю{" "}
            <span className="text-gradient">Telegram-ботов</span> для продаж,
            заявок и автоматизации бизнеса
          </h1>

          <p className="mt-6 text-base sm:text-lg text-gray-300 max-w-xl leading-relaxed">
            Создаю ботов под ключ: от простых автоответчиков до сложных решений
            с CRM, оплатами, админ-панелью, аналитикой и AI.
          </p>

          <ul className="mt-7 grid sm:grid-cols-2 gap-2.5 max-w-xl">
            {BULLETS.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.08 }}
                className="flex items-start gap-2.5 text-sm text-gray-200"
              >
                <CheckIcon className="h-5 w-5 mt-0.5 text-neon-cyan shrink-0" />
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <TgIcon className="h-4 w-4" />
              Получить бесплатную консультацию
            </a>
            <a href="#pricing" className="btn-secondary">
              Посмотреть цены
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {BADGES.map((b) => (
              <span
                key={b}
                className="text-xs font-medium px-3 py-1.5 rounded-full glass text-gray-300"
              >
                {b}
              </span>
            ))}
          </div>
        </motion.div>

        <ChatMock />
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

/* ----------- Animated Telegram-like chat mockup ----------- */
type Msg = { from: "user" | "bot"; text: string; kind?: "text" | "buttons" | "card" | "pay" };
const SCRIPT: Msg[] = [
  { from: "user", text: "Хочу записаться на стрижку 🙋‍♂️" },
  { from: "bot", text: "Привет! Подберу свободное время. На какой день?" },
  { from: "bot", text: "Выберите дату:", kind: "buttons" },
  { from: "user", text: "Завтра, 18:00" },
  { from: "bot", text: "Подтверждаю запись. К оплате 1 500 ₽", kind: "pay" },
  { from: "user", text: "Оплатил ✅" },
  { from: "bot", text: "Готово! Запись добавлена в CRM и Google Sheets." },
];

function ChatMock() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -1 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-md"
    >
      {/* Glow */}
      <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-neon-cyan/30 via-neon-blue/30 to-neon-violet/30 blur-2xl" />
      <div className="glass-strong rounded-[2rem] p-3 shadow-glow-violet">
        <div className="rounded-[1.5rem] bg-gradient-to-b from-[#0c1226] to-[#070a18] overflow-hidden">
          {/* Phone top */}
          <div className="flex items-center gap-3 px-4 pt-4 pb-3 border-b border-white/5">
            <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet grid place-items-center text-white font-bold">
              B
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Бот · Салон красоты
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                online
              </div>
            </div>
            <div className="ml-auto flex gap-2">
              <div className="h-2 w-2 rounded-full bg-white/30" />
              <div className="h-2 w-2 rounded-full bg-white/30" />
              <div className="h-2 w-2 rounded-full bg-white/30" />
            </div>
          </div>

          {/* Messages */}
          <div className="px-4 py-5 space-y-3 min-h-[420px] max-h-[480px] overflow-hidden relative">
            {SCRIPT.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  delay: reduce ? 0 : 0.6 + i * 0.7,
                  duration: 0.45,
                  ease: "easeOut",
                }}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <Bubble msg={m} />
              </motion.div>
            ))}

            {/* Typing indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 1.4,
                delay: 5.6,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              className="flex justify-start"
            >
              <div className="px-3 py-2 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -3, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                      className="h-1.5 w-1.5 rounded-full bg-white/60"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Input bar */}
          <div className="px-3 pb-3 pt-2 border-t border-white/5">
            <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
              <span className="text-white/40 text-xs">Сообщение…</span>
              <div className="ml-auto h-7 w-7 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet grid place-items-center">
                <TgIcon className="h-3.5 w-3.5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating tag */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 -bottom-4 hidden sm:block glass rounded-2xl px-3 py-2 text-xs"
      >
        <span className="text-emerald-400 font-semibold">+ заявка</span>{" "}
        <span className="text-gray-300">сохранена в CRM</span>
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 top-10 hidden sm:block glass rounded-2xl px-3 py-2 text-xs"
      >
        <span className="text-neon-cyan font-semibold">оплата</span>{" "}
        <span className="text-gray-300">прошла</span>
      </motion.div>
    </motion.div>
  );
}

function Bubble({ msg }: { msg: Msg }) {
  const isUser = msg.from === "user";
  const base =
    "max-w-[78%] px-3.5 py-2 rounded-2xl text-sm leading-snug shadow-sm";
  if (msg.kind === "buttons") {
    return (
      <div
        className={`${base} bg-white/5 border border-white/5 text-gray-200`}
      >
        <div className="mb-2">{msg.text}</div>
        <div className="grid grid-cols-2 gap-1.5">
          {["Сегодня", "Завтра", "Пт, 12", "Сб, 13"].map((b) => (
            <button
              key={b}
              className="text-xs rounded-lg bg-white/5 hover:bg-white/10 transition-colors py-1.5 border border-white/5"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    );
  }
  if (msg.kind === "pay") {
    return (
      <div
        className={`${base} bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 border border-neon-violet/30 text-white`}
      >
        <div>{msg.text}</div>
        <button className="mt-2 w-full text-xs font-semibold rounded-lg bg-gradient-to-r from-neon-cyan to-neon-violet py-1.5">
          Оплатить
        </button>
      </div>
    );
  }
  return (
    <div
      className={`${base} ${
        isUser
          ? "bg-gradient-to-br from-neon-blue to-neon-violet text-white"
          : "bg-white/5 border border-white/5 text-gray-200"
      }`}
    >
      {msg.text}
    </div>
  );
}
