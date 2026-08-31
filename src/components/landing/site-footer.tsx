import { Instagram, Linkedin, Send } from "lucide-react";

const LINKS = [
  { label: "رویدادها", href: "#events" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

const SOCIALS = [
  { icon: Instagram, label: "اینستاگرام" },
  { icon: Linkedin, label: "لینکدین" },
  { icon: Send, label: "تلگرام" },
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto max-w-[84rem] px-5 py-16 sm:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid size-10 place-items-center bg-primary text-primary-foreground">
                <span className="text-base font-black">چ</span>
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-extrabold">باشگاه مشتریان</span>
                <span className="block text-[11px] tracking-widest text-ink-muted">
                  ADHESIVE PRO CLUB
                </span>
              </span>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-8 text-ink-muted">
              جامعه‌ای حرفه‌ای برای پیمانکاران، نصابان و فعالان صنعت ساختمان.
            </p>
          </div>

          <nav className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-widest text-ink-muted">لینک‌های سریع</p>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm font-semibold text-ink-foreground/85 transition-colors hover:text-primary"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-widest text-ink-muted">شبکه‌های اجتماعی</p>
            <div className="mt-5 flex gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#hero"
                  aria-label={s.label}
                  className="grid size-10 place-items-center border border-white/15 text-ink-foreground/80 transition-colors hover:border-primary hover:text-primary"
                >
                  <s.icon className="size-4" strokeWidth={1.6} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="pt-8 text-xs text-ink-muted">
          © تمامی حقوق برای باشگاه مشتریان محفوظ است.
        </p>
      </div>
    </footer>
  );
}
