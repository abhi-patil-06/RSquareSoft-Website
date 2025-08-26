import React, { useState } from "react";

const pressReleasesData = [
  {
    id: 1,
    title: "Infosys Collaborates with RWE AG to Drive Automated Digital Workplace Transformation",
    date: "July 28, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "Sakal",
    desc:
      "Infosys joins forces with RWE AG to develop automated solutions aimed at transforming digital workplaces, enhancing productivity, and enabling remote collaboration.",
  },
  {
    id: 2,
    title: "Financial Information for the First Quarter ended June 30, 2025",
    date: "July 23, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "NDTV",
    desc:
      "Infosys announces its financial results for Q1 2025, showcasing strong revenue growth driven by digital and cloud transformation services worldwide.",
  },
  {
    id: 3,
    title: "Infosys Collaborates with AGCO to Deliver IT and HR Operations Transformation",
    date: "July 22, 2025",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    link: '#',
    newsBy: "Lokmat",
    desc:
      "Partnering with AGCO, Infosys implements innovative IT and HR operational changes that streamline processes and improve workforce engagement.",
  },
  {
    id: 4,
    title: "Infosys and Telstra International Collaborate to Advance Technology Leadership",
    date: "July 21, 2025",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
    link:'#',
    newsBy: "Sakal",
    desc:
      "Infosys and Telstra International announce a partnership focusing on advancing technology leadership through joint innovation and service excellence.",
  },
  {
    id: 5,
    title: "Launch of New Ecosystem to Accelerate Digital Transformation",
    date: "July 15, 2025",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: '#',
    newsBy: "TV9",
    desc:
      "Infosys launches a comprehensive digital ecosystem designed to accelerate client transformation journeys across multiple sectors globally.",
  },
  {
    id: 6,
    title: "Quarterly Earnings Report Q2 2025",
    date: "July 10, 2025",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "Sakal",
    desc:
      "Infosys reports solid financial performance in Q2 2025, driven by strong demand across digital services and cloud offerings worldwide.",
  },
  {
    id: 7,
    title: "Strategic Partnership Announced with Leading Cloud Provider",
    date: "July 5, 2025",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "NDTV",
    desc:
      "Infosys and a leading cloud provider enter into a strategic partnership to deliver enhanced cloud-native services for enterprise clients.",
  },
  {
    id: 8,
    title: "Successful Completion of Major Automation Project",
    date: "June 30, 2025",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "Lokmat",
    desc:
      "Infosys completes a large-scale automation initiative that significantly reduces operational costs and improves efficiency for its client.",
  },
  {
    id: 9,
    title: "New Leadership Additions to Drive Growth",
    date: "June 25, 2025",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "Sakal",
    desc:
      "Infosys appoints experienced industry professionals in new leadership roles to bolster innovation and corporate growth strategies.",
  },
  {
    id: 10,
    title: "Expansion of Global Delivery Centers",
    date: "June 20, 2025",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    link: "#",
    newsBy: "Sakal",
    desc:
      "Infosys announces the expansion of its global delivery centers to better serve customers and support digital transformation worldwide.",
  },
];


export default function PressReleasesSection() {
  const [visibleCount, setVisibleCount] = useState(4);

  const visibleItems = pressReleasesData.slice(0, visibleCount);
  const hasMore = visibleCount < pressReleasesData.length;

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 4, pressReleasesData.length));
  };

  return (
    <section className="max-w-7xl mx-auto px-4">
      <h2 className="text-2xl font-semibold border-b-2 border-primary py-5 mb-10 text-center">
        Press Releases
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4  gap-8">
        {visibleItems.map(({ id, title, date, image, link, newsBy, desc }) => (
          <article
            key={id}
            className="bg-background transition flex flex-col"
          >
            <div className="h-60 overflow-hidden ">
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-full transform transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="py-4 flex flex-col flex-grow">
              <span className="bg-primary text-white text-xs font-semibold px-2 py-1 rounded inline-block mb-2">
                {newsBy}
              </span>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-black leading-snug hover:underline flex-grow"
              >
                {title}
              </a>
              <span className="py-5">
                {desc}
              </span>
              <time className="text-xs mt-4 text-gray-400">{date}</time>
            </div>
          </article>
        ))}
      </div>
      {hasMore && (
        <div className="mt-8 text-center">
          <button
            onClick={loadMore}
            className="inline-block border border-primary text-primary px-8 py-3 rounded font-semibold hover:bg-primary hover:text-white transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}















// import React, { useState } from "react";

// export default function PressReleasesSection({ pressReleases }) {
//   const [visibleCount, setVisibleCount] = useState(5);

//   const visibleItems = pressReleases.slice(0, visibleCount);
//   const hasMore = visibleCount < pressReleases.length;

//   const loadMore = () => {
//     setVisibleCount((prev) => Math.min(prev + 5, pressReleases.length));
//   };

//   return (
//     <section>
//       <h2 className="text-2xl font-semibold border-b-2 border-primary py-2 mb-6">
//         Press Releases
//       </h2>
//       <ul className="space-y-5">
//         {visibleItems.map(({ id, title, date, summary, link }) => (
//           <li
//             key={id}
//             className="p-5 border rounded-md hover:shadow-lg transition-shadow bg-white"
//           >
//             <a
//               href={link}
//               className="text-xl font-semibold text-primary hover:underline"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {title}
//             </a>
//             <p className="text-sm text-gray-500 mt-1">{date}</p>
//             <p className="text-gray-700 mt-2">{summary}</p>
//           </li>
//         ))}
//       </ul>
//       {hasMore && (
//         <div className="mt-6 text-center">
//           <button
//             onClick={loadMore}
//             className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark transition"
//           >
//             Load More
//           </button>
//         </div>
//       )}
//     </section>
//   );
// }
