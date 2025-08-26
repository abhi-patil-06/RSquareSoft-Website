// src/pages/Careers.jsx

import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, Avatar, Grid, Chip, Stack, TextField, MenuItem, } from "@mui/material";
import { LightbulbOutlined, MemoryOutlined, SchoolOutlined, PublicOutlined, FavoriteBorder, GroupsOutlined, AutoAwesome, People, Build } from '@mui/icons-material';
import { FaUsers, FaLaptopCode, FaChartBar, FaHome, FaCoins } from "react-icons/fa";
import { GiBrain, GiSandsOfTime } from "react-icons/gi";
import { MdWork, MdOutlineStar, MdOutlinePaid } from "react-icons/md";
import JobOpenings from "../career/JobOpenings";
import HiringProcessSection from "../career/HiringProcessSection";
import ModernHiringProcess from "../career/HiringProcessSection";
import EmployeeGrowthSection from "../career/EmployeeGrowthSection";
import EmployeeCarousel from "../career/EmployeeGrowthSection";
import { TbBulb, TbTargetArrow } from "react-icons/tb";
import { TiLightbulb } from "react-icons/ti";
import { RiLightbulbFlashFill } from "react-icons/ri";
import { LuHandHeart } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import TimelineSection from "./TimelineSection";
import { Home, Star, Info, Settings } from "@mui/icons-material";
import { TrendingUp } from "lucide-react";
import { BiTrendingUp } from "react-icons/bi";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MissionVisionSection from "./MissionVisionSection";
import LogoAnimation from "./LogoAnimation";




const cardData = [
    {
        id: 1,
        title: "Innovation & Excellence",
        icon: <AutoAwesome />,
        content: "Dedicated to delivering cutting-edge AI, ML, and Data Analytics solutions tailored to meet the evolving needs of the digital landscape with precision and scalability.",
    },
    {
        id: 2,
        title: "Customer-Centric Approach",
        icon: <People />,
        content: "Prioritizing collaboration and communication to understand client goals and deliver solutions that exceed expectations, fostering long-term partnerships and mutual success.",
    },
    {
        id: 3,
        title: "Expertise & Custom Solutions",
        icon: <Build />,
        content: "Providing comprehensive and customized AI, ML, and Data Analytics solutions through a skilled team with expertise in AI, software development, cloud computing, and analytics.",
    },
    {
        id: 4,
        title: "Empower Digital Transformation",
        icon: <TrendingUpIcon />,
        content: "Positioned as a catalyst for positive change, helping enterprises optimize AI operations and develop scalable AI-driven solutions for a future-focused digital transformation journey.",
    },
];




const benefits = [
    { icon: <FaHome size={22} color="#1976d2" />, label: "Remote or Hybrid Work" },
    { icon: <FaCoins size={22} color="#efb81a" />, label: "Competitive Salaries" },
    { icon: <MdOutlineStar size={22} color="#c026d3" />, label: "Rapid Growth" },
    { icon: <FaUsers size={22} color="#0288d1" />, label: "Collaborative Teams" },
    { icon: <MdOutlinePaid size={22} color="#3BB273" />, label: "Wellness Benefits" },
    { icon: <GiSandsOfTime size={22} color="#8b5cf6" />, label: "Flexible Hours" },
];

const positionList = [
    {
        title: "Frontend Developer",
        type: "Development",
        location: "Remote",
        keywords: ["React", "JavaScript", "UI"],
        desc: "Build beautiful, performant user experiences at scale in React.",
        link: "#"
    },
    {
        title: "Backend Engineer",
        type: "Development",
        location: "Bangalore",
        keywords: ["Node.js", "API", "Cloud"],
        desc: "Architect scalable RESTful microservices deployed on the cloud.",
        link: "#"
    },
    {
        title: "Product Manager",
        type: "Product",
        location: "Hybrid",
        keywords: ["Ownership", "Client", "Scrum"],
        desc: "Lead sprints and act as a liaison between clients and squads.",
        link: "#"
    },
    {
        title: "QA Automation Engineer",
        type: "QA",
        location: "Remote",
        keywords: ["Quality", "Cypress", "Selenium"],
        desc: "Automate and ensure delivery quality using cutting-edge test frameworks.",
        link: "#"
    },
    {
        title: "AI/ML Specialist",
        type: "AI",
        location: "Remote",
        keywords: ["Machine Learning", "Python", "AI"],
        desc: "Design and implement production-grade ML pipelines.",
        link: "#"
    },
];

const typeFilters = ["All", "Development", "Product", "QA", "AI"];

export default function AboutUs() {
    const [selectedType, setSelectedType] = useState("All");
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

    const filteredPositions =
        selectedType === "All"
            ? positionList
            : positionList.filter(job => job.type === selectedType);

    return (
        <>
            <Box
                sx={{
                    minHeight: "100vh",
                    width: "100%",
                    py: { xs: '', md: 14 },
                    fontFamily: "var(--font-family-base)",
                    background: 'var(--color-background)',
                }}
            >

                {/* HERO */}
                <Box sx={{
                    px: { xs: 2, md: 8 },
                    pt: { xs: 13, md: 0 }
                }}>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            minHeight: { xs: 500, md: 620 },
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "center",
                            backgroundImage: `url("/public/About-Us3.jpg")`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            overflow: "hidden",
                            mb: 5,
                        }}
                    >
                        {/* Overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                bgcolor: "rgba(0,0,0,0.3)", // semi-transparent white

                                zIndex: 1,
                            }}
                        />
                        {/* Content */}
                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 2,
                                width: { xs: "90%", md: "60%" },
                                textAlign: { xs: "center", md: "left" },
                                mx: "auto",
                                py: { xs: 5, md: 8 },
                            }}
                        >
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                mb={2}
                                color="var(--color-button-text)"
                                sx={{
                                    letterSpacing: "-0.02em",
                                    fontSize: { xs: "2.5rem", sm: "2.5rem", md: "3rem" }
                                }}
                            >
                                About Us
                            </Typography>
                            <Typography variant="h6" mb={3} color="var(--color-button-text)">
                                We are RSquareSoft, dedicated to empowering businesses with advanced technology and exceptional service.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                href="#open-roles"
                                onClick={() => {
                                    const section = document.getElementById("about");
                                    if (section) {
                                        const navbarOffset = 80; // Set this to your navbar height
                                        const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                                        window.scrollTo({
                                            top: elementPosition - navbarOffset,
                                            behavior: "smooth",
                                        });
                                    }
                                }}

                                sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: "1.08rem", width: { xs: "100%", sm: "fit-content" }, }}
                            >
                                Explore More
                            </Button>
                        </Box>
                    </Box>
                </Box>


                <section id="about" className="w-full py-5  bg-background">
                    <section className="relative  px-8 md:py-5  overflow-hidden flex flex-col items-center justify-center">
                        {/* Animated abstract SVG background using generative lines or AI shapes */}
                        <div className="absolute inset-0 pointer-events-none z-0">
                            <svg className="w-full h-full" viewBox="0 0 1440 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* <path className="" d="M0,100 Q720,200 1440,100" stroke="#a5a9f1" strokeWidth="16" fill="none" opacity="0.18" /> */}
                                <circle className=" fill-primary" cx="300" cy="300" r="80" opacity="0.14" />
                                <circle className="fill-secondary " cx="1200" cy="400" r="70" fill="#99aefb" opacity="0.12" />
                                <circle className="fill-secondary " cx="700" cy="700" r="70" fill="#99aefb" opacity="0.12" />
                            </svg>
                        </div>

                        {/* Main content */}
                        <div className="relative z-10 w-full max-w-4xl flex flex-col items-center">
                            <div className="text-center mb-5">
                                <h2 className="font-bold text-text-primary" style={{ fontSize: 'var(--font-size-heading1)' }}>What is RSquareSoft?</h2>
                                <div className="w-60 h-1 bg-primary mx-auto mt-2 rounded"></div>
                            </div>

                            {/* Story / brand identity with motion */}
                            <p className="text-center text-text-primary max-w-4xl font-light  leading-relaxed animate-fade-in-up" style={{ fontSize: 'var(--font-size-subheading)' }}>
                                R-Squared (R² or the <a href="https://en.wikipedia.org/wiki/Coefficient_of_determination" target="_blank" className="text-primary hover:text-secondary">coefficient of determination</a>) is a statistical measure in a regression model that determines the proportion of variance in the dependent variable that can be explained by the independent variable.
                            </p>

                            {/* Interactive team showcase */}
                            <div className=" w-full flex flex-wrap justify-center
                             animate-fade-in-up delay-300">
                                {/* Example: Avatar group with hover bios */}
                                {/* <div className="group relative">
                                    <img src="/public/award-bg.png" alt="Alex" className="w-150 h-80  object-cover transform hover:scale-105 transition-transform duration-900 ease-in-out" />
                                </div> */}
                                <LogoAnimation />
                            </div>
                        </div>
                    </section>



                    {/* <div className="max-w-5xl mx-auto">
                        <h2 className="text-5xl font-bold text-center text-gray-800 mb-15">
                            Meet Our Leadership
                        </h2>
                        <div className="w-full flex flex-row justify-center items-end gap-50">
                            <div className="relative flex flex-col items-center">
                                <div className="w-56 h-60 bg-[#00e1a6] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[2px]" />
                                <img
                                    src="/public/ramesh.png"
                                    alt="Company CEO"
                                    className="w-52 h-70 object-cover object-[20%_center] drop-shadow-2xl bg-transparent relative z-10 mt-10"
                                />
                                <div className="mt-6 text-center relative z-20">
                                    <div className="text-2xl font-semibold text-gray-800">Ramesh Gharmalkar</div>
                                    <div className="text-md text-indigo-700 font-medium">Chief Executive Officer</div>
                                </div>
                            </div>
                            <div className="relative flex flex-col items-center">
                                <div className="w-56 h-60 bg-[#00e1a6] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[2px]" />
                                <img
                                    src="/public/rajneesh.png"
                                    alt="Company CTO"
                                    className="w-52 h-70 object-cover object-[40%_center] drop-shadow-2xl bg-transparent relative z-10 mt-10"
                                />
                                
                                <div className="mt-6 text-center relative z-20">
                                    <div className="text-2xl font-semibold text-gray-800">Rajneesh Shrimali</div>
                                    <div className="text-md text-indigo-700 font-medium">Chief Technology Officer</div>
                                </div>
                            </div>
                        </div>

                    </div> */}

                    <div className="max-w-5xl mx-auto pt-20 md:py-20">
                        {/* <h2 className="font-semibold text-center text-primary mb-16" style={{ fontSize: 'var(--font-size-title)' }}>
                            Meet Our Leadership
                        </h2> */}
                        <div className="text-center mb-15 md:mb-20">
                            <h2 className="font-bold text-text-primary" style={{ fontSize: 'var(--font-size-heading1)' }}>Meet Our Leadership</h2>
                            <div className="w-60 h-1 bg-primary mx-auto mt-2 rounded"></div>
                        </div>

                        {/* CEO - Image Left, Content Right */}
                        <div className="flex flex-col md:flex-row items-center mb-16 gap-5 md:gap-10">
                            {/* Image */}
                            <div className="relative flex-shrink-0 flex justify-center w-full md:w-auto">
                                {/* <div className="w-56 h-60 bg-[#00e1a6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[2px]" /> */}
                                <img
                                    src="/public/ramesh.png"
                                    alt="Company CEO"
                                    className="md:w-75 h-90 object-cover object-[left]] md:object-[0%_center] md:drop-shadow-2xl bg-transparent relative z-10"
                                />
                            </div>
                            {/* Content */}
                            <div className="w-full md:pl-10 text-start px-5 md:text-left">
                                <div className="font-semibold text-text-primary" style={{ fontSize: 'var(--font-size-heading)' }}>Ramesh Gharmalkar</div>
                                <div className=" text-secondary font-medium mb-2" style={{ fontSize: 'var(--font-size-description)' }}>Chief Executive Officer</div>
                                <div className="text-text-primary mb-4" style={{ fontSize: 'var(--font-size-description)' }}>
                                    Visionary leader driving the company’s growth, innovation, and culture of excellence. Passionate about empowering teams to achieve their best. Seasoned technology leader with extensive experience managing and developing software in complex, global environments. Strong technical skills, leadership abilities, and proven track record of success
                                </div>
                                <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition"
                                    style={{ fontSize: 'var(--font-size-description)' }}
                                    onClick={() => navigate('/ceo')}>
                                    Read More
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-primary h-0.5 mt-1" />
                                </button>

                            </div>
                        </div>

                        {/* CTO - Content Left, Image Right */}
                        <div className="flex flex-col md:flex-row-reverse items-center mb-16 gap-5 md:gap-10">
                            {/* Image */}
                            <div className="relative flex-shrink-0 flex justify-center w-full md:w-auto">
                                {/* <div className="w-56 h-60 bg-[#00e1a6] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 rounded-[2px]" /> */}
                                <img
                                    src="/public/rajneesh.png"
                                    alt="Company CTO"
                                    className="md:w-75 h-90 object-cover object-[40%_center] md:drop-shadow-2xl bg-transparent relative z-10"
                                />
                            </div>
                            {/* Content */}
                            <div className="w-full md:pr-10 text-start px-5 md:px-0 md:text-left">
                                <div className="font-semibold text-text-primary" style={{ fontSize: 'var(--font-size-heading)' }}>Rajneesh Shrimali</div>
                                <div className="text-secondary font-medium mb-2" style={{ fontSize: 'var(--font-size-description)' }}>Chief Technology Officer</div>
                                <div className="text-text-primary mb-4" style={{ fontSize: 'var(--font-size-description)' }}>
                                    Technology strategist leading innovation and advancing product development. Dedicated to building scalable solutions and nurturing talent. Unique blend of technical prowess, strategic vision, and leadership acumen, with experience in building and launching successful cloud-based software products.
                                </div>
                                <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition"
                                    style={{ fontSize: 'var(--font-size-description)' }}
                                    onClick={() => navigate('/cto')}>
                                    Read More
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-primary h-0.5 mt-1" />
                                </button>

                            </div>
                        </div>
                    </div>

                </section>


                {/* <section class="py-16 bg-gray-50">
                    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-12">
                            <div class="inline-block relative">
                                <span class="block px-8 py-2 bg-orange-200 text-gray-800 text-lg font-semibold rounded-full shadow-md">
                                    INFOGRAPHIC
                                </span>
                                <span class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-orange-200"></span>
                            </div>
                            <p class="mt-2 text-gray-600 text-sm">DESIGN TEMPLATE</p>
                        </div>

                        <div class="flex flex-col md:flex-row gap-8 justify-center">

                            <div class="relative bg-white rounded-2xl shadow-lg p-6 pb-8 md:w-1/2 lg:w-5/12 flex flex-col items-center text-center">
                                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-40 py-2 bg-yellow-300 rounded-lg shadow-md text-white font-semibold text-xl flex items-center justify-center">
                                    Mission
                                    <span class="ml-2">
                                        <div class="w-3 h-3 bg-yellow-600 rounded-sm transform -rotate-45 relative right-1 top-0"></div>
                                        <div class="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-yellow-600 absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                                    </span>
                                </div>
                                <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-yellow-300"></div>

                                <div class="mt-12 flex flex-col items-center">
                                    <div class="w-16 h-16 border-2 border-gray-400 rounded-full flex items-center justify-center relative">
                                        <div class="w-10 h-10 border-2 border-gray-400 rounded-full"></div>
                                        <div class="w-4 h-4 bg-gray-400 rounded-full absolute"></div>
                                        <div class="absolute -right-2 top-1/2 transform -translate-y-1/2 rotate-45 w-6 h-1 bg-gray-400"></div>
                                    </div>
                                    <p class="mt-6 text-gray-700 leading-relaxed max-w-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    </p>
                                </div>
                            </div>

                            <div class="relative bg-white rounded-2xl shadow-lg p-6 pb-8 md:w-1/2 lg:w-5/12 flex flex-col items-center text-center">
                                <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-40 py-2 bg-green-400 rounded-lg shadow-md text-white font-semibold text-xl flex items-center justify-center">
                                    Vision
                                    <span class="ml-2">
                                        <div class="w-3 h-3 bg-green-700 rounded-sm transform -rotate-45 relative right-1 top-0"></div>
                                        <div class="w-0 h-0 border-t-4 border-b-4 border-l-8 border-t-transparent border-b-transparent border-l-green-700 absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                                    </span>
                                </div>
                                <div class="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-green-400"></div>

                                <div class="mt-12 flex flex-col items-center">
                                    <div class="w-16 h-16 flex items-center justify-center relative">
                                        <div class="w-12 h-12 bg-gray-300 rounded-full flex items-end justify-center pb-1">
                                            <div class="w-6 h-6 bg-gray-500 rounded-full"></div>
                                        </div>
                                        <div class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                                        <div class="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <div class="absolute -right-2 top-1/3 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                                        <div class="absolute -left-2 top-1/3 transform -translate-y-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                                    </div>
                                    <p class="mt-6 text-gray-700 leading-relaxed max-w-sm">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section> */}

                {/* <section class="min-h-screen  flex items-center justify-center py-10 ">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-0 w-full border-t-4 border-l-4 border-r-4 border-b-4 border-white">

                        <div class="bg-green-400 h-90 text-white sm:p-10 flex flex-col justify-center">
                            <h2 class="text-3xl sm:text-4xl font-bold mb-4">OUR MISSION</h2>
                            <p class="text-sm sm:text-base leading-relaxed mb-2 font-sans tracking-wide">
                                At RSquareSoft, our mission is to foster local talent and deliver best-in-class technology products globally. We are relentless in our pursuit of excellence, drawing from a deep well of expertise in AI, ML, and Data Analytics to create solutions that solve real business challenges.
                            </p>
                            <p class="text-xs sm:text-sm leading-relaxed font-sans tracking-wide">
                                Our team is committed to tailored client engagement, ensuring each project advances our customers’ success and digital journey. We believe in sustainable development that empowers both our clients and local communities, enabling growth through innovation and knowledge sharing. By integrating agility and inclusivity into all we do, we strive to make a positive, lasting impact worldwide.
                            </p>
                        </div>

                        <div className="bg-white h-90 p-8 sm:p-10 flex items-center justify-center">
                            <div className="w-120 h-120 flex items-center justify-center -mt-10">
                                <TbTargetArrow size={200} className="text-gray-700" />

                            </div>
                        </div>

                        <div class="bg-white h-90 p-8 sm:p-10 flex items-center justify-center">
                            <div class="w-48 h-24 flex items-end justify-center relative mt-25 mr-10">
                                <RiLightbulbFlashFill size={180} className="text-gray-700" />
                            </div>
                        </div>

                        <div class="bg-blue-600 h-90 text-white p-8 sm:p-10 flex flex-col justify-center">
                            <h2 class="text-3xl sm:text-4xl font-bold mb-4">OUR VISION</h2>
                            <p class="text-sm sm:text-base leading-relaxed mb-2 font-sans tracking-wide">
                                We envision RSquareSoft as a global leader in innovative technology, setting new standards for quality and impact in the software industry. Our aspiration is to craft transformative, reliable, and scalable AI, ML, and Data Analytics solutions that shape the future of digital business. We see a world where local talent can compete and excel on the global stage, bringing their skills and creativity to the most pressing technological challenges.
                            </p>
                            <p class="text-xs sm:text-sm leading-relaxed font-sans tracking-wide">
                                As we build advanced products, our vision extends to creating pathways for the next generation of engineers and thinkers, bridging local ambition with global opportunity. Together, we are redefining what’s possible in technology—one breakthrough at a time.
                            </p>
                        </div>

                        <div class="bg-orange-400 h-90 text-white p-8 sm:p-10 flex flex-col justify-center">
                            <h2 class="text-3xl sm:text-4xl font-bold mb-4">OUR VALUES</h2>
                            <p class="text-sm sm:text-base leading-relaxed mb-2 font-sans tracking-wide">
                                At the core of RSquareSoft’s culture are values of innovation, integrity, collaboration, and empowerment. We passionately believe in customer-centricity, fostering transparent partnerships and building solutions that not only meet but exceed our clients’ evolving needs. Inclusivity is fundamental to our approach—we provide opportunities for local talent and nurture a diverse team environment.
                            </p>
                            <p class="text-xs sm:text-sm leading-relaxed font-sans tracking-wide">
                                Giving back is integral to our DNA, as we actively contribute to community growth and support education initiatives. Above all, we are united by the drive to make technology a force for positive change, creating enduring value for our clients, partners, and society at large.
                            </p>
                        </div>

                        <div class="bg-white h-90 p-8 sm:p-10 flex items-center justify-center">
                            <div class="w-48 h-48 flex items-center justify-center relative">
                                <div class="w-50 h-50 flex items-center justify-center relative">
                                    <LuHandHeart size={180} className="text-gray-700" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section> */}

                <section>
                    {/* <section className="relative py-20 px-6 bg-gradient-to-br from-white via-indigo-50 to-blue-100 overflow-hidden flex flex-col items-center">
                        <div className="absolute left-1/2 top-8 -translate-x-1/2 w-28 h-1 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400 animate-glow-pulse" />

                        <h2 className="font-extrabold text-3xl md:text-4xl lg:text-5xl text-center tracking-tight mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-700 to-sky-500 animate-fade-in">
                            Our Mission
                        </h2>

                        <p className="max-w-4xl text-xl md:text-2xl text-center font-light leading-relaxed text-gray-800 px-2 md:px-10 lg:px-20 animate-slide-in-up">
                            <span className="font-semibold bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-400 text-transparent bg-clip-text">
                                Empowering teams and innovators worldwide to turn complex data into clear, actionable, and inspiring insights—making analytics approachable, beautiful, and transformative for all.
                            </span>
                        </p>
                    </section> */}

                    <MissionVisionSection />

                </section>
                <section >
                    {/* Title */}
                    <div className="text-center mb-6">
                        <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Core Values</h2>
                        <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
                    </div>

                    <div className="flex flex-col space-y-5  md:flex-row md:space-x-4 justify-center  p-10">
                        {cardData.map(({ id, title, icon, content }, index) => (
                            <Box
                                key={id}
                                className="group relative w-80 h-80 bg-white overflow-hidden cursor-pointer shadow-md rounded-md"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                sx={{
                                    borderBottomRightRadius: 32,
                                    borderTopLeftRadius: 32,
                                    boxShadow: 2,
                                    position: "relative",
                                }}
                            >
                                {/* Top border line */}
                                <span
                                    className={`absolute top-0 left-0 h-8 border-t-8 border-primary origin-left transition-all duration-700 ease-in-out`}
                                    style={{
                                        width: hoveredIndex === index ? '100%' : '0',
                                        borderTopLeftRadius: 75,
                                    }}
                                />
                                {/* Bottom border line */}
                                <span
                                    className={`absolute bottom-0 right-0 h-8 border-b-8 border-primary origin-right transition-all duration-700 ease-in-out`}
                                    style={{
                                        width: hoveredIndex === index ? '100%' : '0',
                                        borderBottomRightRadius: 75,
                                    }}
                                />

                                {/* The rest of your content */}
                                {/* Icon + Title container */}
                                <div
                                    className="absolute top-10 left-7 flex flex-col space-y-5 transition-transform duration-700 ease-in-out"
                                    style={{
                                        transform: hoveredIndex === index ? "translateY(-190px)" : "translateY(0)",
                                        opacity: 1,
                                    }}
                                >
                                    <div className="text-primary font-extrabold">
                                        {React.cloneElement(icon, { fontSize: "inherit", style: { fontSize: '4rem' } })}
                                    </div>
                                    <h3 className="text-text-primary font-semibold" style={{ fontSize: "var(--font-size-subheading)" }}>
                                        {title}
                                    </h3>
                                    <h3 className="md:hidden text-primary font-semibold" style={{ fontSize: "var(--font-size-description)" }}>
                                        Click Here
                                    </h3>
                                    
                                </div>

                                {/* Content container */}
                                <div
                                    className="absolute left-4 right-4 px-2 pt-10 text-text-primary transition-transform duration-1000 ease-in-out"
                                    style={{
                                        fontSize: 'var(--font-size-heading)',
                                        transform: hoveredIndex === index ? "translateY(0)" : "translateY(320px)",
                                        opacity: 1,
                                    }}
                                >
                                    <p className="font-medium" style={{ fontSize: 'var(--font-size-subheading)' }}>{content}</p>
                                </div>



                            </Box>

                        ))}

                    </div>
                </section>

                <section>
                    <TimelineSection />
                </section>

            </Box></>
    );
}
