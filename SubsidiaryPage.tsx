import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  ChevronRight,
  Lightbulb,
  ShieldCheck,
  BadgeCheck,
  Handshake,
  Phone,
  Mail,
  type LucideIcon,
} from "lucide-react";

import logoAsset from "@/assets/scorpio-logo.png.asset.json";
import heroBg from "@/assets/hero-bg.jpg";

const emblem = logoAsset.url;

export type ServiceGroup = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

export type SubsidiaryPageProps = {
  flag: string;
  country: string;
  hq: string;
  headline: [string, string, string];
  intro: string;
  serviceGroups: ServiceGroup[];
  whyUs: string[];
  sectors: string[];
  locations: [string, string][];
  clients?: { name: string; detail?: string }[];
  phone: string;
  email: string;
};

const values: [LucideIcon, string][] = [
  [Lightbulb, "Innovation"],
  [ShieldCheck, "Integrity"],
  [BadgeCheck, "Reliability"],
  [Handshake, "Partnership"],
];

export function SubsidiaryPage({
  flag,
  country,
  hq,
  headline,
  intro,
  serviceGroups,
  whyUs,
  sectors,
  locations,
  clients,
  phone,
  email,
}: SubsidiaryPageProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link to="/" className="flex items-center gap-2.5">
            <img
              src={emblem}
              alt="Scorpio Group emblem"
              width={34}
              height={34}
              className="h-[34px] w-[34px]"
            />
            <span className="text-display text-lg font-semibold tracking-wider">
              SCORPIO<span className="text-primary"> GROUP</span>
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              to="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Group
            </Link>
            <Link
              to="/kenya"
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Kenya
            </Link>
            <Link
              to="/south-sudan"
              activeProps={{ className: "text-primary" }}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              South Sudan
            </Link>
            <a
              href="#services"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
            </a>
          </nav>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
          >
            Get a quote
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
        <div className="relative mx-auto max-w-7xl px-5 py-24 md:py-36">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                {hq}
              </span>
            </div>
            <h1 className="text-display text-4xl font-bold uppercase leading-[1.02] md:text-6xl">
              {headline[0]}
              <br />
              {headline[1]}
              <br />
              <span className="text-primary">{headline[2]}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {intro}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
              >
                Explore services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES BAR */}
      <div className="border-y border-border bg-primary">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-primary-foreground/15 md:grid-cols-4">
          {values.map(([Icon, label]) => (
            <div
              key={label}
              className="flex items-center justify-center gap-2.5 px-4 py-5 text-primary-foreground"
            >
              <Icon className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-widest">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-5 py-24 md:py-28">
        <div className="mb-14 text-center">
          <h2 className="text-display text-4xl font-bold uppercase md:text-5xl">
            Our core <span className="text-primary">services</span>
          </h2>
          <div className="venom-line mx-auto mt-5 h-px w-40" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceGroups.map((g) => (
            <div
              key={g.title}
              className="rounded-sm border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <g.icon className="h-7 w-7 text-primary" />
              <h3 className="text-display mt-5 text-base font-semibold uppercase tracking-wide text-primary">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* WHY / SECTORS */}
      <section className="border-y border-border bg-grain py-24 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-2">
          <div>
            <h2 className="text-display text-3xl font-bold uppercase md:text-4xl">
              Why choose <span className="text-primary">Scorpio?</span>
            </h2>
            <ul className="mt-8 space-y-4">
              {whyUs.map((w) => (
                <li key={w} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground/90">{w}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-display text-3xl font-bold uppercase md:text-4xl">
              We <span className="text-primary">serve</span>
            </h2>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {sectors.map((s) => (
                <div
                  key={s}
                  className="rounded-sm border border-border bg-card px-4 py-3 text-sm font-medium"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRESENCE */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:py-28">
        <h2 className="text-display text-3xl font-bold uppercase md:text-4xl">
          Our presence in <span className="text-primary">{country}</span>
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {locations.map(([city, detail]) => (
            <div
              key={city}
              className="rounded-sm border border-border bg-card p-6"
            >
              <MapPin className="h-5 w-5 text-primary" />
              <p className="text-display mt-4 text-lg font-semibold">{city}</p>
              <p className="mt-1 text-sm text-muted-foreground">{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      {clients && clients.length > 0 && (
        <section className="border-y border-border bg-grain py-24 md:py-28">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mb-12 text-center">
              <h2 className="text-display text-3xl font-bold uppercase md:text-4xl">
                Trusted <span className="text-primary">by</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
                Organisations across {country} that trust Scorpio to protect their people, assets and operations.
              </p>
              <div className="venom-line mx-auto mt-5 h-px w-40" />
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {clients.map((c) => (
                <div
                  key={c.name}
                  className="flex flex-col items-center justify-center gap-3 rounded-sm border border-border bg-card px-6 py-10 text-center transition-all hover:border-primary/40 hover:shadow-glow"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                    <span className="text-display text-xl font-bold text-primary">
                      {c.name.charAt(0)}
                    </span>
                  </div>
                  <p className="text-display text-base font-semibold uppercase tracking-wide">
                    {c.name}
                  </p>
                  {c.detail && (
                    <p className="text-xs text-muted-foreground">{c.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}



      {/* CONTACT */}
      <section id="contact" className="border-t border-border py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-5 text-center">
          <span className="text-5xl">{flag}</span>
          <h2 className="text-display mt-6 text-4xl font-bold uppercase md:text-5xl">
            Secure your operations
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Speak with the Scorpio Security Services {country} team to scope
            protection for your people, assets, and business operations.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2.5 rounded-sm bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:shadow-glow"
            >
              <Phone className="h-4 w-4" />
              {phone}
            </a>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2.5 rounded-sm border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Mail className="h-4 w-4" />
              {email}
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 md:flex-row">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={emblem} alt="Scorpio Group" width={30} height={30} className="h-[30px] w-[30px]" />
            <span className="text-display text-base font-semibold tracking-wider">
              SCORPIO<span className="text-primary"> GROUP</span>
            </span>
          </Link>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Scorpio Security Services {country}. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
