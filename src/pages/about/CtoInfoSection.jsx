import React from "react";
import {FaLinkedin,FaTwitter,FaEnvelope,FaGithub,} from "react-icons/fa";
import { MdSupervisorAccount, MdVerifiedUser, MdTrendingUp, MdStar } from "react-icons/md";

// Example: Replace with actual imports or public paths
const companyLogo = "public/logo/logo.png   ";
const ctoPhoto = "/rajneesh.png";
// const awardsImage = "/logo/logo.png";
// const productsImage = "/logo/logo.png";
const ctoAwardsImage = "/logo/logo.png";   // update with actual awards image
const ctoProductsImage = "/logo/logo.png"; // update with actual products/platform/AI image

// Social media/contact data (replace hrefs/emails with real links)
const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rajneeshshrimali/",
        icon: <FaLinkedin className="w-6 h-6 text-blue-700" />,
    },
    {
        name: "Twitter",
        url: "https://twitter.com/your_twitter", // Update as needed
        icon: <FaTwitter className="w-6 h-6 text-sky-500" />,
    },
    {
        name: "Email",
        url: "mailto:ramesh@rsquaresoft.com", // Update as needed
        icon: <FaEnvelope className="w-6 h-6 text-gray-500" />,
    },
    {
        name: "GitHub",
        url: "https://github.com/your_github", // Optional
        icon: <FaGithub className="w-6 h-6 text-gray-800" />,
    },
];


export default function CtoInfoSection() {
    return (
        <section className="max-w-8xl mx-auto p-8 py-30 bg-background font-family-base text-text-primary">
            {/* Header */}
            <div className="flex flex-col lg:flex-row h-[600px] overflow-hidden mb-10">
                {/* Content Left */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <h1 className="font-semibold text-primary mb-12 text-shadow-sm leading-tight" style={{fontSize:'var(--font-size-title)'}}>
                        Meet Our CTO
                    </h1>
                    <div className="bg-blue-50 border-l-8 rounded-md border-primary pl-6 py-5 mb-12 flex items-center">
                        <img src={companyLogo} alt="Company Logo" className="w-15 h-15 mr-4 object-contain" />
                        <p className="leading-relaxed text-text-primary italic" style={{fontSize:'var(--font-size-description)'}}>
                            “ Guided by a vision to architect transformative platforms, always advancing the boundaries of technology and uplifting future innovators. ”
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-300">
                        <div className="flex flex-col items-center justify-center">
                            <MdSupervisorAccount className="w-14 h-14 text-primary mb-2" />
                            <span className="font-bold text-primary text-base mt-1">Leadership</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MdVerifiedUser className="w-14 h-14 text-primary mb-2" />
                            <span className="font-bold text-primary text-base mt-1">Responsibility</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MdTrendingUp className="w-14 h-14 text-primary mb-2" />
                            <span className="font-bold text-primary text-base mt-1">Traction</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <MdStar className="w-14 h-14 text-primary mb-2" />
                            <span className="font-bold text-primary text-base mt-1">Expertise</span>
                        </div>
                    </div>

                </div>
                {/* Content Right */}
                <div className="flex-1 relative bg-gray-200 border border-border min-h-[350px] flex items-end max-w-xl w-full mx-auto">
                    <img
                        src={ctoPhoto}
                        alt="Ramesh Gharmalkar"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary via-background1 to-transparent text-button-text p-4 mb-5 sm:p-6 font-bold opacity-90" style={{fontSize:'var(--font-size-heading)'}}>
                        <p>Rajneesh Shrimali</p>
                        <p style={{fontSize:'var(--font-size-description)'}}>CTO & Co-Founder</p>
                    </div>
                </div>
            </div>

            {/* About */}
            <section className="p-8 bg-background mb-16 max-w-8xl mx-auto">
                {/* Article */}
                <article className="space-y-7 text-text-primary leading-relaxed" style={{fontSize:'var(--font-size-subheading)'}}>
                    <p>
                        <a href="https://www.linkedin.com/in/rajneeshshrimali/" target="_blank" className="text-primary font-semibold cursor-pointer">Rajneesh Shrimali</a> is a seasoned technology executive recognized for architecting and delivering robust cloud-based SaaS products across diverse domains including security, finance, healthcare, and insurance. He blends deep technical vision with sharp strategic acumen—building both product portfolios and agile development teams from the ground up.
                    </p>
                    <p>
                        Rajneesh’s leadership approach involves hands-on roadmap planning, platform architecture, and setting technical direction, driving the integration of AI and ML across modern product lines. He is known for orchestrating high-impact initiatives in product strategy, value proposition, and scaling engineering operations, particularly in global and outsourced environments.
                    </p>

                    {/* Achievements Highlight Block (Awards, Recognition) */}
                    <div className="flex flex-col md:flex-row items-center p-2 gap-8 mt-6" style={{fontSize:'var(--font-size-subheading)'}}>
                        {/* Image beside achievements */}
                        <img
                            src={ctoAwardsImage}
                            alt="CTO Awards"
                            className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg mb-4 md:mb-0"
                        />
                        <div>
                            <h3 className="font-bold text-primary mb-2">Recognized Leadership</h3>
                            <ul className="space-y-1 pl-4 text-base text-text-primary list-disc">
                                <li>
                                    Former Engineering Manager at <b>Google</b>, engineering Director at <b>NICE Actimize</b> and <b>Symantec</b>, and CTO at Peel-works.
                                </li>
                                <li>
                                    Led sensitive data protection engineering at Google and architected cloud-scale financial crime compliance and security solutions.
                                </li>
                                <li>
                                    Built and managed high-performing, cross-functional, international teams pioneering digital transformation projects in Fortune 1000 settings.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        Throughout his journey, Rajneesh has championed data-driven product innovation—leveraging Python, MLOps, TensorFlow, and AI-powered design to deliver platforms such as fraud detection, analytics suites, and scalable SaaS solutions.
                    </p>

                    {/* Services and Product block with image */}
                    <div className="flex flex-col md:flex-row items-center p-6 gap-8 mt-6" style={{fontSize:'var(--font-size-subheading)'}}>
                        <div className="order-2 md:order-1 flex-1">
                            <h3 className="font-bold text-primary mb-2">Tech & Service Portfolio</h3>
                            <ul className="space-y-1 pl-4 text-base text-text-primary list-disc">
                                <li>Strategic Product Portfolio & SaaS Platform Architecture</li>
                                <li>AI/ML Integration, Data Pipeline Design, MLOps, Model Deployment</li>
                                <li>Cloud (GCP/AWS/Azure), Cybersecurity, and Financial Crime Analytics</li>
                                <li>Management Consulting & Leadership, Team Building and Scaling</li>
                                <li>Coaching, IT Consulting, and interview preparation/support</li>
                            </ul>
                        </div>
                        <img
                            src={ctoProductsImage}
                            alt="CTO Products"
                            className="order-1 md:order-2 w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg"
                        />
                    </div>

                    <p>
                        Passionate about team empowerment, Rajneesh has a proven track record in establishing Indian tech operations and mentoring engineering leaders, while continually evolving software architecture and delivery strategies to meet global market innovation demands.
                    </p>
                </article>

                {/* Experience */}
                <div className="mt-12">
                    <h3 className="font-semibold text-primary mb-4 border-b border-border pb-2" style={{fontSize:'var(--font-size-subheading)'}}>
                        Professional Experience
                    </h3>
                    <ul className="space-y-5 text-text-primary leading-relaxed">
                        <li>
                            <strong>Co-Founder & Chief Technology Officer, RSquareSoft Technologies</strong> <br />
                            <em>May 2024 – Present | Pune, India (Hybrid)</em> <br />
                            Driving AI-powered platform strategy, shaping vision and roadmap, and architecting end-to-end SaaS and ML solutions for a new generation of AI-centric products.
                        </li>
                        <li>
                            <strong>Engineering Manager, Google</strong> <br />
                            <em>Aug 2022 – May 2024</em> <br />
                            Oversaw global teams building sensitive data protection and cloud-based scalable solutions.
                        </li>
                        <li>
                            <strong>Director of Engineering, NICE Actimize</strong> <br />
                            <em>Jul 2020 – Jul 2022</em> <br />
                            Led the cloud transformation of financial crime and compliance analytics products.
                        </li>
                        <li>
                            <strong>Director of Development, Symantec</strong> <br />
                            <em>Oct 2018 – Jul 2020 | Pune, India</em> <br />
                            Led strategic cybersecurity software initiatives unifying cloud and on-premises protection.
                        </li>
                        <li>
                            <strong>Chief Technology Officer, Peel-works</strong> <br />
                            <em>Dec 2017 – Oct 2018 | Pune, India</em> <br />
                            Oversaw modernization of retail grocery tech and platform engineering.
                        </li>
                        <li>
                            <strong>Director of Engineering & Senior Engineering Manager, ZS Associates</strong> <br />
                            <em>Jun 2012 – Nov 2017</em> <br />
                            Led the development and cloud migration of Javelin product platforms; drove team and product realignment.
                        </li>
                        <li>
                            <strong>Technical Architect / Delivery Manager, Euronet Worldwide</strong> <br />
                            <em>Jul 2009 – Aug 2012 | Pune, India</em> <br />
                            Architect and manager for digital payments, money transfer, and service platforms.
                        </li>
                        {/* Add more roles as desired */}
                    </ul>
                </div>

                {/* Education */}
                <div className="mt-12">
                    <h3 className="font-semibold text-primary mb-4 border-b border-border pb-2" style={{fontSize:'var(--font-size-subheading)'}}>
                        Education & Certifications
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-text-primary leading-relaxed">
                        <li>
                            <strong>MBA (C-PGDBA) Finance</strong> — Symbiosis Institute of Management Studies (2005–2007)
                        </li>
                        <li>
                            <strong>Bachelor of Engineering (BE) Electronics</strong> — Karmaveer Bhaurao Patil College Of Engineering (1989–1993)
                        </li>
                        <li>Certifications in AI/ML, Cloud Architecture (GCP, AWS, Azure), Cybersecurity, Agile/SCRUM, and Management Consulting</li>
                    </ul>
                </div>
            </section>
            {/* Social Links Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-5 mt-1 max-w-3xl mx-auto">
                <span className="font-semibold text-text-primary mb-2 md:mb-0" style={{fontSize:'var(--font-size-subheading)'}}>
                    Connect with Rajneesh Shrimali:
                </span>
                <div className="flex gap-6">
                    {socialLinks.map((item) => (
                        <a
                            key={item.name}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.name}
                            className="hover:scale-110 duration-150 flex items-center gap-2"
                        >
                            {item.icon}
                            <span className="sr-only">{item.name}</span>
                        </a>
                    ))}
                </div>
            </section>
        </section>
    );
}
