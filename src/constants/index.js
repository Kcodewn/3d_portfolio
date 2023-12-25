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
    goLang,
    milkTea,
    phoHub,
    txst,
    showRoom,
    github,
    toDoList,
    personalWeb,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "GoLang Developer",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
      name: "Go",
      icon: goLang,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Full Time Student",
      company_name: "Texas State University",
      icon: txst,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Majoring in Computer Science.",
        "On track for a Bachelor Degree."
      ],
    },
    {
      title: "Website Developer",
      company_name: "PhoHub",
      icon: phoHub,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Mar 2022",
      points: [
        "Engaged with clients to plan and optimize site issues and queries.",
        "Collaborated with marketing, representing the web team to establish project goals, projections, and milestones.",
        "Planned website development, converting mockups into usable web presence with HTML, JavaScript, AJAX, and JSON coding.",
        "Ran debugging tools to eliminate flaws and glitches before publishing.",
        "Coded websites using HTML, CSS, JavaScript, and jQuery languages.",        
      ],
    },
    {
      title: "Resturaunt Manager",
      company_name: "PhoHub",
      icon: phoHub,
      iconBg: "#383E56",
      date: "Dec 2021 - Present",
      points: [
        "Monitored inventory of supplies and purchased orders to maintain adequate stock levels.",
        "Kept facility compliant with health codes, sanitation requirements, and license regulations, alleviating potentially heavy fines.",
        "Correctly calculated inventory and ordered appropriate supplies.",
        "Oversaw front-of-house personnel to maintain adequate staffing and minimize overtime.",
        "Oversaw food preparation and monitored safety protocols.",
      ],
    },
    {
      title: "Boba Barista",
      company_name: "Milk + Tea",
      icon: milkTea,
      iconBg: "#E6DEDD",
      date: "Aug 2020 - Sep 2021",
      points: [
        "Promoted additional items with beverages, increasing store sales.",
        "Recommended products based on a solid understanding of individual customer needs and preferences.",
        "Learned special recipe items and seasonal offerings to meet customer needs best.",
        "Maintained supply levels in counter and customer areas to meet typical demands.",
      ],
    },
  ];
  
  const testimonials = [
    {
      // testimonial:
      //   "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      // name: "Sara Lee",
      // designation: "CFO",
      // company: "Acme Co",
      // image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      // testimonial:
      //   "I've never met a web developer who truly cares about their clients' success like Rick does.",
      // name: "Chris Brown",
      // designation: "COO",
      // company: "DEF Corp",
      // image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      // testimonial:
      //   "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      // name: "Lisa Wang",
      // designation: "CTO",
      // company: "456 Enterprises",
      // image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project Auto",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Next JS 13",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },

        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
      ],
      image: showRoom,
      source_code_link: "https://show-room-kappa.vercel.app",
    },
    {
      name: "GitHub",
      description:
        "You can find out more about me here!",
      // tags: [
      //   {
      //     name: "react",
      //     color: "blue-text-gradient",
      //   },
      //   {
      //     name: "restapi",
      //     color: "green-text-gradient",
      //   },
      //   {
      //     name: "scss",
      //     color: "pink-text-gradient",
      //   },
      // ],
      image: github,
      source_code_link: "https://github.com/",
    },
    {
      name: "ToDo List",
      description:
        "Powerful Task Management at Your Fingertips: Discover, Organize, and Conquer Your Daily Tasks with Our Intuitive Todo List App!",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: toDoList,
      source_code_link: "https://todo-beige-mu.vercel.app",
    },
    {
      name: "Personal Website",
      description:
        "Web application that contains my current up to date information.",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "pink-text-gradient",
        },
      ],
      image: personalWeb,
      source_code_link: "https://kcodewn.github.io/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };