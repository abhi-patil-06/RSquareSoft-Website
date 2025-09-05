import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Articles({ articles }) {
  const [viewportRef, embla] = useEmblaCarousel({ 
    loop: true, 
    dragFree: true, 
    skipSnaps: false,
    speed: 8,
  });

  // track selected index for active dot
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on("select", onSelect);
    // Initialize selected index
    onSelect();
  }, [embla, onSelect]);

  // Auto-scroll effect
  useEffect(() => {
    if (!embla) return;
    const autoplay = () => {
      if (!embla) return;
      if (embla.canScrollNext()) {
        embla.scrollNext();
      } else {
        embla.scrollTo(0);
      }
    };
    const interval = setInterval(autoplay, 3000);
    return () => clearInterval(interval);
  }, [embla]);

  return (
    <section className="relative overflow-hidden max-w-screen-xl mx-auto p-4 bg-blue-100 rounded-lg">
      <div className="embla" ref={viewportRef}>
        <div className="embla__container flex gap-4 cursor-grab px-4"
      style={{ marginLeft: "-16px" }}>
          {articles.map(({ id, title, author, date, image, articleUrl }) => (
            <article
              key={id}
              className="embla__slide min-w-[300px]  bg-white rounded-lg p-6 shadow-md flex flex-col"
            >
              <div className="rounded overflow-hidden h-[180px] bg-gray-200 shadow-sm mb-4">
                <img
                  src={image}
                  alt={title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex items-center gap-1 text-xs uppercase text-black/50 font-sans mb-2">
                <time>{date}</time>
                <span>•</span>
                <span>{author}</span>
              </div>
              <p className="text-black font-semibold font-serif leading-snug flex-grow overflow-hidden text-ellipsis line-clamp-5">
                {title}
              </p>
              <button
                className="mt-3 text-primary font-semibold bg-transparent border-none p-0 cursor-pointer self-start transition-colors duration-300 group text-sm"
                onClick={() => window.open(articleUrl, "_blank")}
                aria-label={`Read more about ${title}`}
              >
                Read More
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
              </button>
            </article>
          ))}
        </div>
      </div>

      {/* Navigation dots */}
      <div className="flex justify-center gap-3 mt-4">
        {articles.map((_, index) => (
          <button
            key={index}
            className={`h-3 w-3 rounded-full transition-colors cursor-pointer ${
              index === selectedIndex ? "bg-primary" : "bg-gray-400"
            }`}
            onClick={() => embla && embla.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
