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
        "User Experience Liaison: Guiding software development based on user insights and feedback.",
        "Marketing and Communication Specialist: Preparing and promoting new releases through various media.",
        "Knowledge Manager: Bridging information gap between users and developers.",
        "Network Development and Relationship Manager: Expanding Dealcode's reach and influence.",
      ],
    },
    {
      title: "Managing Director / Consultant",
      company_name: "AfroAI UG  (Berlin -Germany)",
      icon: shopify,
      iconBg: "#383E56",
      date: "July 2019 —Aug 2021",
      points: [
        "Project Manager: Directing geodata, web, and app projects globally from start to finish.",
        "Financial Director: Overseeing financial performance, investments, and drives revenue.",
        "Operations Leader: Managing team responsibilities, hiring, retention, and performance.",
        "PR & Marketing Executive: Representing the company publicly and leads marketing efforts.",
      ],
    },
    {
      title: "GeoData Analyst Consultant",
      company_name: "Super & Super GmbH (Berlin -Germany)",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2019 —June 2019",
      points: [
        "Geodata Pre-Processor: Managing geodata for machine learning and geospatial analysis.",
        "Data Analyst: Handling 3D, satellite, and sensor data analysis.",
        "GIS Consultant: Supporting GIS application development, mapping, and stakeholder consultations.",
        "Web & PR Manager: Managing website updates and presents at conferences.",
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