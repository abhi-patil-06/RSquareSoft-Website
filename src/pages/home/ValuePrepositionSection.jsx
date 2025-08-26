import React from "react";
import { FaUsers, FaLightbulb, FaHeart, FaCheckCircle, FaGlobe, FaComments } from "react-icons/fa";

const values = [
  {
    icon: <FaUsers />,
    title: "Expert Team",
    description:
      "Leverage the deep knowledge and diverse expertise of our seasoned professionals dedicated to your success.",
  },
  {
    icon: <FaLightbulb />,
    title: "Innovative Solutions",
    description:
      "Stay ahead with cutting-edge technology and creative strategies tailored to solve your unique challenges.",
  },
  {
    icon: <FaHeart />,
    title: "Customer Focus",
    description:
      "Your goals are our priority. We listen, adapt, and work collaboratively to ensure your vision becomes reality.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Proven Results",
    description:
      "Our track record speaks for itself; we deliver measurable outcomes and tangible growth for our clients.",
  },
  {
    icon: <FaGlobe />,
    title: "Global Reach",
    description:
      "With a global perspective and local presence, we understand diverse markets and deliver solutions worldwide.",
  },
  {
    icon: <FaComments />,
    title: "Transparent Communication",
    description:
      "We maintain open, honest, and regular communication, ensuring you're always informed and involved.",
  },
];

export default function ValuePropositionSection() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <p
          className="font-semibold uppercase tracking-wider text-primary text-center mb-12"
          style={{ fontSize: "var(--font-size-subheading)" }}
        >
          — Why RSquareSoft?
        </p>

        <div className="relative border-l-4 border-blue-400 pl-10 space-y-12">
          {values.map((item, index) => (
            <div key={index} className="relative group">
              {/* Icon Circle */}
              <div className="absolute -left-7 flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 text-white shadow-lg group-hover:scale-110 transform transition duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}












// import React from 'react';

// export default function ValuePropositionSection() {
//     return (
//         <section>
//             <div className="bg-transparent py-12 px-4 sm:px-6 lg:px-8 ">
//                 <p className="font-semibold ml-15 uppercase tracking-wider mb-5 text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>
//                     — Why RSquareSoft?
//                 </p>
//                 {/* <div className="text-center mb-4 max-w-screen-xl mx-auto px-4">
//                     <h2
//                         className="font-bold text-text-primary"
//                         style={{ fontSize: "var(--font-size-heading1)" }}
//                     >
//                         Why RSquareSoft?
//                     </h2>
//                     <div className="w-32 h-1 bg-primary mx-auto rounded"></div>
//                 </div> */}
//                 <div className="max-w-7xl mx-auto text-center">

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-2">
//                         {/* Card 1: Expert Team */}
//                         <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
//                             <div className="p-4 bg-gradient-to-br from-[#4f8ef6] to-[#80b1fe] rounded-full inline-flex mb-6 shadow-md group-hover:from-[#255baa] group-hover:to-[#79a8e2] transition-colors duration-300">
//                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a4 4 0 014-4h2.5M10 9a4 4 0 11-8 0 4 4 0 018 0zm6 0a4 4 0 11-8 0 4 4 0 018 0zm-.464 5.535A4 4 0 0017 12h2a4 4 0 014 4v2h-2.5l-1.14-1.14a4 4 0 00-5.692-5.692z"></path></svg>
//                             </div>
//                             <h3 className="text-2xl font-bold text-[#20487c] mb-3">Expert Team</h3>
//                             <p className="text-gray-600">
//                                 Leverage the deep knowledge and diverse expertise of our seasoned professionals dedicated to your success.
//                             </p>
//                         </div>
//                         {/* Card 2: Innovative Solutions */}
//                         <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
//                             <div className="p-4 bg-gradient-to-br from-[#4f8ef6] to-[#80b1fe] rounded-full inline-flex mb-6 shadow-md group-hover:from-[#255baa] group-hover:to-[#79a8e2] transition-colors duration-300">
//                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4.343 5.657l-.707-.707M3 12H2m.707 5.657l.707.707M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
//                             </div>
//                             <h3 className="text-2xl font-bold text-[#20487c] mb-3">Innovative Solutions</h3>
//                             <p className="text-gray-600">
//                                 Stay ahead with cutting-edge technology and creative strategies tailored to solve your unique challenges.
//                             </p>
//                         </div>
//                         {/* Card 3: Customer Focus */}
//                         <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
//                             <div className="p-4 bg-gradient-to-br from-[#4f8ef6] to-[#80b1fe] rounded-full inline-flex mb-6 shadow-md group-hover:from-[#255baa] group-hover:to-[#79a8e2] transition-colors duration-300">
//                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
//                             </div>
//                             <h3 className="text-2xl font-bold text-[#20487c] mb-3">Customer Focus</h3>
//                             <p className="text-gray-600">
//                                 Your goals are our priority. We listen, adapt, and work collaboratively to ensure your vision becomes reality.
//                             </p>
//                         </div>
//                         {/* Card 4: Proven Results */}
//                         <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
//                             <div className="p-4 bg-gradient-to-br from-[#4f8ef6] to-[#80b1fe] rounded-full inline-flex mb-6 shadow-md group-hover:from-[#255baa] group-hover:to-[#79a8e2] transition-colors duration-300">
//                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.785a.75.75 0 01.071-.073l2.293-2.293a1 1 0 011.414 1.414L11.414 18l-8.293-8.293a1 1 0 011.414-1.414l5.293 5.293 4-4a.75.75 0 01.07-.071z"></path></svg>
//                             </div>
//                             <h3 className="text-2xl font-bold text-[#20487c] mb-3">Proven Results</h3>
//                             <p className="text-gray-600">
//                                 Our track record speaks for itself; we deliver measurable outcomes and tangible growth for our clients.
//                             </p>
//                         </div>
//                         {/* Card 5: Global Reach */}
//                         <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
//                             <div className="p-4 bg-gradient-to-br from-[#4f8ef6] to-[#80b1fe] rounded-full inline-flex mb-6 shadow-md group-hover:from-[#255baa] group-hover:to-[#79a8e2] transition-colors duration-300">
//                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h7m-9 0H3v-1a2 2 0 012-2h2.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
//                             </div>
//                             <h3 className="text-2xl font-bold text-[#20487c] mb-3">Global Reach</h3>
//                             <p className="text-gray-600">
//                                 With a global perspective and local presence, we understand diverse markets and deliver solutions worldwide.
//                             </p>
//                         </div>
//                         {/* Card 6: Transparent Communication */}
//                         <div className="bg-white/90 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 group">
//                             <div className="p-4 bg-gradient-to-br from-[#4f8ef6] to-[#80b1fe] rounded-full inline-flex mb-6 shadow-md group-hover:from-[#255baa] group-hover:to-[#79a8e2] transition-colors duration-300">
//                                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
//                             </div>
//                             <h3 className="text-2xl font-bold text-[#20487c] mb-3">Transparent Communication</h3>
//                             <p className="text-gray-600">
//                                 We maintain open, honest, and regular communication, ensuring you're always informed and involved.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

