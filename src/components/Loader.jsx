import React from 'react';

const Loader = () => {
  return (
    <>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          backdropFilter: 'blur(5px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '150px',
            height: '150px',
            left: '40px',
            // No top, left, or transform needed here
            transform: 'rotateX(20deg) rotateY(-40deg)',
          }}
        >
          {[
            { color: '#4caf50', top: -5, left: -20 },
            { color: '#1976d2', top: 15, left: 0 },
            { color: '#f57c00', top: 35, left: 20 },
          ].map(({ color, top, left }, i) => (
            <svg
              key={i}
              width="60"
              height="60"
              viewBox="0 0 100 100"
              style={{
                position: 'absolute',
                top,
                left,
                pointerEvents: 'none',
              }}
            >
              <rect
                x="5"
                y="5"
                width="90"
                height="90"
                fill="none"
                stroke={color}
                strokeWidth="4"
                strokeDasharray="360"
                strokeDashoffset="0"
                className="moving-dash"
                style={{ animationDelay: `${ 0.5}s` }}
              />
            </svg>
          ))}
        </div>

        <style>{`
          @keyframes dashMove {
            0% {
              stroke-dashoffset: 360;
              stroke-dasharray: 0 360;
            }
            50% {
              stroke-dashoffset: 180;
              stroke-dasharray: 180 180;
            }
            100% {
              stroke-dashoffset: 0;
              stroke-dasharray: 360 0;
            }
          }
          .moving-dash {
            animation: dashMove 2s linear infinite;
          }
          svg rect {
            vector-effect: non-scaling-stroke;
          }
        `}</style>
      </div>
    </>
  );
};

export default Loader;










// import React from 'react';

// const Loader = () => {
//   return (
//     <>
//       <div
//         style={{
//           position: 'fixed',
//           inset: 0,
//           backgroundColor: 'rgba(0, 0, 0, 0.3)',
//           backdropFilter: 'blur(5px)',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           zIndex: 9999,
//         }}
//       >
//         <div
//           style={{
//             position: 'relative',
//             width: '150px',
//             height: '150px',
//             top: '50%',
//             left: '50%',
//             transform: 'translate(-50%, -50%) rotateX(20deg) rotateY(-40deg)',
//           }}
//         >
//           {[
//             { color: '#4caf50', top: -10, left: -30 },
//             { color: '#1976d2', top: 15, left: 0 },
//             { color: '#f57c00', top: 40, left: 30 },
//           ].map(({ color, top, left }, i) => (
//             <svg
//               key={i}
//               width="50"
//               height="50"
//               viewBox="0 0 100 100"
//               style={{
//                 position: 'absolute',
//                 top,
//                 left,
//                 pointerEvents: 'none',
//               }}
//             >
//               <rect
//                 x="5"
//                 y="5"
//                 width="90"
//                 height="90"
//                 fill="none"
//                 stroke={color}
//                 strokeWidth="4"
//                 strokeDasharray="360"
//                 strokeDashoffset="0"
//                 className="moving-dash"
//                 style={{ animationDelay: `${0.5}s` }}
//               />
//             </svg>
//           ))}
//         </div>

//         <style>{`
//           @keyframes dashMove {
//             0% {
//               stroke-dashoffset: 360;
//               stroke-dasharray: 0 360;
//             }
//             50% {
//               stroke-dashoffset: 180;
//               stroke-dasharray: 180 180;
//             }
//             100% {
//               stroke-dashoffset: 0;
//               stroke-dasharray: 360 0;
//             }
//           }

//           .moving-dash {
//             animation: dashMove 2s linear infinite;
//           }

//           svg rect {
//             vector-effect: non-scaling-stroke;
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default Loader;












// import React from 'react';

// const Loader = () => {
//     return (
//         <>
//             <div
//                 style={{
//                     position: 'fixed',
//                     inset: 0,
//                     backgroundColor: 'rgba(0, 0, 0, 0.3)',
//                     backdropFilter: 'blur(5px)',
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center',
//                     zIndex: 9999,
//                 }}
//             >
//                 <div
//                     style={{
//                         position: 'absolute',
//                         width: '150px',
//                         height: '150px',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%) rotateX(20deg) rotateY(-40deg)',
//                     }}
//                 >
//                     {/* Green square - back, shifted top left */}
//                     <svg
//                         width="100"
//                         height="100"
//                         viewBox="0 0 100 100"
//                         style={{
//                             position: 'absolute',
//                             top: '-10',
//                             left: '-30',
//                             pointerEvents: 'none',
//                         }}
//                     >
//                         <rect
//                             x="5"
//                             y="5"
//                             width="90"
//                             height="90"
//                             fill="none"
//                             stroke="#4caf50"
//                             strokeWidth="4"
//                             strokeDasharray="360"
//                             strokeDashoffset="360"
//                             style={{ animation: 'dash 2s linear infinite' }}
//                         />
//                     </svg>

//                     {/* Blue square - middle, shifted down right */}
//                     <svg
//                         width="100"
//                         height="100"
//                         viewBox="0 0 100 100"
//                         style={{
//                             position: 'absolute',
//                             top: '15px',
//                             left: '0px',
//                             pointerEvents: 'none',
//                         }}
//                     >
//                         <rect
//                             x="5"
//                             y="5"
//                             width="90"
//                             height="90"
//                             fill="none"
//                             stroke="#1976d2"
//                             strokeWidth="4"
//                             strokeDasharray="360"
//                             strokeDashoffset="360"
//                             style={{ animation: 'dash 2s linear infinite' }}
//                         />
//                     </svg>

//                     {/* Orange square - front, further shifted down right */}
//                     <svg
//                         width="100"
//                         height="100"
//                         viewBox="0 0 100 100"
//                         style={{
//                             position: 'absolute',
//                             top: '40px',
//                             left: '30px',
//                             pointerEvents: 'none',
//                         }}
//                     >
//                         <rect
//                             x="5"
//                             y="5"
//                             width="90"
//                             height="90"
//                             fill="none"
//                             stroke="#f57c00"
//                             strokeWidth="4"
//                             strokeDasharray="360"
//                             strokeDashoffset="360"
//                             style={{ animation: 'dash 2s linear infinite' }}
//                         />
//                     </svg>
//                 </div>

//                 <style>{`
//                         @keyframes dash {
//                         to {
//                             stroke-dashoffset: 0;
//                         }
//                         }
//                         svg rect {
//                         vector-effect: non-scaling-stroke;
//                         }
//                     `}
//                 </style>
//             </div>
//         </>
//     );
// };

// export default Loader;