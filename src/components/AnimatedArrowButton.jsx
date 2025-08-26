import React, { useState } from "react";

// Arrow icon (always points right)
function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={"text-xl " + className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 12h12m-6-6 6 6-6 6"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function MagicArrowButton({
  children = "First Name",
  onClick,
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      className="relative overflow-hidden group px-7 py-3 text-lg cursor-pointer font-semibold rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg  transition-transform duration-150 active:scale-95 min-w-[150px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
      style={{ minWidth: 180 }}
    >
      <span className="relative z-10 flex items-center justify-center w-full h-full">
        {/* LEFT ARROW (hovered only) */}
        <span
          className={`
            flex items-center transition-all duration-400 ease-in-out
            ${hovered ? "opacity-100 -translate-x-4" : " -translate-x-15 pointer-events-none"}
          `}
        >
          <ArrowIcon />
        </span>
        {/* BUTTON TEXT */}
        <span
          className={`
            flex-1 transition-all duration-400 ease-in-out text-center
            ${hovered ? "translate-x-1 text-right" : "-translate-x-1 text-left"}
          `}
        >
          {children}
        </span>
        {/* RIGHT ARROW (default, hides on hover) */}
        <span
          className={`
            flex items-center transition-all duration-400 ease-in-out
            ${hovered ? "opacity-0 translate-x-20 pointer-events-none" : "opacity-100 translate-x-5"}
          `}
        >
          <ArrowIcon />
        </span>
      </span>
    </button>
  );
}
















// import React, { useRef, useState } from "react";

// export default function MagicArrowButton({
//   children = "First Name",
//   onClick,
// }) {
//   const [hovered, setHovered] = useState(false);
//   const [sweeping, setSweeping] = useState(false);

//   // Overlay sweep arrow animation trigger
//   function handleClick(e) {
//     setSweeping(true);
//     if (onClick) onClick(e);
//     // Remove sweep after animation duration
//     setTimeout(() => setSweeping(false), 600);
//   }

//   return (
//     <button
//       type="button"
//       className="relative overflow-hidden group px-8 py-3 text-lg cursor-pointer font-semibold rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-400 transition-transform duration-150 active:scale-95"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       onClick={handleClick}
//       style={{ minWidth: 180 }}
//     >
//       {/* Button content */}
//       <span className="relative z-10 flex items-center justify-center w-full">
//         {/* Left arrow sliding into place on hover (points right) */}
//         <span
//           className={`
//             absolute left-0 h-full flex items-center
//             transition-transform  duration-400
//             ${
//               hovered && !sweeping
//                 ? "-translate-x-5 opacity-100"
//                 : "translate-x-[-5rem] "
//             }
//           `}
//         >
//           <ArrowIcon />
//         </span>
//         {/* Main Button Text */}
//         <span className="px-4">{children}</span>
//         {/* Right arrow sliding out on hover (points right) */}
//         <span
//           className={`
//             absolute right-0 h-full flex items-center
//             transition-transform  duration-400
//             ${
//               hovered && !sweeping
//                 ? "translate-x-[5rem]"
//                 : "translate-x-5 opacity-100"
//             }
//           `}
//         >
//           <ArrowIcon />
//         </span>
//       </span>
//       {/* Sweep overlay arrow when clicked (slides left to right over button) */}
//       {sweeping && (
//         <span
//           className="absolute top-0 left-0 h-full flex items-center"
//           style={{
//             animation: "arrow-sweep 0.55s cubic-bezier(0.4,0,0.2,1)",
//             zIndex: 60,
//             width: "100%",
//             pointerEvents: "none",
//           }}
//         >
//           <span
//             style={{
//               left: 0,
//               position: "absolute",
//               width: "100%",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             {/* Larger for more presence during sweep */}
//             <ArrowIcon className="!text-2xl !text-white opacity-80 drop-shadow-lg" />
//           </span>
//         </span>
//       )}
//       {/* Custom animation CSS */}
//       <style>{`
//         @keyframes arrow-sweep {
//           0% {
//             transform: translateX(-2.5rem);
//             opacity: 0;
//           }
//           15% {
//             opacity: 1;
//           }
//           50% {
//             transform: translateX(0%);
//             opacity: 1;
//           }
//           85% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateX(120%);
//             opacity: 0.6;
//           }
//         }
//       `}</style>
//     </button>
//   );
// }

// // Arrow icon (pointing right)
// function ArrowIcon({ className = "" }) {
//   return (
//     <svg
//       className={"text-xl " + className}
//       width={24}
//       height={24}
//       viewBox="0 0 24 24"
//       fill="none"
//     >
//       <path
//         d="M6 12h12m-6-6 6 6-6 6"
//         stroke="currentColor"
//         strokeWidth="2.3"
//         strokeLinecap="round"
//         strokeLinejoin="round"
//       />
//     </svg>
//   );
// }
