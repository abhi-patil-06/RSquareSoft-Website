import React from "react";

export default function AboutSection() {
  return (
    <div className="w-full h-screen py-16 md:py-20 overflow-hidden">
      <div className="flex flex-col md:flex-row items-stretch justify-center px-4 md:px-20 py-10 gap-6">
        
        {/* Left Side: Mosaic Grid */}
        <div className="md:w-1/2 w-full max-w-[700px] h-[600px] p-3 border overflow-hidden box-border">
          <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full">
            {/* Tall Image */}
            <div className="col-span-3 row-span-4 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80"
                alt="Tech1"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Small Square */}
            <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
                alt="Tech2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Medium Rectangle */}
            <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80"
                alt="Tech3"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Wide Short */}
            <div className="col-span-6 row-span-2 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80"
                alt="Tech4"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Square */}
            <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
                alt="Tech5"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Square */}
            <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80"
                alt="Tech6"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 w-full h-[600px] flex flex-col justify-center items-center px-4 box-border">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            About Our Company
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            We are a technology-driven company passionate about delivering
            innovative solutions. Our mission is to transform ideas into
            impactful digital experiences through creativity, strategy, and
            cutting-edge technologies.
          </p>
        </div>

      </div>
    </div>
  );
}














// import React from "react";

// export default function AboutSection() {
//   return (
//     <div className="w-full h-screen py-16 md:py-20 overflow-hidden">
//       <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-20 py-10">
        
//         {/* Left Side: Mosaic Grid */}
//         <div className="md:w-1/2 w-full max-w-[700px] h-[600px]  p-3 border overflow-hidden box-border">
//           <div className="grid grid-cols-6 grid-rows-6 gap-2 w-full h-full">
//             {/* Tall Image */}
//             <div className="col-span-3 row-span-4 overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80"
//                 alt="Tech1"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Small Square */}
//             <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
//                 alt="Tech2"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Medium Rectangle */}
//             <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80"
//                 alt="Tech3"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Wide Short */}
//             <div className="col-span-6 row-span-2 overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80"
//                 alt="Tech4"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Square */}
//             <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80"
//                 alt="Tech5"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//             {/* Square */}
//             <div className="col-span-3 row-span-2 overflow-hidden rounded-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80"
//                 alt="Tech6"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Right Side: Text Content */}
//         <div className="md:w-1/2 w-full mb-10 bg-amber-200  md:mb-0 px-2 box-border">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
//             About Our Company
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             We are a technology-driven company passionate about delivering
//             innovative solutions. Our mission is to transform ideas into
//             impactful digital experiences through creativity, strategy, and
//             cutting-edge technologies.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }
