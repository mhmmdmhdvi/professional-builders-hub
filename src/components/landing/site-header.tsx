import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { label: "رویدادها", href: "#events" },
  { label: "درباره ما", href: "#about" },
  { label: "تماس با ما", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md shadow-refined"
          : "border-b border-transparent bg-background/0"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-[84rem] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        {/* logo (right in RTL) */}
        <a href="#hero" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center bg-ink text-ink-foreground">
            <span className="text-base font-black tracking-tight">چ</span>
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-extrabold text-foreground">باشگاه مشتریان</span>
            <span className="block text-[11px] font-medium tracking-widest text-muted-foreground">
              ADHESIVE PRO CLUB
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground after:absolute after:-bottom-1.5 after:right-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#join"
            className="border border-border-strong px-5 py-2 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-ink hover:bg-ink hover:text-ink-foreground"
          >
            ورود
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "بستن منو" : "باز کردن منو"}
          onClick={() => setOpen((v) => !v)}
          className="grid size-10 place-items-center border border-border text-foreground md:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="mx-auto flex max-w-[84rem] flex-col px-5 py-2 sm:px-8">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-sm font-semibold text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={() => setOpen(false)}
              className="my-4 bg-ink px-5 py-3 text-center text-sm font-semibold text-ink-foreground"
            >
              ورود
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
