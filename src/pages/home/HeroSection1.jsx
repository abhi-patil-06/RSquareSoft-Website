import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export default function HeroSection() {
    const images = [
        "https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80",
        "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80",
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(null);
    const [isSliding, setIsSliding] = useState(true);
    const [pauseIndex, setPauseIndex] = useState(null); // Track where to resume after hover


    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setIsSliding(true);
    //         setPrevIndex(currentIndex);
    //         setTimeout(() => {
    //             setCurrentIndex((prev) => (prev + 1) % images.length);
    //             setIsSliding(false);
    //         }); // must match animation duration
    //     }, 4000);

    //     return () => clearInterval(interval);
    // }, [currentIndex]);
    useEffect(() => {
        if (!isSliding) return; // Do not auto-slide when hovered

        const interval = setInterval(() => {
            setPrevIndex(currentIndex);
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [currentIndex, isSliding]);


    const handleMouseEnter = () => {
        setIsSliding(false); // Pause the slider
        setPauseIndex(currentIndex); // Store the index where it paused
    };

    const handleMouseLeave = () => {
        setIsSliding(true); // Resume the slider
        setTimeout(() => {
            setCurrentIndex(pauseIndex); // Resume from the image where it was paused
        }, 500); // Wait for transition
    };



    return (
        <div className="w-screen h-screen bg-[#eeeeee] flex flex-col md:flex-row justify-between items-start relative overflow-hidden">
            {/* Left Content */}
            <div className="w-full md:w-3/5 px-10 pt-36">
                <div className="mb-10 z-30">
                    <h1 className="text-5xl md:text-6xl font-bold leading-20 text-gray-800">
                        Driving Success,
                    </h1>
                    <h1 className="text-5xl md:text-6xl font-extrabold leading-snug text-black">
                        Through Technology
                    </h1>
                </div>

                {/* Button */}
                <div className="flex gap-4 mb-8">
                    <Button
                        variant="outlined"
                        endIcon={<MdKeyboardDoubleArrowRight />}
                        sx={{
                            borderRadius: "30px",
                            paddingX: 4,
                            paddingY: 1.2,
                            fontSize: "0.875rem",
                            borderColor: "#1e40af",
                            color: "#1e40af",
                            transition: "all 0.8s ease",
                            "&:hover": {
                                backgroundColor: "#1e40af",
                                color: "#fff",
                                borderColor: "#1e40af",
                            },
                        }}
                    >
                        Learn More
                    </Button>
                </div>

                {/* Subtitle */}
                <div className="relative mt-2">
                    <p className="text-gray-600 text-md pb-4">
                        Empowering digital innovation with precision and purpose.
                    </p>
                    <div className="absolute left-0 bottom-0 w-40 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-orange-400 animate-pulse rounded-full"></div>
                </div>
            </div>

            <div className="w-[20%] h-[70%] flex flex-col items-center justify-center px-10 py-10 mr-10 bg-[#e2e2e2]"></div>

            <div className="absolute bottom-0 right-[600px] w-[20%] h-[50%] bg-[#e2e2e2] flex items-center justify-center px-6 py-6"></div>

            {/* Sliding Image Container */}
            {/* <div className="absolute left-[70%] top-[55%] w-[650px] h-[450px] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl overflow-hidden">
                <div className="relative w-full h-full">
                    
                    {prevIndex !== null && isSliding && (
                        <img
                            key={prevIndex}
                            src={images[prevIndex]}
                            alt="previous"
                            className="absolute w-full h-full object-cover animate-slide-left transition-all duration-300"
                        />
                    )}
                    
                    <img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="current"
                        className={`absolute w-full h-full object-cover transition-all duration-300 ${isSliding ? "animate-slide-right" : "opacity-100"
                            }`}
                    />
                </div>
            </div> */}

            <div
                className="absolute left-[70%] top-[55%] w-[650px] h-[450px] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl overflow-hidden"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <div className="relative w-full h-full">
                    {prevIndex !== null && isSliding && (
                        <img
                            key={prevIndex}
                            src={images[prevIndex]}
                            alt="previous"
                            className="absolute w-full h-full object-cover animate-slide-left"
                        />
                    )}
                    <img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="current"
                        className={`absolute w-full h-full object-cover ${isSliding ? "animate-slide-right" : "opacity-100"
                            }`}
                    />
                </div>
            </div>


            {/* Image Indicators (Clickable) */}
            <div className="absolute left-[70%] top-[90%] transform -translate-x-1/2 -translate-y-1/2 z-30 flex gap-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            if (index !== currentIndex) {
                                setIsSliding(true);
                                setPrevIndex(currentIndex);
                                setTimeout(() => {
                                    setCurrentIndex(index);
                                    setIsSliding(false);
                                }, 500); // match slide animation duration
                            }
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? "bg-blue-600 scale-125 opacity-100"
                            : "bg-gray-400 opacity-50"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>



            {/* <div className="fixed bottom-15 left-0 w-140 ml-8 h-18 bg-[#e2e2e2] z-10"></div> */}

            {/* Scroll Icon */}
            <div className="absolute bottom-5 right-6 bg-orange-500 p-2 rounded-full text-white shadow-md">
                <KeyboardArrowDownIcon />
            </div>

            {/* Tailwind custom styles */}
            <style>
                {`
          @keyframes slide-left {
            0% { transform: translateX(0%); opacity: 1; }
            100% { transform: translateX(-100%); opacity: 0; }
          }
          @keyframes slide-right {
            0% { transform: translateX(100%); opacity: 0; }
            100% { transform: translateX(0%); opacity: 1; }
          }
          .animate-slide-left {
            animation: slide-left 0.5s ease-in-out forwards;
          }
          .animate-slide-right {
            animation: slide-right 0.5s ease-in-out forwards;
          }
        `}
            </style>
        </div>
    );
}



















// import React from "react";
// import { Button } from "@mui/material";
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { MdKeyboardDoubleArrowRight } from "react-icons/md";

// export default function HeroSection() {
//     return (

//         <div className="w-screen h-screen   bg-[#eeeeee] flex flex-col md:flex-row justify-between items-start relative">

//             {/* Left Content */}
//             <div className="w-full md:w-3/5 px-10 pt-38">
//                 <div className="mb-10 z-30">
//                     <h1 className="text-5xl md:text-6xl font-bold leading-20 text-gray-800">
//                         Driving Success{" "}
//                         ,
//                     </h1>
//                     <h1 className="text-5xl md:text-6xl font-extrabold leading-snug text-black">
//                         Through Technology{" "}
//                     </h1>
//                 </div>

//                 {/* Buttons */}
//                 <div className="flex gap-4 mb-8">
//                     <Button
//                         variant="outlined"
//                         endIcon={<MdKeyboardDoubleArrowRight />}
//                         sx={{
//                             borderRadius: "30px",
//                             paddingX: 4,
//                             paddingY: 1.2,
//                             fontSize: "0.875rem",
//                             borderColor: "#1e40af",
//                             color: "#1e40af",
//                             transition: "all 0.8s ease",
//                             "&:hover": {
//                                 backgroundColor: "#1e40af",
//                                 color: "#fff",
//                                 borderColor: "#1e40af",
//                             },
//                         }}
//                     >
//                         Learn More
//                     </Button>
//                 </div>

//                 <div className="relative mt-2">
//                     <p className="text-gray-600 text-md pb-4">
//                         Empowering digital innovation with precision and purpose.
//                     </p>
//                     <div className="absolute left-0 bottom-0 w-40 h-1 bg-gradient-to-r from-green-500 via-blue-500 to-orange-400 animate-pulse rounded-full"></div>
//                 </div>

//                 {/* Decorative Image Containers (Half Overlapping the Bottom Bar) */}
//                 {/* <div className="absolute bottom-22 left-10 flex gap-4 z-15">

//                     <div className="w-24 h-24 bg-white rounded-xl shadow-lg overflow-hidden">
//                         <img
//                             src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=200&q=80"
//                             alt="Item 1"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <div className="w-24 h-24 bg-white rounded-xl shadow-lg overflow-hidden">
//                         <img
//                             src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=200&q=80"
//                             alt="Item 2"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <div className="w-24 h-24 bg-white rounded-xl shadow-lg overflow-hidden">
//                         <img
//                             src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200&q=80"
//                             alt="Item 3"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <div className="w-24 h-24 bg-white rounded-xl shadow-lg overflow-hidden">
//                         <img
//                             src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=200&q=80"
//                             alt="Item 4"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>

//                     <div className="w-24 h-24 bg-white rounded-xl shadow-lg overflow-hidden">
//                         <img
//                             src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=200&q=80"
//                             alt="Item 5"
//                             className="w-full h-full object-cover"
//                         />
//                     </div>
//                 </div> */}

//                 <div className="fixed bottom-15 left-0 w-140 ml-8 h-18 bg-[#e2e2e2] z-10">

//                 </div>

//             </div>

//             {/* Right Visual */}
//             <div className="w-[20%] h-[70%] flex flex-col items-center justify-center px-10 py-10 mr-10 bg-[#e2e2e2]">

//             </div>

//             <div className="absolute bottom-0 right-[600px] w-[20%] h-[50%] bg-[#e2e2e2] flex items-center justify-center px-6 py-6">

//             </div>

//             {/* Floating Centerpiece Image */}
//             <div className="absolute left-[70%] top-[55%] w-[650px] h-[450px] transform -translate-x-1/2 -translate-y-1/2 z-20 bg-white shadow-2xl  overflow-hidden">
//                 <img
//                     src="https://images.unsplash.com/photo-1460518451285-97b6aa326961?w=600&q=80"
//                     alt="highlight"
//                     className="w-full h-full object-cover shadow-2xl hover:scale-105 transition-all duration-500"
//                 />
//             </div>

//             {/* Scroll Icon */}
//             <div className="absolute bottom-5 right-6 bg-orange-500 p-2 rounded-full text-white shadow-md">
//                 <KeyboardArrowDownIcon />
//             </div>
//         </div>

//     );
// }
