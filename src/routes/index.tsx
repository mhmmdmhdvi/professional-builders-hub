import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/landing/site-header";
import { Hero } from "@/components/landing/hero";
import { Benefits } from "@/components/landing/benefits";
import { Events } from "@/components/landing/events";
import { JoinCta } from "@/components/landing/join-cta";
import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { SiteFooter } from "@/components/landing/site-footer";
import { useReveal } from "@/hooks/use-reveal";

const TITLE = "باشگاه مشتریان چسب ساختمانی | جامعه حرفه‌ای‌های صنعت ساختمان";
const DESCRIPTION =
  "باشگاه مشتریان؛ جامعه‌ای تخصصی برای پیمانکاران، نصابان اسلب و سرامیک و فعالان صنعت ساختمان با رویدادها، آموزش‌ها و مزایای ویژه.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Benefits />
        <Events />
        <JoinCta />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
