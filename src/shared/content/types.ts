export type ContentSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  items?: string[];
};

export type ContentPage = {
  slug: string;
  cardTitle: string;
  cardDescription: string;
  title: string;
  description: string;
  lead: string;
  outcome: string;
  deliverables: string[];
  sections: ContentSection[];
  questions: { question: string; answer: string }[];
  relatedServices: string[];
  relatedStages: string[];
};

// Change this date when the published content is substantially updated.
export const CONTENT_UPDATED_AT = "2026-11-11";
