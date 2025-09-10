import React, { useState, useEffect } from 'react'
import { Linkedin, Twitter, Mail, Github, Lightbulb, Sparkles, Headphones, ThumbsUp, Award, Briefcase, GraduationCap, MapPin, Calendar, Users, TrendingUp, Star, CheckCircle } from 'lucide-react'
import cto from '../../assets/rajneesh.png'


const CtoInfoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('achievements');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    // Mock images - replace with actual paths
    const companyLogo = 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=100&h=100&fit=crop';
    const awardsImage = 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=200&h=200&fit=crop';
    const productsImage = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=200&fit=crop';

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/rajneeshshrimali/",
            icon: <Linkedin className="w-5 h-5" />,
            color: "hover:text-blue-600 hover:bg-blue-50"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/rajeesh",
            icon: <Twitter className="w-5 h-5" />,
            color: "hover:text-sky-500 hover:bg-sky-50"
        },
        {
            name: "Email",
            url: "mailto:rajneesh.shrimali@rsquaresoft.com",
            icon: <Mail className="w-5 h-5" />,
            color: "hover:text-orange-700 hover:bg-gray-50"
        },
        {
            name: "GitHub",
            url: "https://github.com/shrimali",
            icon: <Github className="w-5 h-5" />,
            color: "hover:text-gray-900 hover:bg-gray-50"
        },
    ];

    const coreValues = [
        { icon: <Lightbulb className="w-8 h-8 text-amber-500" />, title: "Innovation", description: "Leading breakthrough solutions" },
        { icon: <Sparkles className="w-8 h-8 text-purple-500" />, title: "Quality", description: "Excellence in every detail" },
        { icon: <Headphones className="w-8 h-8 text-green-500" />, title: "Support", description: "24/7 dedicated assistance" },
        { icon: <ThumbsUp className="w-8 h-8 text-blue-500" />, title: "Trust", description: "Building lasting partnerships" }
    ];

    const stats = [
        { number: "27+", label: "Years Experience", icon: <Calendar className="w-6 h-6" /> },
        { number: "200+", label: "Engineers Led", icon: <Users className="w-6 h-6" /> },
        { number: "5", label: "Countries", icon: <MapPin className="w-6 h-6" /> },
        { number: "1", label: "Patent Holder", icon: <Award className="w-6 h-6" /> }
    ];

    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/30"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-27">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                        {/* Left Content */}
                        <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                            <div className="space-y-6">
                                <h1 className="text-4xl pb-5 lg:text-5xl font-bold text-gray-900 leading-tight">
                                    Introducing Our
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Leader </span>
                                </h1>

                                <div className="relative">
                                    <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                                    <div className="pl-6 py-2">
                                        <div className="flex items-start gap-4">
                                            <div className="text-black">
                                                <h2 className="text-2xl font-bold mb-1">Rajneesh Shrimali</h2>
                                                <p >Co-Founder & Chief Technology Officer</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Core Values Grid */}
                            <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-200">
                                {coreValues.map((value, index) => (
                                    <div key={index} className="group text-center p-4  hover:bg-blue-100  transition-all duration-300">
                                        <div className="flex flex-col items-center space-y-3">
                                            <div className="p-3 bg-gray-50 rounded-full group-hover:scale-110 transition-transform duration-300">
                                                {value.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 text-lg">{value.title}</h3>
                                                <p className="text-gray-600 text-sm">{value.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Content - CEO Image */}
                        <div className={`relative transform bg-blue-100 transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                            <div className="relative">
                                {/* Background decoration */}
                                {/* <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-lg opacity-20"></div> */}

                                {/* <div className="relative w-full h-160 bg-white  overflow-hidden"> */}
                                {/* <div className=" relative"> */}
                                <img
                                    src={cto}
                                    alt="Rajneesh Shrimali"
                                    className="w-full h-full object-cover"
                                />

                                {/* Overlay info */}
                                {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <div className="text-white">
                        <h2 className="text-2xl font-bold mb-1">Ramesh Gharmalkar</h2>
                        <p className="text-gray-200">Co-Founder & Chief Executive Officer</p>
                      </div>
                    </div> */}
                                {/* </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center group">
                                <div className=" p-6  transition-all duration-300 group-hover:scale-105">
                                    <div className="flex justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                        {stat.icon}
                                    </div>
                                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                    <div className="text-gray-600 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Detailed Information Section */}
            <section className="max-w-7xl mx-auto py-10 space-y-10 text-text-primary leading-relaxed text-justify">
                {/* <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Experience Journey</h3> */}

                <p>
                    Rajneesh Shrimali, Co-Founder and Chief Technology Officer at RSquareSoft Technologies, is an accomplished technology innovator and AI/ML expert with a strong background in building scalable SaaS products and leading strategy for AI-powered platforms on cloud infrastructure.
                </p>

                <p>
                    With over 15 years of experience across product architecture, platform design, and team leadership, Rajneesh has played vital roles at organizations including Google, NICE Actimize, Symantec, and more. His expertise spans security, financial services, healthcare, and insurance domains.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-300 rounded-2xl p-8">
                    <h4 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Achievements</h4>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Driving AI-powered innovation and platform design at RSquareSoft since May 2024.</li>
                        <li>Led engineering teams on cloud-based SaaS solutions at Google and NICE Actimize.</li>
                        <li>Expertise in AI/ML integration, data pipelines, MLOps, and product visioning.</li>
                        <li>Successfully architected scalable cloud systems with strong security and compliance focus.</li>
                    </ul>
                </div>

                <p>
                    Rajneesh holds a Master of Science in Software Systems from BITS Pilani, along with multiple certifications such as PMP, SAFe Program Consultant, and various cloud and microservices training. He is a passionate leader dedicated to transforming ideas into AI-driven business impact.
                </p>

                <p>
                    His leadership approach emphasizes collaboration, innovation, and customer-centric product development to deliver robust, scalable, and cutting-edge technology solutions.
                </p>
            </section>





            {/* Social Links Section */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect with Rajneesh</h2>
                            <p className="text-gray-600">
                                Ready to discuss innovation, leadership, or collaboration opportunities?
                            </p>
                        </div>

                        <div className="flex justify-center">
                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 ${link.color} transform hover:scale-105`}
                                    >
                                        <div className="transition-transform group-hover:scale-110">
                                            {link.icon}
                                        </div>
                                        <span className="font-medium">{link.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtoInfoSection;















// import React from "react";
// import {FaLinkedin,FaTwitter,FaEnvelope,FaGithub,} from "react-icons/fa";
// import { MdSupervisorAccount, MdVerifiedUser, MdTrendingUp, MdStar } from "react-icons/md";
// import ctoImg from '../../assets/rajneesh.png'
// import companyLogo from '../../assets/logo.png'


// const ctoAwardsImage = ctoImg
// const ctoProductsImage = ctoImg

// // Social media/contact data (replace hrefs/emails with real links)
// const socialLinks = [
//     {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/rajneeshshrimali/",
//         icon: <FaLinkedin className="w-6 h-6 text-blue-700" />,
//     },
//     {
//         name: "Twitter",
//         url: "https://twitter.com/your_twitter", // Update as needed
//         icon: <FaTwitter className="w-6 h-6 text-sky-500" />,
//     },
//     {
//         name: "Email",
//         url: "mailto:ramesh@rsquaresoft.com", // Update as needed
//         icon: <FaEnvelope className="w-6 h-6 text-gray-500" />,
//     },
//     {
//         name: "GitHub",
//         url: "https://github.com/your_github", // Optional
//         icon: <FaGithub className="w-6 h-6 text-gray-800" />,
//     },
// ];


// export default function CtoInfoSection() {
//     return (
//         <section className="max-w-8xl mx-auto p-8 py-30 bg-background font-family-base text-text-primary">
//             {/* Header */}
//             <div className="flex flex-col lg:flex-row h-[600px] overflow-hidden mb-10">
//                 {/* Content Left */}
//                 <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
//                     <h1 className="font-semibold text-primary mb-12 text-shadow-sm leading-tight" style={{fontSize:'var(--font-size-title)'}}>
//                         Meet Our CTO
//                     </h1>
//                     <div className="bg-blue-50 border-l-8 rounded-md border-primary pl-6 py-5 mb-12 flex items-center">
//                         <img src={companyLogo} alt="Company Logo" className="w-15 h-15 mr-4 object-contain" />
//                         <p className="leading-relaxed text-text-primary italic" style={{fontSize:'var(--font-size-description)'}}>
//                             “ Guided by a vision to architect transformative platforms, always advancing the boundaries of technology and uplifting future innovators. ”
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-300">
//                         <div className="flex flex-col items-center justify-center">
//                             <MdSupervisorAccount className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Leadership</span>
//                         </div>
//                         <div className="flex flex-col items-center justify-center">
//                             <MdVerifiedUser className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Responsibility</span>
//                         </div>
//                         <div className="flex flex-col items-center justify-center">
//                             <MdTrendingUp className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Traction</span>
//                         </div>
//                         <div className="flex flex-col items-center justify-center">
//                             <MdStar className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Expertise</span>
//                         </div>
//                     </div>

//                 </div>
//                 {/* Content Right */}
//                 <div className="flex-1 relative bg-background border-border min-h-[350px] flex items-end max-w-xl w-full mx-auto">
//                     <img
//                         src={ctoImg}
//                         alt="Rajneesh Shrimalli"
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                     />
//                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary via-background1 to-transparent text-button-text p-4 mb-5 sm:p-6 font-bold opacity-90" style={{fontSize:'var(--font-size-heading)'}}>
//                         <p>Rajneesh Shrimali</p>
//                         <p style={{fontSize:'var(--font-size-description)'}}>CTO & Co-Founder</p>
//                     </div>
//                 </div>
//             </div>

//             {/* About */}
//             <section className="p-8 bg-background mb-16 max-w-8xl mx-auto">
//                 {/* Article */}
//                 <article className="space-y-7 text-text-primary leading-relaxed" style={{fontSize:'var(--font-size-subheading)'}}>
//                     <p>
//                         <a href="https://www.linkedin.com/in/rajneeshshrimali/" target="_blank" className="text-primary font-semibold cursor-pointer">Rajneesh Shrimali</a> is a seasoned technology executive recognized for architecting and delivering robust cloud-based SaaS products across diverse domains including security, finance, healthcare, and insurance. He blends deep technical vision with sharp strategic acumen—building both product portfolios and agile development teams from the ground up.
//                     </p>
//                     <p>
//                         Rajneesh’s leadership approach involves hands-on roadmap planning, platform architecture, and setting technical direction, driving the integration of AI and ML across modern product lines. He is known for orchestrating high-impact initiatives in product strategy, value proposition, and scaling engineering operations, particularly in global and outsourced environments.
//                     </p>

//                     {/* Achievements Highlight Block (Awards, Recognition) */}
//                     <div className="flex flex-col md:flex-row items-center p-2 gap-8 mt-6" style={{fontSize:'var(--font-size-subheading)'}}>
//                         {/* Image beside achievements */}
//                         <img
//                             src={ctoAwardsImage}
//                             alt="CTO Awards"
//                             className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg mb-4 md:mb-0"
//                         />
//                         <div>
//                             <h3 className="font-bold text-primary mb-2">Recognized Leadership</h3>
//                             <ul className="space-y-1 pl-4 text-base text-text-primary list-disc">
//                                 <li>
//                                     Former Engineering Manager at <b>Google</b>, engineering Director at <b>NICE Actimize</b> and <b>Symantec</b>, and CTO at Peel-works.
//                                 </li>
//                                 <li>
//                                     Led sensitive data protection engineering at Google and architected cloud-scale financial crime compliance and security solutions.
//                                 </li>
//                                 <li>
//                                     Built and managed high-performing, cross-functional, international teams pioneering digital transformation projects in Fortune 1000 settings.
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <p>
//                         Throughout his journey, Rajneesh has championed data-driven product innovation—leveraging Python, MLOps, TensorFlow, and AI-powered design to deliver platforms such as fraud detection, analytics suites, and scalable SaaS solutions.
//                     </p>

//                     {/* Services and Product block with image */}
//                     <div className="flex flex-col md:flex-row items-center p-6 gap-8 mt-6" style={{fontSize:'var(--font-size-subheading)'}}>
//                         <div className="order-2 md:order-1 flex-1">
//                             <h3 className="font-bold text-primary mb-2">Tech & Service Portfolio</h3>
//                             <ul className="space-y-1 pl-4 text-base text-text-primary list-disc">
//                                 <li>Strategic Product Portfolio & SaaS Platform Architecture</li>
//                                 <li>AI/ML Integration, Data Pipeline Design, MLOps, Model Deployment</li>
//                                 <li>Cloud (GCP/AWS/Azure), Cybersecurity, and Financial Crime Analytics</li>
//                                 <li>Management Consulting & Leadership, Team Building and Scaling</li>
//                                 <li>Coaching, IT Consulting, and interview preparation/support</li>
//                             </ul>
//                         </div>
//                         <img
//                             src={ctoProductsImage}
//                             alt="CTO Products"
//                             className="order-1 md:order-2 w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg"
//                         />
//                     </div>

//                     <p>
//                         Passionate about team empowerment, Rajneesh has a proven track record in establishing Indian tech operations and mentoring engineering leaders, while continually evolving software architecture and delivery strategies to meet global market innovation demands.
//                     </p>
//                 </article>

//                 {/* Experience */}
//                 <div className="mt-12">
//                     <h3 className="font-semibold text-primary mb-4 border-b border-border pb-2" style={{fontSize:'var(--font-size-subheading)'}}>
//                         Professional Experience
//                     </h3>
//                     <ul className="space-y-5 text-text-primary leading-relaxed">
//                         <li>
//                             <strong>Co-Founder & Chief Technology Officer, RSquareSoft Technologies</strong> <br />
//                             <em>May 2024 – Present | Pune, India (Hybrid)</em> <br />
//                             Driving AI-powered platform strategy, shaping vision and roadmap, and architecting end-to-end SaaS and ML solutions for a new generation of AI-centric products.
//                         </li>
//                         <li>
//                             <strong>Engineering Manager, Google</strong> <br />
//                             <em>Aug 2022 – May 2024</em> <br />
//                             Oversaw global teams building sensitive data protection and cloud-based scalable solutions.
//                         </li>
//                         <li>
//                             <strong>Director of Engineering, NICE Actimize</strong> <br />
//                             <em>Jul 2020 – Jul 2022</em> <br />
//                             Led the cloud transformation of financial crime and compliance analytics products.
//                         </li>
//                         <li>
//                             <strong>Director of Development, Symantec</strong> <br />
//                             <em>Oct 2018 – Jul 2020 | Pune, India</em> <br />
//                             Led strategic cybersecurity software initiatives unifying cloud and on-premises protection.
//                         </li>
//                         <li>
//                             <strong>Chief Technology Officer, Peel-works</strong> <br />
//                             <em>Dec 2017 – Oct 2018 | Pune, India</em> <br />
//                             Oversaw modernization of retail grocery tech and platform engineering.
//                         </li>
//                         <li>
//                             <strong>Director of Engineering & Senior Engineering Manager, ZS Associates</strong> <br />
//                             <em>Jun 2012 – Nov 2017</em> <br />
//                             Led the development and cloud migration of Javelin product platforms; drove team and product realignment.
//                         </li>
//                         <li>
//                             <strong>Technical Architect / Delivery Manager, Euronet Worldwide</strong> <br />
//                             <em>Jul 2009 – Aug 2012 | Pune, India</em> <br />
//                             Architect and manager for digital payments, money transfer, and service platforms.
//                         </li>
//                         {/* Add more roles as desired */}
//                     </ul>
//                 </div>

//                 {/* Education */}
//                 <div className="mt-12">
//                     <h3 className="font-semibold text-primary mb-4 border-b border-border pb-2" style={{fontSize:'var(--font-size-subheading)'}}>
//                         Education & Certifications
//                     </h3>
//                     <ul className="list-disc list-inside space-y-2 text-text-primary leading-relaxed">
//                         <li>
//                             <strong>MBA (C-PGDBA) Finance</strong> — Symbiosis Institute of Management Studies (2005–2007)
//                         </li>
//                         <li>
//                             <strong>Bachelor of Engineering (BE) Electronics</strong> — Karmaveer Bhaurao Patil College Of Engineering (1989–1993)
//                         </li>
//                         <li>Certifications in AI/ML, Cloud Architecture (GCP, AWS, Azure), Cybersecurity, Agile/SCRUM, and Management Consulting</li>
//                     </ul>
//                 </div>
//             </section>
//             {/* Social Links Section */}
//             <section className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-5 mt-1 max-w-3xl mx-auto">
//                 <span className="font-semibold text-text-primary mb-2 md:mb-0" style={{fontSize:'var(--font-size-subheading)'}}>
//                     Connect with Rajneesh Shrimali:
//                 </span>
//                 <div className="flex gap-6">
//                     {socialLinks.map((item) => (
//                         <a
//                             key={item.name}
//                             href={item.url}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             aria-label={item.name}
//                             className="hover:scale-110 duration-150 flex items-center gap-2"
//                         >
//                             {item.icon}
//                             <span className="sr-only">{item.name}</span>
//                         </a>
//                     ))}
//                 </div>
//             </section>
//         </section>
//     );
// }
