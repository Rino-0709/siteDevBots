# TG Bot Dev — Landing

Премиальный одностраничный лендинг для разработчика Telegram-ботов.
Стек: **Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion**.

## Запуск

```bash
npm install
npm run dev
```

Откройте http://localhost:3000

Сборка для продакшена:

```bash
npm run build
npm start
```

## Где заменить контакты

Все ссылки на Telegram централизованы в одном файле:

**`lib/config.ts`**

```ts
export const TELEGRAM_USERNAME = "@your_username";
export const TELEGRAM_LINK = "https://t.me/your_username";
export const SITE_URL = "https://your-domain.com";
export const BRAND_NAME = "TG Bot Dev";
```

Достаточно поменять значения в этом файле — они подставятся в шапку, hero,
тарифы, секции консультации, калькулятор, финальный CTA, футер и плавающую
кнопку.

## Деплой на Vercel

1. Запушьте проект на GitHub.
2. На [vercel.com](https://vercel.com) создайте новый проект из этого репозитория.
3. Vercel сам определит Next.js — никаких дополнительных настроек.
4. После деплоя обновите `SITE_URL` в `lib/config.ts` и закоммитьте.

## Структура

```
app/
  layout.tsx      # SEO мета и шрифты
  page.tsx        # Сборка всех секций
  globals.css     # Темы, классы кнопок, glass, gradient
components/
  Background.tsx     # Анимированный фон (orbs, network, grid)
  Header.tsx         # Шапка + мобильное меню
  Hero.tsx           # Hero + анимированный mock Telegram-чата
  Benefits.tsx       # Зачем бизнесу Telegram-бот
  Services.tsx       # Услуги (10 карточек)
  Cases.tsx          # Примеры сценариев
  Pricing.tsx        # 4 тарифа
  Consultation.tsx   # Блок бесплатной консультации
  Process.tsx        # Таймлайн процесса
  TechStack.tsx      # Технологии и интеграции
  WhyMe.tsx          # Почему я + placeholder для отзывов
  Calculator.tsx     # Мини-квиз с переходом в Telegram
  FAQ.tsx            # FAQ-аккордеон
  FinalCTA.tsx       # Финальный CTA-блок
  Footer.tsx         # Футер
  FloatingCTA.tsx    # Плавающая кнопка Telegram
lib/
  config.ts          # Контакты и брендинг
```

## Особенности

- Полностью адаптивно (mobile / tablet / desktop)
- SEO + Open Graph мета-теги (см. `app/layout.tsx`)
- Семантический HTML, доступные кнопки и ссылки
- Шрифты Google Fonts (Inter + Manrope)
- Только CSS/SVG/градиенты, без тяжёлых картинок
- Анимации Framer Motion с `whileInView` (lazy)
- Поддержка `prefers-reduced-motion`
- Плейсхолдер для отзывов закомментирован в `components/WhyMe.tsx`
