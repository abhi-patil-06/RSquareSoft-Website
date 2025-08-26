import React from "react";
import { FaBullseye, FaLightbulb } from "react-icons/fa";

export default function MissionVisionCard() {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 md:mb-15 py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="text-center mb-5">
            <h2 className="font-bold text-text-primary" style={{ fontSize: 'var(--font-size-heading1)' }}>Mission & Vision</h2>
            <div className="w-60 h-1 bg-primary mx-auto mt-2 rounded"></div>
          </div>
          <p
            className="mt-4 text-gray-600 max-w-2xl mx-auto"
            style={{ fontSize: "var(--font-size-subheading)" }}
          >
            At RSquareSoft, we are driven by purpose and guided by innovation.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Vision Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-md  transition duration-500 relative ">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600  transition">
                <FaLightbulb size={28} className="group-hover:scale-110" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-800 group-hover:text-blue-600"
                style={{ fontSize: "var(--font-size-heading2)" }}
              >
                Our Vision
              </h3>
            </div>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontSize: "var(--font-size-subheading)" }}
            >
              Craft best-in-class technology products and solutions that empower
              businesses and communities to thrive in a digital-first world.
            </p>
          </div>

          {/* Mission Card */}
          <div className="group bg-white p-8 rounded-2xl shadow-md transition duration-500 relative">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600  transition duration-300">
                <FaBullseye size={28} className="group-hover:scale-105" />
              </div>
              <h3
                className="text-2xl font-bold text-gray-800 group-hover:text-blue-600"
                style={{ fontSize: "var(--font-size-heading2)" }}
              >
                Our Mission
              </h3>
            </div>
            <p
              className="text-gray-600 leading-relaxed"
              style={{ fontSize: "var(--font-size-subheading)" }}
            >
              Foster local talent and deliver world-class technology products
              globally. We strive for excellence, sustainable development, and
              community empowerment—creating global impact through innovation,
              agility, and inclusivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

















// import React from "react";

// export default function MissionVisionCard() {
//     return (
//         <section className="min-h-96 mx-auto md:px-8 md:py-16 mb-20 bg-blue-200 md:bg-gradient-to-r from-blue-200 to-transparent">
//             <div className="flex flex-col md:flex-row overflow-hidden">
//                 {/* Left side: Mission & Vision content */}
//                 <div className="md:w-1/2 w-full p-12 m-auto flex flex-col justify-center space-y-12">
//                     {/* Vision */}
//                     <div>
//                         <h3 className="text-3xl font-bold text-text-primary" style={{fontSize:"var(--font-size-heading1)"}}>Our Vision</h3>
//                         <div className="w-30 h-1 bg-primary mt-2 mb-5 rounded"></div>
//                         <p className=" text-text-primary max-w-xl leading-relaxed" style={{fontSize:"var(--font-size-subheading)"}}>
//                             Craft Best-in-class Technology Products and Solutions
//                         </p>
//                     </div>
//                     {/* Mission */}
//                     <div>
//                         <h3 className="font-bold text-text-primary" style={{fontSize:"var(--font-size-heading1)"}}>Our Mission</h3>
//                         <div className="w-30 h-1 bg-primary mt-2 mb-5 rounded"></div>
//                         <p className=" text-text-primary max-w-xl leading-relaxed" style={{fontSize:"var(--font-size-subheading)"}}>
//                             Foster local talent and deliver best-in-class technology products globally. Strive for excellence, sustainable development, and community empowerment, contributing to a global impact through innovation, agility, and inclusivity
//                         </p>
//                     </div>

//                 </div>

//                 {/* Right side: Artistic colorful squares */}
//                 <div className="relative -left-10 w-xl max-h-[500px]  overflow-hidden">
//                     {/* Large squares */}
//                     <div
//                         className="absolute top-30 left-50 w-50 h-50 rounded-md shadow-lg bg-gradient-to-tr from-indigo-600 to-purple-600"
//                         style={{ zIndex: 5 }}
//                     >
//                         <img
//                             src="public/bg-img/bg1.jpg"
//                             alt="Large square 1"
//                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
//                         />
//                     </div>
//                     <div
//                         className="absolute top-15 left-30 w-30 h-30 rounded-md shadow-md bg-gradient-to-tr from-cyan-400 to-blue-500"
//                         style={{ zIndex: 7 }}
//                     >
//                         <img
//                             src="public/bg-img/bg2.jpg"
//                             alt="Large square 2"
//                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
//                         />
//                     </div>

//                     {/* Medium squares */}
//                     <div
//                         className="absolute top-10 right-17 w-40 h-40 rounded-md shadow-md bg-gradient-to-tr from-pink-500 to-red-500"
//                         style={{ zIndex: 4 }}
//                     >
//                         <img
//                             src="public/bg-img/bg3.jpg"
//                             alt="Medium square 1"
//                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
//                         />
//                     </div>
//                     <div
//                         className="absolute top-45 right-15 w-27 h-25 rounded-md shadow-md bg-gradient-to-tr from-green-400 to-teal-500"
//                         style={{ zIndex: 5 }}
//                     >
//                         <img
//                             src="public/bg-img/bg4.jpg"
//                             alt="Medium square 2"
//                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
//                         />
//                     </div>

//                     {/* Small squares */}
//                     <div
//                         className="absolute bottom-8 left-24 w-45 h-40 rounded-md shadow-md bg-gradient-to-tr from-purple-300 to-indigo-400"
//                         style={{ zIndex: 3 }}
//                     >
//                         <img
//                             src="public/bg-img/bg5.jpg"
//                             alt="Small square 1"
//                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.375rem' }}
//                         />
//                     </div>
//                     <div
//                         className="absolute bottom-5 right-27 w-30 h-30 rounded-lg shadow-lg bg-gradient-to-tr from-cyan-300 to-blue-400"
//                         style={{ zIndex: 5 }}
//                     >
//                         <img
//                             src="public/bg-img/bg6.jpg"
//                             alt="Small square 2"
//                             style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
//                         />
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }

















// import { TbTarget, TbEye } from "react-icons/tb";

// export default function MissionVisionSplit() {
//   return (
//     <section className="relative max-w-7xl mx-auto my-16 flex h-56 sm:h-48 md:h-64 rounded-3xl overflow-hidden shadow-lg select-none">
//       {/* Left Vision block */}
//       <div
//         className="relative flex-1 bg-gradient-to-br from-yellow-500 to-orange-600 text-white px-12 py-10
//         flex flex-col justify-center rounded-br-3xl"
//         style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)" }}
//       >
//         <h3 className="text-xl sm:text-2xl font-extrabold mb-3">OUR VISION</h3>
//         <p className="text-sm sm:text-base font-light max-w-xs leading-relaxed">
//           Insert your company vision statement here. This is a sample text. Insert your desired text here.
//         </p>
//         <div className="absolute bottom-6 left-10 opacity-50">
//           <TbEye size={40} />
//         </div>
//       </div>

//       {/* Right Mission block */}
//       <div
//         className="relative flex-1 bg-gray-50 text-indigo-900 px-12 py-10
//         flex flex-col justify-center rounded-tl-3xl"
//         style={{ clipPath: "polygon(15% 0, 100% 0%, 100% 100%, 0 100%)" }}
//       >
//         <div className="absolute top-6 right-10 opacity-60">
//           <TbTarget size={36} />
//         </div>
//         <h3 className="text-xl sm:text-2xl font-extrabold mb-3">OUR MISSION</h3>
//         <p className="text-sm sm:text-base font-light max-w-xs leading-relaxed">
//           Insert your company mission statement here. This is a sample text. Insert your desired text here.
//         </p>
//       </div>
//     </section>
//   );
// }
