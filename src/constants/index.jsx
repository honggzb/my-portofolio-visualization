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
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "Angular Developer",
      icon: mobile,
    },
    {
      title: "Vue Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: backend,
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
      name: "angular",
      icon: angular,
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
  ];
  
  const experiences = [
    {
      title: "Senior Consultant",
      company_name: "CGI",
      icon: CGI,
      iconBg: "#383E56",
      date: "Nov 2018 - Nov 2024",
      points: [
        "Analyzed, planed, designed and coded high-level reusable, testable, data-visualized, visualized, responsive UI according to requirements from stakeholder, Product Manager/Business Analysts and meeting to best performance and User experience",
        "Achieved the reusable, visualized, responsive web components, met to best performance, quality and user experience and agile methodologies, followed to SDLC.",
        "Consumed data from and integrated CRUD Restful/GraphQL API with UI model, component and Service",
        "Track and measure website performance, user behavior, and conversion rates for various clients by using Google Analytics",
        "Participating in code reviews to ensure that it meets quality, performance, and code standards; providing constructive feedback to other developers",
        "Identified bottlenecks and implemented effective problem-solving strategies that improved performance",
        "Organized front end automation procedure, requirements definition till successful, supporting deployment issues",
        "Wrote, updated and maintained documentations, specifications, guidelines, configurations files for reference/history",
        "Took on the additional responsibility of leading a couple of Junior UI Developers to complete a set of critical features",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products; working effectively in a Hybrid Agile/Scrum environment",
        "Took on the additional responsibility of leading a couple of Junior UI Developers to complete a set of critical features",
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
      name: "CGI Wealth360™ Portfolio Management ",
      description:
        "A comprehensive solution for wealth management professionals who wish to anticipate change, offer creative options and increase efficiencies as they manage their clients’ investments. From front office sales tools to middle office decision making and back office administration, CGI Wealth360 Portfolio Management delivers an industry-leading, end-to-end wealth management solution.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Angular Material",
          color: "pink-text-gradient",
        },
        {
          name: "JAVA",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/honggzb",
    },
    {
      name: "Open text Media Management System",
      description:
        "An enterprise Digital Asset Management solution, a workflow-driven, multichannel capabilities for producing, publishing, and distributing digital media and content through a secure, scalable platform.It’s an integral part of an ecosystem with interconnected and interdependent contributors(such as agencies, photo, video, audio, graphics, layout) provisioning digital media content for the multi-channel digital supply chain, digital operations, marketing and brand management.",
      tags: [
        {
          name: "HTML5",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "x-tag",
          color: "pink-text-gradient",
        },
        {
          name: "JAVA",
          color: "orange-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/honggzb",
    },
    {
      name: "RBC Mobile",
      description:
        "Everyday banking on smartphone or tablet. The RBC Mobile app make your life easier by letting you manage your banking no matter where you are or what you’re doing, including Direct Investing, Wallet, Dominion Securities. The portal is to make the provisioning of environments easier for a wider range of users. Users can customize the environments in a number of different ways.",
      tags: [
        {
          name: "jQuery Mobile",
          color: "blue-text-gradient",
        },
        {
          name: "Angular",
          color: "green-text-gradient",
        },
        {
          name: "Typescript",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/honggzb",
    },
    {
      name: "Order Management Platform",
      description:
        "End-to-end order management system and tracking capabilities, extending from the moment an order is received through to the completion and subsequent archiving of the order.For each product,the orchestration workflows and fulfillment system interactions can be viewed graphically. OMP provides external systems with real-time updates and aggregate order status to track the order lifecycle.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Play Framework",
          color: "green-text-gradient",
        },
        {
          name: "JAVA",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/honggzb",
    },
    {
      name: "DAC, Remax web site",
      description:
        "Responsive and non-responsive websites that are fully compatible with different browsers and devices(desktop, tablet, mobile phone) .",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Google Analytics",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/honggzb",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
