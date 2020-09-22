export type TechIcon = {
  title: string;
  icon: {
    url: string;
    id: number;
  };
};

export type Image = {
  alternativeText: string;
  url: string;
};

export type Module = {
  title: string;
  subtitle: string;
  description: string;
  id: number;
};

export type LogoProps = Image;

export type HeaderProps = {
  title: string;
  description: string;
  button: {
    label: string;
    url: string;
  };
  image: Image;
};

export type SectionAboutProjectProps = {
  title: string;
  description: string;
  image: Image;
};

export type SectionTechProps = {
  title: string;
  techIcons: TechIcon[];
};

export type SectionConceptsProps = {
  title: string;
  concepts: Array<{
    title: string;
    id: string;
  }>;
};

export type SectionModulesProps = {
  title: string;
  modules: Module[];
};

export type SectionAgendaProps = {
  title: string;
  description: string;
};

export type PrincingBoxProps = {
  totalPrice: number;
  numberInstallments: number;
  priceInstallment: number;
  benefits: string;
  button: {
    label: string;
    url: string;
  };
};

export type SocialLink = {
  title: string;
  url: string;
};

export type Author = {
  name: string;
  role: string;
  description: string;
  photo: Image;
  socialLinks: SocialLink[];
};

export type SectionAboutUsProps = {
  title: string;
  authors: Author[];
};

export type Review = {
  name: string;
  text: string;
  photo: {
    url: string;
  };
};

export type sectionReviewsProps = {
  title: string;
  reviews: Review[];
};

export type sectionFaqProps = {
  title: string;
  questions: Array<{
    question: string;
    answer: string;
  }>;
};

export type LandingPageProps = {
  logo: LogoProps;
  header: HeaderProps;
  sectionAboutProject: SectionAboutProjectProps;
  sectionTech: SectionTechProps;
  sectionConcepts: SectionConceptsProps;
  sectionModules: SectionModulesProps;
  sectionAgenda: SectionAgendaProps;
  princingBox: PrincingBoxProps;
  sectionAboutUs: SectionAboutUsProps;
  sectionReviews: sectionReviewsProps;
  sectionFaq: sectionFaqProps;
};
