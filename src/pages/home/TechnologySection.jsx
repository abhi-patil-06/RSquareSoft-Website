import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  FaCloud,
  FaChartLine,
  FaBuilding,
  FaRobot,
  FaCogs,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const services = [
  {
    title: "Enterprise Products",
    description:
      "Enterprise Production refers to the holistic process of architecting, orchestrating, and managing large-scale, mission-critical systems for complex organizations. Unlike standard production operations, it leverages advanced automation, modular architectures, and seamless integration with business-wide platforms (such as ERP, supply chain, and customer management).",
    icon: <FaBuilding className="text-white w-20 h-20" />,
    color: "#3B82F6",
    link: "/enterpriseProduct",
    blob:
      "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
  },
  {
    title: "Cloud Expertise",
    description:
      "Cloud expertise represents organization-wide proficiency in designing, deploying, maintaining, and optimizing applications and infrastructure on cloud platforms such as AWS, Azure, and Google Cloud (GCP). Cloud experts leverage the flexibility, scalability, and global reach of cloud infrastructure to drive innovation while maintaining cost efficiency, resilience, and security.",
    icon: <FaCloud className="text-white w-20 h-20" />,
    color: "#EF4444",
    link: "/cloudExpertise",
    blob:
      "M59.4,-69.5C73.8,-53.5,80.7,-26.8,77.5,-3.1C74.3,20.6,61,41.2,46.6,56.2C32.2,71.3,16.1,80.7,-2.3,82.2C-20.6,83.6,-41.2,77.1,-56.5,63.3C-71.8,49.4,-81.8,28.2,-81.6,8.6C-81.4,-11.1,-70.9,-29.1,-58,-46.7C-45.1,-64.3,-29.9,-81.4,-10.8,-83.7C8.3,-86,16.6,-73.7,59.4,-69.5Z",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Artificial Intelligence (AI) is the branch of computer science focused on building systems that can perform tasks typically requiring human intelligence. Modern AI is powered by advances in machine learning (ML), NLP,computer vision, and robust computing infrastructure, enabling computers to analyze large volumes of data, recognize patterns, and make intelligent predictions or automate complex tasks.",
    icon: <FaRobot className="text-white w-20 h-20" />,
    color: "#22C55E",
    link: "/ai",
    blob:
      "M39.6,-61.3C54.1,-53.5,70.3,-45.3,76.2,-32.1C82.1,-18.9,77.6,-0.6,69.6,12.8C61.6,26.1,50,34.5,39.8,45.5C29.6,56.6,20.9,70.2,7.6,75.4C-5.6,80.6,-22.6,77.5,-37.5,70.4C-52.4,63.3,-65.2,52.3,-71.3,38.5C-77.5,24.7,-76.9,8.2,-75.8,-9.6C-74.8,-27.4,-73.2,-46.4,-61.3,-56.3C-49.3,-66.1,-27.1,-66.7,-8.3,-59.6C10.4,-52.6,20.8,-37.8,39.6,-61.3Z",
  },
  {
    title: "Data Analytics",
    description:
      "Data analytics is the process of examining raw data to uncover trends, patterns, correlations, and actionable insights for better decision-making. It encompasses technologies for collecting, cleaning, transforming, visualizing big data from distributed sources. Modern data analytics is foundational to digital transformation, enabling predictive analytics, real-time dashboards, and self-service business intelligence.",
    icon: <FaChartLine className="text-white w-20 h-20" />,
    color: "#A855F7",
    link: "/dataAnalytics",
    blob:
      "M60.1,-56.9C74.4,-41.6,80.6,-20.8,77.4,-2.3C74.2,16.1,61.6,32.2,47.3,47.5C32.9,62.9,16.5,77.6,-0.3,77.9C-17.1,78.2,-34.3,64.2,-47.3,48.8C-60.4,33.3,-69.4,16.6,-67.3,1.3C-65.2,-14,-52.1,-28,-40.1,-43.4C-28.1,-58.8,-14.1,-75.5,2.6,-78.4C19.3,-81.3,38.6,-70.5,60.1,-56.9Z",
  },
  {
    title: "Machine Learning",
    description:
      "Machine Learning (ML) is a subset of artificial intelligence focused on building algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed for each specific task. Modern machine learning is used for applications including recommendation engines, fraud detection, speech recognition, predictive maintenance, and image classification.",
    icon: <FaCogs className="text-white w-20 h-20" />,
    color: "#3B82F6",
    link: "/ml",
    blob:
      "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
  },
];

const adjustColorLightness = (hex, factor) => {
  let r = parseInt(hex.slice(1, 3), 16);
  let g = parseInt(hex.slice(3, 5), 16);
  let b = parseInt(hex.slice(5, 7), 16);
  r = Math.min(255, Math.max(0, Math.round(r * factor)));
  g = Math.min(255, Math.max(0, Math.round(g * factor)));
  b = Math.min(255, Math.max(0, Math.round(b * factor)));
  return (
    "#" +
    ((1 << 24) + (r << 16) + (g << 8) + b)
      .toString(16)
      .slice(1)
      .toUpperCase()
  );
};

const Blob3DTilt = ({
  blob,
  color,
  lightFillColor,
  strokeColor,
  icon,
}) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState("");

  // Adjust these constants to change tilt amount and area reach:
  const MAX_TILT_X = 50; // Maximum tilt x (in degrees)
  const MAX_TILT_Y = 50; // Maximum tilt y (in degrees)
  const SENSITIVITY_FACTOR = 2.5; // 2.5 = area 2.5x as big as card

  const handleMouseMove = (e) => {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    // Cursor position relative to blob center
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    // Apply reach far outside the card
    const reachX = (rect.width / 2) * SENSITIVITY_FACTOR;
    const reachY = (rect.height / 2) * SENSITIVITY_FACTOR;
    // Clamp to [-1, 1]
    const normalizedY = Math.max(-1, Math.min(1, y / reachY));
    const normalizedX = Math.max(-1, Math.min(1, x / reachX));
    const rotateX = -normalizedY * MAX_TILT_X;
    const rotateY = normalizedX * MAX_TILT_Y;

    setTransform(
      `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    );
  };

  const handleMouseLeave = () =>
    setTransform("perspective(700px) rotateX(0deg) rotateY(0deg)");

  return (
    <div
      className="w-70 h-70 relative flex items-center justify-center"
      ref={ref}
      style={{
        transition: "transform 0.25s cubic-bezier(.07,1.12,0.53,0.96)",
        transform,
        willChange: "transform",
        cursor: "pointer",
      }}
      onMouseMove={handleMouseMove}
    // onMouseLeave={handleMouseLeave}
    >
      {/* Background blobs and accents */}
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full"
        style={{
          fill: lightFillColor,
          top: "5%",
          left: "5%",
          width: "100%",
          height: "100%",
          opacity: 0.4,
          transform: "rotate(5deg)",
          filter: "blur(10px)",
          zIndex: 0,
        }}
      >
        <path d={blob} transform="translate(100 100) scale(1.1)" />
      </svg>
      <svg
        viewBox="0 0 200 200"
        className="absolute"
        style={{
          overflow: "visible",
          top: "-10%",
          left: "-10%",
          width: "70%",
          height: "70%",
          transform: "rotate(-15deg)",
          zIndex: 0,
        }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="60"
          ry="40"
          fill="none"
          stroke={strokeColor}
          strokeWidth="2"
          strokeDasharray="4 6"
          opacity="0.3"
        />
      </svg>
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: strokeColor,
          top: "0%",
          right: "0%",
          width: "20px",
          height: "20px",
          opacity: 0.7,
          zIndex: 0,
        }}
      ></div>
      <div
        className="absolute rounded-full"
        style={{
          backgroundColor: lightFillColor,
          bottom: "5%",
          left: "5%",
          width: "15px",
          height: "15px",
          opacity: 0.6,
          zIndex: 0,
        }}
      ></div>
      <svg
        viewBox="0 0 200 200"
        className="absolute"
        style={{
          overflow: "visible",
          bottom: "-5%",
          right: "-5%",
          width: "60%",
          height: "60%",
          transform: "rotate(25deg)",
          zIndex: 0,
        }}
      >
        <ellipse
          cx="100"
          cy="100"
          rx="50"
          ry="30"
          fill="none"
          stroke={strokeColor}
          strokeWidth="1.5"
          strokeDasharray="2 4"
          opacity="0.25"
        />
      </svg>
      {/* Main blob background */}
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full"
        style={{
          zIndex: 1,
          pointerEvents: "none",
        }}
      >
        <path d={blob} transform="translate(100 100)" fill={color} />
      </svg>
      {/* Icon */}
      <div className="relative z-20 pointer-events-none">{icon}</div>
    </div>
  );
};

export default function TechnologySection() {
  const navigate = useNavigate();

  return (
    <section className="bg-background py-15 md:py-15 font-family-base">
      <div className="max-w-9xl mx-auto">
        <p className="font-semibold md:ml-15 text-center md:text-start uppercase tracking-wider md:mb-10 text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>
          — Technology
        </p>
        {/* <div className="text-center mb-4 max-w-screen-xl mx-auto px-4">
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: "var(--font-size-heading1)" }}
          >
            Technology
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-2 rounded"></div>
        </div> */}
        <div className="md:space-y-10">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const lightFillColor = adjustColorLightness(service.color, 1.3);
            const strokeColor = adjustColorLightness(service.color, 0.7);

            return (
              <motion.div
                key={index}
                className={`flex flex-col  md:flex-row items-center justify-evenly ${isEven ? " py-10" : "py-10 md:flex-row-reverse"
                  }`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                viewport={{ once: false }}
              >
                <Blob3DTilt
                  blob={service.blob}
                  color={service.color}
                  lightFillColor={lightFillColor}
                  strokeColor={strokeColor}
                  icon={service.icon}
                />
                <div className="w-full md:w-1/2">
                  <h3 className="font-semibold mt-5 md:mt-0 text-text-primary text-center md:text-start mb-2" style={{ fontSize: 'var(--font-size-heading)' }}>
                    {service.title}
                  </h3>
                  <p className="text-text-primary text-center md:text-start px-3 md:px-0 leading-relaxed" style={{ fontSize: 'var(--font-size-subheading)' }}>
                    {service.description}
                  </p>
                  {/* <a
                    href={service.link}
                    className="mt-6 inline-block font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
                    style={{
                      borderColor: "#2962ff",
                      color: "#2962ff",
                      borderWidth: "2px",
                      backgroundColor: "transparent",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.backgroundColor = "#2962ff";
                      e.currentTarget.style.color = "white";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#2962ff";
                    }}
                  >
                    Learn More
                  </a> */}
                  <button className="relative text-primary  font-semibold group px-0 py-0 mt-5 bg-transparent border-none shadow-none transition cursor-pointer block mx-auto md:mx-0"
                    onClick={() => navigate(service.link)}>
                    Read More
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}



















// import React, { useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import {
//   FaCloud,
//   FaChartLine,
//   FaBuilding,
//   FaRobot,
//   FaCogs,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Enterprise Products",
//     description:
//       "We develop and integrate robust, scalable software solutions and platforms tailored to meet the complex needs of large enterprises.",
//     icon: <FaBuilding className="text-white w-20 h-20" />,
//     color: "#3B82F6",
//     blob:
//       "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
//   },
//   {
//     title: "Cloud Expertise",
//     description:
//       "Specializing in scalable, secure cloud solutions, we offer seamless migration, performance tuning, and efficient cost management across AWS, Azure, and GCP.",
//     icon: <FaCloud className="text-white w-20 h-20" />,
//     color: "#EF4444",
//     blob:
//       "M59.4,-69.5C73.8,-53.5,80.7,-26.8,77.5,-3.1C74.3,20.6,61,41.2,46.6,56.2C32.2,71.3,16.1,80.7,-2.3,82.2C-20.6,83.6,-41.2,77.1,-56.5,63.3C-71.8,49.4,-81.8,28.2,-81.6,8.6C-81.4,-11.1,-70.9,-29.1,-58,-46.7C-45.1,-64.3,-29.9,-81.4,-10.8,-83.7C8.3,-86,16.6,-73.7,59.4,-69.5Z",
//   },
//   {
//     title: "Artificial Intelligence",
//     description:
//       "We design and implement AI-driven solutions, including automation, natural language processing, and computer vision, to enhance decision-making and operational efficiency.",
//     icon: <FaRobot className="text-white w-20 h-20" />,
//     color: "#22C55E",
//     blob:
//       "M39.6,-61.3C54.1,-53.5,70.3,-45.3,76.2,-32.1C82.1,-18.9,77.6,-0.6,69.6,12.8C61.6,26.1,50,34.5,39.8,45.5C29.6,56.6,20.9,70.2,7.6,75.4C-5.6,80.6,-22.6,77.5,-37.5,70.4C-52.4,63.3,-65.2,52.3,-71.3,38.5C-77.5,24.7,-76.9,8.2,-75.8,-9.6C-74.8,-27.4,-73.2,-46.4,-61.3,-56.3C-49.3,-66.1,-27.1,-66.7,-8.3,-59.6C10.4,-52.6,20.8,-37.8,39.6,-61.3Z",
//   },
//   {
//     title: "Data Analytics",
//     description:
//       "Transforming raw data into actionable insights through advanced analytics, data visualization, and comprehensive reporting for informed business strategies.",
//     icon: <FaChartLine className="text-white w-20 h-20" />,
//     color: "#A855F7",
//     blob:
//       "M60.1,-56.9C74.4,-41.6,80.6,-20.8,77.4,-2.3C74.2,16.1,61.6,32.2,47.3,47.5C32.9,62.9,16.5,77.6,-0.3,77.9C-17.1,78.2,-34.3,64.2,-47.3,48.8C-60.4,33.3,-69.4,16.6,-67.3,1.3C-65.2,-14,-52.1,-28,-40.1,-43.4C-28.1,-58.8,-14.1,-75.5,2.6,-78.4C19.3,-81.3,38.6,-70.5,60.1,-56.9Z",
//   },
//   {
//     title: "Machine Learning",
//     description:
//       "Building powerful predictive models and algorithms that enable systems to learn from data, automate complex tasks, and make intelligent decisions.",
//     icon: <FaCogs className="text-white w-20 h-20" />,
//     color: "#3B82F6",
//     blob:
//       "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
//   },
// ];

// const adjustColorLightness = (hex, factor) => {
//   let r = parseInt(hex.slice(1, 3), 16);
//   let g = parseInt(hex.slice(3, 5), 16);
//   let b = parseInt(hex.slice(5, 7), 16);
//   r = Math.min(255, Math.max(0, Math.round(r * factor)));
//   g = Math.min(255, Math.max(0, Math.round(g * factor)));
//   b = Math.min(255, Math.max(0, Math.round(b * factor)));
//   return (
//     "#" +
//     ((1 << 24) + (r << 16) + (g << 8) + b)
//       .toString(16)
//       .slice(1)
//       .toUpperCase()
//   );
// };

// const BlobLookAtMouse = ({
//   blob,
//   color,
//   lightFillColor,
//   strokeColor,
//   icon,
// }) => {
//   const ref = useRef(null);
//   const controls = useAnimation();
//   const [isHovered, setIsHovered] = useState(false);

//   // Animation: on mouse move, rotate blob to point toward cursor
//   function handleMouseMove(e) {
//     const rect = ref.current.getBoundingClientRect();
//     const centerX = rect.left + rect.width / 2;
//     const centerY = rect.top + rect.height / 2;
//     const x = e.clientX - centerX;
//     const y = e.clientY - centerY;
//     const angle = Math.atan2(y, x) * (180 / Math.PI);
//     // Animate the blob with framer-motion
//     controls.start({ rotate: angle, transition: { type: "spring", stiffness: 70, damping: 16 } });
//   }

//   function handleMouseLeave() {
//     controls.start({ rotate: 0, transition: { type: "spring", stiffness: 70, damping: 16 } });
//     setIsHovered(false);
//   }

//   function handleMouseEnter() {
//     setIsHovered(true);
//   }

//   return (
//     <div
//       className="w-60 h-60 relative flex items-center justify-center"
//       ref={ref}
//       onMouseMove={handleMouseMove}
//       onMouseLeave={handleMouseLeave}
//       onMouseEnter={handleMouseEnter}
//       style={{ cursor: "pointer" }}
//     >
//       {/* Lighter, larger, transparent blob behind the main blob */}
//       <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute w-full h-full"
//         style={{
//           fill: lightFillColor,
//           top: "5%",
//           left: "5%",
//           width: "100%",
//           height: "100%",
//           opacity: "0.4",
//           transform: "rotate(5deg)",
//           filter: "blur(10px)",
//           zIndex: 0,
//         }}
//       >
//         <path d={blob} transform="translate(100 100) scale(1.1)" />
//       </svg>

//       {/* Dashed Circle/Oval 1 (top-left) */}
//       <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute"
//         style={{
//           overflow: "visible",
//           top: "-10%",
//           left: "-10%",
//           width: "70%",
//           height: "70%",
//           transform: "rotate(-15deg)",
//           zIndex: 0,
//         }}
//       >
//         <ellipse
//           cx="100"
//           cy="100"
//           rx="60"
//           ry="40"
//           fill="none"
//           stroke={strokeColor}
//           strokeWidth="2"
//           strokeDasharray="4 6"
//           opacity="0.3"
//         />
//       </svg>

//       {/* Small Filled Circle 1 (top-right) */}
//       <div
//         className="absolute rounded-full"
//         style={{
//           backgroundColor: strokeColor,
//           top: "0%",
//           right: "0%",
//           width: "20px",
//           height: "20px",
//           opacity: "0.7",
//           zIndex: 0,
//         }}
//       ></div>

//       {/* Small Filled Circle 2 (bottom-left) */}
//       <div
//         className="absolute rounded-full"
//         style={{
//           backgroundColor: lightFillColor,
//           bottom: "5%",
//           left: "5%",
//           width: "15px",
//           height: "15px",
//           opacity: "0.6",
//           zIndex: 0,
//         }}
//       ></div>

//       {/* Dashed Circle/Oval 2 (bottom-right) */}
//       <svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute"
//         style={{
//           overflow: "visible",
//           bottom: "-5%",
//           right: "-5%",
//           width: "60%",
//           height: "60%",
//           transform: "rotate(25deg)",
//           zIndex: 0,
//         }}
//       >
//         <ellipse
//           cx="100"
//           cy="100"
//           rx="50"
//           ry="30"
//           fill="none"
//           stroke={strokeColor}
//           strokeWidth="1.5"
//           strokeDasharray="2 4"
//           opacity="0.25"
//         />
//       </svg>

//       {/* Main blob (original color) - This is the central, most prominent blob */}
//       <motion.svg
//         viewBox="0 0 200 200"
//         xmlns="http://www.w3.org/2000/svg"
//         className="absolute w-full h-full"
//         style={{
//           zIndex: 1,
//           willChange: "transform",
//         }}
//         animate={controls}
//       >
//         <path d={blob} transform="translate(100 100)" fill={color} />
//       </motion.svg>
//       {/* Icon - Always on top */}
//       <div className="relative z-20">{icon}</div>
//     </div>
//   );
// };

// export default function ServicesSection() {
//   return (
//     <section className="bg-white py-20 px-6 md:px-8">
//       <div className="max-w-9xl mx-auto">
//         <p className="text-md font-bold ml-5 uppercase tracking-wider mb-20 text-[#6688FF]">
//           — Technology
//         </p>
//         <div className="space-y-28">
//           {services.map((service, index) => {
//             const isEven = index % 2 === 0;
//             const lightFillColor = adjustColorLightness(service.color, 1.3);
//             const strokeColor = adjustColorLightness(service.color, 0.7);

//             return (
//               <motion.div
//                 key={index}
//                 className={`flex flex-col md:flex-row items-center justify-evenly ${
//                   isEven ? "" : "md:flex-row-reverse"
//                 }`}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 <BlobLookAtMouse
//                   blob={service.blob}
//                   color={service.color}
//                   lightFillColor={lightFillColor}
//                   strokeColor={strokeColor}
//                   icon={service.icon}
//                 />
//                 <div className="w-full md:w-1/2">
//                   <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {service.description}
//                   </p>
//                   <a
//                     href={`/services/${service.title
//                       .toLowerCase()
//                       .replace(/\s+/g, "-")}`}
//                     className="mt-6 inline-block font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
//                     style={{
//                       borderColor: "#2962ff",
//                       color: "#2962ff",
//                       borderWidth: "2px",
//                       backgroundColor: "transparent",
//                     }}
//                     onMouseEnter={e => {
//                       e.currentTarget.style.backgroundColor = "#2962ff";
//                       e.currentTarget.style.color = "white";
//                     }}
//                     onMouseLeave={e => {
//                       e.currentTarget.style.backgroundColor = "transparent";
//                       e.currentTarget.style.color = "#2962ff";
//                     }}
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }





















// import React from "react";
// import { motion } from "framer-motion"; // Keeping motion for fade-in of the whole section, as it's not the "blob animation"
// import {
//   FaCloud,
//   FaCode,
//   FaLock,
//   FaMobileAlt,
//   FaChartLine,
//   FaBuilding,
//   FaRobot,
//   FaCogs,
// } from "react-icons/fa";

// const services = [
//   {
//     title: "Enterprise Products",
//     description: "We develop and integrate robust, scalable software solutions and platforms tailored to meet the complex needs of large enterprises.",
//     icon: <FaBuilding className="text-white w-20 h-20" />,
//     color: "#3B82F6", // blue
//     blob: "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
//   },
//   {
//     title: "Cloud Expertise",
//     description: "Specializing in scalable, secure cloud solutions, we offer seamless migration, performance tuning, and efficient cost management across AWS, Azure, and GCP.",
//     icon: <FaCloud className="text-white w-20 h-20" />,
//     color: "#EF4444", // red
//     blob: "M59.4,-69.5C73.8,-53.5,80.7,-26.8,77.5,-3.1C74.3,20.6,61,41.2,46.6,56.2C32.2,71.3,16.1,80.7,-2.3,82.2C-20.6,83.6,-41.2,77.1,-56.5,63.3C-71.8,49.4,-81.8,28.2,-81.6,8.6C-81.4,-11.1,-70.9,-29.1,-58,-46.7C-45.1,-64.3,-29.9,-81.4,-10.8,-83.7C8.3,-86,16.6,-73.7,59.4,-69.5Z",
//   },
//   {
//     title: "Artificial Intelligence",
//     description: "We design and implement AI-driven solutions, including automation, natural language processing, and computer vision, to enhance decision-making and operational efficiency.",
//     icon: <FaRobot className="text-white w-20 h-20" />,
//     color: "#22C55E", // green
//     blob: "M39.6,-61.3C54.1,-53.5,70.3,-45.3,76.2,-32.1C82.1,-18.9,77.6,-0.6,69.6,12.8C61.6,26.1,50,34.5,39.8,45.5C29.6,56.6,20.9,70.2,7.6,75.4C-5.6,80.6,-22.6,77.5,-37.5,70.4C-52.4,63.3,-65.2,52.3,-71.3,38.5C-77.5,24.7,-76.9,8.2,-75.8,-9.6C-74.8,-27.4,-73.2,-46.4,-61.3,-56.3C-49.3,-66.1,-27.1,-66.7,-8.3,-59.6C10.4,-52.6,20.8,-37.8,39.6,-61.3Z",
//   },
//   {
//     title: "Data Analytics",
//     description: "Transforming raw data into actionable insights through advanced analytics, data visualization, and comprehensive reporting for informed business strategies.",
//     icon: <FaChartLine className="text-white w-20 h-20" />,
//     color: "#A855F7", // purple
//     blob: "M60.1,-56.9C74.4,-41.6,80.6,-20.8,77.4,-2.3C74.2,16.1,61.6,32.2,47.3,47.5C32.9,62.9,16.5,77.6,-0.3,77.9C-17.1,78.2,-34.3,64.2,-47.3,48.8C-60.4,33.3,-69.4,16.6,-67.3,1.3C-65.2,-14,-52.1,-28,-40.1,-43.4C-28.1,-58.8,-14.1,-75.5,2.6,-78.4C19.3,-81.3,38.6,-70.5,60.1,-56.9Z",
//   },
//   {
//     title: "Machine Learning",
//     description: "Building powerful predictive models and algorithms that enable systems to learn from data, automate complex tasks, and make intelligent decisions.",
//     icon: <FaCogs className="text-white w-20 h-20" />,
//     color: "#3B82F6", // Reusing blue for the 5th item
//     blob: "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z", // Reusing a blob path
//   },
// ];

// // Helper function to adjust color lightness
// const adjustColorLightness = (hex, factor) => {
//   let r = parseInt(hex.slice(1, 3), 16);
//   let g = parseInt(hex.slice(3, 5), 16);
//   let b = parseInt(hex.slice(5, 7), 16);

//   r = Math.min(255, Math.max(0, Math.round(r * factor)));
//   g = Math.min(255, Math.max(0, Math.round(g * factor)));
//   b = Math.min(255, Math.max(0, Math.round(b * factor)));

//   return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
// };

// export default function ServicesSection() {
//   return (
//     <section className="bg-white py-20 px-6 md:px-8">
//       <div className="max-w-9xl mx-auto">

//         <p className="text-md  font-bold ml-5 uppercase tracking-wider mb-20 text-[#6688FF]">
//           — Technology
//         </p>

//         <div className="space-y-28">
//           {services.map((service, index) => {
//             const isEven = index % 2 === 0;

//             // Generate slightly lighter and darker colors for background blobs and lines
//             const lightFillColor = adjustColorLightness(service.color, 1.3); // Lighter for the translucent background blob
//             const strokeColor = adjustColorLightness(service.color, 0.7); // Slightly darker for strokes

//             return (
//               <motion.div
//                 key={index}
//                 className={`flex flex-col md:flex-row items-center justify-evenly  ${isEven ? "" : "md:flex-row-reverse"
//                   }`}
//                 initial={{ opacity: 0, y: 60 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//               >
//                 {/* Icon inside combined blobs */}
//                 <div className="w-60 h-60 relative flex items-center justify-center">
//                   {/* --- Background Elements (mimicking image design) --- */}

//                   {/* Lighter, larger, transparent blob behind the main blob */}
//                   <svg
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute w-full h-full"
//                     style={{
//                       fill: lightFillColor,
//                       top: '5%', // Slightly offset
//                       left: '5%',
//                       width: '100%', // Can be slightly larger
//                       height: '100%',
//                       opacity: '0.4', // Transparent
//                       transform: 'rotate(5deg)', // Slight rotation
//                       filter: 'blur(10px)', // A subtle blur to match the image's softness
//                       zIndex: 0, // Ensure it's behind the main blob
//                     }}
//                   >
//                     {/* Using a slightly modified path or a scaled version of the main blob */}
//                     <path d={service.blob} transform="translate(100 100) scale(1.1)" />
//                   </svg>

//                   {/* Dashed Circle/Oval 1 (top-left) */}
//                   <svg
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute"
//                     style={{
//                       overflow: 'visible',
//                       top: '-10%',
//                       left: '-10%',
//                       width: '70%',
//                       height: '70%',
//                       transform: 'rotate(-15deg)',
//                       zIndex: 0,
//                     }}
//                   >
//                     <ellipse
//                       cx="100" cy="100" rx="60" ry="40"
//                       fill="none"
//                       stroke={strokeColor}
//                       strokeWidth="2"
//                       strokeDasharray="4 6"
//                       opacity="0.3"
//                     />
//                   </svg>

//                   {/* Small Filled Circle 1 (top-right, darker variant) */}
//                   <div
//                     className="absolute rounded-full"
//                     style={{
//                       backgroundColor: strokeColor, // Use a slightly darker shade
//                       top: '0%',
//                       right: '0%',
//                       width: '20px',
//                       height: '20px',
//                       opacity: '0.7',
//                       zIndex: 0,
//                     }}
//                   ></div>

//                   {/* Small Filled Circle 2 (bottom-left, lighter variant) */}
//                   <div
//                     className="absolute rounded-full"
//                     style={{
//                       backgroundColor: lightFillColor, // Use a lighter shade
//                       bottom: '5%',
//                       left: '5%',
//                       width: '15px',
//                       height: '15px',
//                       opacity: '0.6',
//                       zIndex: 0,
//                     }}
//                   ></div>


//                   {/* Dashed Circle/Oval 2 (bottom-right) */}
//                   <svg
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute"
//                     style={{
//                       overflow: 'visible',
//                       bottom: '-5%',
//                       right: '-5%',
//                       width: '60%',
//                       height: '60%',
//                       transform: 'rotate(25deg)',
//                       zIndex: 0,
//                     }}
//                   >
//                     <ellipse
//                       cx="100" cy="100" rx="50" ry="30"
//                       fill="none"
//                       stroke={strokeColor}
//                       strokeWidth="1.5"
//                       strokeDasharray="2 4"
//                       opacity="0.25"
//                     />
//                   </svg>

//                   {/* Main blob (original color) - This is the central, most prominent blob */}
//                   <svg
//                     viewBox="0 0 200 200"
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="absolute w-full h-full"
//                     style={{ fill: service.color, zIndex: 1 }} // Ensure it's above background elements
//                   >
//                     <path d={service.blob} transform="translate(100 100)" />
//                   </svg>

//                   {/* Icon - Always on top */}
//                   <div className="relative z-20">{service.icon}</div> {/* Higher z-index */}
//                 </div>

//                 {/* Text Content */}
//                 {/* <div className="w-full md:w-1/2">
//                   <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div> */}
//                 <div className="w-full md:w-1/2">
//                   <h3 className="text-3xl font-semibold text-gray-800 mb-4">
//                     {service.title}
//                   </h3>
//                   <p className="text-lg text-gray-600 leading-relaxed">
//                     {service.description}
//                   </p>
//                   {/* Learn More Button */}
//                   <a
//                     href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} // Example: generates /services/cloud-integration
//                     className="mt-6 inline-block font-semibold py-2 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
//                     style={{
//                       borderColor: '#2962ff', // Assuming karmikaPrimaryBlue is in scope
//                       color: '#2962ff',
//                       borderWidth: '2px', // Add border
//                       backgroundColor: 'transparent',
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = '#2962ff';
//                       e.currentTarget.style.color = 'white';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                       e.currentTarget.style.color = '#2962ff';
//                     }}
//                   >
//                     Learn More
//                   </a>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }








