import { Box, Button, Typography } from "@mui/material";
import React from "react";
import PressReleasesSection from "./PressReleasesSection";
import MultimediaAssetsSection from "./MultimediaAssetsSection";
import newsBg from '../../assets/img1.png'

const newsroomData = {
    pressReleases: [
        {
            id: 1,
            title: "RSquareSoft Launches New AI-Powered Analytics Platform",
            date: "August 1, 2025",
            summary:
                "Introducing RSquareSoft Insights, a cutting-edge AI analytics platform providing real-time data-driven decisions for enterprises.",
            link: "#",
        },
        {
            id: 2,
            title: "RSquareSoft Partners with CloudTech for Enhanced Cloud Solutions",
            date: "July 15, 2025",
            summary:
                "Strategic partnership to deliver integrated cloud migration and management services with enhanced security features.",
            link: "#",
        },
        {
            id: 3,
            title: "RSquareSoft Named a Leader in Gartner’s Magic Quadrant for Cloud Consulting",
            date: "June 30, 2025",
            summary:
                "Recognized for outstanding innovation and client satisfaction in cloud consulting and technology services.",
            link: "#",
        },
        {
            id: 4,
            title: "RSquareSoft Releases Version 2.0 of Its Flagship Product Management Tool",
            date: "June 1, 2025",
            summary:
                "New features include enhanced collaboration, automated workflows, and seamless integration with leading development platforms.",
            link: "#",
        },
        {
            id: 5,
            title: "RSquareSoft Announces Expansion to European Market",
            date: "May 20, 2025",
            summary:
                "Opening offices in Berlin and London to better serve European clients and accelerate global digital transformation initiatives.",
            link: "#",
        },
        {
            id: 6,
            title: "RSquareSoft Enhances Cybersecurity Offerings with AI Intrusion Detection",
            date: "May 10, 2025",
            summary:
                "Launching AI-driven intrusion detection systems to proactively safeguard enterprise environments against modern threats.",
            link: "#",
        },
        {
            id: 7,
            title: "RSquareSoft Wins ‘Best Workplace in Tech 2025’ Award",
            date: "April 25, 2025",
            summary:
                "Honored for its inclusive culture, employee wellness initiatives, and commitment to professional growth.",
            link: "#",
        },
        {
            id: 8,
            title: "RSquareSoft Hosts Annual Developer Conference with Record Attendance",
            date: "April 10, 2025",
            summary:
                "Feature keynote speakers, hands-on labs, and networking with industry leaders driving software innovation.",
            link: "#",
        },
    ]
    ,
    mediaCoverage: [
        {
            id: 1,
            outlet: "TechCrunch",
            headline: "RSquareSoft is Disrupting Enterprise Software Market",
            link: "#",
        },
        {
            id: 2,
            outlet: "Forbes",
            headline: "Inside RSquareSoft’s Growth Strategy",
            link: "#",
        },
    ],
    mediaContacts: {
        phone: "+1 (555) 123-4567",
        email: "press@rsquaresoft.com",
        address: "123 Innovation Drive, Silicon Valley, CA",
    },
    multimediaAssets: [
        { type: "Logo", url: "/assets/logo.png", downloadName: "RSquareSoft_Logo.png" },
        { type: "Product Image", url: "/assets/product.jpg", downloadName: "Product_Image.jpg" },
    ],
    companyFactSheet: {
        founded: 2010,
        employees: 350,
        headquarters: "Silicon Valley, CA",
        revenue: "$50M (2024)",
    },
    awards: [
        "Best AI Startup 2023",
        "Cloud Excellence Award 2024",
        "Top 100 Innovative Companies 2025",
    ],
    upcomingEvents: [
        {
            title: "Webinar: The Future of AI in Business",
            date: "Sept 20, 2025",
            link: "#",
        },
        {
            title: "Annual Developer Conference",
            date: "Nov 10-12, 2025",
            link: "#",
        },
    ],
};


const mediaCoverageData = [
    {
        id: 1,
        outlet: "TechCrunch",
        headline: "RSquareSoft Disrupts Enterprise Software Market with AI Solutions",
        link: "https://techcrunch.com/article-rsquare-soft-ai",
        logo: "https://logo.clearbit.com/techcrunch.com",
        summary:
            "RSquareSoft has introduced an innovative AI platform revolutionizing how enterprises automate workflows and improve efficiency.",
    },
    {
        id: 2,
        outlet: "Forbes",
        headline: "Inside RSquareSoft’s Strategy for Global Expansion",
        link: "https://forbes.com/rsquaresoft-global-expansion",
        logo: "https://logo.clearbit.com/forbes.com",
        summary:
            "A deep dive into RSquareSoft’s bold expansion plans and their roadmap for the next five years.",
    },
    {
        id: 3,
        outlet: "Wired",
        headline: "RSquareSoft Leads with Cutting-Edge Cloud Innovations",
        link: "https://wired.com/rsquaresoft-cloud-innovations",
        logo: "https://logo.clearbit.com/wired.com",
        summary:
            "Pioneering cloud computing services, RSquareSoft is setting new industry standards.",
    },
    {
        id: 4,
        outlet: "ZDNet",
        headline: "How RSquareSoft is Transforming Digital Workplaces",
        link: "https://zdnet.com/rsquaresoft-digital-workplaces",
        logo: "https://logo.clearbit.com/zdnet.com",
        summary:
            "Exploring RSquareSoft's approach to automating and modernizing enterprise work environments.",
    },
    {
        id: 5,
        outlet: "The Verge",
        headline: "The Future of AI: RSquareSoft’s Vision for Smarter Systems",
        link: "https://theverge.com/rsquaresoft-ai-future",
        logo: "https://logo.clearbit.com/theverge.com",
        summary:
            "RSquareSoft outlines new AI-driven tools designed to empower businesses worldwide.",
    },
    {
        id: 6,
        outlet: "Business Insider",
        headline: "RSquareSoft’s Journey to Sustainable Tech Growth",
        link: "https://businessinsider.com/rsquaresoft-sustainability-tech",
        logo: "https://logo.clearbit.com/businessinsider.com",
        summary:
            "Highlights on RSquareSoft’s commitment to green technology and sustainable innovation.",
    },
];


const multimediaAssetsData = [
    {
        id: 1,
        type: "Logo - Primary",
        category: "Branding",
        description: "High-resolution primary logo in PNG and SVG formats.",
        url: "https://example.com/assets/logo-primary.png",
        downloadName: "RSquareSoft_Logo_Primary.png",
        thumbnail:
            "https://example.com/assets/thumb-logo-primary.png",
    },
    {
        id: 2,
        type: "Product Showcase Video",
        category: "Marketing",
        description: "HD video highlighting our flagship product’s features.",
        url: "https://example.com/assets/product-showcase.mp4",
        downloadName: "RSquareSoft_Product_Showcase.mp4",
        thumbnail:
            "https://example.com/assets/thumb-product-video.jpg",
    },
    {
        id: 3,
        type: "Brand Guidelines Document",
        category: "Branding",
        description:
            "PDF guide detailing logo usage, color palette, and typography standards.",
        url: "https://example.com/assets/brand-guidelines.pdf",
        downloadName: "RSquareSoft_Brand_Guidelines.pdf",
        thumbnail:
            "https://example.com/assets/thumb-brand-guide.png",
    },
    {
        id: 4,
        type: "Press Photos",
        category: "Media",
        description: "High-res images from our latest corporate events.",
        url: "https://example.com/assets/press-photos.zip",
        downloadName: "RSquareSoft_Press_Photos.zip",
        thumbnail:
            "https://example.com/assets/thumb-press-photos.jpg",
    },
    {
        id: 5,
        type: "Marketing Brochure",
        category: "Marketing",
        description:
            "Downloadable brochure outlining our product offerings and success stories.",
        url: "https://example.com/assets/marketing-brochure.pdf",
        downloadName: "RSquareSoft_Marketing_Brochure.pdf",
        thumbnail:
            "https://example.com/assets/thumb-brochure.png",
    },
    {
        id: 6,
        type: "Social Media Kit",
        category: "Branding",
        description: "Images and video clips optimized for social media campaigns.",
        url: "https://example.com/assets/social-media-kit.zip",
        downloadName: "RSquareSoft_Social_Media_Kit.zip",
        thumbnail:
            "https://example.com/assets/thumb-social-media-kit.jpg",
    },
];

export default function Newsroom() {
    const youtubeVideoId = "bQieLqcSmEI";
    
    return (
        <div >
            <main className="max-w-full min-h-screen mx-auto font-family-base bg-background text-gray-800">
                {/* 1. Hero Section */}
                <Box
                    sx={{
                        bgcolor: "var(--color-background)",
                        width: "100%",
                        pt: { xs: 13, md: 14 },
                        px: { xs: 2, md: 8 },
                    }}
                >
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            minHeight: { xs: 500, md: 620 },
                            display: "flex",
                            alignItems: "end",
                            justifyContent: "center",
                            backgroundImage: `url(${newsBg})`,
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
                                bgcolor: "rgba(0,0,0,0.6)",
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
                            <nav className="absolute -top-15 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
                                {/* First line: breadcrumb links separated by slash */}
                                <div className="flex space-x-3">
                                    <a>
                                        Who we are
                                    </a>
                                    <span>/</span>
                                    <span>Newsroom</span>
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
                                RSquareSoft Newsroom
                            </Typography>
                            <Typography mb={3} color="white" fontSize='var(--font-size-subheading)'>
                                Stay updated with our latest announcements, media mentions, and events.
                            </Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                onClick={() => {
                                    const section = document.getElementById("press");
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
                                Explore Our Newsroom
                            </Button>
                        </Box>

                    </Box>
                </Box>

                {/* 2. Press Releases */}
                <section id="press" className="bg-background">
                    <PressReleasesSection pressReleases={newsroomData.pressReleases} />
                </section>

                <section className="max-w-7xl mx-auto px-4 py-12 bg-background">
                    <h2 className="text-2xl font-semibold border-b-2 border-primary py-5 mb-10 text-center">
                        Media Coverage
                    </h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {mediaCoverageData.map(({ id, outlet, headline, link, logo, summary }) => (
                            <a
                                key={id}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block border border-gray-200 rounded-lg p-6 bg-white shadow-md  transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-4">
                                    <img
                                        src={logo}
                                        alt={`${outlet} logo`}
                                        className="h-10 w-10 object-contain mr-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <span className="font-semibold text-sm text-gray-500 uppercase">{outlet}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                                    {headline}
                                </h3>
                                <p className="text-gray-600 text-sm">{summary}</p>
                            </a>
                        ))}
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

                <section className="bg-background">
                    <MultimediaAssetsSection />
                </section>



            </main>
        </div>
    );
}
