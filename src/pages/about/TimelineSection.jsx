import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FaCode,
  FaTools,
  FaLaptopCode,
  FaProjectDiagram,
  FaRocket,
  FaLightbulb,
  FaUsers,
  FaGlobe,
  FaFlagCheckered,
} from 'react-icons/fa';
import { SiBmcsoftware } from "react-icons/si";
import { MdRocketLaunch } from 'react-icons/md';

const milestones = [
  {
    year: "February, 2024",
    title: "Founded",
    desc: "RSquareSoft starts its journey in a small co-working space, ignited by a vision to simplify business through technology.",
    icon: <FaLightbulb className="text-yellow-400" size={28} />,
  },
  {
    year: "2024",
    title: (
      <a
        href="https://valetplus.net"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline"
      >
        ValetPlus
      </a>
    ),
    desc: "Revolutionizing valet operations with technology that makes parking smoother, faster, and more secure for everyone.",
    icon: <MdRocketLaunch className="text-blue-500" size={28} />,
  },
  {
    year: "2025",
    title: "Doubled Our Team",
    desc: "Welcomed our 30th Software Interns, nurturing a team culture focused on innovation and excellence.",
    icon: <FaUsers className="text-teal-500" size={28} />,
  },
  {
    year: "2025",
    title: "Started New Innovative Projects",
    desc: "Kickstarted three cutting-edge project initiatives, each exploring novel ideas and strategic solutions for 2025",
    icon: <SiBmcsoftware className="text-green-500" size={28} />,
  },
  {
    year: "2025",
    title: "Launching Kaarmika Application",
    desc: "On August 15, 2025, launching 'Kaarmika,' a platform dedicated to seamlessly connecting contractors and workers.",
    icon: <MdRocketLaunch className="text-indigo-600" size={28} />,
    current: true,
  },
];


const TimelineSection = () => {
  const lineRef = useRef(null);
  const isInView = useInView(lineRef, { once: true });
  const [progressHeight, setProgressHeight] = useState(0);

  useEffect(() => {
    if (isInView) {
      setProgressHeight(93);
    }
  }, [isInView]);

  return (
    <section className="py-20 px-4" id="experience">
      {/* <h2 className="font-semibold text-center mb-16 text-primary" style={{fontSize:'var(--font-size-title)'}}>
        History and Milestones
      </h2> */}
      <div className="text-center mb-20">
        <h2 className="font-bold text-text-primary" style={{fontSize:'var(--font-size-heading1)'}}>History & Milestones</h2>
        <div className="w-60 h-1 bg-primary mx-auto mt-2 rounded"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Static vertical line for md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-text-primary z-0" />

        {/* Animated progress line */}
        <motion.div
          ref={lineRef}
          initial={{ height: 0 }}
          animate={{ height: `${progressHeight}%` }}
          transition={{ duration: 4 }}
          className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-primary z-10 origin-top"
        />

        {/* Timeline Entries */}
        <div className="flex flex-col gap-16 md:gap-24 relative z-20">
          {milestones.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center justify-between w-full gap-8 ${isLeft ? 'md:justify-end' : 'md:justify-start'
                  }`}
              >
                {/* Dot in center on md+ */}
                <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-5 h-5 rounded-full bg-primary border-4 border-black" />
                </div>

                {/* Mobile Dot */}
                <div className="md:hidden flex justify-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-black mb-4" />
                </div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`
                    w-full md:w-[45%] px-6 py-5 rounded-xl bg-gray-800 border border-primary shadow-2xl hover:shadow-secondary   
                    ${isLeft ? 'md:ml-auto text-left md:text-right' : 'md:mr-auto text-left'}
                  `}
                >
                  <div
                    className={`text-primary flex items-center gap-2 mb-1 font-semibold ${isLeft ? 'md:justify-end' : 'md:justify-start'
                      }`}
                      style={{fontSize: 'var(--font-size-heading)'}}
                  >
                    {milestone.icon}
                    <span>{milestone.title}</span>
                  </div>
                  <p className="text-sm text-button-text">{milestone.year}</p>
                  <p className="text-button-text mt-2 text-sm sm:text-base">{milestone.desc}</p>
                  {milestone.current && (
                    <div className="mt-3 inline-block bg-primary text-button-text px-3 py-1 rounded-full text-xs sm:text-sm">
                      In Progress
                    </div>
                  )}
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;


