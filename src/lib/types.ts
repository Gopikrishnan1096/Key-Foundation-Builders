export type ProjectCategory = "houses" | "commercial" | "warehouses";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  location: string;
  sqft: number;
  year: number;
  duration: string;
  summary: string;
  description: string[];
  gallery: string[];
  beforeAfter?: { before: string; after: string; label?: string }[];
  featured?: boolean;
};
