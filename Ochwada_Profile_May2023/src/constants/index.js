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
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Profolio",
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
      title: "Geoinformatics",
      icon: mobile,
    },
    {
      title: "Tech Evangelist",
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
  ];
  
  const experiences = [  
    {
      title: "Product Evangelist",
      company_name: "Dealcode GmbH (Hamburg -Germany)",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "May 2022 - Present",
      points: [
        "User Experience Liaison: Guides software development based on user insights and feedback.",
        "Marketing and Communication Specialist: Prepares and promotes new releases through various media.",
        "Knowledge Manager: Bridges information gap between users and developers.",
        "Network Development and Relationship Manager: Expands Dealcode's reach and influence.",
      ],
    },
    {
      title: "Managing Director / Consultant",
      company_name: "AfroAI UG  (Berlin -Germany)",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2019 —Aug 2021",
      points: [
        "Project Manager: Oversees geodata science, web, and app development projects from inception to closure, involving teams across various regions.",
        "Financial & Business Director: Supervises the company's financial performance, investments, and business ventures, while driving revenue through new initiatives.",
        "People & Operations Leader: Delegates responsibilities, manages resources including hiring and retention, and motivates team for maximum performance.",
        "Public Relations & Marketing Executive: Acts as the public face of the company, enhancing its profile, and participates in marketing activities such as conferences.",
      ],
    },
    {
      title: "GeoData Analyst Consultant",
      company_name: "Super & Super GmbH (Berlin -Germany)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2019 —June 2019",
      points: [
        "Geodata Pre-Processor: Compiles and cleans geodata from various sources for machine learning algorithms, and performs geospatial modelling and analysis.",
        "Data Analyst: Analyzes 3D data, satellite data, and sensor data to provide insights and support decision-making.",
        "GIS Support and Consultant: Assists in the development and management of GIS applications, supports computer-based GIS mapping, and consults with stakeholders on GIS and Remote Sensing software.",
        "Web Manager & Presenter: Manages website updates on WordPress, presents projects at conferences, and participates in marketing activities such as conferences and fairs.",
      ],
    },
    {
      title: "Geoinformatics Working Student",
      company_name: "GFZ - German Research Centre For Geosciences  (Potsdam - Germany)",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2015 —Sept 2015",
      points: [
        "Data Retrieval: Acquiring data from the city's Greenhouse Gases (GHG) database.",
        "Data Manipulation: Improving the readability and organization of GHG data.",
        "3D Visualization: Using NetCDF in R for 3D visualization of GHG data.",
        "Project Execution: Support the Implementation of the project titled 'Geo - enabling city Greenhouse Gases(GHG) data in 3D'.",
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