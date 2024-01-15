import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    carrent,
    jobit,
    tripguide,
    threejs,
    angular,
    CGI,
    OpenText,
    RBC,
    dac,
    Klick,
    Sigma,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work Experience",
    },
    {
      id: "works",
      title: "Projects",
    },
    // {
    //   id: "contact",
    //   title: "Contact",
    // },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "angular",
      icon: angular,
    },
  ];
  
  const experiences = [
    {
      title: "Senior Consultant",
      company_name: "CGI",
      icon: CGI,
      iconBg: "#383E56",
      date: "Nov 2018 - Nov 2023",
      points: [
        "Designed and coded high-level web applications according to requirements from stakeholder, Product Manager/Business Analysts and UX team",
        "Achieved the reusable and visualized web components, implemented user interactions.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Track and measure website performance, user behavior, and conversion rates for various clients by using Google Analytics",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Identified bottlenecks and implemented effective problem-solving strategies that improved performance",
        "Organized front end automation procedure, requirements definition till successful, supporting deployment issues",
        "Took on the additional responsibility of leading a couple of Junior UI Developers to complete a set of critical features",
        "Collaborating and work effectively in a Hybrid Agile environment",
      ],
    },
    {
      title: "Software Developer",
      company_name: "Open Text",
      icon: OpenText,
      iconBg: "#E6DEDD",
      date: "Feb 2016 - Nov 2018",
      points: [
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality Media Management System.",
        "Designed reusable UI component in JavaScript, Typescript, x-tag, Angular.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Coded Responsive Web Pages and rapid prototype according to UI/UX standard and compatible with Desktop Web, iPad and Mobile Phone (Android, IOS)",
        "Analyze, fix bugs for different version of OTMM",
        "Organized front end automation procedure by using NodeJS, Grunt, Gulp, Opentext Gateway",
        "Worked in agile setting. Collaborate with team member all around Canada, US and India from requirements definition till successful user acceptance testing",
      ],
    },
    {
      title: "Application Developer/Mobile Developer",
      company_name: "RBC",
      icon: RBC,
      iconBg: "#383E56",
      date: "Feb 2016 - Nov 2018",
      points: [
        "Developed Hybrid RBC Mobile Application.",
        "Designed, coded Responsive Web Pages according to UI/UX standard and compatible with iPhone, Android and BlackBerry.",
        "Planed, designed and adapted UI fitting to Accessibility following WCAG 2.0 standard and accessibility guideline.",
        "Coded Responsive Web Pages and rapid prototype according to UI/UX standard and compatible with Desktop Web, iPad and Mobile Phone (Android, IOS)",
        "Performed unit testing for module, prepared documentation for future reference.",
        "Organized front end automation procedure by using NodeJS, Grunt, Gulp, Opentext Gateway.",
        "Took part in to each software development cycles via HPQC, Confluence agile environment.",
      ],
    },
    {
      title: "Front End Developer",
      company_name: "K2 Digital(Klick Health)",
      icon: Klick,
      iconBg: "#E6DEDD",
      date: "Aug 2014 - Sep 2014",
      points: [
        "Developed BMO PaaS Portal .",
        "Designed, coded Web Pages which meeting W3C standard and compatible with different browser and device.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Contributed code with appreciation for SEO strategy, performance and scalability.",
        "Performed unit testing for module, prepared documentation for future reference",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Sigma Systems Inc",
      icon: Sigma,
      iconBg: "#E6DEDD",
      date: "Sep 2013 - July 2014",
      points: [
        "Developed OMP(Order Management Platform) as per business Requirement  .",
        "Designed, coded and modified Responsive Web Pages which meeting W3C standard and compatible with different browsers and devices.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Achieved the visualized workflows (SVG-based BPMN flow) and implemented user interactions.",
        "Gathered system requirements, defined prototypes and documents according to business rules, developed project plans, use cases, storyboard.",
        "Applied front end automation procedure.",
      ],
    },
    {
      title: "Responsive Web Developer & Web Application Developer",
      company_name: "DAC Group",
      icon: dac,
      iconBg: "#E6DEDD",
      date: "Sep 2012 - July 2013",
      points: [
        "Developed & delivered pixel perfect responsive and non-responsive websites that are fully compatible with different browsers and devices .",
        "Designed wireframe & prototype and translated prototypes to HTML, adapted web sited to responsive Layout and enabled to support cross-browser and cross-platform.",
        "Social Media integration.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Cooperated with BA and QA to capture and organize issues, assign work, and following team activity.",
        "Participated in Daily Scrum, sprint meeting and retrospective meeting to provide technical direction, training, Summary, interaction and improvement.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };