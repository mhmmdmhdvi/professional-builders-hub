import { Phone, Mail, MapPin } from "lucide-react";

const ITEMS = [
  { icon: Phone, label: "شماره تماس", value: "۰۲۱ - ۱۲۳۴ ۵۶۷۸", sub: "شنبه تا چهارشنبه، ۹ تا ۱۷" },
  { icon: Mail, label: "ایمیل", value: "club@example.com", sub: "پاسخ‌گویی در کمتر از ۲۴ ساعت" },
  {
    icon: MapPin,
    label: "آدرس شرکت",
    value: "تهران، خیابان نمونه، پلاک ۱۲۰",
    sub: "دفتر مرکزی و واحد فنی",
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <span className="eyebrow reveal" data-reveal>
              ارتباط با ما
            </span>
            <h2
              className="reveal mt-6 text-3xl font-black leading-[1.35] text-foreground sm:text-4xl"
              data-reveal
              style={{ transitionDelay: "60ms" }}
            >
              تماس با ما
            </h2>
            <p className="reveal mt-5 max-w-sm text-sm leading-8 text-muted-foreground" data-reveal style={{ transitionDelay: "120ms" }}>
              برای عضویت، ثبت‌نام در رویدادها یا مشاوره فنی با ما در تماس باشید.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-px border-y border-border bg-border sm:grid-cols-3">
              {ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="reveal bg-surface p-7"
                >
                  <item.icon className="size-5 text-primary" strokeWidth={1.5} />
                  <p className="mt-6 text-xs font-semibold tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="mt-2 text-base font-extrabold text-foreground">{item.value}</p>
                  <p className="mt-2 text-xs leading-6 text-muted-foreground">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
