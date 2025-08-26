import React from 'react';
import {FaLinkedin,FaTwitter,FaEnvelope,FaGithub,} from "react-icons/fa";
import { MdSupervisorAccount, MdVerifiedUser, MdTrendingUp, MdStar } from "react-icons/md";

// Example: Replace with actual imports or public paths
const companyLogo = "public/logo/logo.png   ";
const ceoPhoto = "/ramesh.png";
const awardsImage = "/logo/logo.png";
const productsImage = "/logo/logo.png";


// Social media/contact data (replace hrefs/emails with real links)
const socialLinks = [
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rameshgharmalkar/",
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


const CeoInfoSection = () => (
    <>
        <div className="bg-background max-w-8xl  mx-auto py-30 px-4 sm:px-6 lg:px-8 font-family-base text-text-primary">
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row h-[600px] overflow-hidden mb-10">
                {/* Content Left */}
                <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <h1 className="font-semibold text-primary mb-12 text-shadow-sm leading-tight" style={{fontSize:'var(--font-size-title)'}}>
                        Meet Our CEO
                    </h1>
                    <div className="bg-blue-50 border-l-8 rounded-md border-primary pl-6 py-5 mb-12 flex items-center">
                        <img src={companyLogo} alt="Company Logo" className="w-15 h-15 mr-4 object-contain" />
                        <p className="leading-relaxed text-text-primary italic" style={{fontSize:'var(--font-size-description)'}}>
                            “ I’m driven by the mission to build scalable, intelligent platforms — and empower the next generation of tech talent along the way. ”
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
                        src={ceoPhoto}
                        alt="Ramesh Gharmalkar"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary via-background1 to-transparent text-button-text p-4 mb-5 sm:p-6 text-xl sm:text-2xl font-bold opacity-90" style={{fontSize:'var(--font-size-heading)'}}>
                        <p>Ramesh Gharmalkar</p>
                        <p style={{fontSize:'var(--font-size-description)'}}>CEO & Co-Founder</p>
                    </div>
                </div>
            </div>

            {/* More Information Section */}
            <section className="p-8 bg-background  mb-16 max-w-8xl mx-auto">

                {/* Article */}
                <article className="space-y-7 text-text-primary leading-relaxed" style={{fontSize:'var(--font-size-subheading)'}}>
                    <p>
                        <a href='https://www.linkedin.com/in/rameshgharmalkar/' target='_blank' className="text-primary font-semibold">Ramesh Gharmalkar</a> is a trailblazer in technology and entrepreneurship, whose 27-year journey in software innovation and management spans the globe. Beginning as an engineer, Ramesh quickly demonstrated an innate knack for solving complex challenges, leading him from roles in the U.S. to spearheading world-class teams across Israel, India, Canada, and Ireland.
                    </p>
                    <p>
                        His leadership flourished at top-tier organizations including <b>Symantec</b> and <b>Veritas</b>, where he led over 200 engineers and built some of the industry’s most trusted compliance and eDiscovery platforms. Ramesh combines deep technical expertise with a people-first vision, fostering cultures of mentorship and innovation wherever he goes.
                    </p>

                    {/* Achievements Highlight Block */}
                    <div className="flex flex-col md:flex-row items-center p-2 gap-8 mt-6" style={{fontSize:'var(--font-size-subheading)'}}>
                        {/* Image beside achievements */}
                        <img
                            src={awardsImage}
                            alt="Awards"
                            className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg mb-4 md:mb-0"
                        />
                        <div>
                            <h3 className="font-bold text-primary mb-2">Recognized Excellence</h3>
                            <ul className="space-y-1 pl-4 text-base text-text-primary list-disc">
                                <li>
                                    Selected for Symantec’s Leadership Acceleration Program (LEAP) for global high performers (2014–15).
                                </li>
                                <li>
                                    Runner-Up in the NICE Impact Awards 2020: "Elevating AI, Analytics, and Data".
                                </li>
                                <li>
                                    Honored by peers and organizations for driving business growth through innovation and empathy.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <p>
                        In his executive journey, Ramesh’s fingerprint can be seen on products like <span className="text-primary font-medium">Enterprise Vault, Surveil-X, Compliance Accelerator</span>, and the eDiscovery Platform—each solution helping organizations worldwide secure and harness their critical information.
                    </p>

                    {/* Products highlight with image */}
                    <div className="flex flex-col md:flex-row items-center  p-6 gap-8 mt-6">
                        <div className="order-2 md:order-1 flex-1" style={{fontSize:'var(--font-size-description)'}}>
                            <h3 className="font-bold text-primary text-xl mb-2">Innovation in Action</h3>
                            <ul className="space-y-1 pl-4 text-text-primary list-disc">
                                <li>
                                    <b>ValetPlus:</b> AI valet automation transforming hotel and commercial property experience.
                                </li>
                                <li>
                                    <b>TakuMi Data Platform:</b> Advanced ETL, analytics, and workflow for organizations scaling data.
                                </li>
                            </ul>
                        </div>
                        <img
                            src={productsImage}
                            alt="Products"
                            className="order-1 md:order-2 w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg"
                        />
                    </div>

                    <p>
                        Ramesh's passion for technology is matched only by his drive to nurture the next generation. He launched and leads an internship program focused on empowering rural talent, believing that opportunity and mentorship are the ingredients for sustainable success.
                    </p>
                    <p>
                        Alongside product development, Ramesh holds a U.S. patent in digital compliance using machine learning, and maintains certifications in <span className="font-semibold">AWS, Agile/SCRUM, and Financial Compliance (CISI)</span>. His technical toolkit covers C++, Java, Docker, Python, microservices, and cloud architectures on AWS.
                    </p>
                    <p>
                        <span className="text-primary font-semibold">Education:</span><br />
                        MBA (C-PGDBA) in Finance — Symbiosis Institute of Management Studies<br />
                        BE Electronics — Karmaveer Bhaurao Patil College Of Engineering<br />
                    </p>
                    <p>
                        Today, as Founder & CEO of RSquareSoft Technologies, Ramesh continues his mission: building scalable, intelligent platforms, and empowering changemakers wherever he finds them.
                    </p>
                </article>
            </section>
            {/* Social Links Section */}
            <section className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-5 mt-1 max-w-3xl mx-auto">
                <span className="font-semibold text-text-primary mb-2 md:mb-0" style={{fontSize:'var(--font-size-subheading)'}}>
                    Connect with Ramesh Gharmalkar:
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
        </div>
    </>
);


export default CeoInfoSection;




















// import React from "react";
// import { FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

// const ceo = {
//     name: "Ramesh Gharmalkar",
//     title: "Chief Executive Officer",
//     photo: "/public/ramesh.png",
//     article: [
//         "Ramesh Gharmalkar is renowned for his exceptional leadership, blending innovative vision with hands-on experience to inspire FutureTech Innovations' global growth. He consistently drives transformative strategies focused on digital excellence, culture, and lasting partnerships.",
//         "Under Ramesh's leadership, FutureTech has launched award-winning AI products, expanded to new international markets, and fostered a unique culture of talent development and ethical technology.",
//         "Aarav is a sought-after thought leader, keynote speaker at international summits, and a trusted advisor on technology policy and digital transformation. Outside work, he champions educational access and supports community tech initiatives."
//     ],
//     highlights: [
//         "20+ years in global tech leadership.",
//         "Keynote speaker at World Tech Leaders and Digital India Summit.",
//         "Advocate for diversity, inclusion, and ethical AI.",
//         "MIT Sloan MBA • BTech, IIT Delhi."
//     ],
//     contacts: [
//         {
//             icon: <FaLinkedin className="w-5 h-5 fill-blue-700" />,
//             label: "LinkedIn",
//             url: "https://linkedin.com/in/aarav-singh"
//         },
//         {
//             icon: <FaTwitter className="w-5 h-5 fill-sky-600" />,
//             label: "Twitter",
//             url: "https://twitter.com/aaravsingh"
//         },
//         {
//             icon: <FaEnvelope className="w-5 h-5 fill-gray-500" />,
//             label: "Email",
//             url: "mailto:aarav.singh@futuretech.com"
//         }
//     ]
// };

// export default function CeoInfoSection() {
//     return (
//         <main className="w-full min-h-screen bg-white flex flex-col">
//             {/* Header */}
//             <section className="w-full h-screen flex flex-col lg:flex-row">
//                 {/* Left: Name and Designation */}
//                 <div className="flex-1 flex flex-col justify-center px-10 py-16 ">
//                     <h1 className="text-5xl md:text-7xl font-bold text-black mb-3">
//                         {ceo.name}
//                     </h1>
//                     <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-2">
//                         {ceo.title}
//                     </h2>
//                 </div>
//                 {/* Right: Profile Image on dark panel */}
//                 <div className="flex-1 relative flex items-center justify-center bg-gradient-to-bl ">
//                     <div className="absolute w-100 h-100 bg-black rounded-full blur-3xl opacity-30 "></div>{/*animate-pulse*/}
//                     <img
//                         src={ceo.photo}
//                         alt={ceo.name}
//                         className="w-80 h-80 md:w-148 md:h-148 object-cover relative z-10 "
//                         style={{ background: "transparent" }}
//                     />
//                 </div>
//             </section>
//             <section className="max-w-7xl mx-auto px-6  mb-16">

//                 {/* Article/Bio */}
//                 {/* <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">About Ramesh Gharmalkar</h2> */}
//                 <article className="text-gray-800 text-lg leading-relaxed space-y-5 mb-8">
//                     {ceo.article.map((para, idx) => (
//                         <p key={idx}>{para}</p>
//                     ))}
//                 </article>

//                 {/* Highlights */}
//                 <div className="mb-8">
//                     <h3 className="font-semibold text-blue-800 mb-3 text-xl">Key Highlights</h3>
//                     <ul className="list-disc pl-6 space-y-2">
//                         {ceo.highlights.map((point, idx) => (
//                             <li key={idx} className="text-gray-800">{point}</li>
//                         ))}
//                     </ul>
//                 </div>

//                 {/* Contact & Social */}
//                 <div className="border-t border-blue-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-5">
//                     <div className="mb-4 md:mb-0">
//                         {/* <span className="font-semibold text-gray-700 text-base mr-2">Connect with Ramesh:</span> */}
//                     </div>
//                     <div className="flex gap-5">
//                         {ceo.contacts.map(contact => (
//                             <a
//                                 key={contact.label}
//                                 href={contact.url}
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="group flex items-center gap-1 text-blue-700 hover:text-blue-900 font-medium transition"
//                             >
//                                 {contact.icon}
//                                 <span className="underline group-hover:no-underline">{contact.label}</span>
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </section>
//         </main>
//     );
// }
