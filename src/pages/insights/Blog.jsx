import React from "react";
import { Link } from "react-router-dom";
import { blogData } from "../../data/BlogData";

export default function Blog() {
  return (
    <div className="max-w-7xl mx-auto p-6 py-30">
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