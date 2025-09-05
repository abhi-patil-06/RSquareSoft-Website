import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import aboutImg1 from "../../assets/about-1.png";
import aboutImg2 from "../../assets/about-2.png";
import aboutImg3 from "../../assets/about-3.png";


const AboutSection = () => {
    const navigate = useNavigate();


    // Colors for the abstract shapes
    const shapeYellow = "#FFD700"; // A vibrant yellow
    const shapeOrange = "#FFA500"; // A vibrant orange
    const shapeBlue = "#4682B4";   // A steel blue
    const shapeLightGray = "#E0E0E0"; // Light gray for subtle elements

    const collageImages = {
        mainImage1: aboutImg1,
        mainImage2: aboutImg2,
        mainImage3: aboutImg3,

    };

    return (
        <section id="aboutHome" className="relative w-full py-10 md:py-7 px-4 md:px-8 lg:px-16 md:ml-10 overflow-hidden font-family-base"
        >
            <div className="container  mx-auto px-4 flex flex-col lg:flex-row items-center justify-between ">
                {/* Left Content Area */}
                <motion.div
                    className="w-full lg:w-1/2 text-center lg:text-left z-10"
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-primary hidden md:block font-semibold uppercase tracking-wider mb-2" style={{ fontSize: 'var(--font-size-subheading)' }}>
                        — About Us
                    </p>
                    <div className="md:hidden text-center mb-10 max-w-screen-xl mx-auto px-4">
                        <h2
                            className="font-bold text-text-primary"
                            style={{ fontSize: "var(--font-size-heading1)" }}
                        >
                            About Us
                        </h2>
                        <div className="w-32 h-1 bg-primary mx-auto mt-2 rounded"></div>
                    </div>
                    <h2 className=" font-extrabold leading-tight text-text-primary mb-4" style={{ fontSize: 'var(--font-size-heading1)' }}>
                        Delivering Best-in-class <span className="text-primary">Technology</span>
                    </h2>
                    <p className="leading-relaxed mb-2 text-text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>
                        RSquareSoft Technologies is where passionate technologists drive breakthroughs in Cloud, Analytics, and AI—fostering growth, rewarding creativity, and powering global solutions together.
                    </p>
                    {/* <Link
                        to="/aboutUs" // your internal route
                        className="py-3 px-8 rounded-lg text-button-text bg-primary hover:bg-button-hover-background transition duration-300 shadow-md hover:shadow-lg"
                        style={{  display: 'inline-block', fontSize:'var(--font-size-subheading)' }}
                    >
                        Explore More
                    </Link> */}
                    <button className="relative text-primary font-semibold group px-0 py-0 mt-2 md:mt-5 bg-transparent border-none shadow-none transition cursor-pointer"
                        onClick={() => navigate('/aboutUs')}>
                        Read More
                        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
                    </button>
                </motion.div>

                {/* Right Image Collage Area */}
                <div className="hidden md:relative  w-full lg:w-1/2 md:flex items-end justify-end h-[450px] md:h-[550px] lg:h-[600px] z-0">
                    {/* Abstract Shapes */}
                    {/* Yellow Circle */}
                    <div
                        className="absolute w-32 h-32 rounded-full"
                        style={{ backgroundColor: shapeYellow, opacity: 0.7, top: '20%', left: '5%', transform: 'translateZ(-1px)' }}
                    ></div>
                    {/* Orange Circle */}
                    <div
                        className="absolute w-40 h-40 rounded-full"
                        style={{ backgroundColor: shapeOrange, opacity: 0.6, top: '10%', right: '30%', transform: 'translateZ(-1px)' }}
                    ></div>
                    {/* Blue Circle */}
                    <div
                        className="absolute w-30 h-30 rounded-full"
                        style={{ backgroundColor: shapeBlue, opacity: 0.7, bottom: '20%', right: '15%', transform: 'translateZ(-1px)' }}
                    ></div>
                    {/* Light Gray Rounded Rectangles / Ovals */}
                    {/* <div
                        className="absolute w-20 h-40 rounded-full"
                        style={{ backgroundColor: shapeLightGray, opacity: 0.4, top: '20%', right: '0%', transform: 'rotate(20deg) translateZ(-1px)' }}
                    ></div>
                     <div
                        className="absolute w-24 h-52 rounded-full"
                        style={{ backgroundColor: shapeLightGray, opacity: 0.3, bottom: '5%', left: '10%', transform: 'rotate(-30deg) translateZ(-1px)' }}
                    ></div> */}


                    {/* Main Images in Rounded Rectangles (Tall Ovals) */}
                    {/* Use group class on parent for group-hover effect */}
                    <div className="group absolute w-[200px] md:w-[170px] h-[350px] md:h-[450px] overflow-hidden shadow-xl"
                        style={{
                            borderRadius: '9999px',
                            left: '45%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 10,
                            backgroundColor: '#FFFFFF',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={collageImages.mainImage1}
                            alt="Learning"
                            className="w-full h-full object-cover
                               transition-transform duration-300 ease-out
                               group-hover:scale-110 group-hover:rotate-2
                               group-hover:brightness-110
                               "
                            style={{ willChange: 'transform, filter' }}
                        />
                    </div>
                    <div className="group absolute w-[150px] md:w-[150px] h-[320px] md:h-[300px] overflow-hidden shadow-xl"
                        style={{
                            borderRadius: '9999px',
                            left: '70%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 11,
                            backgroundColor: '#FFFFFF',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={collageImages.mainImage2}
                            alt="Collaboration"
                            className="w-full h-full object-cover
                               transition-transform duration-300 ease-out
                               group-hover:scale-110 group-hover:-rotate-2
                               group-hover:brightness-110
                               "
                            style={{ willChange: 'transform, filter' }}
                        />
                    </div>
                    <div className="group absolute w-[150px] md:w-[150px] h-[320px] md:h-[300px] overflow-hidden shadow-xl"
                        style={{
                            borderRadius: '9999px',
                            left: '20%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 11,
                            backgroundColor: '#FFFFFF',
                            cursor: 'pointer',
                        }}
                    >
                        <img
                            src={collageImages.mainImage3}
                            alt="Collaboration"
                            className="w-full h-full object-cover
                               transition-transform duration-300 ease-out
                               group-hover:scale-110 group-hover:rotate-1
                               group-hover:brightness-110
                               "
                            style={{ willChange: 'transform, filter' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;




















// // src/components/AboutUsSection.jsx
// import React from 'react';

// export default function AboutUsSection() {
//     // Hardcoded content for RSquare Soft
//     const subheading = "About RSquare Soft";
//     const heading = "Delevering Best-in-Class Technology";
//     const description = [
//         "At RSquare Soft, we are dedicated to transforming businesses through cutting-edge technology. With a strong focus on innovation and client success, we build bespoke software solutions that drive growth and efficiency.",
//         "Our expertise spans across web and mobile development, cloud services, and data analytics, delivering scalable and secure platforms tailored to your unique challenges. We believe in crafting digital experiences that truly resonate.",
//     ];
//     const ctaText = "Learn More";
//     const ctaLink = "#"; // You can replace this with your actual link

//     // Online image for the background (a professional, modern office/tech scene)
//     const backgroundImage = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//     // const backgroundImage = "/public/media.jpeg";

//     return (
//         <section className="relative w-full h-[700px]  flex items-center justify-start overflow-hidden text-white">
//             {/* Background Image */}
//             <div className="absolute inset-0">
//                 <img
//                     src={backgroundImage}
//                     alt="Modern office collaboration"
//                     className="w-full h-full object-cover"
//                 />
//                 {/* Darker Overlay on the background image for better text contrast */}
//                 {/* This gradient overlay transitions from a darker blue to transparent, allowing the image to pop on the right */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
//             </div>

//             {/* Triangular Content Container (a skewed div acting as a transparent overlay) */}
//             <div
//                 className="absolute top-0 left-152 h-full w-full md:w-3/5 bg-blue-400/70 transform -skew-x-12 origin-top-left" /* Semi-transparent blue overlay */
//                 style={{
//                     boxShadow: '8px 0px 15px rgba(0,0,0,0.4)', // Adds depth
//                     zIndex: 10, // Ensures it's above the background image and its initial overlay
//                 }}
//             >
//                 <div
//                     className="transform skew-x-12 px-8 py-16 md:px-16 lg:px-24 flex flex-col justify-center h-full"
//                     style={{
//                         margin: '0 auto', // Centers the content block within the skewed container
//                     }}
//                 >
//                     {/* Content for RSquare Soft */}
//                     {subheading && (
//                         <p className="text-gray-50 text-base md:text-lg font-semibold uppercase mb-3">
//                             {subheading}
//                         </p>
//                     )}
//                     <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
//                         {heading}
//                     </h2>
//                     {description.map((paragraph, index) => (
//                         <p key={index} className="text-lg sm:text-xl mb-4 leading-relaxed text-white">
//                             {paragraph}
//                         </p>
//                     ))}
//                     {ctaText && ctaLink && (
//                         <a
//                             href={ctaLink}
//                             className="inline-block max-w-[30%] text-center mt-8 px-10 py-4 bg-transparent text-white border font-bold rounded-full hover:bg-white  hover:text-blue-950 transition-colors duration-300 transform "
//                         >
//                             {ctaText}
//                         </a>
//                     )}
//                 </div>

//             </div>
//         </section>
//     );
// };






















// // src/components/AboutRSquareSoftSection.jsx
// import React from 'react';

// export default function AboutUsSection() {
//     // Hardcoded content for RSquare Soft
//     const subheading = "About RSquare Soft";
//     const heading = "Empowering Futures with Innovative Software Solutions";
//     const description = [
//         "At RSquare Soft, we are dedicated to transforming businesses through cutting-edge technology. With a strong focus on innovation and client success, we build bespoke software solutions that drive growth and efficiency.",
//         "Our expertise spans across web and mobile development, cloud services, and data analytics, delivering scalable and secure platforms tailored to your unique challenges. We believe in crafting digital experiences that truly resonate.",
//     ];
//     const ctaText = "Discover Our Work";
//     const ctaLink = "#"; // You can replace this with your actual link

//     // Online image for the background (a professional, modern office/tech scene)
//     const backgroundImage = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

//     return (
//         <section className="relative w-full h-[600px] border-y-2 border-blue-900 flex items-center justify-start overflow-hidden text-white">
//             {/* Background Image */}
//             <div className="absolute inset-0">
//                 <img
//                     src={backgroundImage}
//                     alt="Modern office collaboration"
//                     className="w-full h-full object-cover"
//                 />
//                 {/* Overlay for readability and design */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
//             </div>

//             {/* Triangular Content Container (a skewed div) */}
//             <div
//                 className="absolute top-0 left-0 h-full w-full md:w-2/4 bg-white transform -skew-x-12 origin-top-left"
//                 style={{
//                     boxShadow: '8px 0px 15px rgba(0,0,0,0.4)',
//                     zIndex: 10,
//                     borderRight: `4px solid #06185c`
//                 }}
//             >
//                 <div>
//                     <h1 className='font-bold text-4xl'>About RSquareSoft Technology</h1>
//                 </div>
//             </div>
//         </section>
//     );
// };
