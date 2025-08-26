import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "./BlogData";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="text-center mb-8 max-w-screen-xl mx-auto px-4">
          <h2
            className="font-bold text-text-primary"
            style={{ fontSize: "var(--font-size-heading1)" }}
          >
            Latest Blog
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mt-2 rounded"></div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogData.map(({ id, image, date, topic, title, excerpt }) => (
          <article
            key={id}
            className=" overflow-hidden shadow hover:shadow-lg transition "
          >
            <img src={image} alt={title} className="w-full h-85 object-cover" />
            <div className="p-6 flex flex-col gap-2">
              <p className="text-sm text-gray-500">
                {date} &bull; {topic}
              </p>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p className="text-gray-700 line-clamp-5">{excerpt}</p>
              <Link
                to={`/blog/${id}`}
                className="mt-4 max-w-fit inline-block text-primary font-semibold group"
              >
                Read More
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

















// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // Sample blog data - replace with your real data or props as needed
// const blogData = [
//     {
//         id: "1",
//         image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//         date: "August 1, 2025",
//         topic: "Artificial Intelligence",
//         title: "The Future of AI: Trends to Watch",
//         excerpt:
//             "AI is rapidly evolving and impacting industries worldwide. This blog explores the latest developments in AI technologies, discusses ethical implications, and highlights key trends shaping the future of AI adoption.",
//         content: `AI is rapidly evolving and impacting industries worldwide. This blog explores the latest developments in AI technologies, discusses ethical implications, and highlights key trends shaping the future of AI adoption.

//             Industry leaders predict significant transformation in healthcare, education, and business sectors. Ethical AI frameworks are being developed to ensure responsible use of technology. Innovations such as natural language processing, computer vision, and autonomous systems are forecast to redefine productivity.

//             Stay updated with AI breakthroughs, and how businesses can leverage them to gain competitive advantage. We also explore challenges such as bias in AI models and data privacy concerns. This comprehensive article is designed to inform professionals and enthusiasts about the dynamic AI landscape.`,
//     },
//     {
//         id: "2",
//         image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
//         date: "July 15, 2025",
//         topic: "Cloud Computing",
//         title: "Cloud Migration Best Practices in 2025",
//         excerpt:
//             "Cloud migration continues to be a critical strategy for business agility. This post covers essential best practices for a successful cloud migration journey, focusing on planning, security, and cost control.",
//         content: `Cloud migration continues to be a critical strategy for business agility. This post covers essential best practices for a successful cloud migration journey, focusing on planning, security, and cost control.

//             Effective cloud strategy requires thorough assessment of current infrastructure and business goals. Security protocols and compliance must be integral part of the migration plan. Cost optimization is achievable with proper resource management and automation.

//             We also discuss the importance of change management to ensure smooth transition for teams. Lastly, this article provides case studies showcasing successful migration stories to inspire your cloud journey.`,
//     },
//     {
//         id: "2",
//         image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
//         date: "July 15, 2025",
//         topic: "Cloud Computing",
//         title: "Cloud Migration Best Practices in 2025",
//         excerpt:
//             "Cloud migration continues to be a critical strategy for business agility. This post covers essential best practices for a successful cloud migration journey, focusing on planning, security, and cost control.",
//         content: `Cloud migration continues to be a critical strategy for business agility. This post covers essential best practices for a successful cloud migration journey, focusing on planning, security, and cost control.

//             Effective cloud strategy requires thorough assessment of current infrastructure and business goals. Security protocols and compliance must be integral part of the migration plan. Cost optimization is achievable with proper resource management and automation.

//             We also discuss the importance of change management to ensure smooth transition for teams. Lastly, this article provides case studies showcasing successful migration stories to inspire your cloud journey.`,
//     },
//     {
//         id: "1",
//         image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
//         date: "August 1, 2025",
//         topic: "Artificial Intelligence",
//         title: "The Future of AI: Trends to Watch",
//         excerpt:
//             "AI is rapidly evolving and impacting industries worldwide. This blog explores the latest developments in AI technologies, discusses ethical implications, and highlights key trends shaping the future of AI adoption.",
//         content: `AI is rapidly evolving and impacting industries worldwide. This blog explores the latest developments in AI technologies, discusses ethical implications, and highlights key trends shaping the future of AI adoption.

//             Industry leaders predict significant transformation in healthcare, education, and business sectors. Ethical AI frameworks are being developed to ensure responsible use of technology. Innovations such as natural language processing, computer vision, and autonomous systems are forecast to redefine productivity.

//             Stay updated with AI breakthroughs, and how businesses can leverage them to gain competitive advantage. We also explore challenges such as bias in AI models and data privacy concerns. This comprehensive article is designed to inform professionals and enthusiasts about the dynamic AI landscape.`,
//     },
//     // Add more blogs as needed
// ];

// export default function Blog() {
//     const [selectedBlog, setSelectedBlog] = useState(null);
//     const navigate = useNavigate();

//     // Show blog list or blog detail based on state
//     if (selectedBlog) {
//         // Detail view
//         return (
//             <main className="max-w-4xl mx-auto p-6 space-y-8">
//                 <img
//                     src={selectedBlog.image}
//                     alt={selectedBlog.title}
//                     className="w-full h-72 object-cover rounded"
//                 />
//                 <p className="text-gray-500 text-sm">
//                     {selectedBlog.date} &bull; {selectedBlog.topic}
//                 </p>
//                 <h1 className="text-4xl font-bold">{selectedBlog.title}</h1>
//                 <article className="prose max-w-none text-gray-800 whitespace-pre-line">
//                     {selectedBlog.content}
//                 </article>
//                 <button
//                     onClick={() => setSelectedBlog(null)}
//                     className="text-primary hover:underline font-semibold"
//                 >
//                     &larr; Back to Blogs
//                 </button>
//             </main>
//         );
//     }

//     // List view
//     return (
//         <div className="max-w-7xl mx-auto p-6">
//             <h1 className="text-4xl font-bold mb-8 text-center">Latest Blogs</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {blogData.map(({ id, image, date, topic, title, excerpt }) => (
//                     <article
//                         key={id}
//                         className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition cursor-pointer"
//                         onClick={() => setSelectedBlog(blogData.find((b) => b.id === id))}
//                     >
//                         <img src={image} alt={title} className="w-full h-56 object-cover" />
//                         <div className="p-6 flex flex-col gap-2">
//                             <p className="text-sm text-gray-500">
//                                 {date} &bull; {topic}
//                             </p>
//                             <h2 className="text-xl font-semibold">{title}</h2>
//                             <p className="text-gray-700 line-clamp-5">{excerpt}</p>
//                             <button
//                                 onClick={(e) => {
//                                     e.stopPropagation(); // prevent article click
//                                     setSelectedBlog(blogData.find((b) => b.id === id));
//                                 }}
//                                 className="mt-4 self-start text-primary font-semibold hover:underline"
//                             >
//                                 Read More
//                             </button>
//                         </div>
//                     </article>
//                 ))}
//             </div>
//         </div>
//     );
// }
