import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'My Portfolio Website',
  description: "Kshitiz ( Chase ) Udainiya's personal website built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chase U.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
         Hi there, hello. <br />
         Officially Kshitiz, I am a recent graduate with Master's in <strong className="text-stone-100">Quantitative Finance</strong>, from <strong className="text-stone-100">University of Maryland</strong> and a deep interest in  risk modeling, market dynamics, and using data to navigate uncertainty.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        When I’m not tinkering with a pricing model or backtesting an investment strategy, you’ll probably find me exploring <strong className="text-stone-100">cozy cafés</strong>, wandering <strong className="text-stone-100">unfamiliar routes</strong>, or unwinding beneath trees on <strong className="text-stone-100">a quiet riverside trail</strong> — basically, <br /> <em className="text-stone-100">taking the road less traveled.</em>
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Before Maryland, I studied Economics at IIT Bombay, where I first got pulled into the world of data and decision-making. Since then, I’ve explored market risk at IndusInd Bank, modeled natural hazard impacts on mortgage loss with Arch MI, and analyzed consumer staples as part of the $8.5M student-run Mayer Fund. I like models that tell stories, and stories that challenge assumptions.`,
  aboutItems: [
    {label: 'Location', text: 'College Park, MD', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'River Trails, Swimming, Sweets', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Maryland, College Park', Icon: AcademicCapIcon},
    {label: 'Work Authorization', text: 'Stem OPT - 3 years', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Data Management',
    skills: [
      {
        name: 'Excel',
        level: 10,
      },
      {
        name: 'Stata',
        level: 8,
      },
      {
        name: 'SQL',
        level: 7,
      },
    ],
  },
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'R',
        level: 8,
      },
      {
        name: 'C++',
        level: 7,
      },
    ],
  },
  {
    name: 'Software',
    skills: [
      {
        name: 'LSEG Refinitiv',
        level: 10,
      },
      {
        name: 'Bloomberg',
        level: 10,
      },
      {
        name: 'WRDS',
        level: 8,
      },
    ],
  },
  {
    name: 'Python Libraries',
    skills: [
      {
        name: 'Numpy/Pandas',
        level: 10,
      },
      {
        name: 'Statsmodels',
        level: 10,
      },
      {
        name: 'Pytorch',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Quantitative Investment Strategy',
    description: 'Built a multi-factor equity strategy using 40 fundamental signals across U.S. equities. Used the fundamental factor model to construct and backtest optimized long-short portfolios, analyzing performance attribution and risk exposures.',
    url: 'https://github.com/Zitishk/QIS_Project',
    image: porfolioImage1,
  },
  {
    title: 'Natural Harzards and Mortgage LGD',
    description: 'Analyzed how climate risk affects mortgage losses in collaboration with Arch MI. The project aimed to quantify the impact of natural hazards on LGD using large-scale GSE loan data and FEMA risk indices.',
    url: 'https://github.com/Zitishk/Climate-Effect-of-Mortgage-Loss-Severity',
    image: porfolioImage2,
  },
  {
    title: 'Equity Research / Mayer Fund',
    description: 'Analyzed equity investments as part of the $8.5M student-run Mayer Fund. Focused on the Consumer Staples sector, building valuation models and tracking macro trends to guide portfolio decisions.',
    url: 'https://github.com/Zitishk/Past-Equuity-Research/',
    image: porfolioImage3,
  },
  {
    title: 'Bond Portfolio Management',
    description: 'Built a zero-coupon bond portfolio to apply fixed income concepts like annuity pricing, yield curves, and forward rates. Managed interest rate and theta risk over a 35-day horizon, achieving a positive HPR that validated our analytical approach.',
    url: 'https://github.com/Zitishk/Bond-Porfolio',
    image: porfolioImage4,
  },
  {
    title: 'Planet Renderer',
    description: 'Built a real-time C++ engine to render a dynamic planet with atmospheric scattering, terrain, and cloud simulation.',
    url: 'https://github.com/Zitishk/Planet_Rendering',
    image: porfolioImage5,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'August 2023 - May 2025',
    location: 'University of Maryland',
    title: 'Masters in Quantitative Finance',
    content: <p>Focused on risk modeling, financial mathematics, and fixed income securities. Worked on projects involving return forecasting, survival analysis, and risk attribution.</p>,
  },
  {
    date: 'August 2019 - May 2023',
    location: 'Indian Institute of Technology Bombay',
    title: 'BS in Economics',
    content: <p>Minored in Machine Learning and Artificial Intelligence. Built a strong foundation in micro and macroeconomics, statistics, and econometrics and Served as a Department Academic Mentor.
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - May 2025',
    location: 'Mayer Fund, RH Smith school of Business',
    title: 'Consumer Staples Analyst',
    content: (
      <p>
        Managed a portion of the $8.5M Mayer Fund as one of 12 analysts — led equity research in Consumer Staples, built valuation models (DCF & comps), and published weekly updates linking market shifts to portfolio impact.
      </p>
    ),
  },
  {
    date: 'March 2024 - May 2025',
    location: 'Experential Learning Program with Arch MI',
    title: 'Quantitative Risk Analyst',
    content: (
      <p>
        Modeled mortgage losses by integrating 1M+ GSE loans with FEMA climate risk data. Built a two-stage model (logistic + OLS) that showed natural hazard risk significantly increased loss severity.
      </p>
    ),
  },
{
    date: 'May 2022 - July 2022',
    location: 'IndusInd Bank',
    title: 'Market Risk Analyst',
    content: (
      <p>
        Assessed market risk exposure across portfolios under Basel III. Valued 7+ instruments, analyzed sensitivities, and projected a 10% capital buffer increase for Indian banks to stay compliant.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: porfolioImage1,
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for any inequries.',
  items: [
    {
      type: ContactType.Email,
      text: 'kshitizudainiya@gmail.com',
      href: 'mailto:kshitizudainiya@gmail.com',
    },
    {
      type: ContactType.Location,
      text: '8150 Baltimore Ave, #211-C',
      href: 'https://maps.app.goo.gl/oQtHTUT381KwRRC38',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Kshitiz',
      href: 'https://www.linkedin.com/in/kshitizudainiya/',
    },
    {
      type: ContactType.Github,
      text: '@Zitishk',
      href: 'https://github.com/Zitishk',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Zitishk'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/kshitizudainiya/'},
  {label: 'Resume', Icon:ArrowDownTrayIcon, href: '/assets/resume.pdf'}
];
