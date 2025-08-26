import React, { useState } from "react";
import { useEffect, useRef } from "react";


const eventsData = [
    {
        id: 1,
        title: "Annual Developer Conference",
        date: "2025-11-10",
        link: "#",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
        type: "upcoming",
        description:
            "Join industry leaders and innovators in this annual event focusing on the latest in software development.",
    },
    {
        id: 2,
        title: "Webinar: The Future of AI in Business",
        date: "2025-09-20",
        link: "#",
        image:
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&q=80",
        type: "upcoming",
        description:
            "Insights from top experts on AI trends shaping the future of business transformation.",
    },
    {
        id: 5,
        title: "Cloud Security Summit",
        date: "2025-10-15",
        link: "#",
        image:
            "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
        type: "upcoming",
        description:
            "Explore best practices in securing cloud infrastructure and data privacy.",
    },
    {
        id: 3,
        title: "Product Launch Party",
        date: "2024-12-05",
        link: "#",
        image:
            "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
        type: "past",
        description:
            "Celebrating the release of our flagship product with partners and customers.",
    },
    {
        id: 4,
        title: "Quarterly Townhall Meeting",
        date: "2025-05-15",
        link: "#",
        image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=600&q=80",
        type: "past",
        description:
            "Company-wide update on achievements and future goals, with Q&A sessions.",
    },
    {
        id: 6,
        title: "Tech Innovations Expo",
        date: "2024-11-20",
        link: "#",
        image:
            "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=600&q=80",
        type: "past",
        description:
            "Showcased latest technology breakthroughs and research developments.",
    },
];

const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

export default function EventsSplitSection() {
    const [filter, setFilter] = useState("upcoming");
    const filteredEvents = eventsData.filter((e) => e.type === filter);
    const visibleEvents = filteredEvents.slice(0, 3);

    // Track active card on mobile/touch
    const [activeCardId, setActiveCardId] = useState(null);

    const containerRef = useRef(null);
    const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const tabs = ["upcoming", "past"];
        const activeIndex = tabs.indexOf(filter);
        const activeTab = container.children[activeIndex];
        if (activeTab) {
            setUnderlineStyle({
                left: activeTab.offsetLeft,
                width: activeTab.offsetWidth,
            });
        }
    }, [filter]);

    const toggleActive = (id) => {
        setActiveCardId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="relative w-full font-family-base bg-background min-h-screen select-none">
            {/* Black background area */}
            <div className="text-white w-screen flex flex-col items-center justify-center py-32 md:py-40 px-6 select-none "
                style={{
                    background: 'linear-gradient(135deg, #002244 0%, #000A14 100%)', // Made even darker
                }}>
                <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight mb-8 sm:mb-12 uppercase">
                    Events
                </h1>
                {/* Tabs */}
                <div
                    ref={containerRef}
                    className="relative flex space-x-10 mb-15 w-full max-w-md justify-center"
                    role="tablist"
                >
                    {["upcoming", "past"].map((tab, i) => (
                        <button
                            key={tab}
                            onClick={() => setFilter(tab)}
                            className={`relative pb-3 font-semibold text-lg focus:outline-none transition-colors duration-300 ${filter === tab ? "text-primary" : "text-gray-400 hover:text-primary"
                                }`}
                            aria-selected={filter === tab}
                            aria-controls="events-list"
                            role="tab"
                            tabIndex={filter === tab ? 0 : -1}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)} Events
                        </button>
                    ))}

                    {/* Sliding underline */}
                    <span
                        className="absolute bottom-0 h-1 bg-primary rounded-t-lg transition-all duration-500 ease-in-out"
                        style={{
                            left: underlineStyle.left,
                            width: underlineStyle.width,
                        }}
                    />
                </div>

            </div>

            {/* Events grid overlapping the black section */}
            <div className="relative z-10 max-w-7xl mx-auto py-5 px-6 sm:px-12 -mt-40 mb-24">
                <ul
                    id="events-list"
                    className="grid gap-10 grid-cols-1 md:grid-cols-3"
                    aria-live="polite"
                >
                    {visibleEvents.length === 0 ? (
                        <li className="col-span-full text-center text-gray-500 text-lg py-20">
                            No {filter} events available.
                        </li>
                    ) : (
                        visibleEvents.map(({ id, title, description, date, link, image }) => {
                            const isActive = activeCardId === id;

                            return (
                                <li
                                    key={id}
                                    className="group overflow-hidden bg-white relative "
                                    onClick={() => toggleActive(id)}
                                    onTouchStart={() => toggleActive(id)}
                                    tabIndex={0}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter" || e.key === " ") {
                                            toggleActive(id);
                                        }
                                    }}
                                >
                                    <a
                                        className="block focus:outline-none focus:ring-4 focus:ring-primary/50"
                                        onClick={(e) => e.stopPropagation()} // Prevent overlay toggle on link click
                                    >
                                        <div className="relative overflow-hidden h-60 md:h-64">
                                            <img
                                                src={image}
                                                alt={title}
                                                loading="lazy"
                                                className={`object-cover w-full h-full transition-transform duration-500 ${isActive ? "" : "group-hover:scale-110"
                                                    }`}
                                            />
                                            {/* Overlay */}
                                            <div
                                                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 flex flex-col justify-end h-60 md:h-64 transition-opacity duration-500 ${isActive || "opacity-0 group-hover:opacity-100"
                                                    }`}
                                                style={{ opacity: isActive ? 1 : undefined }}
                                            >
                                                <h3 className="text-white text-xl font-semibold leading-tight mb-1">
                                                    {title}
                                                </h3>
                                                <p className="text-gray-300 text-sm line-clamp-3">{description}</p>
                                                <time className="text-gray-400 text-xs mt-2">{formatDate(date)}</time>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            );
                        })
                    )}
                </ul>

                <div className="mt-12 text-center">
                    <button
                        onClick={() => alert("Redirecting to full events page")}
                        className="inline-block bg-primary px-10 py-3 rounded-full text-white font-semibold shadow-lg hover:bg-primary-dark focus:ring-4 focus:ring-primary/50 transition"
                    >
                        See More
                    </button>
                </div>
            </div>
        </section>
    );
}