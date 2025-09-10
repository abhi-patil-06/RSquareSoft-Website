import React, { useState, useEffect } from 'react'
import { Linkedin, Twitter, Mail, Github, Lightbulb, Sparkles, Headphones, ThumbsUp, Award, Briefcase, GraduationCap, MapPin, Calendar, Users, TrendingUp, Star, CheckCircle } from 'lucide-react'
import ceo from '../../assets/ramesh.png'


const CeoInfoSection = () => {
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
            url: "https://www.linkedin.com/in/rameshgharmalkar/",
            icon: <Linkedin className="w-5 h-5" />,
            color: "hover:text-blue-600 hover:bg-blue-50"
        },
        {
            name: "Twitter",
            url: "https://twitter.com/ramesh",
            icon: <Twitter className="w-5 h-5" />,
            color: "hover:text-sky-500 hover:bg-sky-50"
        },
        {
            name: "Email",
            url: "mailto:ramesh.gharmalkar@rsquaresoft.com",
            icon: <Mail className="w-5 h-5" />,
            color: "hover:text-orange-700 hover:bg-gray-50"
        },
        {
            name: "GitHub",
            url: "https://github.com/gharmalkar",
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
                                                <h2 className="text-2xl font-bold mb-1">Ramesh Gharmalkar</h2>
                                                <p >Co-Founder & Chief Executive Officer</p>
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
                                    src={ceo}
                                    alt="Ramesh Gharmalkar"
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
                    Ramesh Gharmalkar, Founder and CEO of RSquareSoft Technologies, is a seasoned technology leader with over 27 years of expertise in software product development and over 15 years leading global engineering teams. His background includes leadership roles at prominent companies like Symantec, Veritas, NICE, McAfee, and Dendrite.
                </p>

                <p>
                    He has led large, geographically distributed teams—over 200 engineers across Israel and India—delivering complex enterprise software including Enterprise Vault, Compliance Accelerator, and eDiscovery platforms. His career reflects a steady progression, with leadership honors such as the Symantec LEAP Leadership Acceleration Program and runner-up in NICE’s 2020 Impact Awards for elevating AI, analytics, and data.
                </p>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-300 rounded-2xl p-8">
                    <h4 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Achievements</h4>
                    <ul className="list-disc list-inside space-y-2 text-blue-800">
                        <li>Directed successful releases of flagship enterprise compliance and data discovery platforms.</li>
                        <li>Managed complex global teams, fostering innovation across diverse cultures and time zones.</li>
                        <li>Championed Agile-SCRUM and Scaled Agile Framework development practices, improving productivity and quality.</li>
                        <li>Implemented serverless architectures using AWS Lambda and cloud-native microservices.</li>
                    </ul>
                </div>

                <p>
                    Academically, Ramesh holds an MBA in Finance from the Symbiosis Institute of Business Management and multiple professional certifications including AWS Cloud Architecture and Agile/SCRUM Master. He is passionate about mentoring startups and supporting underrepresented tech talent from rural and tier 3/4 cities.
                </p>

                <p>
                    His leadership philosophy emphasizes transparency, ethical standards, and empowering teams to create innovative, high-impact technology solutions that drive business transformation globally.
                </p>
            </section>





            {/* Social Links Section */}
            <div className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 lg:p-12">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Connect with Ramesh</h2>
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

export default CeoInfoSection;













// import React from 'react';
// import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub, } from "react-icons/fa";
// import { MdSupervisorAccount, MdVerifiedUser, MdTrendingUp, MdStar } from "react-icons/md";
// import ceo from '../../assets/ramesh.png'
// import companyLogo from '../../assets/logo.png'
// import { EmojiObjects, AutoAwesome, SupportAgent, ThumbUp } from '@mui/icons-material'


// // Example: Replace with actual imports or public paths
// const awardsImage = ceo
// const productsImage = ceo


// // Social media/contact data (replace hrefs/emails with real links)
// const socialLinks = [
//     {
//         name: "LinkedIn",
//         url: "https://www.linkedin.com/in/rameshgharmalkar/",
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


// const CeoInfoSection = () => (
//     <>
//         <div className="bg-background max-w-8xl  mx-auto py-30 px-4 sm:px-6 lg:px-8 font-family-base text-text-primary">
//             {/* Hero Section */}
//             <div className="flex flex-col lg:flex-row h-[600px] overflow-hidden mb-10">
//                 {/* Content Left */}
//                 <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
//                     <h1 className="font-semibold text-primary mb-12 text-shadow-sm leading-tight" style={{ fontSize: 'var(--font-size-title)' }}>
//                         Meet Our CEO
//                     </h1>
//                     <div className="bg-blue-50 border-l-8 rounded-md border-primary pl-6 py-5 mb-12 flex items-center">
//                         <img src={companyLogo} alt="Company Logo" className="w-15 h-15 mr-4 object-contain" />
//                         <p className="leading-relaxed text-text-primary italic" style={{ fontSize: 'var(--font-size-description)' }}>
//                             “ I’m driven by the mission to build scalable, intelligent platforms — and empower the next generation of tech talent along the way. ”
//                         </p>
//                     </div>
//                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-gray-300">
//                         <div className="flex flex-col items-center justify-center">
//                             <EmojiObjects className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Innovation</span>
//                         </div>
//                         <div className="flex flex-col items-center justify-center">
//                             <AutoAwesome className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Quality</span>
//                         </div>
//                         <div className="flex flex-col items-center justify-center">
//                             <SupportAgent className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Support</span>
//                         </div>
//                         <div className="flex flex-col items-center justify-center">
//                             <ThumbUp className="w-14 h-14 text-primary mb-2" />
//                             <span className="font-bold text-primary text-base mt-1">Trust</span>
//                         </div>
//                     </div>

//                 </div>
//                 {/* Content Right */}
//                 <div className="flex-1 relative bg-background border-border min-h-[350px] flex items-end max-w-xl w-full mx-auto">
//                     <img
//                         src={ceo}
//                         alt="Ramesh Gharmalkar"
//                         className="w-full h-full object-cover"
//                         loading="lazy"
//                     />
//                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-r from-primary via-background1 to-transparent text-button-text p-4 mb-5 sm:p-6 text-xl sm:text-2xl font-bold opacity-90" style={{ fontSize: 'var(--font-size-heading)' }}>
//                         <p>Ramesh Gharmalkar</p>
//                         <p style={{ fontSize: 'var(--font-size-description)' }}>Co-Founder & Chief Executive Officer</p>
//                     </div>
//                 </div>
//             </div>

//             {/* More Information Section */}
//             <section className="p-8 bg-background  mb-16 max-w-8xl mx-auto">

//                 {/* Article */}
//                 <article className="space-y-7 text-text-primary leading-relaxed" style={{ fontSize: 'var(--font-size-subheading)' }}>
//                     <p>
//                         <a href='https://www.linkedin.com/in/rameshgharmalkar/' target='_blank' className="text-primary font-semibold">Ramesh Gharmalkar</a> is a trailblazer in technology and entrepreneurship, whose 27-year journey in software innovation and management spans the globe. Beginning as an engineer, Ramesh quickly demonstrated an innate knack for solving complex challenges, leading him from roles in the U.S. to spearheading world-class teams across Israel, India, Canada, and Ireland.
//                     </p>
//                     <p>
//                         His leadership flourished at top-tier organizations including <b>Symantec</b> and <b>Veritas</b>, where he led over 200 engineers and built some of the industry’s most trusted compliance and eDiscovery platforms. Ramesh combines deep technical expertise with a people-first vision, fostering cultures of mentorship and innovation wherever he goes.
//                     </p>

//                     {/* Achievements Highlight Block */}
//                     <div className="flex flex-col md:flex-row items-center p-2 gap-8 mt-6" style={{ fontSize: 'var(--font-size-subheading)' }}>
//                         {/* Image beside achievements */}
//                         <img
//                             src={awardsImage}
//                             alt="Awards"
//                             className="w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg mb-4 md:mb-0"
//                         />
//                         <div>
//                             <h3 className="font-bold text-primary mb-2">Recognized Excellence</h3>
//                             <ul className="space-y-1 pl-4 text-base text-text-primary list-disc">
//                                 <li>
//                                     Selected for Symantec’s Leadership Acceleration Program (LEAP) for global high performers (2014–15).
//                                 </li>
//                                 <li>
//                                     Runner-Up in the NICE Impact Awards 2020: "Elevating AI, Analytics, and Data".
//                                 </li>
//                                 <li>
//                                     Honored by peers and organizations for driving business growth through innovation and empathy.
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                     <p>
//                         In his executive journey, Ramesh’s fingerprint can be seen on products like <span className="text-primary font-medium">Enterprise Vault, Surveil-X, Compliance Accelerator</span>, and the eDiscovery Platform—each solution helping organizations worldwide secure and harness their critical information.
//                     </p>

//                     {/* Products highlight with image */}
//                     <div className="flex flex-col md:flex-row items-center  p-6 gap-8 mt-6">
//                         <div className="order-2 md:order-1 flex-1" style={{ fontSize: 'var(--font-size-description)' }}>
//                             <h3 className="font-bold text-primary text-xl mb-2">Innovation in Action</h3>
//                             <ul className="space-y-1 pl-4 text-text-primary list-disc">
//                                 <li>
//                                     <b>ValetPlus:</b> AI valet automation transforming hotel and commercial property experience.
//                                 </li>
//                                 <li>
//                                     <b>TakuMi Data Platform:</b> Advanced ETL, analytics, and workflow for organizations scaling data.
//                                 </li>
//                             </ul>
//                         </div>
//                         <img
//                             src={productsImage}
//                             alt="Products"
//                             className="order-1 md:order-2 w-28 h-28 md:w-40 md:h-40 object-contain rounded-lg"
//                         />
//                     </div>

//                     <p>
//                         Ramesh's passion for technology is matched only by his drive to nurture the next generation. He launched and leads an internship program focused on empowering rural talent, believing that opportunity and mentorship are the ingredients for sustainable success.
//                     </p>
//                     <p>
//                         Alongside product development, Ramesh holds a U.S. patent in digital compliance using machine learning, and maintains certifications in <span className="font-semibold">AWS, Agile/SCRUM, and Financial Compliance (CISI)</span>. His technical toolkit covers C++, Java, Docker, Python, microservices, and cloud architectures on AWS.
//                     </p>
//                     <p>
//                         <span className="text-primary font-semibold">Education:</span><br />
//                         MBA (C-PGDBA) in Finance — Symbiosis Institute of Management Studies<br />
//                         BE Electronics — Karmaveer Bhaurao Patil College Of Engineering<br />
//                     </p>
//                     <p>
//                         Today, as Founder & CEO of RSquareSoft Technologies, Ramesh continues his mission: building scalable, intelligent platforms, and empowering changemakers wherever he finds them.
//                     </p>
//                 </article>
//             </section>
//             {/* Social Links Section */}
//             <section className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-5 mt-1 max-w-3xl mx-auto">
//                 <span className="font-semibold text-text-primary mb-2 md:mb-0" style={{ fontSize: 'var(--font-size-subheading)' }}>
//                     Connect with Ramesh Gharmalkar:
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
//         </div>
//     </>
// );


// export default CeoInfoSection;

























// import React, { useState } from 'react'
// import { User, Shield, TrendingUp, Star, Users, CheckCircle, Target, Zap } from 'lucide-react'

// const iconData = [
//   { icon: <User className="w-8 h-8" />, title: "Leadership", description: "Guiding teams to success" },
//   { icon: <Shield className="w-8 h-8" />, title: "Responsibility", description: "Accountable and reliable" },
//   { icon: <TrendingUp className="w-8 h-8" />, title: "Traction", description: "Driving growth forward" },
//   { icon: <Star className="w-8 h-8" />, title: "Expertise", description: "Deep domain knowledge" }
// ];

// export default function IconSectionDesigns() {
//   const [activeDesign, setActiveDesign] = useState('floating-cards');

//   const designs = {
//     'floating-cards': 'Floating Cards',
//     'modern-gradient': 'Modern Gradient',
//     'minimal-hover': 'Minimal Hover',
//     'glassmorphism': 'Glassmorphism',
//     'circular-progress': 'Circular Progress',
//     'hexagon-grid': 'Hexagon Grid'
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Design Selector */}
//         <div className="mb-12">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Icon Section Design Variations</h1>
//           <div className="flex flex-wrap justify-center gap-3 mb-8">
//             {Object.entries(designs).map(([key, name]) => (
//               <button
//                 key={key}
//                 onClick={() => setActiveDesign(key)}
//                 className={`px-4 py-2 rounded-full transition-all ${
//                   activeDesign === key
//                     ? 'bg-blue-600 text-white shadow-lg'
//                     : 'bg-white text-gray-600 hover:bg-gray-100'
//                 }`}
//               >
//                 {name}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Design 1: Floating Cards */}
//         {activeDesign === 'floating-cards' && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {iconData.map((item, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 border border-gray-100">
//                   <div className="flex flex-col items-center text-center">
//                     <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
//                       <div className="text-blue-600">
//                         {item.icon}
//                       </div>
//                     </div>
//                     <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
//                     <p className="text-gray-600 text-sm">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Design 2: Modern Gradient */}
//         {activeDesign === 'modern-gradient' && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//             {iconData.map((item, index) => {
//               const gradients = [
//                 'from-pink-500 to-purple-600',
//                 'from-blue-500 to-cyan-600',
//                 'from-green-500 to-teal-600',
//                 'from-orange-500 to-red-600'
//               ];
//               return (
//                 <div key={index} className="group cursor-pointer">
//                   <div className={`bg-gradient-to-br ${gradients[index]} rounded-2xl p-6 text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl`}>
//                     <div className="flex flex-col items-center text-center">
//                       <div className="p-3 bg-white/20 backdrop-blur rounded-full mb-4 group-hover:bg-white/30 transition-colors">
//                         {item.icon}
//                       </div>
//                       <h3 className="font-bold text-lg mb-1">{item.title}</h3>
//                       <p className="text-white/80 text-sm">{item.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         )}

//         {/* Design 3: Minimal Hover */}
//         {activeDesign === 'minimal-hover' && (
//           <div className="border-t-2 border-gray-200 pt-8">
//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//               {iconData.map((item, index) => (
//                 <div key={index} className="group text-center hover:bg-blue-50 p-6 rounded-xl transition-all duration-300">
//                   <div className="flex flex-col items-center">
//                     <div className="p-4 border-2 border-gray-200 rounded-full mb-4 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-300">
//                       <div className="text-gray-600 group-hover:text-white transition-colors">
//                         {item.icon}
//                       </div>
//                     </div>
//                     <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.title}</h3>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Design 4: Glassmorphism */}
//         {activeDesign === 'glassmorphism' && (
//           <div className="relative">
//             {/* Background decoration */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
//             <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8">
//               <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//                 {iconData.map((item, index) => (
//                   <div key={index} className="group">
//                     <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-6 hover:bg-white/30 transition-all duration-300">
//                       <div className="flex flex-col items-center text-center">
//                         <div className="p-3 bg-white/20 rounded-full mb-4 group-hover:scale-110 transition-transform">
//                           <div className="text-gray-700">
//                             {item.icon}
//                           </div>
//                         </div>
//                         <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
//                         <p className="text-gray-600 text-sm">{item.description}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Design 5: Circular Progress */}
//         {activeDesign === 'circular-progress' && (
//           <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
//             {iconData.map((item, index) => (
//               <div key={index} className="group text-center">
//                 <div className="relative inline-block mb-4">
//                   {/* Progress circle */}
//                   <svg className="w-24 h-24 transform -rotate-90 group-hover:scale-110 transition-transform" viewBox="0 0 100 100">
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                       fill="none"
//                       className="text-gray-200"
//                     />
//                     <circle
//                       cx="50"
//                       cy="50"
//                       r="40"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                       fill="none"
//                       strokeDasharray={`${75 + index * 10} 251.2`}
//                       className="text-blue-500 transition-all duration-1000"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                   {/* Icon in center */}
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <div className="text-blue-600">
//                       {item.icon}
//                     </div>
//                   </div>
//                 </div>
//                 <h3 className="font-bold text-gray-800 text-lg mb-1">{item.title}</h3>
//                 <p className="text-gray-600 text-sm">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         )}

//         {/* Design 6: Hexagon Grid */}
//         {activeDesign === 'hexagon-grid' && (
//           <div className="flex justify-center">
//             <div className="grid grid-cols-2 gap-4 max-w-md">
//               {iconData.map((item, index) => (
//                 <div key={index} className="group flex flex-col items-center">
//                   <div className="relative mb-4">
//                     {/* Hexagon shape */}
//                     <div className="w-20 h-20 bg-blue-600 transform rotate-45 rounded-lg group-hover:bg-purple-600 transition-colors duration-300">
//                       <div className="absolute inset-2 bg-white transform -rotate-45 rounded-lg flex items-center justify-center">
//                         <div className="text-blue-600 group-hover:text-purple-600 transition-colors">
//                           {item.icon}
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <h3 className="font-bold text-gray-800 text-center mb-1">{item.title}</h3>
//                   <p className="text-gray-600 text-sm text-center">{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Code Display */}
//         <div className="mt-12 p-6 bg-gray-900 rounded-lg">
//           <h3 className="text-white text-lg font-semibold mb-4">Current Design Code:</h3>
//           <div className="text-gray-300 text-sm font-mono overflow-x-auto">
//             {activeDesign === 'floating-cards' && (
//               <pre>{`<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//   {iconData.map((item, index) => (
//     <div key={index} className="group">
//       <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl
//                       transform hover:-translate-y-3 transition-all duration-300
//                       border border-gray-100">
//         <div className="flex flex-col items-center text-center">
//           <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100
//                           rounded-full mb-4 group-hover:scale-110 transition-transform">
//             <div className="text-blue-600">{item.icon}</div>
//           </div>
//           <h3 className="font-bold text-gray-800 text-lg mb-2">{item.title}</h3>
//           <p className="text-gray-600 text-sm">{item.description}</p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>`}</pre>
//             )}
//             {activeDesign === 'modern-gradient' && (
//               <pre>{`<div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
//   {iconData.map((item, index) => (
//     <div key={index} className="group cursor-pointer">
//       <div className="bg-gradient-to-br from-pink-500 to-purple-600
//                       rounded-2xl p-6 text-white hover:scale-105
//                       transition-all duration-300 shadow-lg hover:shadow-2xl">
//         <div className="flex flex-col items-center text-center">
//           <div className="p-3 bg-white/20 backdrop-blur rounded-full mb-4
//                           group-hover:bg-white/30 transition-colors">
//             {item.icon}
//           </div>
//           <h3 className="font-bold text-lg mb-1">{item.title}</h3>
//           <p className="text-white/80 text-sm">{item.description}</p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>`}</pre>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }