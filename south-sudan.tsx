import { createFileRoute } from "@tanstack/react-router";
import {
  MapPin,
  Truck,
  Lock,
  ShoppingCart,
  Camera,
  Network,
  Building2,
  Headphones,
} from "lucide-react";

import { SubsidiaryPage, type ServiceGroup } from "@/components/SubsidiaryPage";
import southSudanOg from "@/assets/south-sudan-og.jpg";

const SITE_URL = "https://scorpio-holdings-hub.lovable.app";

export const Route = createFileRoute("/south-sudan")({
  head: () => ({
    meta: [
      {
        title: "Scorpio Security Services South Sudan | Fleet, ICT & Security Juba",
      },
      {
        name: "description",
        content:
          "Integrated security, fleet intelligence and enterprise technology in South Sudan — CCTV, access control, GPS tracking, ICT infrastructure and managed support from Juba. Smarter solutions. Safer operations. Stronger South Sudan.",
      },
      {
        property: "og:title",
        content: "Scorpio Security Services South Sudan",
      },
      {
        property: "og:description",
        content:
          "Smarter solutions. Safer operations. Stronger South Sudan — integrated security, fleet intelligence and enterprise technology delivered from Juba.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/south-sudan` },
      { property: "og:image", content: `${SITE_URL}${southSudanOg}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Scorpio Security Services South Sudan — smarter solutions, safer operations, stronger South Sudan.",
      },
      { property: "og:site_name", content: "Scorpio Group" },
      { property: "og:locale", content: "en_SS" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Scorpio Security Services South Sudan" },
      {
        name: "twitter:description",
        content:
          "Smarter solutions. Safer operations. Stronger South Sudan — security, fleet and technology solutions from Juba.",
      },
      { name: "twitter:image", content: `${SITE_URL}${southSudanOg}` },
      {
        name: "twitter:image:alt",
        content:
          "Scorpio Security Services South Sudan — smarter solutions, safer operations, stronger South Sudan.",
      },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/south-sudan` }],
  }),
  component: SouthSudanPage,
});

const serviceGroups: ServiceGroup[] = [
  {
    icon: MapPin,
    title: "Fleet Intelligence Solutions",
    items: [
      "GPS Vehicle Tracking",
      "Fuel Monitoring",
      "Driver Behaviour Monitoring",
      "AI Dash Cameras",
      "Asset Tracking & Recovery",
      "Route Optimization",
    ],
  },
  {
    icon: Truck,
    title: "Dispatch & Logistics Systems",
    items: [
      "Dispatch Management",
      "Job Assignment",
      "Driver Mobile App",
      "Proof of Delivery",
      "Real-time Tracking",
      "Performance Reports",
    ],
  },
  {
    icon: Lock,
    title: "Access Control Systems",
    items: [
      "Biometric & RFID Access",
      "Time & Attendance",
      "Turnstiles & Boom Gates",
      "Visitor Management",
      "Smart Locks & Door Controllers",
      "Integration & Reporting",
    ],
  },
  {
    icon: ShoppingCart,
    title: "POS & Retail Solutions",
    items: [
      "Retail POS Systems",
      "Restaurant & Hotel POS",
      "Inventory Management",
      "Barcode Solutions",
      "Multi-branch Reporting",
      "Customer Loyalty Programs",
    ],
  },
  {
    icon: Camera,
    title: "Physical Security Solutions",
    items: [
      "CCTV Systems & Video Analytics",
      "Intruder Alarm Systems",
      "Electric Fencing",
      "Perimeter Protection",
      "Fire Detection Systems",
      "Intercom & PA Systems",
    ],
  },
  {
    icon: Network,
    title: "ICT Infrastructure Solutions",
    items: [
      "Structured Cabling",
      "Network Installation",
      "Fiber Optic Solutions",
      "Servers & Data Storage",
      "Wireless Networks",
      "Data Centre Solutions",
    ],
  },
  {
    icon: Building2,
    title: "Smart Building Solutions",
    items: [
      "Building Automation",
      "Smart Lighting",
      "Energy Management",
      "Environmental Monitoring",
      "Smart Parking Solutions",
      "IoT Integration",
    ],
  },
  {
    icon: Headphones,
    title: "Managed Services & Support",
    items: [
      "24/7 Monitoring",
      "Technical Support",
      "Preventive Maintenance",
      "Remote Diagnostics",
      "Annual Maintenance Contracts",
      "Customer Training",
    ],
  },
];

function SouthSudanPage() {
  return (
    <SubsidiaryPage
      flag="🇸🇸"
      country="South Sudan"
      hq="Juba, South Sudan"
      headline={[
        "Smarter solutions.",
        "Safer operations.",
        "Stronger South Sudan.",
      ]}
      intro="Scorpio Security Services delivers integrated security, fleet intelligence and enterprise technology solutions that protect people, assets and business operations across South Sudan."
      serviceGroups={serviceGroups}
      whyUs={[
        "Proven delivery in complex, high-risk environments",
        "Certified engineers and locally trained technicians",
        "End-to-end solutions — supply, install, integrate, maintain",
        "24/7 monitoring and rapid on-site response",
        "Vendor-neutral technology tailored to your risk profile",
        "Group-wide standards backed by Scorpio Group",
      ]}
      sectors={[
        "NGOs & humanitarian agencies",
        "Oil, gas & extractives",
        "Banking & financial services",
        "Government & institutions",
        "Telecoms & ICT",
        "Retail & hospitality",
        "Logistics & transport",
        "Mining & construction",
      ]}
      locations={[
        ["Juba", "Country HQ — operations & technical centre"],
        ["Malakal", "Upper Nile field operations"],
        ["Wau", "Western Bahr el Ghazal service desk"],
        ["Bor", "Jonglei deployment & support"],
      ]}
      phone="+211 900 000 000"
      email="southsudan@scorpiogroup.africa"
    />
  );
}
