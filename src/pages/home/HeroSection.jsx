import React, { useEffect, useState, useRef } from "react";
import { FaArrowDown, FaChevronDown } from "react-icons/fa";
import AnimatedArrowButton from "../../components/AnimatedArrowButton";
import { useNavigate } from "react-router-dom";

const SLIDES = [
  {
    img: "hero-img/img1.png",
    title: "Empower Your Ideas With AI",
    subtitle: "Building intelligent solutions for a smarter future.",
    points: [
      "Innovative AI Integration",
      "End-to-End Automation",
      "Business-Oriented Machine Learning",
    ],
    cta: "Discover More",
    ctaUrl: "/expert",
  },
  {
    img: "hero-img/img2.png",
    title: "Transform Data Into Intelligence",
    subtitle: "Unlock powerful insights and become data driven.",
    points: [
      "Predictive Analytics",
      "Actionable Dashboards",
      "Custom ML Models",
    ],
    cta: "Our Services",
    ctaUrl: "/expert",
  },
  {
    img: "hero-img/img3.png",
    title: "AI For Every Industry",
    subtitle: "Reliable, scalable, secure ML solutions from concept to deployment.",
    points: [
      "Scalable Cloud Integrations",
      "Enterprise-Grade Security",
      "Ongoing Optimization & Support",
    ],
    cta: "Contact Experts",
    ctaUrl: "/expert",
  },
];

const SLIDE_DURATION = 9000; // total slide duration including fades (9s)
const IMAGE_FADE_DURATION = 7000; // image fade duration 7s
const CONTENT_FADE_DELAY = 100; // delay showing content 1s after slide active

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const slideTimeoutRef = useRef(null);
  const contentTimeoutRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Reset content visibility immediately on slide change
    setShowContent(false);

    // Show content after delay
    contentTimeoutRef.current = setTimeout(() => {
      setShowContent(true);
    }, CONTENT_FADE_DELAY);

    // Change slide after total duration
    slideTimeoutRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, SLIDE_DURATION);

    return () => {
      clearTimeout(slideTimeoutRef.current);
      clearTimeout(contentTimeoutRef.current);
    };
  }, [active]);

  const goToSlide = (index) => {
  setActive(index);
  // Add your logic to change the displayed slide here
};


//  const handleClick = () => {
//     window.scrollBy({ top: 730, behavior: "smooth" });
//   };
const handleClick = () => {
  const scrollDistance = window.innerWidth < 768 ? 735 : 920;
  window.scrollBy({ top: scrollDistance, behavior: "smooth" });
};

  return (
    <section className="relative w-full h-205 md:h-[1000px] overflow-hidden select-none">
      {SLIDES.map(({ img, title, subtitle, points, cta, ctaUrl }, idx) => {
        const isActive = idx === active;

        return (
          <div
            key={idx}
            className={`absolute inset-0 w-full h-full bg-center bg-cover transition-opacity ease-in-out`}
            style={{
              backgroundImage: `url(${img})`,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 20 : 10,
              transitionDuration: `${IMAGE_FADE_DURATION}ms`,
              transitionProperty: "opacity",
            }}
            aria-hidden={!isActive}
          >
            {/* Overlay - no fade, fixed opacity */}
            <div className="absolute inset-0 bg-black/60" />

            {/* Content with fade */}
            <div
              className={`absolute inset-0 md:-top-20 flex flex-col items-center justify-center text-center px-5 transition-opacity duration-1000 ease-in-out ${
                showContent && isActive ? "opacity-100" : "opacity-0"
              }`}
            >
              <h1 className="text-white text-3xl md:text-6xl font-extrabold drop-shadow-lg mb-6">
                {title}
              </h1>
              <p className="text-gray-200 text-xl md:text-2xl mb-6 max-w-2xl">
                {subtitle}
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl mx-auto">
                {points.map((point, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-white px-5 py-2 rounded-full border border-white/40 text-lg font-medium backdrop-blur-md"
                  >
                    {point}
                  </span>
                ))}
              </div> */}
              <div className="flex flex-wrap justify-center gap-4 mb-10 max-w-4xl mx-auto">
                {points.map((point, i) => (
                  <span
                    key={i}
                    className="bg-black text-primary px-5 py-1.5 rounded-md font-bold text-sm tracking-wide"
                    style={{
                      boxShadow: '0 0 8px rgba(1, 48, 143, 0.8), 0 0 20px rgba(1, 48, 143, 0.5)',
                    }}
                  >
                    {point}
                  </span>
                ))}
              </div>
              
              {/* {cta && (
                <a
                  href={ctaUrl}
                  className="inline-block px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg hover:scale-105 transform transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400"
                >
                  {cta}
                </a>
              )} */}

              {cta && (
                <AnimatedArrowButton onClick={() => navigate(ctaUrl)}>
                  {cta}
                </AnimatedArrowButton>

              )}
            </div>
          </div>
        );
      })}



      {/* Progress Lines */}
      <div className="absolute top-1/2 left-4 -translate-y-1/2 md:-translate-y-2/2 flex flex-col gap-4 z-30">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`w-1 h-8 rounded-full bg-white transition-all cursor-pointer
              ${i === active ? "bg-white scale-y-125" : "bg-white/30 scale-y-100"}
            `}
            onClick={() => goToSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      

      {/* arrow  */}
       <div className="absolute bottom-5 md:bottom-55 left-1/2 -translate-x-1/2 z-50">
      <button
        // onClick={handleClick}
        onClick={() => {
                const section = document.getElementById("subNavbar");
                if (section) {
                  const navbarOffset = 80; // Set this to your navbar height
                  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - navbarOffset,
                    behavior: "smooth",
                  });
                }
              }}
        aria-label="Scroll down"
        className="flex flex-col items-center space-y-1 cursor-pointer bg-transparent border-none p-3 rounded-full text-white hover:text-blue-800 active:text-blue-900 focus:outline-none  animate-bounce transition-colors duration-300"
        style={{ width: 90, height: 90 }}
      >
        {[0, 1, 2].map((i) => (
          <svg
            key={i}
            className="w-8 h-6"
            style={{ animationDelay: `${i * 0.2}s`, opacity: 0.6 + i * 0.2 }}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        ))}
      </button>
    </div>



    </section>
  );
}





// import React, { useEffect, useState, useRef } from "react";

// // Array of slides: image, title, subtitle, points, cta, etc.
// const SLIDES = [
//   {
//     img: "bg-img/bg1.jpg", // Place your images in /public/bg-img/
//     title: "Empower Your Ideas With AI",
//     subtitle: "Building intelligent solutions for a smarter future.",
//     points: [
//       "Innovative AI Integration",
//       "End-to-End Automation",
//       "Business-Oriented Machine Learning",
//     ],
//     cta: "Discover More",
//     ctaUrl: "/about",
//   },
//   {
//     img: "bg-img/bg2.jpg",
//     title: "Transform Data Into Intelligence",
//     subtitle: "Unlock powerful insights and become data driven.",
//     points: [
//       "Predictive Analytics",
//       "Actionable Dashboards",
//       "Custom ML Models",
//     ],
//     cta: "Our Services",
//     ctaUrl: "/services",
//   },
//   {
//     img: "bg-img/bg3.jpg",
//     title: "AI For Every Industry",
//     subtitle: "Reliable, scalable, secure ML solutions from concept to deployment.",
//     points: [
//       "Scalable Cloud Integrations",
//       "Enterprise-Grade Security",
//       "Ongoing Optimization & Support",
//     ],
//     cta: "Contact Experts",
//     ctaUrl: "/contact",
//   },
// ];

// const SLIDE_DURATION = 5000; // ms

// export default function HeroSection() {
//   const [active, setActive] = useState(0);
//   const [prev, setPrev] = useState(0);
//   const timeoutRef = useRef();

//   // Track previous slide index on active change
//   useEffect(() => {
//     setPrev(active);
//   }, [active]);

//   // Auto-slide logic
//   useEffect(() => {
//     timeoutRef.current && clearTimeout(timeoutRef.current);
//     timeoutRef.current = setTimeout(
//       () => setActive((old) => (old + 1) % SLIDES.length),
//       SLIDE_DURATION
//     );
//     return () => clearTimeout(timeoutRef.current);
//   }, [active]);

//   // Handler for manual navigation (optional)
//   const goToSlide = (idx) => {
//     if (idx === active) return;
//     setActive(idx);
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden select-none">
//       {/* Slides */}
//       {SLIDES.map((slide, idx) => {
//         // Determine slide animation classes
//         let translate = "translate-x-[100vw]";
//         let scale = "scale-110";
//         let opacity = "opacity-0";
//         let zIndex = "z-10";
//         let pointerEvents = "pointer-events-none";
//         if (idx === active) {
//           // Active slide: center, normal scale, visible
//           translate = "translate-x-0";
//           scale = "scale-100";
//           opacity = "opacity-100";
//           zIndex = "z-20";
//           pointerEvents = "pointer-events-auto";
//         } else if (idx === prev && prev !== active) {
//           // Previous slide slides out:
//           // Slide direction depends on whether next slide is after or before current
//           const slideDirection = prev < active ? "-translate-x-[100vw]" : "translate-x-[100vw]";
//           translate = slideDirection;
//           scale = "scale-110";
//           opacity = "opacity-0";
//           zIndex = "z-10";
//           pointerEvents = "pointer-events-none";
//         }

//         return (
//           <div
//             key={idx}
//             className={`
//               absolute inset-0 w-full h-full
//               transition-all duration-[900ms] ease-in-out
//               ${translate} ${scale} ${opacity} ${zIndex} ${pointerEvents}
              
//             `}
//             style={{
//               background: `url(${slide.img}) center center / cover no-repeat fixed`,
//               transitionProperty: "opacity, transform, filter",
//             }}
//           >
//             {/* Overlay for dark tint */}
//             <div className="absolute inset-0 w-full h-full bg-black/60 transition-all duration-[900ms]" />

//             {/* Slide Content */}
//             <div className="relative z-30 flex flex-col justify-center items-center h-full w-full px-5">
//               <h1
//                 className={`
//                   text-white text-3xl md:text-6xl font-extrabold drop-shadow-2xl mb-8
//                   transition-all duration-700
//                   ${
//                     idx === active
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-8"
//                   }
//                 `}
//               >
//                 {slide.title}
//               </h1>
//               <p
//                 className={`
//                   text-gray-200 text-xl md:text-2xl mb-6 text-center max-w-2xl transition-all duration-700
//                   ${
//                     idx === active
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-8"
//                   }
//                 `}
//               >
//                 {slide.subtitle}
//               </p>
//               <div
//                 className={`
//                   flex flex-wrap gap-4 justify-center transition-all duration-700
//                   ${
//                     idx === active
//                       ? "opacity-100 translate-x-0"
//                       : "opacity-0 -translate-x-8"
//                   }
//                 `}
//               >
//                 {slide.points.map((point, i) => (
//                   <span
//                     key={i}
//                     className="bg-white/10 text-white px-5 py-2 rounded-full border border-white/30 text-lg font-medium backdrop-blur-xl"
//                   >
//                     {point}
//                   </span>
//                 ))}
//               </div>
//               {slide.cta && (
//                 <a
//                   href={slide.ctaUrl}
//                   className={`
//                     mt-10 inline-block px-8 py-3 text-lg font-medium rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400
//                     ${
//                       idx === active
//                         ? "opacity-100 translate-x-0"
//                         : "opacity-0 -translate-x-8"
//                     }
//                   `}
//                   tabIndex={idx === active ? 0 : -1}
//                 >
//                   {slide.cta}
//                 </a>
//               )}
//             </div>
//           </div>
//         );
//       })}

//       {/* Progress Dots */}
//       <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-30">
//         {SLIDES.map((_, i) => (
//           <button
//             key={i}
//             className={`w-3 h-3 rounded-full border-2 border-white transition-all cursor-pointer
//               ${
//                 i === active ? "bg-white scale-125" : "bg-white/30 scale-100"
//               }
//             `}
//             onClick={() => goToSlide(i)}
//             aria-label={`Go to slide ${i + 1}`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }

















// import React, { useEffect, useRef, useState } from "react";

// // DATA per slide!
// const SLIDES = [
//     {
//         video: "/bg-video/bg.mp4",
//         quote: "Empowering Futures with AI & ML",
//         subtitle: "Driving innovation in Artificial Intelligence and Machine Learning.",
//         highlights: [
//             "Seamless AI-driven Integration",
//             "Predictive Analytics for Business Growth",
//             "Secure & Scalable ML Solutions",
//         ],
//     },
//     {
//         video: "/bg-video/bg1.mp4",
//         quote: "Turning Insights Into Impact",
//         subtitle: "Harnessing machine learning for actionable intelligence.",
//         highlights: [
//             "Lightning-fast Deployment",
//             "Smart Automation",
//             "AI for Every Industry"
//         ],
//     },
//     {
//         video: "/bg-video/bg2.mp4",
//         quote: "Shaping Tomorrow, Today",
//         subtitle: "Innovative solutions powered by next-gen data science.",
//         highlights: [
//             "Trusted AI Partnerships",
//             "Custom ML Algorithms",
//             "Transforming Data to Value"
//         ],
//     },
// ];

// const VIDEO_DURATION = 30; // seconds per slide max

// export default function HeroSection() {
//     const [current, setCurrent] = useState(0);
//     const [progress, setProgress] = useState(0);
//     const [fade, setFade] = useState(true);
//     //   const videoRefs = [useRef(null), useRef(null)];
//     const videoRef = useRef(null);


//     // Prepare next index for cross-fade
//     const nextIdx = (current + 1) % SLIDES.length;

//     // Timers and progress
//     // useEffect(() => {
//     //     let interval, timeout, raf;
//     //     let isMounted = true;

//     //     const video = videoRefs[0].current;
//     //     if (video) {
//     //         video.currentTime = 0;
//     //         video.play().catch(() => { });
//     //         // Animate progress bar
//     //         const animate = () => {
//     //             if (!isMounted) return;
//     //             if (video.duration && !isNaN(video.duration)) {
//     //                 setProgress((video.currentTime / Math.min(video.duration, VIDEO_DURATION)) * 100);
//     //             } else {
//     //                 setProgress(0);
//     //             }
//     //             raf = requestAnimationFrame(animate);
//     //         };
//     //         animate();

//     //         // Move to next slide on end OR TIMER
//     //         const handleEnd = () => {
//     //             crossFade();
//     //         };
//     //         video.onended = handleEnd;
//     //         timeout = setTimeout(handleEnd, VIDEO_DURATION * 1000);

//     //         // Clean up
//     //         return () => {
//     //             isMounted = false;
//     //             video.onended = null;
//     //             cancelAnimationFrame(raf);
//     //             clearTimeout(timeout);
//     //         };
//     //     }
//     // }, [current]);

//     useEffect(() => {
//         let timeout, raf, isMounted = true;
//         const video = videoRef.current;
//         if (video) {
//             video.currentTime = 0; // reset time
//             video.play().catch(() => { });
//             // Animate progress bar
//             const animate = () => {
//                 if (!isMounted) return;
//                 if (video.duration && !isNaN(video.duration)) {
//                     setProgress((video.currentTime / Math.min(video.duration, VIDEO_DURATION)) * 100);
//                 } else {
//                     setProgress(0);
//                 }
//                 raf = requestAnimationFrame(animate);
//             };
//             animate();
//             // Next video after timeout or end
//             const handleEnd = () => startFadeOut();
//             video.onended = handleEnd;
//             timeout = setTimeout(handleEnd, VIDEO_DURATION * 1000);
//             return () => {
//                 isMounted = false;
//                 video.onended = null;
//                 cancelAnimationFrame(raf);
//                 clearTimeout(timeout);
//             };
//         }
//     }, [current]);


//     // Cross-fade logic
//     function crossFade() {
//         setFade(false); // fade out
//         setTimeout(() => {
//             setCurrent((c) => (c + 1) % SLIDES.length);
//             setFade(true); // fade in
//         }, 700); // match fade duration
//     }

//     function startFadeOut() {
//         setFade(false); // fade out
//         setTimeout(() => {
//             setCurrent((c) => (c + 1) % SLIDES.length);
//             setFade(true); // fade in after src changed
//         }, 600); // match fade duration
//     }


//     // Prevent context/download
//     const preventContext = (e) => e.preventDefault();

//     // Only show current/next videos for cross-fade
//     const showVideos = [
//         { idx: current, ref: videoRef, visible: fade },
//         // { idx: nextIdx, ref: videoRefs[1], visible: !fade }
//     ];

//     return (
//         <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
//             {/* Videos - two for fade crossfade */}
//             {showVideos.map(({ idx, ref, visible }, i) => (
//                 // <video
//                 //     key={i}
//                 //     ref={ref}
//                 //     src={SLIDES[idx].video}
//                 //     className={
//                 //         "absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-700" +
//                 //         (visible ? " opacity-100 z-0" : " opacity-0 z-0")
//                 //     }
//                 //     autoPlay
//                 //     muted
//                 //     loop={false}
//                 //     playsInline
//                 //     preload="auto"
//                 //     onContextMenu={preventContext}
//                 //     disablePictureInPicture
//                 //     controls={false}
//                 //     tabIndex={-1}
//                 //     style={{ userSelect: "none" }}
//                 // />
//                 <video
//                     ref={videoRef}
//                     src={SLIDES[current].video}
//                     className={
//                         "absolute top-0 left-0 w-full h-full object-cover pointer-events-none select-none transition-opacity duration-700"
//                     }
//                     autoPlay
//                     muted
//                     loop={false}
//                     playsInline
//                     preload="auto"
//                     onContextMenu={preventContext}
//                     disablePictureInPicture
//                     controls={false}
//                     tabIndex={-1}
//                     style={{ userSelect: "none" }}
//                 />

//             ))}

//             {/* Overlay */}
//             <div
//                 className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/90 z-10 pointer-events-none"
//             />

//             {/* Main Content */}
//             <div className="relative z-20 text-center flex flex-col items-center justify-center w-full h-full px-4">
//                 <div className="mb-8">
//                     <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg transition-all duration-500 fade-in">
//                         {SLIDES[current].quote}
//                     </h1>
//                 </div>
//                 <p className="text-gray-300 text-xl md:text-2xl mb-6 italic fade-in">
//                     {SLIDES[current].subtitle}
//                 </p>
//                 <div className="flex flex-wrap gap-4 justify-center mt-4 fade-in">
//                     {SLIDES[current].highlights.map((item, i) => (
//                         <span
//                             key={i}
//                             className="bg-white/10 text-white px-6 py-2 rounded-2xl border border-white/30 text-lg font-medium backdrop-blur"
//                         >
//                             {item}
//                         </span>
//                     ))}
//                 </div>
//             </div>

//             {/* Progress Bar */}
//             {/* <div className="absolute left-0 bottom-0 w-full h-2 bg-black/30 z-30">
//                 <div
//                     className="h-full bg-gradient-to-r from-sky-400 to-indigo-600 transition-all"
//                     style={{ width: `${progress}%` }}
//                 />
//             </div> */}

//             {/* Overlay for extra accessibility */}
//             <div className="absolute inset-0 z-20" style={{ pointerEvents: "none" }} />
//         </section>
//     );
// }

















// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Box, Button, Typography } from "@mui/material";

// const HeroSection = () => {

//     const videoSrc = "/public/bg-video/bg.mp4";

//     return (
//         <>
//             <div className="relative w-full overflow-hidden bg-black flex items-center justify-center h-[100vh]">
//                 <video
//                     className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2"
//                     src={videoSrc}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                 >
//                     Your browser does not support the video tag.
//                 </video>

//                 <Box
//                     sx={{
//                         position: "absolute",
//                         inset: 0,
//                         bgcolor: "rgba(0,0,0,0.4)", // semi-transparent white

//                         zIndex: 1,
//                     }}
//                 />
//                 {/* Content */}
//                 <Box
//                     sx={{
//                         position: "relative",
//                         zIndex: 2,
//                         left: -100,
//                         width: { xs: "90%", md: "60%" },
//                         textAlign: { xs: "center", md: "left" },
//                         mx: "auto",
//                         py: { xs: 5, md: 8 },
//                     }}
//                 >
//                     <Typography
//                         variant="h3"
//                         fontWeight="bold"
//                         mb={2}
//                         color="white"
//                         sx={{ letterSpacing: "-0.02em" }}
//                     >
//                         Build The Future With Us
//                     </Typography>
//                     <Typography variant="h6" mb={3} color="white">
//                         RSquareSoft Technologies is growing and <b>we want you onboard</b>! Join a diverse, passionate, top tier team that loves building products that make an impact.
//                     </Typography>
//                     <Button
//                         variant="contained"
//                         color="primary"
//                         size="large"
//                         href="#open-roles"
//                         onClick={() => {
//                             const section = document.getElementById("career");
//                             if (section) {
//                                 const navbarOffset = 80; // Set this to your navbar height
//                                 const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
//                                 window.scrollTo({
//                                     top: elementPosition - navbarOffset,
//                                     behavior: "smooth",
//                                 });
//                             }
//                         }}

//                         sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: "1.08rem" }}
//                     >
//                         Explore More
//                     </Button>
//                 </Box>

//             </div>
//         </>
//     );
// };

// export default HeroSection;












// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";

// const HeroSection = () => {
//     // Define colors from the images (approximated)
//     const darkBackground = "#1E3A4A";
//     const mainShapeColor = "#5B9EB0";
//     const buttonColor = "#2E6056";

//     const carouselImages = [
//         "public/About-Us3.jpg",
//         "public/Career-Section.jpg",
//         "public/img1.png",
//         "public/img2.png",
//         "public/navbar-img.jpg",
//     ];

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentImageIndex((prevIndex) =>
//                 (prevIndex + 1) % carouselImages.length
//             );
//         }, 5000);

//         return () => clearInterval(interval);
//     }, [carouselImages.length]);

//     return (
//         <section
//             className="relative bg-background font-family-base w-full min-h-[900px] flex flex-col md:flex-row items-center justify-between overflow-hidden"
//         >
//             {/* Main Content Section (Left side) */}
//             <motion.div
//                 className="flex-1 px-8 md:px-20 py-16 md:py-20 text-text-primary z-10 max-w-4xl order-2 md:order-1"
//                 initial={{ opacity: 0, x: -60 }}
//                 whileInView={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 2 }}
//                 viewport={{ once: false }}
//             >
//                 <div className="flex items-baseline mb-4">
//                     <span className="uppercase tracking-wider text-text-primary" style={{
//                         fontSize: 'var(--font-size-description)'
//                     }}>
//                         Technology. Simplified.
//                     </span>
//                 </div>
//                 <h1 className="font-extrabold leading-tight mb-6"
//                     style={{
//                         fontSize: 'var(--font-size-title)'
//                     }}>
//                     Tech Excellence, Delivered Here!
//                 </h1>
//                 <p className="leading-relaxed mb-8 max-w-lg  text-text-primary"
//                     style={{
//                         fontSize: 'var(--font-size-subheading)'
//                     }}>
//                     Transforming Ideas Into Digital Reality
//                 </p>
//                 <button
//                     className="font-bold py-3 px-8 rounded-lg bg-button-background text-button-text border-none text-lg transition duration-300 hover:shadow-lg hover:scale-102 cursor-pointer"
//                 >
//                     Explore More
//                 </button>
//             </motion.div>

//             {/* Angular Cutout Shape (Right Side) */}
//             <motion.div
//                 className="absolute right-0 top-0 h-full w-[clamp(500px,_60vw,_800px)] z-0 overflow-hidden"
//                 style={{
//                     backgroundColor: mainShapeColor,
//                     // Use clip-path for an angled edge
//                     clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)', // Creates a diagonal top-left cut
//                     transformOrigin: 'center center',
//                     // No rotation
//                 }}
//                 initial={{ filter: "brightness(1)" }}
//                 whileHover={{ filter: "brightness(1.1)" }}
//                 transition={{ type: "spring", stiffness: 210, damping: 24 }}
//             >
//                 {/* Image Carousel */}
//                 <div
//                     className="absolute inset-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
//                     style={{
//                         transform: `translateX(-${currentImageIndex * 100}%)`,
//                     }}
//                 >
//                     {carouselImages.map((image, index) => (
//                         <img
//                             key={index}
//                             src={image}
//                             alt={`Slide ${index + 1}`}
//                             className="w-full h-full object-cover flex-shrink-0"
//                             style={{
//                                 transform: 'rotate(0deg)', // No counter-rotation
//                                 transformOrigin: 'center center',
//                             }}
//                         />
//                     ))}
//                 </div>
//             </motion.div>
//         </section>
//     );
// };

// export default HeroSection;























// import React from "react";

// const HeroSection = () => (
//   <>
//     <style>
//       {`
//       @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@400;500&display=swap');
//       .hero-section {
//         min-height: 100vh;
//         background: linear-gradient(115deg, #0f2027 0%, #2c5364 100%);
//         color: #fff;
//         display: flex;
//         flex-direction: column;
//         justify-content: space-between;
//         padding: 0 5vw;
//         font-family: 'Roboto', sans-serif;
//       }
//       .nav-bar {
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//         min-height: 60px;
//         padding-top: 32px;
//       }
//       .logo {
//         font-family: 'Montserrat', sans-serif;
//         font-weight: bold;
//         font-size: 2rem;
//         letter-spacing: 2px;
//       }
//       .hero-cta {
//         background: transparent;
//         border: 2px solid #fff;
//         color: #fff;
//         font-weight: 500;
//         border-radius: 999px;
//         padding: 10px 32px;
//         text-decoration: none;
//         transition: background 0.2s, color 0.2s;
//       }
//       .hero-cta:hover {
//         background: #fff;
//         color: #2c5364;
//       }
//       .hero-content {
//         display: flex;
//         flex-direction: column;
//         justify-content: center;
//         min-height: 80vh;
//         max-width: 700px;
//         margin: auto 0;
//       }
//       .headline {
//         font-size: 2.8rem;
//         line-height: 1.15;
//         font-family: 'Montserrat', sans-serif;
//         font-weight: 700;
//         margin-bottom: 36px;
//         letter-spacing: -2px;
//         background: linear-gradient(90deg, #ffecd2 0%, #fcb69f 100%);
//         -webkit-background-clip: text;
//       }
//       .tagline {
//         font-size: 1.35rem;
//         margin-bottom: 42px;
//         color: rgba(255,255,255,0.87);
//         font-family: 'Roboto', sans-serif;
//         max-width: 600px;
//       }
//       .highlight {
//         color: #e0c3fc;
//         font-weight: 500;
//         letter-spacing: 1px;
//       }
//       .hero-button {
//         background: linear-gradient(90deg,#fc466b 0%, #3f5efb 100%);
//         color: #fff;
//         border: none;
//         border-radius: 999px;
//         padding: 16px 48px;
//         font-size: 1.1rem;
//         font-weight: bold;
//         letter-spacing: 1px;
//         cursor: pointer;
//         text-decoration: none;
//         transition: background 0.2s;
//         box-shadow: 0 6px 32px rgba(44,83,100,0.25);
//       }
//       .hero-button:hover {
//         background: linear-gradient(90deg, #3f5efb 10%, #fc466b 90%);
//       }
//       @media screen and (max-width: 900px) {
//         .hero-section {
//           padding: 0 2vw;
//         }
//         .headline {
//           font-size: 2.2rem;
//         }
//         .hero-content {
//           min-height: 70vh;
//         }
//       }
//       @media screen and (max-width: 600px) {
//         .nav-bar {
//           flex-direction: column;
//           gap: 16px;
//           padding-top: 20px;
//         }
//         .hero-content {
//           max-width: 100%;
//           min-height: 60vh;
//           text-align: center;
//         }
//       }
//       `}
//     </style>
//     <section className="hero-section">
//       <div className="hero-content">
//         <h1 className="headline">
//           "Innovating Your Digital Tomorrow,<br /> One Solution at a Time."
//         </h1>
//         <p className="tagline">
//           Empowering businesses with intelligent software, reliable infrastructure, and breakthrough creativity.<br />
//           <span className="highlight">Welcome to where technology meets trust.</span>
//         </p>
//         <a href="#about" className="hero-button">
//           Discover More
//         </a>
//       </div>
//     </section>
//   </>
// );

// export default HeroSection;
