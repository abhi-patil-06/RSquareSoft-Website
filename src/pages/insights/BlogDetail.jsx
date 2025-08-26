import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import or copy your blogData from Blog list or manage via global/store/API
import { blogData } from "./BlogData";
import { div } from "framer-motion/client";

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogData.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="bg-background">
        <main className="max-w-4xl mx-auto p-6 text-center text-red-600">
          <h1 className="text-3xl font-bold">Blog Not Found</h1>
          <button
            onClick={() => navigate("/insights")}
            className="text-primary mt-4"
          >
            &lt; Back to Blogs
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
          </button>
        </main>
      </div>
    );
  }

  const { image, date, topic, title, content } = blog;

  return (
    <div className="bg-background">
      <main className="max-w-4xl mx-auto p-6 pt-30 space-y-8 ">
        <button
          onClick={() => navigate("/insights")}
          className="text-primary cursor-pointer font-semibold group"
        >
          &lt; Back to Blogs
          <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 bg-primary h-0.5 mt-1" />
        </button>
        <img
          src={image}
          alt={title}
          className="w-full h-72 object-cover rounded"
        />
        <p className="text-gray-500 text-sm">
          {date} &bull; {topic}
        </p>
        <h1 className="text-4xl font-bold">{title}</h1>
        <article className="prose max-w-none text-gray-800 whitespace-pre-line">
          {content}
        </article>

      </main>
    </div>
  );
}
