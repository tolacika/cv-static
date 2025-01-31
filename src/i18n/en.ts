export type TitleType = {
  title: string;
  subTitle?: string;
};

export type IntroType = TitleType & {
  paragraph: string;
  skills: SkillType[];
};

export type ServiceType = TitleType & {
  icon: string;
};

export type SkillType = {
  name: string;
  level: string;
  extra?: boolean;
};

export type SocialLinkType = {
  icon: string;
  link?: string;
  target?: string;
  followable?: boolean;
  scrollTo?: string;
};

export type WorkExperienceJobType = {
  company: string;
  dates: string;
  position: string;
  description: string;
  logo?: string;
};

export type WorkExperienceType = TitleType & {
  jobs: WorkExperienceJobType[];
};

export type LangType = {
  icon: string;
  message: string;
  level: string;
  extra?: boolean;
};

export type LangsType = TitleType & {
  items: LangType[];
};

export type ContactDetailsType = TitleType & {
  description: string;
  items: {
    icon: string;
    head: string;
    text: string;
    link?: string;
    target?: string;
  }[]
};

export type FollowMeType = {
  title: string;
};

export type DataStructure = {
  hero: TitleType;
  intro: IntroType;
  socialLinks: {
    actionText: string;
    followText: string;
    links: SocialLinkType[];
  };
  services: {
    title: string;
    subTitle: string;
    services: ServiceType[];
  };
  portfolio: TitleType,
  workExperience: WorkExperienceType;
  langs: LangsType;
  contactDetails: ContactDetailsType;
  followMe: FollowMeType;
};

export const data: DataStructure = {
  hero: {
    title: "Hello, my name is\nMarshall Laszlo Toth!",
  },
  intro: {
    title: "Who am I?",
    subTitle: "I'm Laszlo Toth, a dedicated Software Engineer",
    paragraph: "Passionate Software Engineer with a decade of experience in various programming languages and technologies. I have a deep knowledge of PHP, with a special emphasis on Laravel, as well as extensive experience in a variety of other languages and platforms. I'm a persistent team player with a passion for process streamlining and creating efficient applications.",
    skills: [
      {
        name: "Php & Laravel",
        level: "90"
      },
      {
        name: "HTML & CSS",
        level: "75"
      },
      {
        name: "{Type|Java}Script",
        level: "80"
      },
      {
        name: "SQL, noSQL, GraphQl",
        level: "70"
      },
      {
        name: "React, Vue, node.js",
        level: "70"
      },
      {
        name: "SysAdmin",
        level: "50"
      },
      {
        name: "DIY, IoT, C Family &\nElectrical Engineering",
        level: "20",
        extra: true
      }
    ]
  },
  socialLinks: {
    actionText: "Let's connect",
    followText: "Follow me on",
    links: [
      {
        icon: "bxl-github",
        link: "https://github.com/tolacika",
        followable: true
      },
      {
        icon: "bxl-linkedin-square",
        link: "https://www.linkedin.com/in/tolacika/",
        followable: true
      },
      {
        icon: "bxl-facebook-square",
        link: "https://www.facebook.com/marshall.things",
        followable: true
      },
      {
        icon: "bx-envelope",
        scrollTo: "#contact",
      },
      {
        icon: "bxs-map-pin",
        scrollTo: "#contact",
      }
    ]
  },
  services: {
    title: "Here's what I'm good at",
    subTitle: "Here are the key areas of my expertise.",
    services: [
      {
        title: "Web Development",
        subTitle: "I specialize in building dynamic, secure, and scalable web applications.",
        icon: "development"
      },
      {
        title: "Web Design",
        subTitle: "I can transform design concepts into interactive and responsive websites.",
        icon: "graphics"
      },
      {
        title: "Software Engineering",
        subTitle: "I architect efficient software solutions that meet business and technical needs.",
        icon: "content"
      },
      {
        title: "Mobile & IoT Development",
        subTitle: "I develop IoT and mobile solutions, connecting hardware and software seamlessly.",
        icon: "mobile"
      },
      {
        title: "Electrical Engineering",
        subTitle: "From circuit boards to software, I have hands-on experience with electrical engineering and embedded systems.",
        icon: "email"
      },
      {
        title: "Graphic Design",
        subTitle: "Oh, wait... Thats not my desk... But I have so many good designer friends!",
        icon: "design"
      }
    ]
  },
  portfolio: {
    title: "Check out my Portfolio",
    subTitle: "Explore the projects I've worked on throughout my career."
  },
  workExperience: {
    title: "My work experience",
    subTitle: "Here's what I did during freelancing",
    jobs: [
      {
        company: "NextTuesday &\nAdMetrics GmbH",
        dates: "Sept 2024 – March 2025",
        position: "Senior PHP Engineer",
        description: "I've developed various solutions for numerous clients. I've worked on big dreams with React, Laravel, and Neos CMS."
      },
      {
        company: "Ordio GmbH",
        dates: "Febr 2024 – June 2024",
        position: "Senior Full-stack Developer",
        description: "Integration of third-party systems to the main application using Symfony, TypeScript and React.",
        logo: "ordio"
      },
      {
        company: "Diligent Corp.",
        dates: "June 2022 – April 2023",
        position: "Senior Backend Developer",
        description: "Development of board management software and governance tools using Laravel, TypeScript, React, and AWS.",
        logo: "diligent"
      },
      {
        company: "Future Property Trade Kft",
        dates: "May 2021 – May 2022",
        position: "Senior Full-stack Lead Developer (Freelance)",
        description: "Led the development of a multipurpose webshop (shopsea.io) and back-office applications using Laravel, Vue.js, and AWS."
      },
      {
        company: "Risskov Autoferien AG",
        dates: "Jan 2020 – April 2021",
        position: "Senior Full-stack Developer",
        description: "Developed various systems including an internal booking system, hotel self-care and partner contact system, public websites, and APIs using Laravel, Vue.js, and GraphQL in Azure.",
        logo: "risskov"
      },
      {
        company: "TechTeamer Kft &\nMikroCredit Zrt",
        dates: "2018 – 2019",
        position: "Backend Developer",
        description: "Developed a CRM with microservices and financial management and reporting system using Laravel, React.js, and SQL."
      },
      {
        company: "WebShippy Kft",
        dates: "2018",
        position: "Full-stack Developer",
        description: "Worked on improving the warehouse system and integrating WebShippyApi for various platforms, including Shopify, ShopRenter, UnasShop, WooCommerce, etc.",
        logo: "webshippy"
      },
      {
        company: "Manna Kreatív Zrt.",
        dates: "2017",
        position: "Junior Full-stack Developer, Service Desk",
        description: "Worked on CRM, order management, packaging system, multi-lang webshop, marketing campaigns, and internal service desk with JIRA.",
        logo: "manna"
      },
      {
        company: "Érték-Rendszerház Kft &\nWore Hungary Kft",
        dates: "2014 – 2016",
        position: "Junior Full-stack Developer, System Admin",
        description: "Developed multiple webshops, CMS, CRM, finance and factory management modules, and Android apps for internal use."
      }
    ]
  },
  langs: {
    title:"Spoken Languages",
    items: [
      {
        icon: "hu",
        message: "Szia! 👋",
        level: "99"
      },
      {
        icon: "gb",
        message: "Hello! 👋",
        level: "75"
      },
      {
        icon: "de",
        message: "Hallo! 👋",
        level: "5",
        extra: true
      }
    ]
  },
  contactDetails: {
    title: "Get in Touch",
    subTitle: "Feel Free to Reach Out!",
    description: "Feel free to reach out for any questions, collaboration opportunities, or just to say hi!",
    items: [
      {
        icon: "bxl-github",
        head: "Github",
        text: "gh/tolacika",
        link: "https://github.com/tolacika",
        target: "_blank"
      },
      {
        icon: "bxl-linkedin-square",
        head: "Linkedin",
        text: "in/tolacika",
        link: "https://www.linkedin.com/in/tolacika/",
        target: "_blank"
      },
      {
        icon: "bxl-facebook-square",
        head: "Facebook",
        text: "fb/marshall.things",
        link: "https://www.facebook.com/marshall.things",
        target: "_blank"
      },
      {
        icon: "bx-phone",
        head: "phone",
        text: "(+36) 30 8751419",
        link: "tel:+36308751419"
      },
      {
        icon: "bx-envelope",
        head: "email",
        text: "inbox@tolacika.xyz",
        link: "mailto:inbox@tolacika.xyz",
        target: "_blank"
      },
      {
        icon: "bxs-map-pin",
        head: "location",
        text: "Offenbach, Germany",
      }
    ],
  },
  followMe: {
    title: "Keep up-to-date\nwith what I'm up to"
  }
};