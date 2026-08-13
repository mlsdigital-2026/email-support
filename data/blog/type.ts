export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogFaq {
  question: string;
  answer: string;
}

export interface Blog {
  id?: number;

  slug: string;

  title: string;

  metaTitle: string;

  metaDescription: string;

  description: string;

  image: string;

  category: string;

  date: string;

  author: string;

  readingTime?: string;

  sections: BlogSection[];

  faqs?: BlogFaq[];

  tags?: string[];
}