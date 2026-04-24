"use client";
import { motion } from "framer-motion";
import { TELEGRAM_LINK } from "@/lib/config";
import { TgIcon } from "./Header";

export default function FloatingCTA() {
  return (
    <motion.a
      href={TELEGRAM_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в Telegram"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4, duration: 0.5 }}
      className="fixed z-40 bottom-5 right-5 sm:bottom-7 sm:right-7 group"
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet blur-xl opacity-60 group-hover:opacity-90 transition-opacity" />
      <span className="relative flex items-center gap-2 px-4 py-3 rounded-full bg-gradient-to-br from-neon-cyan to-neon-violet text-white font-semibold shadow-glow-violet">
        <TgIcon className="h-5 w-5" />
        <span className="hidden sm:inline text-sm">Бесплатная консультация</span>
        <span className="absolute -top-1 -right-1 h-3 w-3">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
          <span className="absolute inset-0 rounded-full bg-emerald-400" />
        </span>
      </span>
    </motion.a>
  );
}
