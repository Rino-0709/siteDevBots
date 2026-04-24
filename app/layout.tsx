import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, BRAND_NAME } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${BRAND_NAME} — Разработка Telegram-ботов под ключ для бизнеса`,
  description:
    "Разрабатываю Telegram-ботов для продаж, заявок, записи, оплат, поддержки и AI-ассистентов. Интеграции с CRM, Google Sheets, API. Бесплатная консультация.",
  keywords: [
    "разработка телеграм ботов",
    "telegram bot",
    "telegram бот для бизнеса",
    "AI ассистент telegram",
    "telegram mini app",
    "интеграция CRM telegram",
    "бот для записи клиентов",
    "бот с оплатой",
  ],
  openGraph: {
    type: "website",
    locale: "ru_RU",
    title: `${BRAND_NAME} — Разработка Telegram-ботов под ключ`,
    description:
      "Создаю Telegram-ботов для продаж, заявок, оплат и автоматизации. Бесплатная консультация в Telegram.",
    url: SITE_URL,
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND_NAME} — Telegram Bot Developer`,
    description:
      "Разработка Telegram-ботов под ключ: продажи, заявки, оплаты, AI. Бесплатная консультация.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="theme-color" content="#05060d" />
      </head>
      <body className="bg-bg-900 text-gray-200 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
