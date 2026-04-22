import type { LucideIcon } from "lucide-react";
import {
  Building2,
  HardHat,
  Home,
  Warehouse,
  Wrench,
} from "lucide-react";

export type ServicePreview = {
  id: string;
  title: string;
  short: string;
  icon: LucideIcon;
  href: string;
};

export const servicePreviews: ServicePreview[] = [
  {
    id: "house",
    title: "Residential Construction",
    short: "From foundation to handover — homes engineered for Kerala’s climate.",
    icon: Home,
    href: "/services#residential",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    short: "Offices, retail, and mixed-use with efficient cores and clear spans.",
    icon: Building2,
    href: "/services#commercial",
  },
  {
    id: "steel",
    title: "Steel Structure Work",
    short: "PEB, trusses, fabrication coordination, and safe erection planning.",
    icon: HardHat,
    href: "/services#steel",
  },
  {
    id: "godown",
    title: "Godown Construction",
    short: "Industrial slabs, loading bays, and durable weather-tight envelopes.",
    icon: Warehouse,
    href: "/services#godown",
  },
  {
    id: "renovation",
    title: "Renovation & Maintenance",
    short: "Structural fixes, upgrades, waterproofing, and remodels with minimal disruption.",
    icon: Wrench,
    href: "/services#renovation",
  },
];

export type ServiceBlock = {
  id: string;
  title: string;
  body: string[];
  image: string;
  imageAlt: string;
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1200&q=80`;

export const serviceBlocks: ServiceBlock[] = [
  {
    id: "residential",
    title: "Residential Construction",
    body: [
      "We build villas, row houses, and multi-generational homes with robust foundations, rain-ready details, and careful coordination of MEP trades.",
      "Our process includes transparent BOQs, milestone-based billing, and regular site walkthroughs so you always know what comes next.",
    ],
    image: img("photo-1600585154340-be6161a56a0c"),
    imageAlt: "Modern residential home exterior",
  },
  {
    id: "commercial",
    title: "Commercial Projects",
    body: [
      "Retail shells, office floors, and mixed-use blocks delivered with schedule discipline and safety programmes suited to busy locations.",
      "We align structural and facade milestones with tenant-fit requirements so handover windows stay predictable.",
    ],
    image: img("photo-1449824913935-59a10b8d2000"),
    imageAlt: "Commercial building facade",
  },
  {
    id: "steel",
    title: "Steel Structure Work",
    body: [
      "Steel structures for industrial and commercial use — planned for clear spans, speed of execution, and safety on site.",
      "We coordinate fabrication drawings, anchor bolts, erection sequencing, and finishing interfaces to reduce rework and downtime.",
    ],
    image: img("photo-1503387762-592deb58ef4e"),
    imageAlt: "Steel structure construction",
  },
  {
    id: "godown",
    title: "Godown Construction",
    body: [
      "Built-for-purpose logistics spaces — from slab design for heavy loads to weather-tight envelopes and practical loading workflows.",
      "We plan loading bays, clear height, ventilation, and drainage for day-to-day operational efficiency.",
    ],
    image: img("photo-1586528116311-ad8dd3c8310d"),
    imageAlt: "Godown / warehouse interior",
  },
  {
    id: "renovation",
    title: "Renovation & Maintenance",
    body: [
      "Structural repairs, extensions, waterproofing, and full interior rebuilds — staged so you can keep living or operating on site when feasible.",
      "We document existing conditions, sequence demolition safely, and protect finishes you want to keep.",
    ],
    image: img("photo-1507089947368-19c1da9775ae"),
    imageAlt: "Renovation work on a building",
  },
];

export { HardHat };
