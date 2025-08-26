import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

// Typing Effect Hook
const useTypingEffect = (
    texts,
    speed = 100,
    deleteSpeed = 50,
    pauseTime = 2000
) => {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeout;
        const currentText = texts[textIndex];

        if (!isDeleting && displayText === currentText) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && displayText === "") {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        } else {
            const updateSpeed = isDeleting ? deleteSpeed : speed;
            timeout = setTimeout(() => {
                setDisplayText((prev) => {
                    if (isDeleting) {
                        return currentText.substring(0, prev.length - 1);
                    } else {
                        return currentText.substring(0, prev.length + 1);
                    }
                });
            }, updateSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, textIndex, isDeleting, texts, speed, deleteSpeed, pauseTime]);

    return displayText;
};

const Takumi = () => {
    const points = [
        "Market Abuse Detection",
        "Insider Trading Monitoring",
        "Fraud Activity Prevention",
        "Regulatory Compliance",
        "Real-Time Alerts",
    ];

    const typedText = useTypingEffect(points);

    return (
        <section className="min-h-screen flex items-center justify-center bg-white px-6">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left Side */}
                <div
                    className="flex flex-col items-center text-center select-none space-y-8 max-w-xl mx-auto"
                    style={{ animation: "fadeSlideIn 1s ease forwards" }}
                >
                    <div className="flex items-center justify-center  h-fit mb-4">
                        <img src="public/logo/Takumi-home.png" alt="TakuMi" />
                    </div>

                    {/* <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                        We Focus On
                    </h1> */}

                    <h2 className="text-3xl font-semibold text-gradient-to-r from-blue-500 to-cyan-400 relative h-10 w-full text-start inline-block">
                        Focused on <span className="text-primary pb-1">{typedText}</span><span className="text-primary animate-blink">|</span>
                    </h2>

                    <p className="text-lg text-gray-600 max-w-xl text-start leading-relaxed">
                        Our Trade Surveillance helps financial institutions monitor and detect suspicious activities, reduce risks, and stay compliant with regulatory requirements.
                    </p>

                    <button className="relative w-50 h-14 px-2 py-3 font-semibold border border-blue-950 text-blue-950 hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer rounded-4xl text-xl hover:border-0">
                        Discover TakuMi
                    </button>
                </div>


                {/* Right Side with Image */}
                <div
                    className="flex justify-center"
                    style={{ animation: "fadeSlideIn 1s ease forwards", animationDelay: "0.5s" }}
                >
                    <img
                        src="/product-bg/takumi-bg3.png"
                        alt="Hero"
                        className="max-w-full h-auto md:mr-10"
                    />
                </div>
            </div>

            <style>
                {`
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateX(-50px);
            }
            100% {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .animate-blink {
            animation: blink 1s step-start infinite;
          }
        `}
            </style>
        </section>
    );
};

export default Takumi;












// import React, { useState } from "react";
// import { FaBalanceScale, FaBolt, FaCar, FaHospital, FaHotel, FaPlane, FaRegEye, FaShoppingBag, FaStar, FaTrain } from "react-icons/fa";
// import { IoAirplaneOutline, IoCarSportOutline, IoTrainOutline } from "react-icons/io5";
// import { FaParking, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa"; // Importing relevant icons
// import { Hotel, Hospital, ShoppingBag, Plane, Train } from "lucide-react"; // Importing Lucide React icons
// import { FaUser, FaUsers, FaChartLine } from "react-icons/fa"; // Using FaCheckCircle for benefit icons
// import { GiShoppingCart } from "react-icons/gi";
// import { PiHospital } from "react-icons/pi";
// import { RiHotelLine } from "react-icons/ri";
// import { motion } from "framer-motion";
// import Button from "@mui/material/Button";
// // import { FaRegEye, FaClock, FaBolt, FaBalanceScale, FaChartLine, FaCheckCircle } from "react-icons/fa";



// export default function Takumi() {

//     const primaryBlue = "#3366FF";
//     const accentLightBlue = "#99BBFF";
//     const bgLightBlue = "#F0F4FF";
//     const subtleBlue = "rgba(51, 102, 255, 0.1)";
//     const textPrimary = "#1B2E7A";
//     const textSecondary = "#4B5D9B";


//     // SVG paths for organic blob shapes (re-using some good ones, adjusting for visual variety)
//     const blobPaths = [
//         "M60.1,-56.9C74.4,-41.6,80.6,-20.8,77.4,-2.3C74.2,16.1,61.6,32.2,47.3,47.5C32.9,62.9,16.5,77.6,-0.3,77.9C-17.1,78.2,-34.3,64.2,-47.3,48.8C-60.4,33.3,-69.4,16.6,-67.3,1.3C-65.2,-14,-52.1,-28,-40.1,-43.4C-28.1,-58.8,-14.1,-75.5,2.6,-78.4C19.3,-81.3,38.6,-70.5,60.1,-56.9Z",
//         "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
//         "M59.4,-69.5C73.8,-53.5,80.7,-26.8,77.5,-3.1C74.3,20.6,61,41.2,46.6,56.2C32.2,71.3,16.1,80.7,-2.3,82.2C-20.6,83.6,-41.2,77.1,-56.5,63.3C-71.8,49.4,-81.8,28.2,-81.6,8.6C-81.4,-11.1,-70.9,-29.1,-58,-46.7C-45.1,-64.3,-29.9,-81.4,-10.8,-83.7C8.3,-86,16.6,-73.7,59.4,-69.5Z",
//     ];


//     // const primaryBlue = "#4B0082"; // Deep purple from the logo
//     const lightPurple = "#6A0DAD";   // A slightly lighter purple
//     // const accentLightBlue = "#FFD700"; // Golden yellow from the logo (for subtle highlights)
//     const veryLightGray = "#FDFDFD"; // A very light background color

//     const features = [
//         {
//             title: "One Global Lens: No Blind Spots",
//             description:
//                 "Comprehensive, multi-asset visibility across equities, fixed income, commodities, FX, derivatives, and digital assets globally. No trade hides in a blind spot.",
//             icon: <FaRegEye className="text-3xl" style={{ color: accentLightBlue }} />,
//             iconColor: accentLightBlue,
//         },
//         {
//             title: "Real-Time Vigilance Meets Historical Wisdom",
//             description:
//                 "Immediate red flag detection with real-time monitoring combined with deep historical analysis to uncover subtle, evolving behavioral patterns.",
//             icon: <FaClock className="text-3xl" style={{ color: accentLightBlue }} />,
//             iconColor: accentLightBlue,
//         },
//         {
//             title: "The Need for Rapid Analytics",
//             description:
//                 "A rich set of pre-configured analytics with easy configuration and the ability to rapidly develop new patterns (within 3-4 weeks) to adapt faster than fraudsters.",
//             icon: <FaBolt className="text-3xl" style={{ color: accentLightBlue }} />,
//             iconColor: accentLightBlue,
//         },
//         {
//             title: "Built-In Monitoring",
//             description:
//                 "Proactive infrastructure health dashboards, self-monitoring alerts, application metrics, and uptime intelligence to prevent system failures.",
//             icon: <FaChartLine className="text-3xl" style={{ color: accentLightBlue }} />,
//             iconColor: accentLightBlue,
//         },
//         {
//             title: "Built-In Reporting",
//             description:
//                 "Regulator-ready, out-of-the-box templates, on-demand ad-hoc reporting, and role-based views for instant insights, making reporting a click away.",
//             icon: <FaCheckCircle className="text-3xl" style={{ color: accentLightBlue }} />,
//             iconColor: accentLightBlue,
//         },
//     ];


//     // Define colors for the section, keeping it clean and modern
//     const sectionBgColor = "#F7F9FC"; // Very light grey background
//     const iconColor = "#6A0DAD"; // A purple shade for icons, similar to ValetPlus theme

//     const solutions = [
//         {
//             title: "Hotels",
//             description: "Upscale guest experience, VIP handling, custom branding.",
//             icon: <RiHotelLine className="w-16 h-16 " />, // Using a blue for contrast with purple theme
//         },
//         {
//             title: "Hospitals",
//             description: "Efficient patient drop-off, quick turnover, accessible assistance.",
//             icon: <PiHospital className="w-16 h-16 " />, // Using red for hospitals
//         },
//         {
//             title: "Malls",
//             description: "Streamlined entry, easy ticketing, large-venue handling.",
//             icon: <GiShoppingCart className="w-16 h-16 " />, // Using green for malls
//         },
//         {
//             title: "Airports",
//             description: "Express drop-and-fly, premium parking, multi-level integration.",
//             icon: <IoAirplaneOutline className="w-16 h-16" />, // Using indigo for airports
//         },
//         {
//             title: "Railway Stations",
//             description: "Fast handover, digital queuing, integration with schedules.",
//             icon: <IoTrainOutline className="w-16 h-16 " />, // Using purple for railway stations
//         },
//     ];


//     // Define colors based on the ValetPlus theme
//     //   const primaryBlue = "#4B0082"; // Deep purple
//     //   const lightPurple = "#6A0DAD";   // A slightly lighter purple for active toggle state
//     const textColor = "#4A5568"; // Tailwind's gray-700 equivalent for general text
//     //   const bgLightBlue = "#F7F9FC"; // Very light grey background for the section

//     const [activeTab, setActiveTab] = useState("customer"); // State to manage active tab

//     const content = {
//         customer: [
//             {
//                 title: "Hassle-Free Car Drop-Off",
//                 description: "Enjoy a seamless and efficient car drop-off experience with no hassles.",
//             },
//             {
//                 title: "Luxurious & Efficient Car Retrieval",
//                 description: "Plan your car retrieval in advance and skip the wait at the valet desk.",
//             },
//             {
//                 title: "Digital Car Receipts",
//                 description: "Access authentic digital car park receipts and make digital payments when applicable.",
//             },
//             {
//                 title: "Locate Your Car",
//                 description: "Always know the exact location of your car with real-time updates.",
//             },
//         ],
//         valetStaff: [
//             {
//                 title: "Effortless Key Management",
//                 description: "Quickly locate car keys with ease and efficiency to save time.",
//             },
//             {
//                 title: "Identify Empty Parking Spaces",
//                 description: "Instantly find available parking spots for better parking lot management.",
//             },
//             {
//                 title: "Quick Scanning",
//                 description: "Easily scan car plate numbers and ticket numbers for streamlined operations.",
//             },
//             {
//                 title: "Seamless Customer Service",
//                 description: "Manage customers effortlessly using ValetPlus, WhatsApp, or physical tickets.",
//             },
//         ],
//         manager: [
//             {
//                 title: "Measure Customer Satisfaction",
//                 description: "Gain insights into the customer valet experience and improve satisfaction levels.",
//             },
//             {
//                 title: "Track Driver Productivity",
//                 description: "Monitor and enhance valet driver performance with actionable insights.",
//             },
//             {
//                 title: "Optimize Parking Lot Utilization",
//                 description: "Efficiently manage parking lot space to maximize its usage.",
//             },
//             {
//                 title: "Elevate Customer Experience",
//                 description: "Deliver a seamless and satisfying experience for every customer.",
//             },
//         ],
//     };



//     const testimonials = [
//         {
//             quote: "“Kaarmika transformed our airport guest experience. The analytics dashboard is a game changer for efficiency.”",
//             name: "Parking Operations Manager",
//             company: "International Airport",
//             image: "https://placehold.co/80x80/6A0DAD/FFFFFF?text=PM", // Placeholder image for Manager
//         },
//         {
//             quote: "“No more lost tickets or payment confusion — our hotel guests love the seamless, digital check-in!”",
//             name: "Guest Relations Manager",
//             company: "5-Star Hotel",
//             image: "https://placehold.co/80x80/FFD700/FFFFFF?text=GR", // Placeholder image for Manager
//         },
//         {
//             quote: "“The real-time car tracking feature is invaluable. Our staff can now manage vehicles with unprecedented precision.”",
//             name: "Operations Director",
//             company: "Large Shopping Mall",
//             image: "https://placehold.co/80x80/4B0082/FFFFFF?text=OD", // Placeholder image
//         },
//         {
//             quote: "“ValetPlus has significantly reduced our wait times. Patients and visitors appreciate the quick and easy valet service.”",
//             name: "Patient Services Lead",
//             company: "City Hospital",
//             image: "https://placehold.co/80x80/FFD700/FFFFFF?text=PS", // Placeholder image
//         },
//     ];

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
//     };

//     const handleSelectTestimonial = (index) => {
//         setCurrentIndex(index);
//     };

//     // Get the testimonial to display prominently
//     const currentTestimonial = testimonials[currentIndex];

//     // Get the indices for the previous and next testimonials for the preview cards
//     const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     const nextIndex = (currentIndex + 1) % testimonials.length;

//     const prevTestimonial = testimonials[prevIndex];
//     const nextTestimonial = testimonials[nextIndex];


//     return (
//         <main className="bg-white text-gray-900 font-sans">

//             {/* HERO SECTION */}
//             {/* <section
//                 className="hero flex items-center justify-center py-16 px-8 min-h-screen relative overflow-hidden text-gray-900"
//                 style={{ backgroundColor: bgLightBlue }} // Very light background
//             >
//                 <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
//                     <path fill={subtleBlue} d={blobPaths[0]} transform="translate(100 100) scale(2.5) rotate(15)" />
//                     <path fill={subtleBlue} d={blobPaths[0]} transform="translate(1300 800) scale(5) rotate(35)" />
//                     <path fill={subtleBlue} d={blobPaths[1]} transform="translate(1000 200) scale(1.9) rotate(-30)" />
//                     <path fill={subtleBlue} d={blobPaths[0]} transform="translate(200 800) scale(2.3) rotate(60)" />
//                 </svg>



//                 <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-4">
//                     <p className="text-xl md:text-2xl font-medium text-gray-700 mb-6 mt-20 italic">
//                         "The Ideal Trade Surveillance Platform"
//                     </p>



//                     <img
//                         src="public\logo\TakuMi.png" // Your Kaarmika logo
//                         alt="Kaarmika Logo"
//                         className="w-64 md:w-100 h-auto  drop-shadow-lg -mb-5" // Adjust size as needed
//                     />

//                     <a
//                         href="https://www.takumi.net" // Link to Kaarmika landing page
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="inline-block bg-transparent border text-blue-900 hover:text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-blue-800 transition-all duration-500 transform hover:scale-105 text-lg"
//                     >
//                         Discover TakuMi
//                     </a>
//                 </div>
//             </section> */}

//             <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden">
//       {/* Background Image (modern, professional) */}
//       <img
//         src="product-bg/takumi-bg2.png"
//         alt="Modern Professional Background"
//         className="absolute inset-0 w-full h-full object-cover object-left z-0"
//         draggable={false}
//       />
//       {/* Overlay for better contrast */}
//       <div className="absolute inset-0 bg-black/20 z-10" />
//       {/* Content Overlay (not in a container) */}
//       <div className="relative z-20 flex flex-col items-start px-12 md:px-24 lg:px-40 py-12 space-y-6 mt-20 text-blue-300">
//       {/* Logo */}
//       <img
//         src="logo/TakuMi.png"
//         alt="Logo"
//         className="w-fit h-30 object-contain drop-shadow-lg"
//         draggable={false}
//       />

//       {/* Product Name */}
//       <span className="text-4xl font-extrabold tracking-tight text-blue-950 drop-shadow-lg">
//         TakuMi
//       </span>

//       {/* Slogan / Tagline */}
//       <h1 className="text-4xl font-black text-white leading-tight max-w-2xl drop-shadow-md">
//         Global Financial <span className="text-blue-950">Compliance Platform</span>
//       </h1>

//       <p className="text-lg text-white max-w-xl drop-shadow-sm">
//         Revolutionize tasks, boost collaboration, and lead your team with cutting-edge digital solutions,<br />
//         all in <span className="text-blue-950 font-semibold">TakuMi</span>.
//       </p>

//       {/* CTA Button */}
//       <Button
//         variant="contained"
//         size="large"
//         sx={{
//           borderRadius: "30px",
//           background: "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
//           color: "#ffffff",
//           fontWeight: 700,
//           fontSize: "1.1rem",
//           px: 5,
//           boxShadow: "0 8px 40px 0 rgba(37, 99, 235, 0.4)",
//           textTransform: "none",
//         }}
//       >
//         Get Started
//       </Button>
//     </div>
//       {/* Optional: accent SVG shapes for extra modern flair */}
//       {/* <svg
//         className="absolute left-[-6vw] top-16 w-80 h-80 opacity-30"
//         viewBox="0 0 200 200"
//         fill="none"
//       >
//         <circle cx="100" cy="100" r="100" fill="#6366f1" />
//       </svg>
//       <svg
//         className="absolute bottom-[-7vw] left-[45vw] w-96 h-96 opacity-20"
//         viewBox="0 0 300 300"
//         fill="none"
//       >
//         <circle cx="150" cy="150" r="150" fill="#a21caf" />
//       </svg> */}
//     </section>

//             {/* WHY Kaarmika SECTION */}
//             <section id="why" className="py-30 px-6 md:px-16" style={{ backgroundColor: veryLightGray }}>
//                 <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-center gap-16 relative">

//                     {/* Left Circle: Why Choose Us? */}
//                     <div
//                         className="relative flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center shadow-2xl"
//                         style={{
//                             background: `linear-gradient(135deg, ${primaryBlue} 0%, ${lightPurple} 100%)`, // Purple gradient
//                             zIndex: 2, // Ensure it's above background elements
//                         }}
//                     >
//                         <h2 className="text-white text-3xl md:text-4xl font-bold text-center leading-tight px-4">
//                             Why Choose <br /> TakuMi?
//                         </h2>
//                     </div>

//                     {/* Right Side: features */}
//                     <div className="flex-grow grid grid-cols-1 gap-10 md:gap-12 mt-12 md:mt-0 md:ml-16 relative z-10">
//                         {features.map((feature, index) => (
//                             <div key={index} className="flex items-start text-left">
//                                 {/* Icon Container */}
//                                 <div
//                                     className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md"
//                                     style={{
//                                         backgroundColor: `${feature.iconColor}20`, // 12% opacity of icon color
//                                         color: feature.iconColor,
//                                     }}
//                                 >
//                                     {feature.icon}
//                                 </div>
//                                 {/* Text Content */}
//                                 <div>
//                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                         {feature.title}
//                                     </h3>
//                                     <p className="text-gray-600 leading-relaxed">
//                                         {feature.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>


//             {/* WHO'S IT FOR */}
//             <section className="py-20 px-6 md:px-1" style={{ backgroundColor: sectionBgColor }}>
//                 <div className="w-full mx-auto">

//                     <div className="flex flex-wrap justify-center gap-8">
//                         {solutions.map((solution, index) => (
//                             <div
//                                 key={index}
//                                 // Removed bg-white, p-8, rounded-xl, shadow-lg
//                                 className="flex flex-col items-center text-center w-full sm:w-64 transition-transform duration-300 hover:scale-105" // Kept hover effect
//                             >
//                                 {/* Icon Container */}
//                                 <div className="mb-6">
//                                     {/* The icon itself, with specific colors for each type */}
//                                     {solution.icon}
//                                 </div>
//                                 <h3 className="text-lg font-semibold text-gray-800 mb-2">
//                                     {solution.title}
//                                 </h3>
//                                 <p className="text-gray-600 leading-relaxed text-sm">
//                                     {solution.description}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section className="py-20 px-6 md:px-16" style={{ backgroundColor: bgLightBlue }}>
//                 <div className="max-w-7xl mx-auto">
//                     <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
//                         What's there for you
//                     </h2>

//                     <div
//                         className="flex justify-center items-center p-2 rounded-full mx-auto mb-12  shadow-inner transition-all duration-300 "
//                         style={{
//                             backgroundColor: primaryBlue, // Background of the entire toggle switch
//                             width: 'fit-content',
//                             border: `2px solid ${primaryBlue}`, // Solid border
//                         }}
//                     >

//                         <button
//                             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === "customer"
//                                 ? "bg-white text-purple-700 shadow-md"
//                                 : "bg-transparent text-white hover:bg-white hover:text-purple-700 hover:bg-opacity-20"
//                                 }`}
//                             onClick={() => setActiveTab("customer")}
//                         >
//                             Customer
//                         </button>


//                         <button
//                             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === "valetStaff"
//                                 ? "bg-white text-purple-700 shadow-md"
//                                 : "bg-transparent text-white hover:bg-white hover:text-purple-700 hover:bg-opacity-20"
//                                 }`}
//                             onClick={() => setActiveTab("valetStaff")}
//                         >
//                             Valet Staff
//                         </button>


//                         <button
//                             className={`px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === "manager"
//                                 ? "bg-white text-purple-700 shadow-md"
//                                 : "bg-transparent text-white hover:bg-white hover:text-purple-700 hover:bg-opacity-20"
//                                 }`}
//                             onClick={() => setActiveTab("manager")}
//                         >
//                             Manager
//                         </button>
//                     </div>


//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                         {content[activeTab].map((item, index) => (
//                             <div key={index} className=" p-6 rounded-sm border flex items-start space-x-4">
//                                 <div>
//                                     <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                                         {item.title}
//                                     </h3>
//                                     <p className="text-gray-600 leading-relaxed">
//                                         {item.description}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             {/* TESTIMONIALS SECTION */}
//             <section className="py-20 px-6 md:px-16 relative overflow-hidden" style={{ backgroundColor: veryLightGray }}>


//                 <div className="max-w-8xl mx-auto text-center relative z-10">
//                     <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
//                         What Our Partners Say
//                     </h2>

//                     <div className="flex flex-col md:flex-row items-center justify-center gap-6"> {/* Changed gap for 3 cards */}
//                         {/* Left Preview Card */}
//                         <div
//                             className="relative p-6 rounded-xl shadow-lg flex flex-col justify-center items-center text-center w-full md:w-1/3 cursor-pointer transition-all duration-300 transform hover:scale-105"
//                             style={{
//                                 backgroundColor: 'white',
//                                 height: '250px', // Consistent height with main card
//                                 color: textColor,
//                                 opacity: 0.7, // More transparent for preview
//                             }}
//                             onClick={() => handleSelectTestimonial(prevIndex)}
//                         >
//                             <blockquote className="italic text-md leading-relaxed mb-6">
//                                 {prevTestimonial.quote.substring(0, 100)}... {/* Truncate for preview */}
//                             </blockquote>
//                             <div className="flex items-center space-x-3 mt-auto"> {/* mt-auto pushes it to bottom */}
//                                 <img
//                                     src={prevTestimonial.image}
//                                     alt={prevTestimonial.name}
//                                     className="w-12 h-12 rounded-full object-cover border-2"
//                                     style={{ borderColor: primaryBlue }}
//                                 />
//                                 <div className="text-left">
//                                     <p className="text-gray-800 font-semibold text-md">{prevTestimonial.name}</p>
//                                     <p className="text-gray-600 text-xs">{prevTestimonial.company}</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Main Testimonial Container */}
//                         <div
//                             className="relative p-8 md:p-12 rounded-2xl shadow-2xl flex flex-col justify-between items-center text-center w-full md:w-2/3 transition-all duration-500"
//                             style={{
//                                 background: `linear-gradient(135deg, ${primaryBlue} 0%, ${lightPurple} 100%)`, // Purple gradient
//                                 minHeight: '350px', // Consistent height
//                                 color: 'white', // Text color inside the gradient container
//                             }}
//                         >
//                             <blockquote className="italic text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
//                                 {currentTestimonial.quote}
//                             </blockquote>

//                             {/* Client Info Container at bottom-left */}
//                             <div className="absolute bottom-8 left-8 flex items-center space-x-4 bg-white p-4 rounded-full shadow-lg">
//                                 <img
//                                     src={currentTestimonial.image}
//                                     alt={currentTestimonial.name}
//                                     className="w-16 h-16 rounded-full object-cover border-2"
//                                     style={{ borderColor: accentLightBlue }} // Yellow border for image
//                                 />
//                                 <div className="text-left">
//                                     <p className="text-gray-800 font-semibold text-lg">{currentTestimonial.name}</p>
//                                     <p className="text-gray-600 text-sm">{currentTestimonial.company}</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Right Preview Card */}
//                         <div
//                             className="relative p-6 rounded-xl shadow-lg flex flex-col justify-between items-center text-center w-full md:w-1/3 cursor-pointer transition-all duration-300 transform hover:scale-105"
//                             style={{
//                                 backgroundColor: 'white',
//                                 height: '250px', // Consistent height with main card
//                                 color: textColor,
//                                 opacity: 0.7, // More transparent for preview
//                             }}
//                             onClick={() => handleSelectTestimonial(nextIndex)}
//                         >
//                             <blockquote className="italic text-md leading-relaxed mb-6">
//                                 {nextTestimonial.quote.substring(0, 100)}... {/* Truncate for preview */}
//                             </blockquote>
//                             <div className="flex items-center space-x-3 mt-auto"> {/* mt-auto pushes it to bottom */}
//                                 <img
//                                     src={nextTestimonial.image}
//                                     alt={nextTestimonial.name}
//                                     className="w-12 h-12 rounded-full object-cover border-2"
//                                     style={{ borderColor: primaryBlue }}
//                                 />
//                                 <div className="text-left">
//                                     <p className="text-gray-800 font-semibold text-md">{nextTestimonial.name}</p>
//                                     <p className="text-gray-600 text-xs">{nextTestimonial.company}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Navigation Arrows */}
//                     {/* <div className="flex justify-center mt-12 space-x-4">
//                         <button
//                             onClick={handlePrev}
//                             className="p-3 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 transition duration-300"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                             </svg>
//                         </button>
//                         <button
//                             onClick={handleNext}
//                             className="p-3 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 transition duration-300"
//                         >
//                             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     </div> */}
//                 </div>
//             </section>



//         </main>
//     );
// }
