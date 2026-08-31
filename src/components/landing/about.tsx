const POINTS = [
  { title: "تخصص‌محور", text: "محتوا و رویدادها بر پایه نیاز واقعی مجریان و نصابان طراحی می‌شود." },
  { title: "بلندمدت", text: "رابطه‌ای پایدار با کسانی که کیفیت اجرا را در پروژه‌ها می‌سازند." },
  { title: "میدانی", text: "آموزش عملی در کارگاه و پروژه، نه صرفاً محتوای تئوری." },
];

export function About() {
  return (
    <section id="about" className="border-t border-border bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow reveal" data-reveal>
              درباره ما
            </span>
            <h2
              className="reveal mt-6 text-3xl font-black leading-[1.35] text-foreground sm:text-4xl"
              data-reveal
              style={{ transitionDelay: "60ms" }}
            >
              درباره باشگاه مشتریان
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p
              className="reveal text-base leading-9 text-foreground sm:text-lg sm:leading-10"
              data-reveal
            >
              ماموریت ما ساختن یک جامعه حرفه‌ای پایدار پیرامون افرادی است که با چسب‌های ساختمانی،
              مصالح نصب و اجرای پروژه‌های ساختمانی کار می‌کنند؛ از پیمانکار و نصاب اسلب تا کاشی‌کار و
              فروشنده مصالح.
            </p>
            <p className="reveal mt-6 text-sm leading-8 text-muted-foreground sm:text-base sm:leading-9" data-reveal style={{ transitionDelay: "80ms" }}>
              باور داریم کیفیت نهایی هر پروژه، حاصل دانش و دقت کسی است که محصول را اجرا می‌کند. به
              همین دلیل باشگاه را به‌عنوان بستری برای انتقال دانش فنی، تبادل تجربه و ایجاد ارتباط
              مستقیم میان متخصصان و تیم فنی ما طراحی کرده‌ایم.
            </p>

            <dl className="mt-12 grid gap-px border-t border-border bg-border sm:grid-cols-3">
              {POINTS.map((p, i) => (
                <div
                  key={p.title}
                  data-reveal
                  style={{ transitionDelay: `${i * 70}ms` }}
                  className="reveal bg-background py-7 sm:px-6 sm:first:pr-0"
                >
                  <dt className="text-sm font-extrabold text-foreground">{p.title}</dt>
                  <dd className="mt-3 text-sm leading-7 text-muted-foreground">{p.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
