// src/pages/Careers.jsx

import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TimelineSection from "./TimelineSection";
import MissionVisionSection from "./MissionVisionSection";
import LogoAnimation from "./LogoAnimation";
import { cardData } from "../../data/AboutUsData";
import AboutUsBg from '../../assets/About-Us3.jpg'
import ceoImg from '../../assets/ramesh.png'
import ctoImg from '../../assets/rajneesh.png'

export default function AboutUs() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();

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
                            backgroundImage: `url(${AboutUsBg})`,
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
                                width: { xs: "90%", md: "80%" },
                                textAlign: { xs: "center", md: "left" },
                                // mx: "auto",
                                py: { xs: 5, md: 20 },
                            }}
                        >
                            {/* Breadcrumb Navigation - fixed top left corner within the div */}
                            <nav className="absolute -top-7 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
                                {/* First line: breadcrumb links separated by slash */}
                                <div className="flex space-x-3">
                                    <a>
                                        Who We Are
                                    </a>
                                    <span>/</span>
                                    <span >About Us</span>
                                </div>
                                {/* Second line: horizontal dividing line */}
                                <div className="md:mt-5 h-[2px] w-[300px] md:w-4xl rounded-sm bg-gradient-to-r from-background via-gray-300 to-transparent"></div>
                            </nav>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                fontSize='var(--font-size-title)'
                                mb={2}
                                color="white"
                                sx={{ letterSpacing: "-0.02em" }}
                            >
                                Driven by passion, powered by innovation
                            </Typography>
                            <Typography variant="h6" mb={3} color="var(--color-button-text)">
                                We are RSquareSoft, dedicated to empowering businesses with advanced technology and exceptional service.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
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

                                sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: "var(--font-size-description)" }}
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
                                    src={ceoImg}
                                    alt="Company CEO"
                                    className="md:w-75 h-90 object-cover object-[left]] md:object-[0%_center] md:drop-shadow-2xl bg-transparent relative z-10"
                                />
                            </div>
                            {/* Content */}
                            <div className="w-full md:pl-10 text-start px-5 md:text-left">
                                <div className="font-semibold text-text-primary" style={{ fontSize: 'var(--font-size-heading)' }}>Ramesh Gharmalkar</div>
                                <div className=" text-secondary font-medium mb-2" style={{ fontSize: 'var(--font-size-description)' }}>Co-Founder & Chief Executive Officer</div>
                                <div className="text-text-primary mb-4" style={{ fontSize: 'var(--font-size-description)' }}>
                                    Visionary leader driving the company’s growth, innovation, and culture of excellence. Passionate about empowering teams to achieve their best. Seasoned technology leader with extensive experience managing and developing software in complex, global environments. Strong technical skills, leadership abilities, and proven track record of success
                                </div>
                                <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition"
                                    style={{ fontSize: 'var(--font-size-description)' }}
                                    onClick={() => navigate('/ramesh-gharmalkar')}>
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
                                    src={ctoImg}
                                    alt="Company CTO"
                                    className="md:w-75 h-90 object-cover object-[40%_center] md:drop-shadow-2xl bg-transparent relative z-10"
                                />
                            </div>
                            {/* Content */}
                            <div className="w-full md:pr-10 text-start px-5 md:px-0 md:text-left">
                                <div className="font-semibold text-text-primary" style={{ fontSize: 'var(--font-size-heading)' }}>Rajneesh Shrimali</div>
                                <div className="text-secondary font-medium mb-2" style={{ fontSize: 'var(--font-size-description)' }}>Co-Founder & Chief Technology Officer</div>
                                <div className="text-text-primary mb-4" style={{ fontSize: 'var(--font-size-description)' }}>
                                    Technology strategist leading innovation and advancing product development. Dedicated to building scalable solutions and nurturing talent. Unique blend of technical prowess, strategic vision, and leadership acumen, with experience in building and launching successful cloud-based software products.
                                </div>
                                <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition"
                                    style={{ fontSize: 'var(--font-size-description)' }}
                                    onClick={() => navigate('/rajneesh-shrimali')}>
                                    Read More
                                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-primary h-0.5 mt-1" />
                                </button>

                            </div>
                        </div>
                    </div>

                </section>


                <section>
                    <MissionVisionSection />
                </section>


                <section >
                    {/* Title */}
                    <div className="text-center mb-6">
                        <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Core Values</h2>
                        <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
                    </div>

                    <div className="flex flex-col space-y-5   md:flex-row md:space-x-4 justify-center  p-10">
                        {cardData.map(({ id, title, icon, content, shortContent }, index) => (
                            <Box
                                key={id}
                                className="group  relative w-80 h-80 bg-white overflow-hidden cursor-pointer shadow-md rounded-md"
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
                                        transform: hoveredIndex === index ? "translateY(-300px)" : "translateY(0)",
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

                                    <h3 className="text-text-primary " style={{ fontSize: "var(--font-size-description)" }}>
                                        {shortContent}
                                    </h3>

                                </div>

                                {/* Content container */}
                                <div
                                    className="absolute left-4 right-4 px-2 pt-10 text-text-primary transition-transform duration-1000 ease-in-out"
                                    style={{
                                        fontSize: 'var(--font-size-heading)',
                                        transform: hoveredIndex === index ? "translateY(0)" : "translateY(300px)",
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
