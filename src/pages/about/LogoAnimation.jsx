import React, { useState, useRef, useEffect } from "react";

const LogoAnimation = () => {
  const sectionRef = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "150px",
          height: "150px",
          marginTop: 20,
          transform: "rotateX(20deg) rotateY(-40deg)",
        }}
      >
        {/* Green square - back */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: -10,
            left: -30,
            pointerEvents: "none",
          }}
        >
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            fill="none"
            stroke="#4caf50"
            strokeWidth="4"
            strokeDasharray="360"
            strokeDashoffset={animate ? 360 : 0}
            style={{ animation: animate ? "dash 2s linear forwards" : "none" }}
          />
        </svg>

        {/* Blue square - middle */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 15,
            left: 0,
            pointerEvents: "none",
          }}
        >
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            fill="none"
            stroke="#1976d2"
            strokeWidth="4"
            strokeDasharray="360"
            strokeDashoffset={animate ? 360 : 0}
            style={{ animation: animate ? "dash 2s linear forwards" : "none" }}
          />
        </svg>

        {/* Orange square - front */}
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          style={{
            position: "absolute",
            top: 40,
            left: 27,
            pointerEvents: "none",
          }}
        >
          <rect
            x="5"
            y="5"
            width="90"
            height="90"
            fill="none"
            stroke="#f57c00"
            strokeWidth="4"
            strokeDasharray="360"
            strokeDashoffset={animate ? 360 : 0}
            style={{ animation: animate ? "dash 2s linear forwards" : "none" }}
          />
        </svg>
      </div>

      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        svg rect {
          vector-effect: non-scaling-stroke;
        }
      `}</style>
    </section>
  );
};

export default LogoAnimation;











// Move only one time 


// import React, { useState, useRef, useEffect } from "react";

// const LogoAnimation = () => {
//   const sectionRef = useRef(null);
//   const [animate, setAnimate] = useState(false);
//   const [animationDone, setAnimationDone] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setAnimate(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) observer.observe(sectionRef.current);

//     return () => {
//       if (sectionRef.current) observer.unobserve(sectionRef.current);
//     };
//   }, []);

//   useEffect(() => {
//     if (animate && !animationDone) {
//       const timeout = setTimeout(() => setAnimationDone(true), 2000); // 2s animation duration
//       return () => clearTimeout(timeout);
//     }
//   }, [animate, animationDone]);

//   return (
//     <section
//       ref={sectionRef}
//       style={{ minHeight: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}
//     >
//       <div
//         style={{
//           position: "relative",
//           width: "150px",
//           height: "150px",
//           marginTop: 20,
//           transform: "rotateX(20deg) rotateY(-40deg)",
//         }}
//       >
//         {/* Green square - back */}
//         <svg
//           width="100"
//           height="100"
//           viewBox="0 0 100 100"
//           style={{ position: "absolute", top: -10, left: -30, pointerEvents: "none" }}
//         >
//           <rect
//             x="5"
//             y="5"
//             width="90"
//             height="90"
//             fill="none"
//             stroke="#4caf50"
//             strokeWidth="4"
//             strokeDasharray="360"
//             strokeDashoffset={animationDone ? 0 : 360}
//             style={{ animation: animate && !animationDone ? "dash 2s linear forwards" : "none" }}
//           />
//         </svg>

//         {/* Blue square - middle */}
//         <svg
//           width="100"
//           height="100"
//           viewBox="0 0 100 100"
//           style={{ position: "absolute", top: 15, left: 0, pointerEvents: "none" }}
//         >
//           <rect
//             x="5"
//             y="5"
//             width="90"
//             height="90"
//             fill="none"
//             stroke="#1976d2"
//             strokeWidth="4"
//             strokeDasharray="360"
//             strokeDashoffset={animationDone ? 0 : 360}
//             style={{ animation: animate && !animationDone ? "dash 2s linear forwards" : "none" }}
//           />
//         </svg>

//         {/* Orange square - front */}
//         <svg
//           width="100"
//           height="100"
//           viewBox="0 0 100 100"
//           style={{ position: "absolute", top: 40, left: 27, pointerEvents: "none" }}
//         >
//           <rect
//             x="5"
//             y="5"
//             width="90"
//             height="90"
//             fill="none"
//             stroke="#f57c00"
//             strokeWidth="4"
//             strokeDasharray="360"
//             strokeDashoffset={animationDone ? 0 : 360}
//             style={{ animation: animate && !animationDone ? "dash 2s linear forwards" : "none" }}
//           />
//         </svg>
//       </div>

//       <style>{`
//         @keyframes dash {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
//         svg rect {
//           vector-effect: non-scaling-stroke;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LogoAnimation;
















// Move continuously


// import React, { useState, useRef, useEffect } from "react";

// const LogoAnimation = () => {
//   const sectionRef = useRef(null);
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setAnimate(entry.isIntersecting);
//       },
//       {
//         threshold: 0.1, // triggers when 10% visible
//       }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       style={{ minHeight: "300px", display: "flex", justifyContent: "center", alignItems: "center" }}
//     >
//       <div
//         style={{
//           position: "relative",
//           width: "150px",
//           height: "150px",
//           marginTop: 20,
//           transform: "rotateX(20deg) rotateY(-40deg)",
//         }}
//       >
//         {/* Green square - back */}
//         <svg
//           width="100"
//           height="100"
//           viewBox="0 0 100 100"
//           style={{
//             position: "absolute",
//             top: -10,
//             left: -30,
//             pointerEvents: "none",
//           }}
//         >
//           <rect
//             x="5"
//             y="5"
//             width="90"
//             height="90"
//             fill="none"
//             stroke="#4caf50"
//             strokeWidth="4"
//             strokeDasharray="360"
//             strokeDashoffset={animate ? 360 : 0}
//             style={{ animation: animate ? "dash 2s linear infinite" : "none" }}
//           />
//         </svg>

//         {/* Blue square - middle */}
//         <svg
//           width="100"
//           height="100"
//           viewBox="0 0 100 100"
//           style={{
//             position: "absolute",
//             top: 15,
//             left: 0,
//             pointerEvents: "none",
//           }}
//         >
//           <rect
//             x="5"
//             y="5"
//             width="90"
//             height="90"
//             fill="none"
//             stroke="#1976d2"
//             strokeWidth="4"
//             strokeDasharray="360"
//             strokeDashoffset={animate ? 360 : 0}
//             style={{ animation: animate ? "dash 2s linear infinite" : "none" }}
//           />
//         </svg>

//         {/* Orange square - front */}
//         <svg
//           width="100"
//           height="100"
//           viewBox="0 0 100 100"
//           style={{
//             position: "absolute",
//             top: 40,
//             left: 27,
//             pointerEvents: "none",
//           }}
//         >
//           <rect
//             x="5"
//             y="5"
//             width="90"
//             height="90"
//             fill="none"
//             stroke="#f57c00"
//             strokeWidth="4"
//             strokeDasharray="360"
//             strokeDashoffset={animate ? 360 : 0}
//             style={{ animation: animate ? "dash 2s linear infinite" : "none" }}
//           />
//         </svg>
//       </div>

//       <style>{`
//         @keyframes dash {
//           to {
//             stroke-dashoffset: 0;
//           }
//         }
//         svg rect {
//           vector-effect: non-scaling-stroke;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default LogoAnimation;
