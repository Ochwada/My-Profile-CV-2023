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
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "events",
    title: "Events",
  },
  {
    id: "blogs",
    title: "Blogs",
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
  /*   {
      name: "TypeScript",
      icon: typescript,
    }, */
  {
    name: "React JS",
    icon: reactjs,
  },
  /* {
    name: "Redux Toolkit",
    icon: redux,
  }, */
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
  /* {
    name: "Three JS",
    icon: threejs,
  }, */
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  /*  {
     name: "docker",
     icon: docker,
   }, */
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
    website_link: "https://ochwada.netlify.app/",
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
    website_link: "https://ochwada.netlify.app/",

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
    website_link: "https://ochwada.netlify.app/",
  },



];
const blogs = [
  {
    name: "First blog post",
    description: "This is the first blog post in my new series...",
    date: "2023-06-01",
    blog_link: "https://example.com/blog1",
  },
  {
    name: "Second blog post",
    description: "This is the first blog post in my new series...",
    date: "2023-06-01",
    blog_link: "https://example.com/blog1",
  },
  {
    name: "Third blog post",
    description: "This is the first blog post in my new series...",
    date: "2023-06-01",
    blog_link: "https://example.com/blog1",
  },
  {
    name: "Fourth blog post",
    description: "This is the first blog post in my new series...",
    date: "2023-06-01",
    blog_link: "https://example.com/blog1",
  },
];

// EVENTS
const events = {
  panelDiscussions: [
    {
      title: "STATE-OF-THE-MAP OPENSTREETMAPS",
      date: "23.11.2019",
      topic: "Detecting, Mapping & Monitoring of Shallow Water Ponds from SAR Imagery using DL",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_africa-geoai-ivorycoast-activity-6603984304055824384-CVPF",
    },
    {
      title: "DEUTSCHER BUNDESTAG",
      date: "06.11.2019",
      topic: "Digitisation and AI Opportunities in Africa",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_artficialintelligence-africa-geospatialdata-activity-6597723455615979520-HMg-/",
    },
    {
      title: "BLACK IN TECH",
      date: "24.09.2019",
      topic: "GreenTech and Diversity",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_throw-back-a-discussion-on-green-tech-activity-6921862225406136320-NxSW",
    },
    {
      title: "NEXIGA GmbH INNOVATIONSTAG",
      date: "14.05.2019",
      topic: " Integration of GIS and DL in Detection and Mapping of Renewable Energy Infrastructure",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_nexiga-innovationstag-innovation2019-activity-6531880173585866753--0d_",
    },
    {
      title: "WOMEN IN MACHINE LEARNING & DATA SCIENCE BERLIN",
      date: "23.04.2019",
      topic: "Geospatial AI",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_dramatic-wimlds-geospatial-activity-6526542173012262912-UFp_",
    },
    {
      title: "GEOSPATIAL WORLD FORUM",
      date: "04. 04.2019",
      topic: "Integration of GIS and DL in Detection and Mapping of Renewable Energy Infrastructure",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_gwf2019-geospatiall-deeplearning-activity-6519515571149684736-jiJj",
    },
    {
      title: "BLACK BUSINESS MATTER",
      date: "11.2018",
      topic: "Tech & Agriculture - A Geospatial Approach",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_blackbussinessmatter-bigdata-datascience-activity-6478725188115529728-B4aU",
    },
    {
      title: "WOMEN IN TECH (AFRICA)",
      date: "22.09.2018",
      topic: "Geospatial Science in precision agriculture",
      link: "https://twitter.com/nakhulolinda/status/1043564629157445639",
    },
    // ... more panel discussions
  ],
  virtualEvents: [
    {
      title: "ESRI Inc",
      date: "31.03.2021",
      topic: "Champions of GIS",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_geospatial-gis-data-activity-6779780991998418944-t53e/",
    },
    {
      title: "WOMEN + IN GEOSPATIAL",
      date: "8.03.2021",
      topic: "Women’s Leadership in the Geospatial Field",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_choosetochallenge-wig-iwd2021-activity-6774740632104787968-OGux?",
    },
    {
      title: "TEMSAFRICA ICT EVENTS 2020",
      date: "25. 11. 2020",
      topic: "ICT & Digitisation: Powering Africa’s Growth and Trasformation",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_datascience-machinelearning-innovation-activity-6735210907259035648-xkti",
    },
    {
      title: "BLACK IN TECH",
      date: "15.10.2020",
      topic: "From Employment to Entrepreneurship",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_blackintech-africanentrepreneurs-technology-activity-6717082366080372736-_237",
    },
    {
      title: "ESRI USER CONFERENCE EVENT",
      date: "16.07.2020",
      topic: "'Modern day disaster response- the good, the challenges and successful equitable response' - Special Interest Group Meeting ",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_northstar-geospatial-link-activity-6687269638088351744-UXN5",
    },
  
    // ... more virtual events
  ],
  roundTableDiscussions: [
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "3.03.2020",
      topic: "Fostering economic development between Germany and Africa",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_zimbabwe-economicdevelopment-finance-activity-6640592675680591872-8r0N",
    },
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "11.12.2019",
      topic: "Fostering economic development between Germany and the Great Lake regions",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_geospatialdata-geodata-artficialintelligence-activity-6610587399313473536-Nzdc",
    },
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "2023-06-01",
      topic: "Fostering German-Kenyan business cooperations",
      link: "https://example.com/eventhttps://www.linkedin.com/posts/ochwada-l-66630a36_germanafricaaward-angelamerkel-activity-6592773490816888832-97Jb",
    },
    // ... more round table discussions
  ],
  podcast: [
    {
      title: "Technical University BERLIN ",
      date: "22.09.2020",
      topic: "The alumni podcast 'Zukunftsmacher*innen'",
      link: "https://www.linkedin.com/posts/tuberlin_haemrtipp-tuberlin-activity-6775702020528721920-q5Ih",
    },
    // ... more press events
  ],
  hostedWorkshops: [
    {
      title: "AFRIKA-VEREIN DER DEUTSCHEN WIRTSCHAFT",
      date: "24.09.2019",
      topic: "1st German-African ICT” - CO-HOSTED",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_geospatialdata-geodata-artficialintelligence-activity-6605353158908628992-Mqi2",
    },
    {
      title: "DJANGO GIRLS NAIROBI",
      date: "2 / 3. 10. 2014",
      topic: "Free Programming Workshop for Women",
      link: "https://djangogirls.org/de/nairobi1/",
    },
    // ... more press events
  ],
  pressInterview: [
    {
      title: "DEUTSCHE WELLE",
      date: "19.09.2019 ",
      topic: "Impact of AfroAI in Africa’s tech industry",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_abit-of-a-chat-with-deutsche-welle-activity-6580404640871927808-GU_c",
    },
    {
      title: "THE DIASPORA RADIO",
      date: "04.05.2019",
      topic: "Africa Youth of the Year Award",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_dataiku-activity-6531414010896609280-uMQS",
    },
    // ... more press events
  ],
  pressNewspapers: [
    {
      title: "THE PEOPLE NEWSPAPER (KENYA)",
      date: "02.03.2022",
      topic: "How Kenya can Leverage AI to Solve Problem",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_how-kenya-can-leverage-ai-to-solve-problems-activity-6911944504459583488-Jd1y",
    },
    {
      title: "ESRI - CHAMPIONS OF GIS",
      date: "2021",
      topic: "Women and GIS, Volume 3: Champions of a Sustainable World",
      link: "https://storymaps.arcgis.com/stories/cc9cfbc3421b48f9a8e1e8e838aba4f6",
    },
    {
      title: "THE PEOPLE NEWSPAPER (KENYA)",
      date: "02.03.2021",
      topic: "Tell Your Story - Geoinformatics Opened a new World for Me",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_technology-techforafrica-geospatialdata-activity-6772414036870070272-etZD",
    },
    {
      title: "GREENPEACE GERMANY",
      date: "04. 2017",
      topic: "Adaptation of Climate Change - Community Based organisation Activity",
      link: "https://twitter.com/nakhulolinda/status/858000228066217985",
    },
    // ... more press events
  ],
  pressMentions: [
    {
      title: "RADIANT EARTH FOUNDATION",
      date: "08.05.2021",
      topic: "15 Leading women in ML4EO 'Machine Learning for Earth Observation'",
      link: "https://twitter.com/OurRadiantEarth/status/1368917937139113985",
    },
    {
      title: "DAILY NATION (KENYA)",
      date: "08.05.2021",
      topic: "The Kenyan Trailblazers- Looking beyond the Global Health Crisis",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_kenya-iot-geospatialintelligence-activity-6774565042496126976-3c4s",
    },
    // ... more press events
  ],
  productPresentation: [
    {
      title: "AG-CAREER HUB",
      date: "02.10.2020",
      topic: "Getting to know FIKO",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_about-activity-6717380497669976064-MPw3",
    },
    {
      title: "FIKO",
      date: "2020",
      topic: "A Proximity Alert System made for the African Market",
      link: "https://twitter.com/AfroaiDe/status/1307929233172422656",
    },
    {
      title: "BIG DATA SUMMIT - BERLIN",
      date: "2019",
      topic: "Data Science product presentation (Booth)",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_datascience-machinelearning-deeplearning-activity-6521717855442993152-QIKw",
    },
    {
      title: "GEEK GIRLS CARROT",
      date: "07.10. 2018",
      topic: "HLAG - FinTech & Blockchain Hackathon - Product Presentation",
      link: "https://www.linkedin.com/posts/ochwada-l-66630a36_technology-womenintech-fintech-activity-6454767037775380480-auUt",
    },
    // ... more press events
  ],
};


const socialMedia = [
  {
    icon: github, // path to icon
    link: 'https://github.com/Ochwada' // link to social media page
  },
  {
    icon: github, // path to icon
    link: 'https://github.com/Ochwada' // link to social media page
  },
  {
    icon: github, // path to icon
    link: 'https://github.com/Ochwada' // link to social media page
  },
  {
    icon: github, // path to icon
    link: 'https://github.com/Ochwada' // link to social media page
  },
  {
    icon: github, // path to icon
    link: 'https://github.com/Ochwada' // link to social media page
  },
  // ... more social media items
];


export { services, technologies, experiences, testimonials, projects, blogs, events, socialMedia };