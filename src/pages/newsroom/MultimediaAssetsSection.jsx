import React from "react";

const multimediaAssetsData = [
  {
    id: 1,
    category: "Company News",
    title: "Introducing our new credit card – IO",
    date: "September 12, 2022",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "Discover the innovative features of the IO credit card that offers seamless transactions and unparalleled rewards.",
    url: "https://example.com/assets/credit-card.pdf",
    downloadName: "IO_Credit_Card_Brochure.pdf",
  },
  {
    id: 2,
    category: "Venture Debt",
    title: "Supercharge your VC round with founder-friendly venture debt",
    date: "March 8, 2022",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    description:
      "Unlock additional financing options tailored for founders aiming to preserve equity while fueling growth.",
    url: "https://example.com/assets/venture-debt.pdf",
    downloadName: "Venture_Debt_Guide.pdf",
  },
  {
    id: 3,
    category: "Company News",
    title: "Introducing Mercury Raise First Check",
    date: "June 7, 2022",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    description:
      "Mercury’s Raise First Check program is designed to help startups get their first investment quickly and with fewer hurdles.",
    url: "https://example.com/assets/raise-first-check.pdf",
    downloadName: "Mercury_Raise_First_Check.pdf",
  },
  
];

export default function MultimediaAssetsSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 bg-background ">
      <h2 className="text-2xl font-semibold border-b-2 border-primary py-5 mb-10 text-center">
        Multimedia Assets
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Top large card spanning full width */}
        <article
          key={multimediaAssetsData[0].id}
          className="relative  overflow-hidden md:col-span-2 flex flex-col md:flex-row bg-transparent"
        >
          <img
            src={multimediaAssetsData[0].image}
            alt={multimediaAssetsData[0].title}
            className="w-full md:w-1/2 h-56 md:h-auto object-cover"
            loading="lazy"
          />
          <div className="p-8 flex flex-col justify-between md:w-1/2">
            <span className="text-xs uppercase text-primary font-semibold mb-3">
              {multimediaAssetsData[0].category}
            </span>
            <h3 className="text-3xl font-extrabold tracking-tight mb-5">
              {multimediaAssetsData[0].title}
            </h3>
            <p className="text-gray-700 text-base mb-6">
              {multimediaAssetsData[0].description}
            </p>
            <time className="mb-6 text-sm text-gray-400">
              {multimediaAssetsData[0].date}
            </time>
            <a
              href={multimediaAssetsData[0].url}
              download={multimediaAssetsData[0].downloadName}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary px-8 py-3 rounded text-white font-semibold hover:bg-primary-dark transition"
            >
              Download
            </a>
          </div>
        </article>

        {/* Other cards */}
        {multimediaAssetsData.slice(1).map(
          ({ id, category, title, date, image, description, url, downloadName }) => (
            <article
              key={id}
              className="bg-transparent  p-6 flex flex-col justify-between  transition"
            >
              <span className="text-xs uppercase text-primary font-semibold mb-2">
                {category}
              </span>
              <h4 className="text-xl font-bold mb-3">{title}</h4>
              <p className="text-gray-600 flex-grow mb-5">{description}</p>
              <time className="mb-5 text-sm text-gray-400">{date}</time>
              <a
                href={url}
                download={downloadName}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary px-6 py-2 rounded text-white font-semibold hover:bg-primary-dark transition text-center"
              >
                Download
              </a>
            </article>
          )
        )}
      </div>
    </section>
  );
}
