import { ArrowLeft } from "lucide-react";

export function JoinCta() {
  return (
    <section id="join" className="relative overflow-hidden bg-ink py-24 text-ink-foreground sm:py-32">
      <div className="pointer-events-none absolute inset-0 grid-blueprint-invert" aria-hidden />
      <div
        className="pointer-events-none absolute -top-24 left-1/4 size-96 rounded-full bg-primary/10 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-[84rem] px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow eyebrow-invert reveal" data-reveal>
              عضویت در باشگاه
            </span>
            <h2
              className="reveal mt-6 text-3xl font-black leading-[1.35] sm:text-5xl sm:leading-[1.3]"
              data-reveal
              style={{ transitionDelay: "60ms" }}
            >
              به جمع حرفه‌ای‌ها بپیوندید
            </h2>
            <p
              className="reveal mt-6 max-w-xl text-sm leading-8 text-ink-muted sm:text-base sm:leading-9"
              data-reveal
              style={{ transitionDelay: "120ms" }}
            >
              اگر در صنعت ساختمان فعالیت می‌کنید، باشگاه مشتریان فرصتی برای رشد، یادگیری و ارتباط با
              یک جامعه حرفه‌ای است.
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <div className="reveal flex flex-col gap-4" data-reveal style={{ transitionDelay: "180ms" }}>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 bg-primary px-10 py-5 text-sm font-bold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                همین حالا عضو شوید
                <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              </a>
              <p className="text-center text-xs font-medium text-ink-muted">
                عضویت رایگان است و در کمتر از دو دقیقه انجام می‌شود.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
