import { createFileRoute, Link } from "@tanstack/react-router";

import logoAsset from "@/assets/scorpio-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";
import operatives from "@/assets/operatives.jpg";

const emblem = logoAsset.url;
import {
  ShieldCheck,
  Eye,
  Crosshair,
  Truck,
  PawPrint,
  Radio,
  MapPin,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Award,
  Users,
  Building2,
  ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Scorpio Group — Security Holdings | Across Africa" },
      {
        name: "description",
        content:
          "Scorpio Group is the holding company behind Scorpio Security Services — delivering elite manned guarding, VIP protection, and risk management across Africa.",
      },
      { property: "og:title", content: "Scorpio Group — Security Holdings" },
      {
        property: "og:description",
        content:
          "Elite security services across Africa. Manned guarding, executive protection, cash-in-transit, canine units, and risk consulting.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: ShieldCheck,
    title: "Manned Guarding",
    desc: "Vetted, licensed officers for commercial, residential, and industrial sites, 24/7.",
  },
  {
    icon: Crosshair,
    title: "Executive Protection",
    desc: "Discreet close-protection teams for principals, dignitaries, and high-net-worth clients.",
  },
  {
    icon: Truck,
    title: "Cash-in-Transit",
    desc: "Armoured logistics and secure cash movement with full insurance and chain-of-custody.",
  },
  {
    icon: Radio,
    title: "Alarm & Response",
    desc: "Monitored intrusion systems with rapid armed response from regional control rooms.",
  },
  {
    icon: PawPrint,
    title: "Canine Units",
    desc: "Trained detection and patrol dogs for perimeter security, narcotics, and explosives screening.",
  },
  {
    icon: Eye,
    title: "Risk Consulting",
    desc: "Threat assessments, route analysis, and crisis planning from seasoned security advisors.",
  },
];

const subsidiaries = [
  {
    to: "/kenya" as const,
    flag: "🇰🇪",
    name: "Scorpio Security Services Kenya",
    location: "Nairobi · Mombasa · Kisumu · Eldoret",
    blurb:
      "Our flagship operation, headquartered in Nairobi with nationwide deployment capacity. PSRA-licensed officers serving corporate, diplomatic, and critical-infrastructure clients across the Republic of Kenya.",
    points: [
      "PSRA-licensed & vetted officers",
      "Nationwide deployment network",
      "Diplomatic & embassy sector experience",
    ],
  },
  {
    to: "/south-sudan" as const,
    flag: "🇸🇸",
    name: "Scorpio Security Services South Sudan",
    location: "Juba · Malakal · Wau",
    blurb:
      "Specialised security delivery in complex, high-risk environments. Providing armed protection, secure logistics, and risk advisory to NGOs, energy sector operators, and government partners across South Sudan.",
    points: [
      "High-risk environment specialists",
      "NGO & extractive-sector expertise",
      "Secure logistics & convoy escort",
    ],
  },
];

const stats = [
  { icon: Users, value: "1,200+", label: "Licensed officers" },
  { icon: Building2, value: "340+", label: "Sites secured" },
  { icon: Award, value: "15", label: "Years of operations" },
  { icon: MapPin, value: "2+", label: "African regions" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={emblem}
              alt="Scorpio Group emblem"
              width={34}
              height={34}
              className="h-[34px] w-[34px]"
            />
            <span className="text-display text-lg font-semibold tracking-wider text-foreground">
              SCORPIO<span className="text-primary"> GROUP</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            <Link to="/kenya" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Kenya</Link>
            <Link to="/south-sudan" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">South Sudan</Link>
            {[
              ["About", "#about"],
              ["Subsidiaries", "#subsidiaries"],
              ["Services", "#services"],
              ["Coverage", "#coverage"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
          >
            Request a quote
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 md:py-40">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-emblem" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                Security Holdings · Across Africa
              </span>
            </div>
            <h1 className="text-display text-5xl font-bold leading-[0.95] text-foreground md:text-7xl">
              Uncompromising
              <br />
              security across
              <br />
              <span className="text-primary">Africa.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Scorpio Group is the holding company behind Scorpio Security
              Services — a unified standard of protection for people, assets,
              and operations across the African continent.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
              >
                Engage our services
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#subsidiaries"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
              >
                Explore the group
              </a>
            </div>
          </div>
        </div>
        {/* stats bar */}
        <div className="relative border-t border-border bg-background/70 backdrop-blur-sm">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-border md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-1 px-4 py-7 text-center">
                <s.icon className="mb-1 h-5 w-5 text-primary" />
                <span className="text-display text-3xl font-bold text-foreground">
                  {s.value}
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="grid gap-14 md:grid-cols-2 md:items-center">
          <div className="relative">
            <div className="clip-slant overflow-hidden rounded-sm border border-border">
              <img
                src={operatives}
                alt="Scorpio Security officers in formation at dawn"
                width={1600}
                height={912}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-2 hidden rounded-sm border border-primary/30 bg-card px-6 py-4 shadow-glow md:block">
              <p className="text-display text-sm text-primary">Established</p>
              <p className="text-display text-3xl font-bold text-foreground">2011</p>
            </div>
          </div>
          <div>
            <p className="text-display text-sm font-semibold uppercase tracking-widest text-primary">
              The Group
            </p>
            <h2 className="mt-3 text-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              One standard.
              <br />
              Across the continent.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Scorpio Group sets the doctrine, training, and compliance framework
              for its subsidiaries — ensuring that whether you secure assets in
              Nairobi or run operations across the region, you receive the same
              disciplined, accountable, and mission-ready service.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Centralised command standards and officer vetting",
                "Region-specific licensing and regulatory compliance",
                "Integrated cross-border support for multi-market clients",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* SUBSIDIARIES */}
      <section
        id="subsidiaries"
        className="relative border-y border-border bg-grain py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="mb-14 text-center">
            <p className="text-display text-sm font-semibold uppercase tracking-widest text-primary">
              Our Subsidiaries
            </p>
            <h2 className="mt-3 text-display text-4xl font-bold text-foreground md:text-5xl">
              Operating companies
            </h2>
            <div className="venom-line mx-auto mt-5 h-px w-40" />
          </div>
          <div className="grid gap-7 md:grid-cols-2">
            {subsidiaries.map((sub) => (
              <div
                key={sub.name}
                className="group relative overflow-hidden rounded-sm border border-border bg-card p-8 transition-all hover:border-primary/40 hover:shadow-glow"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl leading-none">{sub.flag}</span>
                    <div>
                      <h3 className="text-display text-xl font-bold text-foreground">
                        {sub.name}
                      </h3>
                      <p className="mt-1 flex items-center gap-1.5 text-xs uppercase tracking-wider text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5 text-primary" />
                        {sub.location}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="mt-5 leading-relaxed text-muted-foreground">
                  {sub.blurb}
                </p>
                <ul className="mt-6 space-y-3 border-t border-border pt-6">
                  {sub.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-foreground/90">
                      <ChevronRight className="h-4 w-4 text-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to={sub.to}
                  className="mt-6 inline-flex items-center gap-2 rounded-sm border border-primary/40 px-4 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Visit {sub.flag === "🇰🇪" ? "Kenya" : "South Sudan"} operations
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:py-32">
        <div className="mb-14 max-w-2xl">
          <p className="text-display text-sm font-semibold uppercase tracking-widest text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 text-display text-4xl font-bold text-foreground md:text-5xl">
            Full-spectrum security services
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            From static guarding to high-risk convoy escort, the group delivers
            integrated protection tailored to your threat profile.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group bg-card p-7 transition-colors hover:bg-secondary"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-sm border border-primary/25 bg-primary/10 text-primary transition-all group-hover:shadow-glow">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="text-display text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COVERAGE */}
      <section
        id="coverage"
        className="relative border-y border-border bg-card py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-14 md:grid-cols-[1fr_1.1fr] md:items-center">
            <div>
              <p className="text-display text-sm font-semibold uppercase tracking-widest text-primary">
                Footprint
              </p>
              <h2 className="mt-3 text-display text-4xl font-bold text-foreground md:text-5xl">
              Coverage across
                <br />
                Africa
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Coordinated regional control rooms link our subsidiaries, giving
                multi-site clients a single accountable partner across the
                continent.
              </p>
              <div className="mt-8 space-y-5">
                {[
                  ["Kenya", "Nationwide · HQ Nairobi", "🇰🇪"],
                  ["South Sudan", "Central & regional · HQ Juba", "🇸🇸"],
                ].map(([country, detail, flag]) => (
                  <div
                    key={country}
                    className="flex items-center gap-4 rounded-sm border border-border bg-background p-4"
                  >
                    <span className="text-3xl">{flag}</span>
                    <div>
                      <p className="text-display text-lg font-semibold text-foreground">
                        {country}
                      </p>
                      <p className="text-sm text-muted-foreground">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-sm border border-border bg-background p-8">
              <p className="text-display text-sm uppercase tracking-widest text-muted-foreground">
                Regional Control Rooms
              </p>
              <div className="mt-6 space-y-4">
                {[
                  ["Nairobi", "Group HQ — 24/7 operations centre"],
                  ["Juba", "South Sudan command & logistics"],
                  ["Mombasa", "Coastal & port security desk"],
                  ["Eldoret", "Rift Valley response node"],
                ].map(([city, desc], i) => (
                  <div key={city} className="flex items-center gap-4">
                    <span className="text-display text-sm font-bold text-primary">
                      0{i + 1}
                    </span>
                    <div className="flex-1 border-b border-border pb-3">
                      <p className="font-semibold text-foreground">{city}</p>
                      <p className="text-xs text-muted-foreground">{desc}</p>
                    </div>
                    <Radio className="h-4 w-4 text-primary/70" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section id="contact" className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 bg-grain opacity-60" />
        <div className="relative mx-auto max-w-3xl px-5 text-center">
          <img
            src={emblem}
            alt=""
            width={64}
            height={64}
            className="mx-auto mb-6 h-16 w-16 opacity-90"
          />
          <h2 className="text-display text-4xl font-bold text-foreground md:text-5xl">
            Secure what matters.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Speak with our group operations team to scope protection for your
            people and assets across Africa.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+254700000000"
              className="inline-flex items-center gap-2.5 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
            >
              <Phone className="h-4 w-4" />
              +254 700 000 000
            </a>
            <a
              href="mailto:ops@scorpiogroup.africa"
              className="inline-flex items-center gap-2.5 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              ops@scorpiogroup.africa
            </a>
          </div>
          <p className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            Group HQ · Nairobi, Kenya · Serving clients across Africa
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2.5">
              <img src={emblem} alt="Scorpio Group" width={30} height={30} className="h-[30px] w-[30px]" />
              <span className="text-display text-base font-semibold tracking-wider text-foreground">
                SCORPIO<span className="text-primary"> GROUP</span>
              </span>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#about" className="hover:text-foreground">About</a>
              <Link to="/kenya" className="hover:text-foreground">Kenya</Link>
              <Link to="/south-sudan" className="hover:text-foreground">South Sudan</Link>
              <a href="#subsidiaries" className="hover:text-foreground">Subsidiaries</a>
              <a href="#services" className="hover:text-foreground">Services</a>
              <a href="#coverage" className="hover:text-foreground">Coverage</a>
              <a href="#contact" className="hover:text-foreground">Contact</a>
            </nav>
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Scorpio Group. All rights reserved.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-1 border-t border-border pt-6 text-center text-xs text-muted-foreground md:flex-row md:justify-between md:text-left">
            <p>Scorpio Security Services — operating across Africa</p>
            <p>Licensed security holdings · Pan-African</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
