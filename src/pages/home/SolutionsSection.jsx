// src/components/SolutionsSection.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { whatWeBuildData } from '../../data/HomeData';

const SolutionsSection = () => {
    

    return (
        <section className="bg-background py-16 font-family-base">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[3fr_5fr] items-center">
                {/* Left Content Area */}
                <div className="lg:pr-10">
                    {/* <span className="text-primary font-bold text-sm tracking-wider uppercase mb-2 block">
                        WHAT WE BUILD?
                    </span> */}
                    <p className="font-semibold text-center md:text-start uppercase tracking-wider mb-5 text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>
                        — What We Build?
                    </p>
                    <h2 className="font-extrabold text-center md:text-start text-text-primary leading-tight mb-6" style={{ fontSize: 'var(--font-size-heading1)' }}>
                        Perfect solutions with our <span className='text-primary'>proficient services</span>
                    </h2>
                    {/* <p className="text-text-primary font-semibold text-xl mb-6">
                        SaaS and Enterprise Software
                    </p> */}
                    <p className="hidden md:inline text-text-primary leading-relaxed" style={{ fontSize: 'var(--font-size-subheading)' }}>
                        Our team of passionate developers relentlessly creates cutting-edge
                        SaaS solutions and enterprise software that caters to your specific
                        needs. Our expertise lies in delivering data-driven tech solutions that
                        drive growth and bring groundbreaking changes.
                    </p>
                </div>

                {/* Right Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {whatWeBuildData.map((card, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 
                       flex flex-col items-center justify-between transition-all duration-300"
                            whileHover={{ scale: 1.05, y: -8, boxShadow: "0px 12px 24px rgba(0,0,0,0.15)" }}
                            whileTap={{ scale: 0.97 }}
                        >
                            {/* Icon Section */}
                            <motion.div
                                className="mb-4 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-500"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                whileHover={{ rotate: 10 }}
                            >
                                {card.icon}
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                className="font-bold text-center text-gray-900 mb-2"
                                style={{ fontSize: "var(--font-size-subheading)" }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                {card.title}
                            </motion.h3>

                            {/* Description */}
                            <motion.p
                                className="text-gray-600 text-center leading-relaxed"
                                style={{ fontSize: "var(--font-size-description)" }}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                            >
                                {card.description}
                            </motion.p>

                            {/* Glow underline animation */}
                            <motion.div
                                className="mt-4 h-1 w-12 rounded-full bg-primary"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.4, delay: 0.4 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;