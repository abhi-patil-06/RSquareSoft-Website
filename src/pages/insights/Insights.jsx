import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import Blog from "./Blog";
import { mockArticles } from "../../data/InsightsData";
import insightsImg from "../../assets/insights.png"
import Articles from "./Articles";

export default function Insights() {
  const carouselRef = useRef(null);
  const cardWidth = 300; // px
  const gap = 16; // px, tailwind gap-4
  const navigate = useNavigate();
  const youtubeVideoId = "bQieLqcSmEI";




  // current start index for slide
  const [startIndex, setStartIndex] = useState(0);

  const totalSlides = mockArticles.length;

  // Duplicate articles to enable infinite scroll illusion
  const slides = [...mockArticles, ...mockArticles];

  // Slide every 5 seconds incrementally by one card
  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalSlides]);


  // Calculate translateX based on startIndex, each slide = cardWidth + gap
  const translateX = -startIndex * (cardWidth + gap);

  return (
    <Box
      sx={{
        bgcolor: "var(--color-background)",
        minHeight: "100vh",
        width: "100%",
        // py: { xs: 3, md: 14 }, px: { xs: 2, md: 8 },
        pt: { xs: 13, md: 14 },
        // pb: { xs: 3, md: 5 },
        px: { xs: 2, md: 8 },
        fontFamily: "var(--font-family-base)"
      }}
    >


      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 500, md: 620 },
          display: "flex",
          alignItems: "end",
          justifyContent: "center",
          backgroundImage: `url(${insightsImg})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
          overflow: "hidden",
          mb: 5,
        }}
      >

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.3)", // semi-transparent white

            zIndex: 1,
          }}
        />


        {/* Content */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            width: { xs: "90%", md: "80%" },
            textAlign: { xs: "center", md: "left" },
            // mx: "auto",
            py: { xs: 5, md: 20 },
          }}
        >
          {/* Breadcrumb Navigation - fixed top left corner within the div */}
          <nav className="absolute -top-12 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
            {/* First line: breadcrumb links separated by slash */}
            <div className="flex space-x-3">
              <a>
                Insights
              </a>
              {/* <span>/</span>
            <span className="text-gray-300">Product Development</span> */}
            </div>
            {/* Second line: horizontal dividing line */}
            <div className="md:mt-5 h-[2px] w-[300px] md:w-4xl rounded-sm bg-gradient-to-r from-background via-gray-300 to-transparent"></div>
          </nav>
          <Typography
            variant="h3"
            fontWeight="bold"
            fontSize='var(--font-size-title)'
            mb={2}
            color="white"
            sx={{ letterSpacing: "-0.02em" }}
          >
            Explore Powerfull Insights
          </Typography>
          <Typography variant="h6" mb={3} color="white" fontSize={'var(--font-size-subheading)'}>
            Dive into expert articles, real-world stories, and actionable strategies. <b>Unlock the knowledge you need</b> to drive innovation and succeed in a data-powered world.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            href="#open-roles"
            onClick={() => {
              const section = document.getElementById("article");
              if (section) {
                const navbarOffset = 80; // Set this to your navbar height
                const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({
                  top: elementPosition - navbarOffset,
                  behavior: "smooth",
                });
              }
            }}

            sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: "var(--font-size-description)" }}
          >
            Explore More
          </Button>
        </Box>
      </Box>

      {/* Articles Section */}
      <section id="article" className="bg-background py-0 w-full flex-shrink-0">
        <div className="text-center mb-8 max-w-screen-xl mx-auto px-4">
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: "var(--font-size-heading1)" }}
          >
            Articles
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-2 rounded"></div>
        </div>

        {/* <div
          ref={carouselRef}
          className="relative overflow-hidden md:max-w-screen-xl md:h-[540px] bg-blue-100 md:mx-auto md:py-13 p-4 "
          style={{ userSelect: "none" }}
        >
          <div
            className="flex gap-4 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {slides.map(
              (
                { id, title, author, date, image, articleUrl },
                index
              ) => (
                <article
                  key={`${id}-${index}`}
                  className="bg-white rounded-lg p-6 flex-shrink-0 flex flex-col shadow-md w-[300px] md:w-[300px]"
                  style={{
                    // width: {xs:'50px', md:`${cardWidth}px`},
                    boxSizing: "border-box",
                  }}
                >
                  <div className="mb-4 flex flex-col gap-4 h-full">
                    <div className="rounded overflow-hidden h-[180px] bg-gray-200 shadow-sm">
                      <img
                        src={image}
                        alt={title}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex items-center gap-1 text-xs uppercase text-black/50 font-sans">
                      <time>{date}</time>
                      <span>•</span>
                      <span>{author}</span>
                    </div>

                    <p className="text-black font-semibold font-serif leading-snug flex-grow overflow-hidden text-ellipsis line-clamp-5">
                      {title}
                    </p>

                    <button
                      className="relative text-primary font-semibold bg-transparent cursor-pointer border-none p-0 m-0 self-start transition-colors duration-300 group"
                      style={{ fontSize: "var(--font-size-description)" }}
                      onClick={() => window.open(`${articleUrl}`, '_blank')}
                      aria-label={`Read more about ${title}`}
                    >
                      Read More
                      <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
                    </button>
                  </div>
                </article>
              )
            )}
          </div>
        </div> */}

        <Articles articles={mockArticles} />
      </section>

      {/* Testimonial & Video Section */}
      <section className="w-full md:max-w-7xl mx-auto px-6 py-10 bg-white shadow-md mt-16 mb-24">
        <div className="text-center mb-10 mx-auto">
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: "var(--font-size-heading1)" }}
          >
            Testimonials
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-2 rounded"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center md:space-x-14">
          {/* Video embed */}
          <div className="w-full md:w-2/3 aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${youtubeVideoId}?rel=0&modestbranding=1`}
              title="Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-[450px]"
            />
          </div>

          {/* Testimonial text */}
          <blockquote className="mt-10 md:mt-0 w-full md:w-1/3 text-gray-900 italic font-serif text-lg leading-relaxed">
            <p>
              “This product transformed how our team collaborates and delivers
              results efficiently. The insights gained from their research helped
              us solve complex problems with ease.”
            </p>
            <footer className="mt-5 text-sm font-semibold text-gray-600 not-italic">
              — Ramesh Gharmalkar, CEO
            </footer>
          </blockquote>
        </div>
      </section>

      <section>
        <Blog />
      </section>
    </Box>
  );
}






















