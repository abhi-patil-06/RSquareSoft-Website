import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Employee profiles data to show in carousel
const profiles = [
  {
    id: 1,
    photo: 'https://placehold.co/150x150/87CEEB/FFFFFF?text=JD',
    name: 'Jane Doe',
    designation: 'Senior Software Engineer',
    description: 'Passionate about crafting elegant and scalable software solutions.',
  },
  {
    id: 2,
    photo: 'https://placehold.co/150x150/FFD700/FFFFFF?text=AS',
    name: 'Alex Smith',
    designation: 'Product Manager',
    description: 'Bridging the gap between user needs and innovative technology.',
  },
  {
    id: 3,
    photo: 'https://placehold.co/150x150/90EE90/FFFFFF?text=CR',
    name: 'Chris Redfield',
    designation: 'UI/UX Designer',
    description: 'Creating intuitive and visually stunning user experiences.',
  },
  {
    id: 4,
    photo: 'https://placehold.co/150x150/FF6347/FFFFFF?text=EM',
    name: 'Emily White',
    designation: 'Data Scientist',
    description: 'Transforming complex data into actionable business insights.',
  },
  {
    id: 5,
    photo: 'https://placehold.co/150x150/DA70D6/FFFFFF?text=MB',
    name: 'Michael Brown',
    designation: 'DevOps Engineer',
    description: 'Automating and optimizing infrastructure for seamless deployments.',
  },
  {
    id: 6,
    photo: 'https://placehold.co/150x150/ADD8E6/FFFFFF?text=SK',
    name: 'Sarah Khan',
    designation: 'Cybersecurity Analyst',
    description: 'Protecting digital assets with robust security strategies.',
  },
];

// Animation variants for sliding
const slideVariants = {
  enter: (direction) => ({
    x: direction === "left" ? -300 : 300,
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative",
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
  },
  exit: (direction) => ({
    x: direction === "left" ? 300 : -300,
    opacity: 0,
    position: "absolute",
    transition: { duration: 0.3, ease: [0.4, 0.0, 0.2, 1] },
  }),
};

const CARD_HEIGHT = 320;

export default function EmployeeGrowthCarousel() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("right");
  const timeoutRef = useRef();

  // Auto-slide every 5 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setDirection("right");
      setIndex((prev) => (prev + 1) % profiles.length);
    }, 5000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Handle manual click navigation dots
  const handleDotClick = (idx) => {
    if (idx === index) return;
    setDirection(idx < index ? "left" : "right");
    setIndex(idx);
  };

  // Handle swipe drag end to switch slides
  const onDragEnd = (event, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -100 || velocity < -500) {
      // swipe left -> next
      setDirection("right");
      setIndex((prev) => (prev + 1) % profiles.length);
    } else if (offset > 100 || velocity > 500) {
      // swipe right -> previous
      setDirection("left");
      setIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
    }
  };

  const profile = profiles[index];

  // Custom colors
  const colors = {
    background: "#f9fafb",
    primaryText: "#1f2937", // dark gray
    accent: "#2563eb", // blue
    quote: "#374151", // slate gray
    dotActive: "#2563eb",
    dotInactive: "#d1d5db",
  };

  return (
    <section
      aria-label="Employee Growth and Development Carousel"
      className="flex flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8"
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        minHeight: "70vh",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <div className="text-center py-10">
        <h2
          className="font-bold text-text-primary"
          style={{ fontSize: "var(--font-size-heading1)" }}
        >
          Employee Growth & Development
        </h2>
        <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
      </div>

      <div
        className="relative w-1/2 rounded-xl overflow-hidden shadow-lg bg-white flex"
        style={{ height: CARD_HEIGHT, minHeight: CARD_HEIGHT, maxHeight: CARD_HEIGHT }}
      >
        <AnimatePresence initial={false} mode="wait" custom={direction}>
          <motion.div
            key={profile.id}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
            className="absolute inset-0 flex p-6"
            style={{ width: "100%", alignItems: "center" }}
          >
            {/* Profile Image */}
            <div
              style={{
                flexShrink: 0,
                width: 140,
                height: 140,
                borderRadius: "50%",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                border: `4px solid ${colors.accent}`,
              }}
            >
              <img
                src={profile.photo}
                alt={profile.name}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                draggable={false}
              />
            </div>

            {/* Text Content */}
            <div
              style={{
                marginLeft: 32,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "calc(100% - 172px)", // Full width minus image width + margin
              }}
            >
              <h3
                style={{
                  fontSize: "1.75rem",
                  fontWeight: "700",
                  color: colors.primaryText,
                  marginBottom: 8,
                }}
              >
                {profile.name}
              </h3>
              <h4
                style={{
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: colors.accent,
                  marginBottom: 16,
                  fontStyle: "italic",
                }}
              >
                {profile.designation}
              </h4>
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "400",
                  color: colors.quote,
                  maxHeight: "8rem",
                  overflow: "hidden",
                  lineHeight: 1.5,
                  borderLeft: `5px solid ${colors.accent}`,
                  paddingLeft: 20,
                  fontStyle: "italic",
                  quotes: '"“" "”"',
                }}
              >
                <span style={{ fontStyle: "italic" }}>&ldquo;</span>
                {profile.description}
                <span style={{ fontStyle: "italic" }}>&rdquo;</span>
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 gap-4" style={{ width: "100%" }}>
        {profiles.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Go to profile ${idx + 1}`}
            onClick={() => handleDotClick(idx)}
            className="rounded-full transition-transform duration-300 focus:outline-none"
            style={{
              width: idx === index ? 28 : 12,
              height: 12,
              backgroundColor: idx === index ? colors.dotActive : colors.dotInactive,
              transform: idx === index ? "scale(1.2)" : "none",
              boxShadow: idx === index ? "0 2px 8px rgba(37, 99, 235, 0.6)" : "none",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>
    </section>
  );
}









// import React, { useState, useEffect } from 'react';

// const profiles = [
//   {
//     id: 1,
//     photo: 'https://placehold.co/150x150/87CEEB/FFFFFF?text=JD',
//     name: 'Jane Doe',
//     designation: 'Senior Software Engineer',
//     description: 'Passionate about crafting elegant and scalable software solutions.',
//   },
//   {
//     id: 2,
//     photo: 'https://placehold.co/150x150/FFD700/FFFFFF?text=AS',
//     name: 'Alex Smith',
//     designation: 'Product Manager',
//     description: 'Bridging the gap between user needs and innovative technology.',
//   },
//   {
//     id: 3,
//     photo: 'https://placehold.co/150x150/90EE90/FFFFFF?text=CR',
//     name: 'Chris Redfield',
//     designation: 'UI/UX Designer',
//     description: 'Creating intuitive and visually stunning user experiences.',
//   },
//   {
//     id: 4,
//     photo: 'https://placehold.co/150x150/FF6347/FFFFFF?text=EM',
//     name: 'Emily White',
//     designation: 'Data Scientist',
//     description: 'Transforming complex data into actionable business insights.',
//   },
//   {
//     id: 5,
//     photo: 'https://placehold.co/150x150/DA70D6/FFFFFF?text=MB',
//     name: 'Michael Brown',
//     designation: 'DevOps Engineer',
//     description: 'Automating and optimizing infrastructure for seamless deployments.',
//   },
//   {
//     id: 6,
//     photo: 'https://placehold.co/150x150/ADD8E6/FFFFFF?text=SK',
//     name: 'Sarah Khan',
//     designation: 'Cybersecurity Analyst',
//     description: 'Protecting digital assets with robust security strategies.',
//   },
// ];

// function getIndex(i, n) {
//   return (i + n) % n;
// }

// export default function ProfileCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isSliding, setIsSliding] = useState(false);
//   const numProfiles = profiles.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       handleGoTo(getIndex(activeIndex + 1, numProfiles));
//     }, 5000);
//     return () => clearInterval(interval);
//     // eslint-disable-next-line
//   }, [activeIndex, numProfiles]);

//   function handleGoTo(targetIndex) {
//     if (activeIndex === targetIndex) return;
//     setIsSliding(true);
//     setTimeout(() => {
//       setActiveIndex(targetIndex);
//       setIsSliding(false);
//     }, 400);
//   }

//   // Compute visible: [prev, center, next]
//   const visibleProfiles = [
//     profiles[getIndex(activeIndex - 1, numProfiles)],
//     profiles[activeIndex],
//     profiles[getIndex(activeIndex + 1, numProfiles)],
//   ];

//   return (
//     <div className="w-full py-16 px-4 bg-gradient-to-br from-indigo-50 via-white to-blue-100 min-h-screen">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
//         Employee Growth &amp; Development
//       </h2>

//       {/* Carousel */}
//       <div className="relative flex justify-center items-center h-96 select-none overflow-visible">
//         {visibleProfiles.map((profile, idx) => {
//           // idx: 0=left, 1=center, 2=right
//           const pos = idx - 1;
//           // Positioning & animation
//           let base = "absolute top-1/2 left-1/2 w-80 transition-all duration-500 ease-in-out";
//           let translate = "";
//           let style = {};
//           if (pos === -1) {
//             // left
//             translate = "translate-x-[-540px] -translate-y-1/2 scale-95 opacity-80 z-10 cursor-pointer";
//             style = { zIndex: 10 };
//           } else if (pos === 0) {
//             // center
//             translate = "-translate-x-1/2 -translate-y-1/2 scale-105 shadow-2xl ring-4 ring-indigo-200 z-30";
//             style = { zIndex: 30 };
//           } else if (pos === 1) {
//             // right
//             translate = "translate-x-[220px] -translate-y-1/2 scale-95 opacity-80 z-10 cursor-pointer";
//             style = { zIndex: 10 };
//           }

//           return (
//             <div
//               key={profile.id}
//               className={`${base} ${translate} ${isSliding ? "pointer-events-none" : ""}`}
//               style={style}
//               onClick={() => {
//                 if (pos !== 0 && !isSliding) {
//                   handleGoTo(getIndex(activeIndex + pos, numProfiles));
//                 }
//               }}
//             >
//               <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center">
//                 <div className="w-28 h-28 rounded-full overflow-hidden mb-4 shadow">
//                   <img
//                     src={profile.photo}
//                     alt={profile.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
//                   {profile.name}
//                 </h3>
//                 <p className="text-md text-indigo-600 mb-2 text-center">
//                   {profile.designation}
//                 </p>
//                 <p className="text-sm text-gray-600 italic text-center">
//                   "{profile.description}"
//                 </p>
//               </div>
//             </div>
//           );
//         })}

//         {/* Arrows */}
//         <button
//           aria-label="Previous profile"
//           className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-indigo-200 rounded-full px-3 py-2 text-2xl text-gray-600 shadow-xl transition z-40"
//           onClick={() => handleGoTo(getIndex(activeIndex - 1, numProfiles))}
//           disabled={isSliding}
//         >
//           &#8592;
//         </button>
//         <button
//           aria-label="Next profile"
//           className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-indigo-200 rounded-full px-3 py-2 text-2xl text-gray-600 shadow-xl transition z-40"
//           onClick={() => handleGoTo(getIndex(activeIndex + 1, numProfiles))}
//           disabled={isSliding}
//         >
//           &#8594;
//         </button>
//       </div>

//       {/* Pagination */}
//       <div className="flex justify-center mt-14 space-x-2">
//         {profiles.map((_, idx) => (
//           <button
//             key={idx}
//             aria-label={"Go to profile " + (idx + 1)}
//             className={`w-3 h-1.5 rounded-full mx-1 transition-all duration-300
//               ${idx === activeIndex ? "bg-indigo-500 w-7" : "bg-gray-300 w-3"}
//             `}
//             onClick={() => handleGoTo(idx)}
//             disabled={isSliding}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }




















// import React, { useState, useEffect, useRef, useCallback } from 'react';

// const profiles = [
//   {
//     id: 1,
//     photo: 'https://placehold.co/150x150/87CEEB/FFFFFF?text=JD',
//     name: 'Jane Doe',
//     designation: 'Senior Software Engineer',
//     description: 'Passionate about crafting elegant and scalable software solutions.',
//   },
//   {
//     id: 2,
//     photo: 'https://placehold.co/150x150/FFD700/FFFFFF?text=AS',
//     name: 'Alex Smith',
//     designation: 'Product Manager',
//     description: 'Bridging the gap between user needs and innovative technology.',
//   },
//   {
//     id: 3,
//     photo: 'https://placehold.co/150x150/90EE90/FFFFFF?text=CR',
//     name: 'Chris Redfield',
//     designation: 'UI/UX Designer',
//     description: 'Creating intuitive and visually stunning user experiences.',
//   },
//   {
//     id: 4,
//     photo: 'https://placehold.co/150x150/FF6347/FFFFFF?text=EM',
//     name: 'Emily White',
//     designation: 'Data Scientist',
//     description: 'Transforming complex data into actionable business insights.',
//   },
//   {
//     id: 5,
//     photo: 'https://placehold.co/150x150/DA70D6/FFFFFF?text=MB',
//     name: 'Michael Brown',
//     designation: 'DevOps Engineer',
//     description: 'Automating and optimizing infrastructure for seamless deployments.',
//   },
//   {
//     id: 6,
//     photo: 'https://placehold.co/150x150/ADD8E6/FFFFFF?text=SK',
//     name: 'Sarah Khan',
//     designation: 'Cybersecurity Analyst',
//     description: 'Protecting digital assets with robust security strategies.',
//   },
// ];

// export default function ProfileCarousel() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const numProfiles = profiles.length;

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveIndex((prev) => (prev + 1) % numProfiles);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [numProfiles]);

//   const visibleProfiles = [
//     profiles[(activeIndex - 1 + numProfiles) % numProfiles],
//     profiles[activeIndex],
//     profiles[(activeIndex + 1) % numProfiles],
//   ];

//   return (
//     <div className="w-full py-16 px-4 bg-white">
//       <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
//         Employee Growth & Development
//       </h2>
//       <div className="max-w-7xl mx-auto flex justify-center items-center gap-6">
//         {visibleProfiles.map((profile, index) => (
//           <div
//             key={profile.id}
//             className={`bg-white rounded-xl shadow-lg p-6 flex flex-col items-center transition-all duration-500 w-72 ${
//               index === 1 ? 'scale-105 shadow-2xl' : 'opacity-90'
//             }`}
//           >
//             <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
//               <img
//                 src={profile.photo}
//                 alt={profile.name}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             <h3 className="text-xl font-bold text-gray-800 mb-1 text-center">
//               {profile.name}
//             </h3>
//             <p className="text-md text-indigo-600 mb-2 text-center">
//               {profile.designation}
//             </p>
//             <p className="text-sm text-gray-600 text-center">
//               "{profile.description}"
//             </p>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center mt-8 space-x-2">
//         {profiles.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-1 rounded-full transition-all duration-300 ${
//               index === activeIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300'
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }
























// import React, { useState, useEffect, useRef, useCallback } from 'react';

// // Dummy data for the profiles. Replace with your actual data.
// const profiles = [
//   {
//     id: 1,
//     photo: 'https://placehold.co/150x150/87CEEB/FFFFFF?text=JD', // Placeholder image for Jane Doe
//     name: 'Jane Doe',
//     designation: 'Senior Software Engineer',
//     description: 'Passionate about crafting elegant and scalable software solutions.',
//   },
//   {
//     id: 2,
//     photo: 'https://placehold.co/150x150/FFD700/FFFFFF?text=AS', // Placeholder image for Alex Smith
//     name: 'Alex Smith',
//     designation: 'Product Manager',
//     description: 'Bridging the gap between user needs and innovative technology.',
//   },
//   {
//     id: 3,
//     photo: 'https://placehold.co/150x150/90EE90/FFFFFF?text=CR', // Placeholder image for Chris Redfield
//     name: 'Chris Redfield',
//     designation: 'UI/UX Designer',
//     description: 'Creating intuitive and visually stunning user experiences.',
//   },
//   {
//     id: 4,
//     photo: 'https://placehold.co/150x150/FF6347/FFFFFF?text=EM', // Placeholder image for Emily White
//     name: 'Emily White',
//     designation: 'Data Scientist',
//     description: 'Transforming complex data into actionable business insights.',
//   },
//   {
//     id: 5,
//     photo: 'https://placehold.co/150x150/DA70D6/FFFFFF?text=MB', // Placeholder image for Michael Brown
//     name: 'Michael Brown',
//     designation: 'DevOps Engineer',
//     description: 'Automating and optimizing infrastructure for seamless deployments.',
//   },
//   {
//     id: 6,
//     photo: 'https://placehold.co/150x150/ADD8E6/FFFFFF?text=SK', // Placeholder image for Sarah Khan
//     name: 'Sarah Khan',
//     designation: 'Cybersecurity Analyst',
//     description: 'Protecting digital assets with robust security strategies.',
//   },
// ];

// export default function ProfileCarousel() {
//   // State to keep track of the currently active (centered) profile index
//   const [activeIndex, setActiveIndex] = useState(0);
//   // State to manage mouse drag functionality
//   const [isDragging, setIsDragging] = useState(false);
//   // Stores the starting X coordinate of the mouse when a drag begins
//   const [startX, setStartX] = useState(0);
//   // Stores the current offset applied to cards during a drag
//   const [dragOffset, setDragOffset] = useState(0);
//   // Ref to attach event listeners to the carousel container
//   const carouselRef = useRef(null);

//   const numProfiles = profiles.length;

//   // --- Mouse Drag Event Handlers ---

//   // Handles mouse button press to start dragging
//   const handleMouseDown = useCallback((e) => {
//     setIsDragging(true);
//     setStartX(e.pageX); // Record the starting X position
//     // Prevent default browser drag behavior (e.g., image dragging)
//     e.preventDefault();
//   }, []);

//   // Handles mouse movement while dragging
//   const handleMouseMove = useCallback((e) => {
//     if (!isDragging) return; // Only process if currently dragging
//     e.preventDefault(); // Prevent text selection during drag
//     const x = e.pageX - startX; // Calculate current horizontal drag distance
//     setDragOffset(x); // Update the drag offset, which will visually move the cards
//   }, [isDragging, startX]);

//   // Handles mouse button release to end dragging
//   const handleMouseUp = useCallback(() => {
//     setIsDragging(false); // End dragging state

//     // Determine if the drag was significant enough to change the active profile
//     // The threshold is set based on a percentage of the card's approximate width
//     const cardWidth = 320; // Approximate width of a card (md:w-[320px])
//     const dragThreshold = cardWidth * 0.2; // Drag 20% of a card width to trigger change

//     if (dragOffset > dragThreshold) {
//       // Dragged right, move to the previous profile in the circular list
//       setActiveIndex((prevIndex) => (prevIndex - 1 + numProfiles) % numProfiles);
//     } else if (dragOffset < -dragThreshold) {
//       // Dragged left, move to the next profile in the circular list
//       setActiveIndex((prevIndex) => (prevIndex + 1) % numProfiles);
//     }

//     // Reset dragOffset to 0. This will cause the cards to snap to their new
//     // positions based on the updated activeIndex, thanks to CSS transitions.
//     setDragOffset(0);
//   }, [dragOffset, numProfiles]);

//   // Handles mouse leaving the carousel area while dragging
//   const handleMouseLeave = useCallback(() => {
//     if (isDragging) {
//       handleMouseUp(); // Treat leaving as ending the drag
//     }
//   }, [isDragging, handleMouseUp]);

//   // --- Effect Hooks ---
// //   Sliding automatically
//   useEffect(() => {
//   if (!profiles.length) return;
//   const timer = setInterval(() => {
//     setActiveIndex((prev) => (prev + 1) % profiles.length);
//   }, 5000); // 5 seconds auto-move

//   return () => clearInterval(timer);
// }, [profiles.length]);


//   // Effect to manage mouse event listeners on the carousel container
//   useEffect(() => {
//     const carouselElement = carouselRef.current;
//     if (carouselElement) {
//       // Add event listeners for mouse drag
//       carouselElement.addEventListener('mousedown', handleMouseDown);
//       carouselElement.addEventListener('mousemove', handleMouseMove);
//       carouselElement.addEventListener('mouseup', handleMouseUp);
//       carouselElement.addEventListener('mouseleave', handleMouseLeave);

//       return () => {
//         // Clean up event listeners when the component unmounts
//         carouselElement.removeEventListener('mousedown', handleMouseDown);
//         carouselElement.removeEventListener('mousemove', handleMouseMove);
//         carouselElement.removeEventListener('mouseup', handleMouseUp);
//         carouselElement.removeEventListener('mouseleave', handleMouseLeave);
//       };
//     }
//   }, [handleMouseDown, handleMouseMove, handleMouseUp, handleMouseLeave]); // Dependencies ensure effect re-runs if handlers change

//   // Effect to update the cursor style based on dragging state
//   useEffect(() => {
//     const carouselElement = carouselRef.current;
//     if (carouselElement) {
//       carouselElement.style.cursor = isDragging ? 'grabbing' : 'grab';
//     }
//   }, [isDragging]); // Re-run effect when isDragging state changes

//   // Function to calculate dynamic styles for each card based on its position relative to the active card
//   const getCardStyle = useCallback((index) => {
//     // Calculate the effective relative index for circular positioning.
//     // This ensures that cards wrap around visually (e.g., the last card appears to the left of the first when active).
//     // Adding `numProfiles * 1.5` and then modulo `numProfiles` helps in correctly handling negative indices
//     // and wrapping for a seamless circular effect.
//     const effectiveRelativeIndex = (index - activeIndex + numProfiles * 1.5) % numProfiles - numProfiles / 2;

//     let translateX = '0%'; // Base horizontal translation for the "cover flow" effect
//     let scale = 1;         // Size scale for the card
//     let opacity = 1;       // Transparency of the card
//     let zIndex = 0;        // Stacking order (for overlapping cards)
//     let blur = 0;          // Blur effect applied to the card

//     // Apply styles based on the card's proximity to the active (center) card
//     if (Math.abs(effectiveRelativeIndex) < 0.01) { // Active card (exactly in the center)
//       scale = 1.15; // Slightly larger to highlight
//       zIndex = 10;  // On top of other cards
//       opacity = 1;  // Fully visible
//       translateX = '0%'; // Centered
//       blur = 0;     // No blur
//     } else if (effectiveRelativeIndex > 0 && effectiveRelativeIndex < 1) { // Immediately to the right of active
//       scale = 0.9;
//       zIndex = 5;
//       opacity = 0.7;
//       translateX = '40%'; // Moved right
//       blur = 2;     // Slight blur
//     } else if (effectiveRelativeIndex < 0 && effectiveRelativeIndex > -1) { // Immediately to the left of active
//       scale = 0.9;
//       zIndex = 5;
//       opacity = 0.7;
//       translateX = '-40%'; // Moved left
//       blur = 2;     // Slight blur
//     } else if (effectiveRelativeIndex > 1 && effectiveRelativeIndex < 2) { // Second card to the right
//       scale = 0.7;
//       zIndex = 1;
//       opacity = 0.4;
//       translateX = '80%';
//       blur = 4;     // More blur
//     } else if (effectiveRelativeIndex < -1 && effectiveRelativeIndex > -2) { // Second card to the left
//       scale = 0.7;
//       zIndex = 1;
//       opacity = 0.4;
//       translateX = '-80%';
//       blur = 4;     // More blur
//     } else { // Cards far away (effectively hidden or barely visible)
//       scale = 0.5;
//       zIndex = 0;
//       opacity = 0;
//       translateX = effectiveRelativeIndex > 0 ? '120%' : '-120%'; // Move far off screen
//       blur = 6;     // Heavily blurred
//     }

//     return {
//       // Combine base translateX with the live dragOffset for continuous movement during drag
//       transform: `translateX(calc(${translateX} + ${dragOffset}px)) scale(${scale})`,
//       opacity: opacity,
//       zIndex: zIndex,
//       filter: `blur(${blur}px)`,
//       // Only allow pointer events (clicks, hovers) on cards that are visibly close to the center
//       pointerEvents: Math.abs(effectiveRelativeIndex) < 1.5 ? 'auto' : 'none',
//     };
//   }, [activeIndex, numProfiles, dragOffset]); // dragOffset is a new dependency here

//   return (
//     <div className="relative w-full h-[700px] bg-amber-100 flex flex-col items-center justify-center overflow-hidden">
//       {/* Carousel track where cards are positioned.
//           Mouse event listeners are attached here for drag functionality. */}
//       <div
//         ref={carouselRef}
//         className="relative w-full h-full flex items-center justify-center"
//         // Cursor style is handled by useEffect for dynamic grab/grabbing
//       >
//         {profiles.map((profile, index) => (
//           // Individual profile card.
//           // Styles are dynamically applied for the smooth "cover flow" effect.
//           <div
//             key={profile.id}
//             className="absolute bg-white rounded-xl shadow-lg flex flex-col items-center justify-center
//                        transition-all duration-700 ease-in-out transform-gpu
//                        w-[280px] h-[380px] sm:w-[300px] sm:h-[400px] md:w-[320px] md:h-[420px]"
//             style={getCardStyle(index)}
//           >
//             {/* Profile Photo - fixed size, circular, no border */}
//             <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden mb-4 shadow-md">
//               <img
//                 src={profile.photo}
//                 alt={profile.name}
//                 className="w-full h-full object-cover"
//                 // Fallback for broken images: display initials in a placeholder
//                 onError={(e) => {
//                   e.target.onerror = null; // Prevent infinite loop if fallback also fails
//                   e.target.src = `https://placehold.co/150x150/CCCCCC/333333?text=${profile.name.split(' ').map(n => n[0]).join('')}`;
//                 }}
//               />
//             </div>
//             {/* Name - bold and centered */}
//             <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-1 text-center font-inter">
//               {profile.name}
//             </h3>
//             {/* Designation - indigo color for emphasis */}
//             <p className="text-md sm:text-lg text-indigo-600 mb-3 text-center font-inter">
//               {profile.designation}
//             </p>
//             {/* Short Description - concise and centered */}
//             <p className="text-sm text-gray-600 text-center max-w-[200px] font-inter">
//               "{profile.description}"
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Indicators (short lines below the cards) */}
//       <div className="absolute bottom-8 flex space-x-2">
//         {profiles.map((_, index) => (
//           <div
//             key={index}
//             className={`w-3 h-1 rounded-full transition-all duration-300 ${
//               index === activeIndex ? 'bg-indigo-600 w-6' : 'bg-gray-300' // Active indicator is wider and darker
//             }`}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

