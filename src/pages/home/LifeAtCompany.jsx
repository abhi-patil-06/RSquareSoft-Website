import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
    {
        image: "public/lifeat1.png",
        title: "Collaborative Environment",
        description: "We foster team spirit and innovation with every project we take on.",
    },
    {
        image: "public/lifeat2.png",
        title: "Learning Work Culture",
        description: "Upskilling and mentorship are at the heart of our culture.",
    },
    {
        image: "public/lifeat3.png",
        title: "Modern Workspaces",
        description: "Our workspaces reflect our tech-first and employee-first approach.",
    },
    {
        image: "public/lifeat4.png",
        title: "Celebrating Together",
        description: "We believe in celebrating milestones and building connections.",
    },
    {
        image: "public/lifeat5.png",
        title: "Diversity & Inclusion",
        description: "We empower people from all walks of life to thrive together.",
    },
];

export default function LifeAtCompany() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    return (
        <>
            <div className="pt-10 md:py-15 font-family-base bg-background">
                {/* <p className="font-semibold text-center md:text-start ml-7 mb-7 uppercase tracking-wider  text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>
                    — Life At RSquareSoft
                </p> */}
                {/* <div className="text-center mb-4 max-w-screen-xl mx-auto px-4">
                    <h2
                        className="font-bold text-text-primary"
                        style={{ fontSize: "var(--font-size-heading1)" }}
                    >
                        Life At RSquareSoft
                    </h2>
                    <div className="w-32 h-1 bg-primary mx-auto mt-2 rounded"></div>
                </div> */}
                <section className="w-full h-[700px] md:h-[600px] relative overflow-hidden ">
                    {/* Top Right Label */}
                    {/* <div className="absolute top-6 right-6 z-30 bg-white/10 backdrop-blur-sm text-white text-sm md:text-base px-4 py-2 rounded-full shadow-sm tracking-wide font-medium">
                            Life at Rsquaresoft
                        </div> */}



                    {/* Background Image */}
                    <img
                        src={slides[currentIndex].image}
                        alt={slides[currentIndex].title}
                        className="absolute inset-0 w-full h-full object-cover z-0 bg-white "
                    />



                    {/* Gradient Overlay from Left */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent z-10" />

                    {/* Content Box on Left */}
                    <div className="relative z-20 max-w-6xl mx-auto h-full flex flex-col justify-center px-6 md:px-12">
                        <div className="text-button-text max-w-xl">

                            <p className=" mb-10" style={{ fontSize: 'var(--font-size-subheading)' }}>Our Company Culture </p>
                            <h2 className="font-bold mb-4" style={{ fontSize: 'var(--font-size-title)' }}>{slides[currentIndex].title}</h2>
                            <p className=" mb-8" style={{ fontSize: 'var(--font-size-subheading)' }}>{slides[currentIndex].description}</p>

                            {/* Navigation Arrows Below Text */}
                            <div className="flex space-x-10 mt-2">
                                <button
                                    onClick={prevSlide}
                                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                                >
                                    <FaArrowLeft className="text-white" />
                                </button>
                                <button
                                    onClick={nextSlide}
                                    className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                                >
                                    <FaArrowRight className="text-white" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
