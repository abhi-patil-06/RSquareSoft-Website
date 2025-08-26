import React, { useState, useEffect, useRef } from 'react';
import { RiArrowUpDoubleFill } from 'react-icons/ri';

const ScrollToTopCircleButton = () => {
  const [visible, setVisible] = useState(false);
  const [animateClick, setAnimateClick] = useState(false);
  const circleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    setAnimateClick(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Remove click animation class after animation ends (0.6s)
  useEffect(() => {
    if (animateClick) {
      const timeout = setTimeout(() => setAnimateClick(false), 600);
      return () => clearTimeout(timeout);
    }
  }, [animateClick]);

  return visible ? (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        background: 'none',
        border: 'none',
        padding: 0,
        cursor: 'pointer',
        outline: 'none',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      className={`circleScrollToTop ${animateClick ? 'clicked' : ''}`}
    >
      <svg
        ref={circleRef}
        className="circleSvg"
        width="60"
        height="60"
        viewBox="0 0 60 60"
      >
        <circle
          className="circleBorder"
          cx="30"
          cy="30"
          r="28"
          stroke="#01088f"
          strokeWidth="3"
          fill="none"
        />
      </svg>
      <RiArrowUpDoubleFill
        size={28}
        style={{ color: '#01088f', position: 'absolute' }}
        className="circleIcon hover:scale-y-120"
      />
      <style>{`
        .circleScrollToTop {
          transition: color 0.33s cubic-bezier(0.4,0,0.2,1);
          position: relative;
          width: 60px;
          height: 60px;
        }
        .circleScrollToTop:hover .circleBorder {
          stroke: #01088f;
          animation: drawCircle 1s ease forwards;
        }
        .circleScrollToTop:hover .circleIcon {
          color: #01088f;
          transition: color 0.33s cubic-bezier(0.4,0,0.2,1);
        }
        .circleBorder {
          stroke-dasharray: 176; /* circumference 2*pi*28 */
          stroke-dashoffset: 176;
          transition: stroke 0.33s ease;
        }
        @keyframes drawCircle {
          to {
            stroke-dashoffset: 0;
          }
        }
        .clicked .circleBorder {
          animation: clickPulse 0.6s ease forwards;
          stroke: #01088f;
        }
        @keyframes clickPulse {
          0% {
            stroke-width: 3;
            stroke-opacity: 1;
          }
          50% {
            stroke-width: 6;
            stroke-opacity: 0.5;
          }
          100% {
            stroke-width: 3;
            stroke-opacity: 1;
          }
        }
      `}</style>
    </button>
  ) : null;
};

export default ScrollToTopCircleButton;

















// import React, { useState, useEffect } from 'react';
// import { RiArrowUpDoubleFill } from 'react-icons/ri';

// const ScrollToTopCircleButton = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setVisible(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   return visible ? (
//     <button
//       onClick={scrollToTop}
//       aria-label="Scroll to top"
//       style={{
//         position: 'fixed',
//         bottom: '2rem',
//         right: '2rem',
//         background: 'none',
//         border: 'none',
//         padding: 0,
//         cursor: 'pointer',
//         outline: 'none',
//         zIndex: 1000,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         gap: '0.3em',
//       }}
//       className="circleScrollToTop"
//     >
//       <div
//         style={{
//           background: '#e0e0e0',
//           borderRadius: '50%',
//           padding: '0.85em',
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           transition: 'background 0.33s cubic-bezier(0.4,0,0.2,1)',
//         }}
//         className="circleIconWrapper"
//       >
//         <RiArrowUpDoubleFill
//           size={28}
//           style={{
//             color: '#868686',
//             transition: 'color 0.33s cubic-bezier(0.4,0,0.2,1)',
//           }}
//           className="circleIcon"
//         />
//       </div>
//       <span
//         style={{
//           color: '#868686',
//           fontSize: '1rem',
//           transition: 'color 0.33s cubic-bezier(0.4,0,0.2,1)',
//         }}
//         className="circleText"
//       >
//         Scroll to Top
//       </span>
//       <style>{`
//         .circleScrollToTop:hover .circleIconWrapper,
//         .circleScrollToTop:focus .circleIconWrapper {
//           background: #444;
//         }
//         .circleScrollToTop:hover .circleIcon,
//         .circleScrollToTop:focus .circleIcon,
//         .circleScrollToTop:hover .circleText,
//         .circleScrollToTop:focus .circleText {
//           color: #fff;
//         }
//       `}</style>
//     </button>
//   ) : null;
// };

// export default ScrollToTopCircleButton;
