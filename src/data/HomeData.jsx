// Hero section all data
  import heroImg1 from "../assets/hero-img1.png"
  import heroImg2 from "../assets/hero-img2.png"
  import heroImg3 from "../assets/hero-img3.png"

  // Hero section all the data 
  export const heroData = [
  {
    img: heroImg1,
    title: "AI Solutions That Drive Innovation",
    subtitle: "Harness the power of artificial intelligence to reshape your business.",
    points: [
      "Intelligent Process Automation",
      "Natural Language & Vision AI",
      "Custom AI Model Development",
    ],
    cta: "Explore AI",
    ctaUrl: "/artificial-intelligence ",
  },
  {
    img: heroImg2,
    title: "Data Analytics for Smarter Decisions",
    subtitle: "Turn raw data into actionable insights that accelerate growth.",
    points: [
      "Advanced Predictive Analytics",
      "Interactive Dashboards & Reporting",
      "Data Strategy & Advisory Services",
    ],
    cta: "Discover Analytics",
    ctaUrl: "/data-analytics",
  },
  {
    img: heroImg3,
    title: "Enterprise Solutions Built for Scale",
    subtitle: "Secure, scalable, and future-ready digital solutions for enterprises.",
    points: [
      "Cloud-Native Integrations",
      "Enterprise-Grade Security & Compliance",
      "Continuous Support & Optimization",
    ],
    cta: "Get Enterprise Solutions",
    ctaUrl: "/enterprise-product",
  },
];



// Technology section all data
import {
  FaCloud,
  FaChartLine,
  FaBuilding,
  FaRobot,
  FaCogs,
} from "react-icons/fa";

export const technologyData = [
  {
    title: "Enterprise Products",
    description:
      "Enterprise Production refers to the holistic process of architecting, orchestrating, and managing large-scale, mission-critical systems for complex organizations. Unlike standard production operations, it leverages advanced automation, modular architectures, and seamless integration with business-wide platforms (such as ERP, supply chain, and customer management).",
    icon: <FaBuilding className="text-white w-20 h-20" />,
    color: "#3B82F6",
    link: "/enterprise-product",
    blob:
      "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
  },
  {
    title: "Cloud Expertise",
    description:
      "Cloud expertise represents organization-wide proficiency in designing, deploying, maintaining, and optimizing applications and infrastructure on cloud platforms such as AWS, Azure, and Google Cloud (GCP). Cloud experts leverage the flexibility, scalability, and global reach of cloud infrastructure to drive innovation while maintaining cost efficiency, resilience, and security.",
    icon: <FaCloud className="text-white w-20 h-20" />,
    color: "#EF4444",
    link: "/cloud-expertise",
    blob:
      "M59.4,-69.5C73.8,-53.5,80.7,-26.8,77.5,-3.1C74.3,20.6,61,41.2,46.6,56.2C32.2,71.3,16.1,80.7,-2.3,82.2C-20.6,83.6,-41.2,77.1,-56.5,63.3C-71.8,49.4,-81.8,28.2,-81.6,8.6C-81.4,-11.1,-70.9,-29.1,-58,-46.7C-45.1,-64.3,-29.9,-81.4,-10.8,-83.7C8.3,-86,16.6,-73.7,59.4,-69.5Z",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is the branch of computer science focused on building systems that can perform tasks typically requiring human intelligence. Modern AI is powered by advances in machine learning (ML), NLP,computer vision, and robust computing infrastructure, enabling computers to analyze large volumes of data, recognize patterns, and make intelligent predictions or automate complex tasks.",
    icon: <FaRobot className="text-white w-20 h-20" />,
    color: "#22C55E",
    link: "/artificial-intelligence",
    blob:
      "M39.6,-61.3C54.1,-53.5,70.3,-45.3,76.2,-32.1C82.1,-18.9,77.6,-0.6,69.6,12.8C61.6,26.1,50,34.5,39.8,45.5C29.6,56.6,20.9,70.2,7.6,75.4C-5.6,80.6,-22.6,77.5,-37.5,70.4C-52.4,63.3,-65.2,52.3,-71.3,38.5C-77.5,24.7,-76.9,8.2,-75.8,-9.6C-74.8,-27.4,-73.2,-46.4,-61.3,-56.3C-49.3,-66.1,-27.1,-66.7,-8.3,-59.6C10.4,-52.6,20.8,-37.8,39.6,-61.3Z",
  },
  {
    title: "Data Analytics",
    description:
      "Data analytics is the process of examining raw data to uncover trends, patterns, correlations, and actionable insights for better decision-making. It encompasses technologies for collecting, cleaning, transforming, visualizing big data from distributed sources. Modern data analytics is foundational to digital transformation, enabling predictive analytics, real-time dashboards, and self-service business intelligence.",
    icon: <FaChartLine className="text-white w-20 h-20" />,
    color: "#A855F7",
    link: "/data-analytics",
    blob:
      "M60.1,-56.9C74.4,-41.6,80.6,-20.8,77.4,-2.3C74.2,16.1,61.6,32.2,47.3,47.5C32.9,62.9,16.5,77.6,-0.3,77.9C-17.1,78.2,-34.3,64.2,-47.3,48.8C-60.4,33.3,-69.4,16.6,-67.3,1.3C-65.2,-14,-52.1,-28,-40.1,-43.4C-28.1,-58.8,-14.1,-75.5,2.6,-78.4C19.3,-81.3,38.6,-70.5,60.1,-56.9Z",
  },
  {
    title: "Machine Learning",
    description:
      "Machine Learning (ML) is a subset of artificial intelligence focused on building algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed for each specific task. Modern machine learning is used for applications including recommendation engines, fraud detection, speech recognition, predictive maintenance, and image classification.",
    icon: <FaCogs className="text-white w-20 h-20" />,
    color: "#3B82F6",
    link: "/machine-learning",
    blob:
      "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
  },
];


// what we build all data 
import { FaLaptopCode, FaShoppingCart, FaMobileAlt, FaGlobe, FaUsersCog, FaBrain } from "react-icons/fa";


export const whatWeBuildData = [
    {
        icon: <FaLaptopCode className="w-12 h-12 " />,
        title: "Web Applications",
        description:
            "We empower digital transformation with bespoke solutions that optimize processes and enhance experiences.",
    },
    {
        icon: <FaShoppingCart className="w-12 h-12 " />,
        title: "Digital Platforms",
        description:
            "We build e-commerce platforms with engaging interfaces that boost sales and enhance experience.",
    },
    {
        icon: <FaMobileAlt className="w-12 h-12 " />,
        title: "Mobile Applications",
        description:
            "We build scalable data pipelines and architectures to efficiently process and analyze large datasets.",
    },
    {
        icon: <FaGlobe className="w-12 h-12 " />,
        title: "Product Development",
        description:
            "Our professionals design visually stunning websites with seamless functionality, elevating brands.",
    },
    {
        icon: <FaUsersCog className="w-12 h-12 " />,
        title: "Pod Model",
        description:
            "We design feature-rich mobile apps for global industries, ensuring success with transparent workflows.",
    },
    {
        icon: <FaBrain className="w-12 h-12 " />,
        title: "Time & Material",
        description:
            "We specialize in AI-driven applications including intelligent chat solutions and automated.",
    },
];



// life at RSquareSoft all data 
import lifeAtImg1 from "../assets/lifeat1.png"
import lifeAtImg2 from "../assets/lifeat2.png"
import lifeAtImg3 from "../assets/lifeat3.png"
import lifeAtImg4 from "../assets/lifeat4.png"
import lifeAtImg5 from "../assets/lifeat5.png"
export const lifeAtData = [
    {
        image: lifeAtImg1,
        title: "Collaborative Environment",
        description: "We foster team spirit and innovation with every project we take on.",
    },
    {
        image: lifeAtImg2,
        title: "Learning Work Culture",
        description: "Upskilling and mentorship are at the heart of our culture.",
    },
    {
        image: lifeAtImg3,
        title: "Modern Workspaces",
        description: "Our workspaces reflect our tech-first and employee-first approach.",
    },
    {
        image: lifeAtImg4,
        title: "Celebrating Together",
        description: "We believe in celebrating milestones and building connections.",
    },
    {
        image: lifeAtImg5,
        title: "Diversity & Inclusion",
        description: "We empower people from all walks of life to thrive together.",
    },
];


// Why RSquareSoft all data 
import { FaUsers, FaLightbulb, FaHeart, FaCheckCircle, FaComments } from "react-icons/fa";

export const whyRSquareSoft = [
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Leverage the deep knowledge and diverse expertise of our seasoned professionals dedicated to your success.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    description:
      "Stay ahead with cutting-edge technology and creative strategies tailored to solve your unique challenges.",
  },
  {
    icon: <FaHeart />,
    title: "Customer Focus",
    description:
      "Your goals are our priority. We listen, adapt, and work collaboratively to ensure your vision becomes reality.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Proven Results",
    description:
      "Our track record speaks for itself; we deliver measurable outcomes and tangible growth for our clients.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description:
      "With a global perspective and local presence, we understand diverse markets and deliver solutions worldwide.",
  },
  {
    icon: <FaComments />,
    title: "Transparent Communication",
    description:
      "We maintain open, honest, and regular communication, ensuring you're always informed and involved.",
  },
];
