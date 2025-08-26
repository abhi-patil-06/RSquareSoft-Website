import React, { useState, useRef, useEffect } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "../about/AboutUsSection";
import LifeAtCompany from "./LifeAtCompany";
import TechnologySection from "./TechnologySection";
import ValuePropositionSection from "./ValuePrepositionSection";
import SolutionsSection from "./SolutionsSection";
import Loader from "../../components/Loader";

// Adjust this if your main navbar is a different height
const NAVBAR_HEIGHT = 85; // px (e.g., 64 for 4rem navbar)

const sections = [
  { id: "aboutSection", label: "About" },
  { id: "servicesSection", label: "Technology" },
  { id: "solutionsSection", label: "Services" },
  { id: "lifeAtCompanySection", label: "Life at Company" },
  { id: "valuePrepositionSection", label: "Why Us" },
  // Add more if needed
];

// function SubNavbar({ activeSection, onNavClick, isSticky }) {
//   return (
//     <nav
//       className={
//         `w-full z-55 ` +
//         (isSticky ? "fixed left-0" : "relative") 
//       }
//       style={{
//         top: isSticky ? `${NAVBAR_HEIGHT}px` : "0px",
//         boxShadow: isSticky ? "0 2px 4px 0 rgba(29,78,216,0.08)" : "none",
//       }}
//     >
//       <div
//         className="w-full h-[50px] flex items-start justify-start md:justify-start bg-background backdrop-blur-md px-4 md:px-10 overflow-x-auto"
//         style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
//       >
//         <div className="flex flex-nowrap md:flex-wrap space-x-3 md:space-x-1">
//           {sections.map((section) => (
//             <div key={section.id} className="relative flex flex-col items-center shrink-0 md:shrink-auto mb-0 md:mb-0">
//               <button
//                 onClick={() => onNavClick(section.id)}
//                 className={
//                   "px-4 md:px-5 py-2 md:py-3  transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap text-sm md:text-base " +
//                   (activeSection === section.id
//                     ? "bg-primary text-button-text scale-105 shadow-xl"
//                     : "text-primary hover:bg-blue-100/70 bg-transparent")
//                 }
//                 style={{
//                   boxShadow: activeSection === section.id ? "0 2px 20px 0 #2563eb44" : "none",
//                   fontSize: "var(--font-size-subheading)",
//                 }}
//               >
//                 {section.label}
//               </button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </nav>

//   );
// }
function SubNavbar({ activeSection, onNavClick, isSticky }) {
  const scrollContainerRef = useRef(null);
  const buttonsRef = useRef({}); // to store refs of buttons by section id

  useEffect(() => {
    const container = scrollContainerRef.current;
    const activeBtn = buttonsRef.current[activeSection];

    if (container && activeBtn) {
      // Calculate positions
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeBtn.getBoundingClientRect();

      // Check if button is fully visible, if not, scroll container
      if (buttonRect.right > containerRect.right) {
        // Scroll right to show full button
        const scrollAmount = buttonRect.right - containerRect.right;
        container.scrollBy({ left: scrollAmount + 20, behavior: 'smooth' });
      } else if (buttonRect.left < containerRect.left) {
        // Scroll left to show full button
        const scrollAmount = containerRect.left - buttonRect.left;
        container.scrollBy({ left: -scrollAmount - 20, behavior: 'smooth' });
      }
      // Optional: If you want to always scroll to active button (even if visible),
      // you can use activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
  }, [activeSection]);

  return (
    <nav
      className={`w-full z-55 ${isSticky ? 'fixed left-0' : 'relative'}`}
      style={{
        top: isSticky ? `${NAVBAR_HEIGHT}px` : '0px',
        boxShadow: isSticky ? '0 2px 4px 0 rgba(29,78,216,0.08)' : 'none',
      }}
    >
      <div
        ref={scrollContainerRef}
        className="w-full h-[50px] flex items-start justify-start md:justify-start bg-background backdrop-blur-md px-4 md:px-10 overflow-x-auto"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div className="flex flex-nowrap md:flex-wrap space-x-3 md:space-x-1">
          {sections.map((section) => (
            <div
              key={section.id}
              className="relative flex flex-col items-center shrink-0 md:shrink-auto mb-0 md:mb-0"
              ref={(el) => (buttonsRef.current[section.id] = el)}
            >
              <button
                onClick={() => onNavClick(section.id)}
                className={
                  'px-4 md:px-5 py-2 md:py-3 transition-all duration-200 shadow-sm cursor-pointer whitespace-nowrap text-sm md:text-base ' +
                  (activeSection === section.id
                    ? 'bg-primary text-button-text scale-105 shadow-xl'
                    : 'text-primary hover:bg-blue-100/70 bg-transparent')
                }
                style={{
                  boxShadow:
                    activeSection === section.id ? '0 2px 20px 0 #2563eb44' : 'none',
                  fontSize: 'var(--font-size-subheading)',
                }}
              >
                {section.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}


export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const heroRef = useRef(null);

  // Section refs for scroll and nav highlight
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const solutionsRef = useRef(null);
  const lifeRef = useRef(null);
  const valueRef = useRef(null);


  // Detect sticky state and active section on scroll
  useEffect(() => {
    function onScroll() {
      const heroBottom = heroRef.current.getBoundingClientRect().bottom;
      setIsSticky(heroBottom <= NAVBAR_HEIGHT);

      // Section highlight logic
      const aboutTop = aboutRef.current.getBoundingClientRect().top - NAVBAR_HEIGHT - 60;
      const servicesTop = servicesRef.current.getBoundingClientRect().top - NAVBAR_HEIGHT - 60;
      const solutionsTop = solutionsRef.current.getBoundingClientRect().top - NAVBAR_HEIGHT - 60;
      const lifeTop = lifeRef.current.getBoundingClientRect().top - NAVBAR_HEIGHT - 60;
      const valueTop = valueRef.current.getBoundingClientRect().top - NAVBAR_HEIGHT - 60;

      if (valueTop <= 0) setActiveSection("valuePrepositionSection");
      else if (lifeTop <= 0) setActiveSection("lifeAtCompanySection");
      else if (solutionsTop <= 0) setActiveSection("solutionsSection");
      else if (servicesTop <= 0) setActiveSection("servicesSection");
      else if (aboutTop <= 0) setActiveSection("aboutSection");
      else setActiveSection(sections[0].id);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll on nav click (with smooth scroll and offset)
  const handleNavClick = (id) => {
    const refs = {
      aboutSection: aboutRef,
      servicesSection: servicesRef,
      solutionsSection: solutionsRef,
      lifeAtCompanySection: lifeRef,
      valuePrepositionSection: valueRef,
    };
    const ref = refs[id];
    if (ref && ref.current) {
      const offset = NAVBAR_HEIGHT + (isSticky ? aboutRef.current.offsetTop > 0 ? 0 : 10 : 0);
      const EXTRA_SPACE = id === "aboutSection" ? 0 : 10;

      window.scrollTo({
        top: ref.current.offsetTop - NAVBAR_HEIGHT - EXTRA_SPACE ,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="bg-background font-family-base">
        {/* <div className="bg-gradient-to-br from-[#e8f1fb] to-[#c9e0fa]"> */}
        {/* HeroSection with ref for scroll detection */}
        <div ref={heroRef}>
          <HeroSection />
        </div>

        {/* <div>
            <Loader />
        </div> */}

        {/* SubNavbar */}
        <div id="subNavbar" className="relative hidden md:flex z-40">
          <SubNavbar
            activeSection={activeSection}
            onNavClick={handleNavClick}
            isSticky={isSticky}
          />
        </div>

        {/* Page Sections */}
        <section ref={aboutRef} id="aboutSection" className="scroll-mt-20" >
          <AboutSection />
        </section>
        <section ref={servicesRef} id="servicesSection" className="scroll-mt-20">
          <TechnologySection />
        </section>

        <section ref={solutionsRef} id="solutionsSection">
          <SolutionsSection />
        </section>

        <section ref={lifeRef} id="lifeAtCompanySection" className="scroll-mt-20">
          <LifeAtCompany />
        </section>

        <section ref={valueRef} id="valuePrepositionSection" className="">
          <ValuePropositionSection />
        </section>
      </div>
    </>
  );
}