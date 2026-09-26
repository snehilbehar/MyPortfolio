export type PortfolioLink = {
  label: string;
  href: string;
};

export type PortfolioStat = {
  label: string;
  value: string;
};

export type PortfolioProject = {
  name: string;
  summary: string;
  tags: string[];
  link?: string;
  liveUrl?: string;
  demoLabel?: string;
};

export type PortfolioExperience = {
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
};

export type PortfolioEducation = {
  degree: string;
  institution: string;
  period: string;
};

export type PortfolioArticle = {
  title: string;
  source: string;
  summary: string;
  link: string;
};

export type PortfolioContent = {
  hero: {
    name: string;
    headline: string;
    subheadline: string;
    location: string;
    availability: string;
    avatarLabel: string;
    primaryCta: PortfolioLink;
    secondaryCta: PortfolioLink;
  };
  about: {
    title: string;
    summary: string;
    highlights: string[];
  };
  stats: PortfolioStat[];
  links: PortfolioLink[];
  skills: string[];
  experience: PortfolioExperience[];
  education: PortfolioEducation[];
  projects: PortfolioProject[];
  articles: PortfolioArticle[];
  contact: {
    title: string;
    summary: string;
    email: string;
  };
  chatbot: {
    title: string;
    subtitle: string;
    welcome: string;
    suggestedQuestions: string[];
  };
};
