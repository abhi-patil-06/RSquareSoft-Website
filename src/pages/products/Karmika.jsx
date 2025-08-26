import React, { useState } from "react";
import { FaCar, FaHospital, FaHotel, FaPlane, FaShoppingBag, FaTrain, FaDollarSign, FaHandshake, FaGlobe, FaLightbulb, FaRobot, FaUserCheck, FaBell, FaCreditCard, FaStarHalfAlt, FaHistory } from "react-icons/fa";
import { IoAirplaneOutline, IoCarSportOutline, IoTrainOutline } from "react-icons/io5";
import { FaParking, FaMapMarkerAlt, FaClock, FaCheckCircle } from "react-icons/fa";
import { Hotel, Hospital, ShoppingBag, Plane, Train } from "lucide-react";
import { FaUser, FaUsers, FaChartLine } from "react-icons/fa";
import { GiShoppingCart } from "react-icons/gi";
import { PiBellRingingThin, PiHospital, PiRobotThin, PiStarHalfDuotone, PiStarHalfThin, PiUserCheckThin } from "react-icons/pi";
import { RiHotelLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { LiaRobotSolid } from "react-icons/lia";
import { LuBellRing, LuHistory, LuUserCheck } from "react-icons/lu";
import { MdHistory } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { GoHistory } from "react-icons/go";


export default function Karmika() {
    // Karmika Blue-Only Color Palette
    // **IMPORTANT: Confirm karmikaPrimaryBlue from your logo. If different, replace it.**
    const karmikaPrimaryBlue = "#3465FF"; // Main blue from your Karmika logo
    const karmikaDarkBlue = "#1A3B8A";   // A deeper shade of the primary blue
    const karmikaLightBlue = "#A0BFFF"; // A lighter shade of the primary blue
    const karmikaSubtleBlue = "rgba(52, 101, 255, 0.08)"; // Transparent primary blue
    const karmikaVeryLightBg = "#F0F5FF"; // A very subtle blue-tinted off-white

    const blobPaths = [
        "M60.1,-56.9C74.4,-41.6,80.6,-20.8,77.4,-2.3C74.2,16.1,61.6,32.2,47.3,47.5C32.9,62.9,16.5,77.6,-0.3,77.9C-17.1,78.2,-34.3,64.2,-47.3,48.8C-60.4,33.3,-69.4,16.6,-67.3,1.3C-65.2,-14,-52.1,-28,-40.1,-43.4C-28.1,-58.8,-14.1,-75.5,2.6,-78.4C19.3,-81.3,38.6,-70.5,60.1,-56.9Z",
        "M40.5,-67.7C52.3,-58.7,61.2,-46.5,66.3,-33.2C71.4,-19.8,72.7,-5.3,69.4,7.6C66.2,20.6,58.4,31.9,48.1,40.2C37.8,48.6,24.9,54,11.3,60.7C-2.3,67.3,-16.7,75.2,-28.3,72.2C-39.8,69.1,-48.4,55.1,-54.7,42.1C-61,29,-64.9,17,-66.7,3.6C-68.5,-9.8,-68.2,-24.6,-61.6,-37.1C-55,-49.7,-42.2,-59.9,-28.2,-67.4C-14.2,-75,1.9,-79.8,16.6,-76.3C31.3,-72.8,54.4,-61.8,40.5,-67.7Z",
        "M59.4,-69.5C73.8,-53.5,80.7,-26.8,77.5,-3.1C74.3,20.6,61,41.2,46.6,56.2C32.2,71.3,16.1,80.7,-2.3,82.2C-20.6,83.6,-41.2,77.1,-56.5,63.3C-71.8,49.4,-81.8,28.2,-81.6,8.6C-81.4,-11.1,-70.9,-29.1,-58,-46.7C-45.1,-64.3,-29.9,-81.4,-10.8,-83.7C8.3,-86,16.6,-73.7,59.4,-69.5Z",
    ];

    const whyUs = [
        {
            title: "100% Free for workers to use",
            description: "Workers can access all features without any cost, ensuring equitable opportunities.",
            icon: <FaDollarSign className="text-3xl" />, // Icon for 'free'
            iconColor: karmikaPrimaryBlue,
        },
        {
            title: "Direct Worker-Contractor Connection",
            description: "Connects contractors directly with verified workers, enabling a fast, simple, and reliable hiring process.",
            icon: <FaHandshake className="text-3xl" />,
            iconColor: karmikaPrimaryBlue,
        },
        {
            title: "Trust & Transparency through Ratings",
            description: "Utilizes a comprehensive rating and feedback system to assess work quality, ensuring transparency.",
            icon: <FaStarHalfAlt className="text-3xl" />, // Changed from FaLightbulb to better represent ratings
            iconColor: karmikaPrimaryBlue,
        },
        {
            title: "Available across multiple industries",
            description: "Our platform caters to diverse sectors, connecting talent with opportunities in various fields.",
            icon: <FaGlobe className="text-3xl" />, // Icon for 'multiple industries/global'
            iconColor: karmikaPrimaryBlue,
        },
        {
            title: "Accessible & Local Language Support",
            description: "The platform is user-friendly and available in local languages like Hindi, Marathi, and English.",
            icon: <FaGlobe className="text-3xl" />,
            iconColor: karmikaPrimaryBlue,
        },
    ];

    const sectionBgColor = karmikaVeryLightBg; // Using the light blue background
    // Icon colors are set directly within the features array for individual control

    const features = [
        {
            title: "Smart Matching",
            description: "Our algorithm connects workers with relevant jobs based on skills, location, and availability.",
            icon: <PiRobotThin className="w-16 h-16" style={{ color: karmikaPrimaryBlue }} />, // Using FaRobot for AI/smart
        },
        {
            title: "Verified Profiles",
            description: "Both workers and contractors undergo thorough verification for trust and safety across the platform.",
            icon: <PiUserCheckThin className="w-16 h-16" style={{ color: karmikaPrimaryBlue }} />, // Using FaUserCheck for verification
        },
        {
            title: "Real-time Notifications",
            description: "Receive instant alerts for new job postings, application updates, and important communications.",
            icon: <PiBellRingingThin className="w-16 h-16" style={{ color: karmikaPrimaryBlue }} />, // Using FaBell for notifications
        },
        // {
        //     title: "Secure Payments",
        //     description: "Our integrated payment system ensures timely, transparent, and secure transactions for all work.",
        //     icon: <FaCreditCard className="w-16 h-16" style={{ color: karmikaDarkBlue }} />, // Using FaCreditCard for payments
        // },
        {
            title: "Rating System",
            description: "Build your professional reputation with our mutual rating system, fostering accountability and quality.",
            icon: <PiStarHalfThin className="w-16 h-16" style={{ color: karmikaPrimaryBlue }} />, // Using FaStarHalfAlt for ratings
        },
        {
            title: "Work History",
            description: "Easily track and manage all your completed jobs, earnings, and performance records in one convenient place.",
            icon: <GoHistory className="w-16 h-16" style={{ color: karmikaPrimaryBlue }} />, // Using FaHistory for work history
        },
    ];

    const textColor = "#4A5568"; // Kept a dark gray for general text (can be karmikaDarkBlue if desired)

    const [activeTab, setActiveTab] = useState("worker");

    const content = {
        worker: [
            {
                title: "Access Daily Job Opportunities",
                description: "Find relevant job opportunities in your area on a daily basis, directly through the mobile platform.",
            },
            {
                title: "Instant Job Notifications",
                description: "Receive instant alerts for new job postings that match your skills and preferences.",
            },
            {
                title: "Build Your Reputation",
                description: "Benefit from a rating and feedback system to showcase your work quality and build a strong profile.",
            },
            {
                title: "Guaranteed Work Access",
                description: "Our platform aims to provide work opportunities for every worker, increasing your chances of employment.",
            },
            {
                title: "Local Language Support",
                description: "Use the platform comfortably with support for local languages like Hindi, Marathi, and English.",
            },
        ],
        contractor: [
            {
                title: "Post Jobs Digitally",
                description: "Easily post your job requirements digitally, specifying skills, number of workers, location, and wages.",
            },
            {
                title: "Hire Verified Workers Quickly",
                description: "Access a pool of verified workers and quickly hire reliable labor for your projects.",
            },
            {
                title: "Efficient Worker Selection",
                description: "Review worker profiles, ratings, and feedback to select the most suitable and skilled workers.",
            },
            {
                title: "Real-time Worker Availability",
                description: "Get instant access to nearby workers and receive notifications as soon as a worker confirms their availability.",
            },
            {
                title: "Optimize Planning & Save Time",
                description: "Plan your work in advance with confidence, saving 1-2 hours every day by streamlining the hiring process.",
            },
        ],
    };

    const testimonials = [
        {
            quote: "“Kaarmika has been a game-changer! I used to waste so much time looking for work, but now I get instant notifications for jobs right in my area. It’s so easy to find reliable work daily and get fair ratings.”",
            name: "Raju Sharma",
            company: "Daily Wage Worker",
            image: "https://placehold.co/80x80/3465FF/FFFFFF?text=RW", // Placeholder image
        },
        {
            quote: "“Finding skilled workers was always a headache, but Kaarmika changed that. I can easily post jobs, filter by skills, and hire verified laborers instantly. It saves me hours every day and helps me plan my projects smoothly.”",
            name: "Priya Singh",
            company: "Construction Contractor",
            image: "https://placehold.co/80x80/1A3B8A/FFFFFF?text=CC", // Placeholder image
        },
        {
            quote: "“The local language support in Kaarmika makes a huge difference. It’s incredibly user-friendly, and I always know where my next job is coming from. My work history and ratings are helping me get even better opportunities.”",
            name: "Amit Kumar",
            company: "Skilled Laborer",
            image: "https://placehold.co/80x80/3465FF/FFFFFF?text=SL", // Placeholder image
        },
        {
            quote: "“With Kaarmika, I no longer worry about finding the right people. The rating and feedback system gives me confidence in hiring, and getting notified as soon as a worker confirms is fantastic for project management.”",
            name: "Deepak Yadav",
            company: "Small Business Owner",
            image: "https://placehold.co/80x80/1A3B8A/FFFFFF?text=SO", // Placeholder image
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const handleSelectTestimonial = (index) => {
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];
    const prevIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    const prevTestimonial = testimonials[prevIndex];
    const nextTestimonial = testimonials[nextIndex];

    return (
        <main className="bg-background text-text-primary font-family-base">
            {/* HERO SECTION */}
            <section
                className="hero flex items-center justify-center md:py-16 px-8 min-h-screen relative overflow-hidden "

            >
                {/* Background Blobs (subtle, low opacity) */}
                <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                    <path fill={karmikaSubtleBlue} d={blobPaths[0]} transform="translate(100 100) scale(2.5) rotate(15)" opacity="0.5" />
                    <path fill={karmikaSubtleBlue} d={blobPaths[0]} transform="translate(1300 800) scale(5) rotate(35)" opacity="0.5" />
                    <path fill={karmikaSubtleBlue} d={blobPaths[1]} transform="translate(1000 200) scale(1.9) rotate(-30)" opacity="0.5" />
                    <path fill={karmikaSubtleBlue} d={blobPaths[0]} transform="translate(200 800) scale(2.3) rotate(60)" opacity="0.5" />
                </svg>

                {/* Centered Content */}
                <div className="relative z-10 flex flex-col gap-7 md:gap-0 items-center text-center max-w-4xl px-4">
                    {/* Quote */}
                    <p className="text-2xl md:text-4xl font-medium text-gray-700 md:mt-20 " style={{ fontFamily: 'yatra one' }}>
                        "प्रत्येक हाताला काम, प्रत्येक कामाला हात!"
                    </p>

                    {/* Logo */}
                    <img
                        src="public\logo\Karmika2.png" // Your Kaarmika logo
                        alt="Kaarmika Logo"
                        className="w-64 md:w-108 h-auto drop-shadow-lg"
                    />

                    {/* Call to Action Button */}
                    <a
                        href="https://kaarmika.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-transparent border font-semibold py-3 px-8 rounded-full shadow-md transition-all duration-500 transform hover:scale-105 text-lg"
                        style={{
                            borderColor: karmikaPrimaryBlue,
                            color: karmikaPrimaryBlue,
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = karmikaPrimaryBlue;
                            e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = karmikaPrimaryBlue;
                        }}
                    >
                        Discover Karmika
                    </a>
                </div>
            </section>

            {/* WHY Kaarmika SECTION */}
            <section id="why" className="pb-10 md:py-20 px-6 md:px-16 ">
                <div className="text-center pb-5 md:pb-19">
                    <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading)" }}>Why Kaarmika?</h2>
                    <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
                </div>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center justify-center gap-16 relative">
                    {/* Left Circle: Why Choose Us? */}
                    <div
                        className="relative hidden flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-full md:flex items-center justify-center shadow-2xl"
                        style={{
                            background: `linear-gradient(135deg, ${karmikaPrimaryBlue} 0%, ${karmikaDarkBlue} 100%)`, // Gradient of blues
                            zIndex: 2,
                        }}
                    >
                        <h2 className="text-white text-3xl md:text-4xl font-bold text-center leading-tight px-4">
                            Why Choose <br /> Kaarmika?
                        </h2>
                    </div>

                    {/* Right Side: whyUs */}
                    <div className="flex-grow grid grid-cols-1 gap-10 md:gap-12 mt-10 md:mt-0 md:ml-16 relative z-10">
                        {whyUs.map((feature, index) => (
                            <div key={index} className="flex items-start text-left">
                                {/* Icon Container */}
                                <div
                                    className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center mr-6 shadow-md"
                                    style={{
                                        backgroundColor: `${feature.iconColor}20`, // Transparent version of icon color
                                        color: feature.iconColor,
                                    }}
                                >
                                    {feature.icon}
                                </div>
                                {/* Text Content */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WHO'S IT FOR */}
            <section className="py-10 px-6 md:px-1" style={{ backgroundColor: sectionBgColor }}>
                <div className="text-center pb-15 md:pb-19">
                    <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading)" }}>Features</h2>
                    <div className="w-20 h-1 bg-primary mx-auto mt-2 rounded"></div>
                </div>
                <div className="w-full mx-auto">
                    <div className="flex flex-wrap justify-center gap-8">
                        {features.map((solution, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center w-full sm:w-64 transition-transform duration-300 hover:scale-105"
                            >
                                {/* Icon Container */}
                                <div className="mb-6">
                                    {solution.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {solution.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    {solution.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6 md:px-16" >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center pb-10 md:pb-19">
                        <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading)" }}>Whats there for you?</h2>
                        <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
                    </div>

                    <div
                        className="flex justify-center items-center text-center gap-px p-2 rounded-full mx-auto mb-12 shadow-inner transition-all duration-300"
                        style={{
                            backgroundColor: karmikaPrimaryBlue, // Background of the entire toggle switch
                            width: 'fit-content',
                            border: `2px solid ${karmikaPrimaryBlue}`, // Solid border
                        }}
                    >
                        <button
                            className={`px-8 py-3 w-1/2 rounded-full font-semibold text-lg transition-all duration-300 ${activeTab === "worker" // Changed from "customer"
                                ? "bg-white text-blue-700 shadow-md"
                                : "bg-transparent text-white hover:bg-white hover:text-blue-700 hover:bg-opacity-20"
                                }`}
                            onClick={() => setActiveTab("worker")}
                        >
                            Worker
                        </button>

                        <button
                            className={`px-8 py-3 w-1/2 rounded-full font-semibold text-lg text-center transition-all duration-300 ${activeTab === "contractor" // Changed from "manager"
                                ? "bg-white text-blue-700 shadow-md"
                                : "bg-transparent text-white hover:bg-white hover:text-blue-700 hover:bg-opacity-20"
                                }`}
                            onClick={() => setActiveTab("contractor")}
                        >
                            Contractor
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {content[activeTab].map((item, index) => (
                            <div key={index} className=" p-6 rounded-sm border flex items-start space-x-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS SECTION */}
            <section className="py-20 px-6 md:px-16 relative overflow-hidden">
                <div className="max-w-8xl mx-auto text-center relative z-10">
                    <div className="text-center pb-5 md:pb-19">
                        <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading)" }}>What Our Partners Say?</h2>
                        <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        {/* Left Preview Card */}
                        <div
                            className="relative p-6 rounded-xl shadow-lg hidden md:flex flex-col justify-center items-center text-center w-full md:w-1/3 cursor-pointer transition-all duration-300 transform hover:scale-105"
                            style={{
                                backgroundColor: 'white',
                                height: '250px',
                                color: textColor,
                                opacity: 0.7,
                            }}
                            onClick={() => handleSelectTestimonial(prevIndex)}
                        >
                            <blockquote className="italic text-md leading-relaxed mb-6">
                                {prevTestimonial.quote.substring(0, 100)}...
                            </blockquote>
                            <div className="flex items-center space-x-3 mt-auto">
                                <img
                                    src={prevTestimonial.image}
                                    alt={prevTestimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2"
                                    style={{ borderColor: karmikaLightBlue }} // Light blue for image border
                                />
                                <div className="text-left">
                                    <p className="text-gray-800 font-semibold text-md">{prevTestimonial.name}</p>
                                    <p className="text-gray-600 text-xs">{prevTestimonial.company}</p>
                                </div>
                            </div>
                        </div>

                        {/* Main Testimonial Container */}
                        <motion.div
                            className="relative p-8 md:p-12 h-[450px] md:h-[350px] rounded-2xl shadow-2xl flex flex-col justify-between items-center text-center w-full md:w-2/3 transition-all duration-500 touch-pan-y"
                            style={{
                                background: `linear-gradient(135deg, ${karmikaPrimaryBlue} 0%, ${karmikaDarkBlue} 100%)`, // Gradient of blues
                                minHeight: '350px',
                                border: `2px solid ${karmikaDarkBlue}`,
                                color: 'white',
                                touchAction: "pan-y",
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }} // so component does not move away
                            dragElastic={0.3}
                            onDragEnd={(event, info) => {
                                if (info.offset.x < -70) {
                                    handleNext();    // swipe left, go to next
                                } else if (info.offset.x > 70) {
                                    handlePrev();    // swipe right, go to prev
                                }
                            }}
                        >
                            <blockquote className="italic text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl">
                                {currentTestimonial.quote}
                            </blockquote>

                            {/* Client Info Container at bottom-left */}
                            <div className="absolute bottom-8 md:left-8 flex items-center space-x-4 bg-white p-2 rounded-full shadow-lg"
                                style={{
                                    minWidth: 350,
                                    maxWidth: 350,
                                    height: 75,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src={currentTestimonial.image}
                                    alt={currentTestimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2"
                                    style={{ borderColor: karmikaLightBlue }} // Light blue border for image
                                />
                                <div className="text-left overflow-hidden flex-shrink-0">
                                    <p className="text-gray-800 font-semibold text-lg">{currentTestimonial.name}</p>
                                    <p className="text-gray-600 text-sm">{currentTestimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Preview Card */}
                        <div
                            className="relative p-6 rounded-xl shadow-lg hidden md:flex flex-col justify-between items-center text-center w-full md:w-1/3 cursor-pointer transition-all duration-300 transform hover:scale-105"
                            style={{
                                backgroundColor: 'white',
                                height: '250px',
                                color: textColor,
                                opacity: 0.7,
                            }}
                            onClick={() => handleSelectTestimonial(nextIndex)}
                        >
                            <blockquote className="italic text-md leading-relaxed mb-6">
                                {nextTestimonial.quote.substring(0, 100)}...
                            </blockquote>
                            <div className="flex items-center space-x-3 mt-auto">
                                <img
                                    src={nextTestimonial.image}
                                    alt={nextTestimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2"
                                    style={{ borderColor: karmikaLightBlue }} // Light blue for image border
                                />
                                <div className="text-left">
                                    <p className="text-gray-800 font-semibold text-md">{nextTestimonial.name}</p>
                                    <p className="text-gray-600 text-xs">{nextTestimonial.company}</p>
                                </div>
                            </div>
                        </div>

                        {/* Navigation Arrows */}
                        <div className="flex md:hidden justify-center mt-7 space-x-4">
                            <button
                                onClick={handlePrev}
                                className="p-3 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 transition duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-3 rounded-full bg-blue-700 text-white shadow-md hover:bg-blue-800 transition duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
