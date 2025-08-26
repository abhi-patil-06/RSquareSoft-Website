import React, { useEffect, useRef, useState } from "react";
import { InsertDriveFile, Lightbulb, Create } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Card, CardContent, Avatar, Grid, Chip, Stack, TextField, MenuItem, } from "@mui/material";
import Blog from "./Blog";


const mockArticles = [
  {
    id: 1,
    title: "The Global Trade Surveillance Landscape – Why It Matters More Than Ever",
    author: "Ramesh GharmalKar",
    date: "June 23, 2025",
    image:
      "public/article-1.png",
    articleUrl: "https://www.linkedin.com/pulse/global-trade-surveillance-landscape-why-matters-more-than-gharmalkar-6qtwf/?trackingId=dsbLh7G9foLA6qq5hAu0WQ%3D%3D"
  },
  {
    id: 2,
    title: "Designing the Ideal Trade Surveillance Platform",
    author: "Ramesh GharmalKar",
    date: "June 30, 2025",
    image:
      "public/article-2.png",
    articleUrl: "https://www.linkedin.com/pulse/designing-ideal-trade-surveillance-platform-ramesh-gharmalkar-hksic/?trackingId=2wS6LB9pFqEgo6qPdKK5Xg%3D%3D"
  },
  {
    id: 3,
    title: "The Conversation Continues",
    author: "Ramesh GharmalKar",
    date: "July 6, 2025",
    image:
      "public/article-3.png",
    articleUrl: "https://www.linkedin.com/pulse/lets-build-safer-smarter-markets-part-3-conversation-gharmalkar-iu2sf/?trackingId=n9nkLRrXjQ02hFbONHjYLA%3D%3D"
  },
  {
    id: 4,
    title: "Behind the ₹4,800 Crore INR (575 million USD) Storm: How Smarter Surveillance Could've Changed the Game?",
    author: "Ramesh GharmalKar",
    date: "July 9, 2025",
    image:
      "public/article-4.png",
    articleUrl: "https://www.linkedin.com/pulse/article-4-behind-4800-crore-inr-575-million-usd-storm-gharmalkar-juw4f/?trackingId=u1mEhJj4TyJtIWt8Cvio5g%3D%3D"
  },
  {
    id: 5,
    title: "Building Trust in Finance: The Dual Power of Security and Compliance",
    author: "Rajneesh Shrimalli",
    date: "July 15, 2025",
    image:
      "public/article-5.png",
    articleUrl: "https://www.linkedin.com/posts/rajneeshshrimali_building-trust-in-finance-activity-7350003319420915712-KdaR?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEALH4UBEXYddERQgNvaxJgLA_0w33Z9gHE"
  },
  {
    id: 6,
    title: "AI in Trade Surveillance: Hype or Game Changer?",
    author: "Ramesh GharmalKar",
    date: "July 22, 2025",
    image:
      "public/article-6.png",
    articleUrl: "https://www.linkedin.com/pulse/ai-powered-trade-surveillance-hype-game-changer-ramesh-gharmalkar-oexof/?trackingId=TAjNb1wzFfRjFGRkBzv%2FYA%3D%3D"
  },
  {
    id: 7,
    title: "Sir, we would have got the alerts, …everything was okay… but…",
    author: "Ramesh GharmalKar",
    date: "August 5, 2025",
    image:
      "public/article-7.png",
    articleUrl: "https://www.linkedin.com/pulse/sir-we-would-have-got-alerts-everything-okay-ramesh-gharmalkar-oiszf/?trackingId=dXqgZhz%2BrTcJaWmLGVrgQg%3D%3D"
  },
  {
    id: 8,
    title: "When Mergers Make Markets Move — and Traders Slip",
    author: "Ramesh GharmalKar",
    date: "August 18, 2025",
    image:
      "public/article-8.png",
    articleUrl: "https://www.linkedin.com/pulse/introducing-our-new-series-stories-compliance-gone-wrong-tick-j3o7f/?trackingId=ERXJjCXBcVFLBMoAcb8Rvw%3D%3D"
  },
];

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
          backgroundImage: `url("/public/insights.png")`,
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
            width: { xs: "90%", md: "60%" },
            textAlign: { xs: "center", md: "left" },
            mx: "auto",
            py: { xs: 5, md: 8 },
          }}
        >
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

        <div
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
                    {/* Image container with fixed aspect ratio */}
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
        </div>
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






















