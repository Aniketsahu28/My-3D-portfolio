import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  java,
  cpp,
  cp,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfolio,
  lms,
  food_truck,
  taazaKhabar,
  webflow,
  brewingIllusion
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  // {
  //   id: "work",
  //   title: "Work",
  // },
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "UI designer",
    icon: mobile,
  },
  {
    title: "Freelancer",
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "webflow",
    icon: webflow,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "java",
    icon: java,
  },
  // {
  //   name: "c_programming",
  //   icon: cp,
  // },
  // {
  //   name: "cpp",
  //   icon: cpp,
  // },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
  // {
  //   name: "My portfolio",
  //   description:
  //     "My personal portfolio website, which provides an in-depth insight into my coding journey and experiences thus far. It's a platform designed to showcase my skills, achievements, and passions, while also offering a glimpse into who I am as an individual. It provides insight into my personality and work ethic.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "threeJs",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "tailwind",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: portfolio,
  //   source_code_link: "https://github.com/Aniketsahu28/My-3D-portfolio",
  // },
  {
    name: "Taaza Khabar",
    description:
      "Taaza Khabar is a website developed using React and integrated with the News API. It offers users the ability to access daily news content. The frontend design of the website is clean and smooth, providing a visually appealing and user-friendly experience. With the News API integration, users can stay informed about current events and have easy access to the latest news articles.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "News-API",
        color: "green-text-gradient",
      },
    ],
    image: taazaKhabar,
    source_code_link: "https://github.com/Aniketsahu28/Taaza-Khabar-news-app/tree/master",
  },
  {
    name: "LMS UI",
    description:
      "Learning Management System (LMS) is a learning platform that can cater to the needs of the students and teachers as the platform aims to create a holistic environment.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: lms,
    source_code_link: "https://github.com/Aniketsahu28/Learning-Management-System/tree/master",
  },
  {
    name: "Brewing illusions",
    description:
      "Brewing illusion is a portfolio of a 3D modeler which i made for my client. It's a platform designed to showcase his skills, achievements, and passions, while also offering a glimpse into who a person is as an individual and his work.",
    tags: [
      {
        name: "Webflow",
        color: "blue-text-gradient",
      },
      {
        name: "noCodeWeb",
        color: "orange-text-gradient",
      },

    ],
    image: brewingIllusion,
    deployment_link: "https://brewing-illusions-abhi.webflow.io/",
  },
  // {
  //   name: "Foot Truck UI",
  //   description:
  //     "Our food ordering website's frontend allows users to browse a variety of food options and place orders directly. The website's design is visually appealing and user-friendly, with clear menus and easy navigation.",
  //   tags: [
  //     {
  //       name: "Html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Css",
  //       color: "green-text-gradient",
  //     },
  //   ],
  //   image: food_truck,
  //   source_code_link: "https://github.com/Aniketsahu28/Food-truck-only-fontend-",
  // },
];

export { services, technologies, experiences, testimonials, projects };