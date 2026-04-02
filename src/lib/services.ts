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
    title: "House Construction",
    short: "From foundation to handover — homes built for Kerala’s climate.",
    icon: Home,
    href: "/services#residential",
  },
  {
    id: "commercial",
    title: "Commercial Building",
    short: "Offices, retail, and mixed-use with efficient cores and clear spans.",
    icon: Building2,
    href: "/services#commercial",
  },
  {
    id: "warehouse",
    title: "Warehouse Projects",
    short: "Industrial slabs, loading bays, and durable envelopes.",
    icon: Warehouse,
    href: "/services#warehouse",
  },
  {
    id: "renovation",
    title: "Renovation Works",
    short: "Structural fixes, upgrades, and full remodels with minimal disruption.",
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
    id: "warehouse",
    title: "Warehouse Construction",
    body: [
      "Built-for-purpose logistics spaces — from slab design for heavy loads to weather-tight envelopes and practical loading workflows.",
      "Recent delivery includes a 7,000 sqft facility with optimized clear height and service bay layout.",
    ],
    image: img("photo-1586528116311-ad8dd3c8310d"),
    imageAlt: "Warehouse interior",
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
