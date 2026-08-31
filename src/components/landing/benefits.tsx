import { CalendarDays, GraduationCap, Users, Award, Sparkles, HardHat } from "lucide-react";

const BENEFITS = [
  {
    icon: CalendarDays,
    title: "رویدادهای تخصصی",
    text: "شرکت در رویدادها، ورکشاپ‌ها و برنامه‌های تخصصی صنعت ساختمان.",
  },
  {
    icon: GraduationCap,
    title: "آموزش و یادگیری",
    text: "دسترسی به آموزش‌ها و تجربه‌های تخصصی برای ارتقای مهارت‌های حرفه‌ای.",
  },
  {
    icon: Users,
    title: "ارتباط با متخصصان",
    text: "فرصتی برای شبکه‌سازی و ارتباط با دیگر فعالان حرفه‌ای صنعت.",
  },
  {
    icon: Award,
    title: "مزایای ویژه",
    text: "دسترسی به فرصت‌ها، خدمات و مزایای اختصاصی اعضای باشگاه.",
  },
  {
    icon: Sparkles,
    title: "اطلاع از محصولات جدید",
    text: "اولین نفری باشید که با محصولات و تکنولوژی‌های جدید آشنا می‌شوید.",
  },
  {
    icon: HardHat,
    title: "جامعه حرفه‌ای",
    text: "عضویت در جامعه‌ای از متخصصان، پیمانکاران و نصابان حرفه‌ای.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow reveal" data-reveal>
              مزایای عضویت
            </span>
            <h2
              className="reveal mt-6 text-3xl font-black leading-[1.35] text-foreground sm:text-4xl"
              data-reveal
              style={{ transitionDelay: "60ms" }}
            >
              چرا به باشگاه مشتریان بپیوندید؟
            </h2>
            <p
              className="reveal mt-5 max-w-md text-sm leading-8 text-muted-foreground sm:text-base"
              data-reveal
              style={{ transitionDelay: "120ms" }}
            >
              باشگاه، فراتر از یک برنامه وفاداری است؛ زیرساختی است برای رشد حرفه‌ای کسانی که هر روز
              با چسب، اسلب و مصالح ساختمانی کار می‌کنند.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid border-t border-border sm:grid-cols-2">
              {BENEFITS.map((b, i) => (
                <article
                  key={b.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 60}ms` }}
                  className="reveal group relative border-b border-border p-7 transition-colors duration-300 hover:bg-background sm:p-8 sm:[&:nth-child(odd)]:border-l sm:[&:nth-child(odd)]:border-border"
                >
                  <span
                    className="absolute right-0 top-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full"
                    aria-hidden
                  />
                  <div className="flex items-start gap-4">
                    <b.icon className="mt-0.5 size-6 shrink-0 text-primary" strokeWidth={1.5} />
                    <div>
                      <h3 className="text-base font-extrabold text-foreground">{b.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground">{b.text}</p>
                    </div>
                  </div>
                  <span className="absolute bottom-6 left-7 text-xs font-bold tabular-nums text-border-strong">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
