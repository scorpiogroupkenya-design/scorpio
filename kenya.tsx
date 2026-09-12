import { createFileRoute } from "@tanstack/react-router";
import {
  ShieldCheck,
  Crosshair,
  Truck,
  PawPrint,
  Radio,
  Camera,
  MapPin,
  Lock,
} from "lucide-react";

import { SubsidiaryPage, type ServiceGroup } from "@/components/SubsidiaryPage";
import kenyaOg from "@/assets/kenya-og.jpg";

const SITE_URL = "https://scorpio-holdings-hub.lovable.app";

export const Route = createFileRoute("/kenya")({
  head: () => ({
    meta: [
      {
        title: "Scorpio Security Services Kenya | Manned Guarding & EP Nairobi",
      },
      {
        name: "description",
        content:
          "PSRA-licensed manned guarding, executive protection, cash-in-transit, canine units, alarm response and security technology across Kenya — headquartered in Nairobi. Trusted by logistics, corporate and institutional clients.",
      },
      { property: "og:title", content: "Scorpio Security Services Kenya" },
      {
        property: "og:description",
        content:
          "Disciplined officers. Smarter technology. Safer Kenya — PSRA-licensed manned guarding, executive protection and integrated security technology, nationwide from Nairobi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/kenya` },
      { property: "og:image", content: `${SITE_URL}${kenyaOg}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Scorpio Security Services Kenya — disciplined officers, smarter technology, safer Kenya." },
      { property: "og:site_name", content: "Scorpio Group" },
      { property: "og:locale", content: "en_KE" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Scorpio Security Services Kenya" },
      {
        name: "twitter:description",
        content:
          "Disciplined officers. Smarter technology. Safer Kenya — PSRA-licensed security services nationwide from Nairobi.",
      },
      { name: "twitter:image", content: `${SITE_URL}${kenyaOg}` },
      { name: "twitter:image:alt", content: "Scorpio Security Services Kenya — disciplined officers, smarter technology, safer Kenya." },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/kenya` }],
  }),
  component: KenyaPage,
});

const serviceGroups: ServiceGroup[] = [
  {
    icon: ShieldCheck,
    title: "Manned Guarding",
    items: [
      "Commercial & retail guarding",
      "Residential estate security",
      "Industrial & warehouse sites",
      "Reception & concierge officers",
      "Event & crowd management",
      "Supervisory patrol teams",
    ],
  },
  {
    icon: Crosshair,
    title: "Executive Protection",
    items: [
      "Close protection officers",
      "Secure chauffeur services",
      "Advance route reconnaissance",
      "Residential security teams",
      "Travel risk management",
      "Diplomatic & VIP details",
    ],
  },
  {
    icon: Truck,
    title: "Cash-in-Transit",
    items: [
      "Armoured cash movement",
      "ATM replenishment",
      "Bank branch collections",
      "Retail cash pickups",
      "Chain-of-custody reporting",
      "Fully insured consignments",
    ],
  },
  {
    icon: Radio,
    title: "Alarm & Rapid Response",
    items: [
      "24/7 monitored alarms",
      "Armed response units",
      "Panic buttons & duress alerts",
      "GPS-dispatched patrols",
      "Control room escalation",
      "Incident reporting",
    ],
  },
  {
    icon: PawPrint,
    title: "Canine Units",
    items: [
      "Patrol & guard dogs",
      "Explosives detection",
      "Narcotics detection",
      "Perimeter sweeps",
      "Handler-led site screening",
      "Event screening support",
    ],
  },
  {
    icon: Camera,
    title: "Security Technology",
    items: [
      "CCTV & video analytics",
      "Electric fencing",
      "Perimeter intrusion detection",
      "Fire detection systems",
      "Intercom & PA systems",
      "Remote video monitoring",
    ],
  },
  {
    icon: Lock,
    title: "Access Control",
    items: [
      "Biometric & RFID access",
      "Time & attendance",
      "Turnstiles & boom gates",
      "Visitor management",
      "Smart locks & controllers",
      "Integration & reporting",
    ],
  },
  {
    icon: MapPin,
    title: "Fleet Intelligence",
    items: [
      "GPS vehicle tracking",
      "Fuel monitoring",
      "Driver behaviour monitoring",
      "AI dash cameras",
      "Asset tracking & recovery",
      "Route optimization",
    ],
  },
];

function KenyaPage() {
  return (
    <SubsidiaryPage
      flag="🇰🇪"
      country="Kenya"
      hq="Nairobi, Kenya"
      headline={[
        "Disciplined officers.",
        "Smarter technology.",
        "Safer Kenya.",
      ]}
      intro="Scorpio Security Services Kenya combines PSRA-licensed manpower with integrated security technology to protect people, premises and assets nationwide — from our Nairobi headquarters."
      serviceGroups={serviceGroups}
      whyUs={[
        "PSRA-licensed and fully vetted officers",
        "Nationwide deployment capacity",
        "Diplomatic, embassy and corporate sector experience",
        "24/7 Nairobi control room with regional response nodes",
        "Continuous training to group doctrine and standards",
        "Manpower and technology delivered as one accountable contract",
      ]}
      sectors={[
        "Banking & financial services",
        "Diplomatic missions & NGOs",
        "Corporate offices & business parks",
        "Retail & shopping malls",
        "Manufacturing & logistics",
        "Residential estates",
        "Hospitality & tourism",
        "Critical infrastructure",
      ]}
      locations={[
        ["Nairobi", "Group HQ — 24/7 operations centre"],
        ["Mombasa", "Coastal & port security desk"],
        ["Kisumu", "Western region operations"],
        ["Eldoret", "Rift Valley response node"],
      ]}
      clients={[
        { name: "Bikash Carriers Ltd", detail: "Logistics & transport" },
        { name: "MESL Logistics", detail: "Freight & supply chain" },
        { name: "St. Daniel Comboni Gilgil", detail: "Institution & campus" },
        { name: "Credible Services Ltd", detail: "Corporate services" },
      ]}
      phone="+254 700 000 000"
      email="kenya@scorpiogroup.africa"
    />
  );
}
