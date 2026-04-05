import type { Project, ProjectCategory } from "./types";

const u = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const projects: Project[] = [
  {
    slug: "riverside-family-home-kochi",
    name: "Riverside Family Home",
    category: "houses",
    location: "Kochi, Kerala",
    sqft: 2800,
    year: 2024,
    duration: "14 months",
    summary: "A contemporary two-storey home with flood-resilient foundation work.",
    description: [
      "Designed for a growing family, this project combined traditional Kerala ventilation principles with modern structural engineering.",
      "We managed civil work, structural framing, roofing, and finishing coordination with the client’s interior team.",
    ],
    gallery: [
      u("photo-1600585154340-be6161a56a0c"),
      u("photo-1600566753190-17f0baa2a6c3"),
      u("photo-1600585154526-990dced4db0d"),
    ],
    beforeAfter: [
      {
        label: "Front elevation",
        before: u("photo-1503387762-592deb58ef4e"),
        after: u("photo-1600585154340-be6161a56a0c"),
      },
    ],
    featured: true,
  },
  {
    slug: "logistics-warehouse-calicut",
    name: "Logistics Warehouse Calicut",
    category: "warehouses",
    location: "Kozhikode, Kerala",
    sqft: 7000,
    year: 2023,
    duration: "10 months",
    summary: "7,000 sqft warehouse with reinforced flooring and loading bays.",
    description: [
      "Industrial slab design for forklift traffic, clear-height optimization, and weatherproof envelope.",
      "Coordinated MEP rough-ins for future cold-chain upgrade without disruptive retrofits.",
    ],
    gallery: [
      u("photo-1586528116311-ad8dd3c8310d"),
      u("photo-1563720223185-11003b939b16"),
      u("photo-1553413077-190dd305871c"),
    ],
    featured: true,
  },
  {
    slug: "villa-renovation-trivandrum",
    name: "Heritage Villa Renovation",
    category: "houses",
    location: "Thiruvananthapuram, Kerala",
    sqft: 1900,
    year: 2024,
    duration: "6 months",
    summary: "Structural strengthening and full interior rebuild of an older villa.",
    description: [
      "Careful demolition sequencing, beam jacketing, and roof replacement while the client remained on-site in a wing.",
      "Moisture remediation and updated plumbing with minimal loss of original architectural character.",
    ],
    gallery: [
      u("photo-1600047509807-ba8f99d2cdde"),
      u("photo-1600573472592-401b89a5db2d"),
      u("photo-1600566753086-00f18fb6b3ea"),
    ],
    beforeAfter: [
      {
        label: "Living area",
        before: u("photo-1507089947368-19c1da9775ae"),
        after: u("photo-1600573472592-401b89a5db2d"),
      },
    ],
    featured: true,
  },
  {
    slug: "retail-complex-kochi",
    name: "Retail Complex Kochi",
    category: "commercial",
    location: "Kochi, Kerala",
    sqft: 8500,
    year: 2022,
    duration: "16 months",
    summary: "Mixed retail and office space near a high-traffic corridor.",
    description: [
      "Facade glazing coordination, fire egress planning, and tenant-fit readiness packages.",
    ],
    gallery: [
      u("photo-1497366754035-f200968a6e72"),
      u("photo-1464938050520-ef2270bb8ce8"),
    ],
    featured: false,
  },
  {
    slug: "cold-storage-shell-alappuzha",
    name: "Cold Storage Shell",
    category: "warehouses",
    location: "Alappuzha, Kerala",
    sqft: 4500,
    year: 2024,
    duration: "8 months",
    summary: "Insulated shell prepared for specialist refrigeration install.",
    description: [
      "Thermal breaks, slab slope for drainage, and panel-ready openings per equipment vendor drawings.",
    ],
    gallery: [u("photo-1553413077-190dd305871c"), u("photo-1581092160562-40aa08e66837")],
    featured: false,
  },
];

export const projectCategories: { id: ProjectCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "houses", label: "Houses" },
  { id: "commercial", label: "Commercial" },
  { id: "warehouses", label: "Warehouses" },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(limit = 6): Project[] {
  return projects.filter((p) => p.featured).slice(0, limit);
}
