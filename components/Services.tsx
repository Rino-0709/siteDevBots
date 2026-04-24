"use client";
import { FadeIn, SectionHeader } from "./Section";

const SERVICES = [
  { title: "Бот для записи клиентов", desc: "Онлайн-запись, выбор времени, напоминания и уведомления." },
  { title: "Бот для сбора заявок", desc: "Квизы и формы для квалификации лидов с передачей в CRM." },
  { title: "Бот для интернет-магазина", desc: "Каталог, корзина, оформление заказа и оповещения менеджера." },
  { title: "Бот технической поддержки", desc: "Тикеты, FAQ, маршрутизация запросов на оператора." },
  { title: "AI-ассистент для консультаций", desc: "OpenAI / Claude API, контекст из ваших материалов и базы." },
  { title: "Бот для курсов, клубов и подписок", desc: "Доступы, подписки, выдача материалов, проверка оплаты." },
  { title: "Бот с оплатами", desc: "Telegram Payments, ЮKassa, Stripe и автоматическая фискализация." },
  { title: "Telegram Mini App", desc: "Полноценные веб-приложения внутри Telegram с авторизацией." },
  { title: "Интеграция с CRM / Google Sheets / API", desc: "Двусторонний обмен данными, вебхуки и автоматизации." },
  { title: "Админ-панель для управления ботом", desc: "Настройка сценариев, контента, рассылок и аналитики." },
];

function svgWrap(d: string) {
  return ({ className = "" }: { className?: string }) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}

const CalendarIcon = svgWrap(
  '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/>'
);
const FormIcon = svgWrap(
  '<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/>'
);
const CartIcon = svgWrap(
  '<path d="M3 4h2l2 12h12l2-8H6"/><circle cx="9" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/>'
);
const SupportIcon = svgWrap(
  '<path d="M21 12a9 9 0 1 0-3.5 7.1L21 21l-1.4-3.4A8.97 8.97 0 0 0 21 12Z"/><path d="M9 10h.01M12 10h.01M15 10h.01"/>'
);
const AiIcon = svgWrap(
  '<rect x="4" y="6" width="16" height="14" rx="3"/><path d="M9 12h.01M15 12h.01"/><path d="M12 3v3M8 16c1 1 2.5 1.5 4 1.5S15 17 16 16"/>'
);
const CourseIcon = svgWrap(
  '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>'
);
const PayIcon = svgWrap(
  '<rect x="3" y="6" width="18" height="13" rx="2"/><path d="M3 10h18M7 15h4"/>'
);
const AppIcon = svgWrap(
  '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>'
);
const IntegrationIcon = svgWrap(
  '<circle cx="6" cy="6" r="3"/><circle cx="18" cy="18" r="3"/><path d="M9 6h6a3 3 0 0 1 3 3v6"/>'
);
const AdminIcon = svgWrap(
  '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 22h8M12 18v4"/>'
);

const ICONS = [
  CalendarIcon, FormIcon, CartIcon, SupportIcon, AiIcon,
  CourseIcon, PayIcon, AppIcon, IntegrationIcon, AdminIcon,
];

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Услуги"
          title={
            <>
              Какие <span className="text-gradient">Telegram-боты</span> я
              разрабатываю
            </>
          }
          subtitle="От простых сценариев до сложных систем с CRM, оплатами и AI."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <FadeIn key={s.title} delay={(i % 3) * 0.05}>
                <div className="group relative glass rounded-2xl p-6 h-full overflow-hidden transition-all hover:-translate-y-1 hover:border-white/20">
                  <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-neon-cyan/10 via-transparent to-neon-violet/10 pointer-events-none" />
                  <div className="relative">
                    <div className="h-11 w-11 rounded-xl bg-white/5 border border-white/10 grid place-items-center mb-4 transition-transform group-hover:rotate-3 group-hover:scale-110">
                      <Icon className="h-5 w-5 text-neon-cyan" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-1.5">
                      {s.title}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
