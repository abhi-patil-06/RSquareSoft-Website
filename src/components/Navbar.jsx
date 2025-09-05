import React, {
    useState,
    useRef,
    useEffect,
    useCallback,
} from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import * as FaIcons from "react-icons/fa";
import { FiArrowRightCircle } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { useLocation } from "react-router-dom";
import logoImg from '../assets/logo.png'

// NAV_ITEMS and NAV_DETAILS are large and static - use useMemo for top-level performance
const NAV_ITEMS = {
    "What We Do": [
        {
            title: "Quick Look",
            icon: FaIcons.FaGlobe,
            subTitle: "Driving innovation across every digital frontier.",
            description:
                "At RSquare Soft, we transform visions into reality by What We Do: offering a comprehensive suite of services, developing impactful products, and leveraging cutting-edge technologies to empower businesses",
            points: [
                {
                    p1: "Services",
                    desc1:
                        "We provide end-to-end solutions, including product development, web & mobile app development.",
                    p2: "Products",
                    desc2:
                        "Our innovative in-house products like ValetPlus, Karmika, TakuMi, and CP address diverse industry needs.",
                    p3: "Technology",
                    desc3:
                        "Our expertise in enterprise products, cloud computing, artificial intelligence, data analytics, and machine learning, forming the advanced technical backbone of our offerings.",
                },
            ],
        },
        {
            title: "Services",
            icon: FaIcons.FaCog,
            description: [
                {
                    label: "Product Development",
                    link: "/productDev",
                    icon: FaIcons.FaLaptopCode,
                },
                {
                    label: "Pod Model (Fixed Price)",
                    link: "/podModel",
                    icon: FaIcons.FaCubes,
                },
                {
                    label: "Time and Material Model",
                    link: "/timeMaterial",
                    icon: FaIcons.FaClock,
                },
                // { label: "Web & Mobile App Development", link: "#", icon: FaIcons.FaMobileAlt },
                // { label: "Digital Transformation Consulting", link: "#", icon: FaIcons.FaSyncAlt },
                // { label: "Technology Consulting", link: "#", icon: FaIcons.FaLightbulb },
                // { label: "Cloud Migration & Management", link: "#", icon: FaIcons.FaCloudUploadAlt },
            ],
        },
        {
            title: "Products",
            icon: FaIcons.FaTools,
            description: [
                { label: "ValetPlus", link: "/valetplus", icon: FaIcons.FaCar },
                // { label: "Karmika", link: "/karmika", icon: FaIcons.FaHardHat },
                { label: "TakuMi", link: "/takumi", icon: FaIcons.FaChartPie },
                // { label: "CP", link: "/cp", icon: FaIcons.FaUsers },
            ],
        },
        {
            title: "Technology",
            icon: FaIcons.FaBrain,
            description: [
                {
                    label: "Enterprise Products",
                    link: "/enterpriseProduct",
                    icon: FaIcons.FaDatabase,
                },
                {
                    label: "Cloud Expertise",
                    link: "/cloudExpertise",
                    icon: FaIcons.FaCloud,
                },
                {
                    label: "Artificial Intelligence",
                    link: "/ai",
                    icon: FaIcons.FaRobot,
                },
                {
                    label: "Data Analytics",
                    link: "/dataAnalytics",
                    icon: FaIcons.FaChartLine,
                },
                { label: "Machine Learning", link: "/ml", icon: FaIcons.FaBrain },
            ],
        },
    ],
    "Who We Are": [
        {
            title: "Quick Look",
            icon: FaIcons.FaChartLine,
            subTitle: "Innovation is a relentless journey of discovery.",
            description:
                "Who We Are: We are RSquare Soft – a team of innovators defining the future through technology. This section highlights our identity, journey, and impact.",
            points: [
                {
                    p1: "About Us",
                    desc1:
                        "Explore our companys history, core values, and the leadership team guiding our vision.",
                    p2: "Success Stories",
                    desc2:
                        "Discover how our solutions have driven real-world value through client testimonials and case studies.",
                    p3: "Newsroom",
                    desc3:
                        "Get the latest updates on RSquare Soft, including press releases and media coverage.",
                },
            ],
        },
        {
            title: "About Us",
            icon: FaIcons.FaDatabase,
            description: [
                { label: "About Us", link: "/aboutUs", icon: FaIcons.FaRegNewspaper },
                // { label: "Leadership team", link: "#", icon: FaIcons.FaUsersCog },
            ],
        },
        {
            title: "Events",
            icon: FaIcons.FaNetworkWired,
            description: [
                {
                    label: "Events",
                    link: "/event",
                    icon: FaIcons.FaQuoteRight,
                },
                // { label: "Case studies", link: "#", icon: FaIcons.FaChartBar },
            ],
        },
        {
            title: "Newsroom",
            icon: FaIcons.FaGlobe,
            description: [
                { label: "News Room", link: "/newsRoom", icon: FaIcons.FaRegNewspaper },
                // { label: "Media coverage", link: "#", icon: FaIcons.FaChartLine },
            ],
        },
    ],
};

const navExtras = [
    { label: "Insights", to: "/insights" },
    { label: "Careers", to: "/careers" },
];

function Dropdown({ section, onClose, setActiveNavLink }) {
    const dropdownRef = useRef();
    const currentItems = NAV_ITEMS[section];
    const location = useLocation();
    const currentPath = location.pathname;

    // Find the index of the route-matched item, or use default (0=>"Quick Look")
    const urlActiveIndex = currentItems.findIndex(
        (item) =>
            Array.isArray(item.description) &&
            item.description.some((desc) => desc.link && desc.link === currentPath)
    );
    const defaultActiveIndex = 0;

    // Controlled selection: either user's choice or from URL
    const [activeIndex, setActiveIndex] = useState(
        urlActiveIndex !== -1 ? urlActiveIndex : defaultActiveIndex
    );

    // On route change, update activeIndex to match route, else fallback to default
    useEffect(() => {
        setActiveIndex(urlActiveIndex !== -1 ? urlActiveIndex : defaultActiveIndex);
    }, [urlActiveIndex, defaultActiveIndex]);

    // Close when clicked outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                onClose();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return (
        <motion.div
            ref={dropdownRef}
            className="absolute left-0 top-22 w-full bg-background shadow-lg z-50 h-[50vh] overflow-hidden font-family-base"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
        >
            <div className="flex h-full">
                {/* Left: Section Titles */}
                <div className="w-[30%] bg-background border-r border-border flex items-center justify-center">
                    <ul className="w-full">
                        {currentItems.map((item, index) => {
                            const isDirectLink =
                                Array.isArray(item.description) &&
                                item.description.length === 1 &&
                                !!item.description[0].link;

                            const isActive = index === activeIndex;

                            if (isDirectLink) {
                                return (
                                    <li
                                        key={item.title}
                                        className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors
                                                ${isActive
                                                ? "bg-background1 text-text-primary font-semibold"
                                                : "hover:bg-blue-100/70 text-text-primary"
                                            }`}
                                        style={{
                                            fontSize: "var(--font-size-subheading)",
                                        }}
                                    >
                                        <Link
                                            to={item.description[0].link}
                                            onClick={() => {
                                                setActiveIndex(index);
                                                onClose();
                                            }}
                                            className="flex items-center justify-between w-full h-full"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <span className="truncate">{item.title}</span>
                                            <FiArrowRightCircle className="text-2xl ml-3 shrink-0 text-text-primary" />
                                        </Link>
                                    </li>
                                );
                            }

                            return (
                                <li
                                    key={item.title}
                                    onClick={() => setActiveIndex(index)}
                                    className={`flex items-center justify-between px-6 py-4 cursor-pointer transition-colors 
                    ${isActive
                                            ? "bg-background1 text-text-primary font-semibold"
                                            : "hover:bg-blue-100/70 text-text-primary"
                                        }`}
                                    style={{
                                        fontSize: "var(--font-size-subheading)",
                                    }}
                                >
                                    <span className="truncate">{item.title}</span>
                                    <FiArrowRightCircle className="text-2xl ml-3 shrink-0" />
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/* Right: Description links */}
                <div className="w-[70%] pl-15 pt-8 overflow-y-auto">
                    {currentItems[activeIndex]?.description && (
                        <div className="flex flex-col gap-4">
                            {Array.isArray(currentItems[activeIndex].description) ? (
                                currentItems[activeIndex].description.map((desc, i) =>
                                    desc.link ? (
                                        <Link
                                            key={i}
                                            to={desc.link}
                                            className="group bg-blue-100 w-72 p-2  flex items-center gap-4 text-text-primary hover:text-primary transition"
                                            onClick={() => {
                                                setActiveNavLink(section); // set main nav active to current section
                                                onClose();
                                            }}
                                        >
                                            {desc.icon && (
                                                <desc.icon
                                                    className="text-primary group-hover:text-primary transition"
                                                    style={{
                                                        fontSize: "var(--font-size-subheading)",
                                                    }}
                                                />
                                            )}
                                            <span className="group-hover:underline">
                                                {desc.label}
                                            </span>
                                            <GoArrowUpRight
                                                className="opacity-70 group-hover:opacity-100 transition "
                                                style={{
                                                    fontSize: "var(--font-size-subheading)",
                                                }}
                                            />
                                        </Link>
                                    ) : (
                                        <span
                                            key={i}
                                            className="group flex items-center gap-4 text-text-primary"
                                        >
                                            <span>{desc.label}</span>
                                            <GoArrowUpRight className="text-lg opacity-60 group-hover:opacity-100 transition " />
                                        </span>
                                    )
                                )
                            ) : (
                                // If description is NOT an array (i.e., Quick Look)
                                <div className="max-w-[90%]">
                                    {currentItems[activeIndex].subTitle && (
                                        <div className="bg-blue-50 border-l-4 border-primary p-4 mb-4 shadow-sm rounded-r-lg">
                                            <p
                                                className="text-text-primary font-semibold leading-relaxed"
                                                style={{
                                                    fontSize: "var(--font-size-heading)",
                                                }}
                                            >
                                                "{currentItems[activeIndex].subTitle}"
                                            </p>
                                        </div>
                                    )}
                                    {currentItems[activeIndex].points &&
                                        currentItems[activeIndex].points.length > 0 && (
                                            <div className="grid gap-6 px-4">
                                                {currentItems[activeIndex].points.map(
                                                    (pointGroup, groupIndex) => (
                                                        <React.Fragment key={groupIndex}>
                                                            {pointGroup.p1 && (
                                                                <div className="pt-5 transition-all duration-300">
                                                                    <p className="text-text-primary leading-relaxed pl-8">
                                                                        <h3 className="inline font-semibold">
                                                                            {pointGroup.p1}
                                                                        </h3>{" "}
                                                                        : {pointGroup.desc1}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            {pointGroup.p2 && (
                                                                <div className=" transition-all duration-300">
                                                                    <p className="text-text-primary leading-relaxed pl-8">
                                                                        <h3 className="inline font-semibold">
                                                                            {pointGroup.p2}
                                                                        </h3>{" "}
                                                                        : {pointGroup.desc2}
                                                                    </p>
                                                                </div>
                                                            )}
                                                            {pointGroup.p3 && (
                                                                <div className=" transition-all duration-300">
                                                                    <p className="text-text-primary leading-relaxed pl-8">
                                                                        <h3 className="inline font-semibold">
                                                                            {pointGroup.p3}
                                                                        </h3>{" "}
                                                                        : {pointGroup.desc3}
                                                                    </p>
                                                                </div>
                                                            )}
                                                        </React.Fragment>
                                                    )
                                                )}
                                            </div>
                                        )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}


function getActiveMainNavKey(pathname) {
    return Object.keys(NAV_ITEMS).find(navKey =>
        NAV_ITEMS[navKey].some(item =>
            Array.isArray(item.description) &&
            item.description.some(desc => desc.link === pathname)
        )
    );
}



export default function Navbar() {
    const [activeDropdownName, setactiveDropdownName] = useState(null);
    const [activeNavLink, setActiveNavLink] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
    const location = useLocation();
    const isHomePage = location.pathname === "/";
    const [currentActiveNav, setCurrentActiveNav] = useState(null);


    useEffect(() => {
        function isPathInNav(navKey) {
            if (!navKey) return false;
            const navItems = NAV_ITEMS[navKey];
            if (!navItems) return false;
            return navItems.some(item =>
                Array.isArray(item.description) &&
                item.description.some(desc => desc.link === location.pathname)
            );
        }

        const activeNavByRoute = getActiveMainNavKey(location.pathname);

        // If route has changed, update currentActiveNav
        if (activeNavByRoute !== currentActiveNav) {
            setCurrentActiveNav(activeNavByRoute);
        }

        // Do not clear currentActiveNav when dropdown is toggled
        // Add extra safeguard if needed here to prevent clearing on dropdown toggle
    }, [location.pathname]);









    const toggleMobileSubmenu = (key) => {
        setMobileSubmenuOpen(prev => (prev === key ? null : key));
    };

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    // Scroll effect
    useEffect(() => {
        function handleScroll() {
            setIsScrolled(window.scrollY > 5);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handlers (memoized for props optimization if passed down)
    const handleMainNavClick = useCallback((item) => {
        // Allow toggling dropdown open/close
        setactiveDropdownName(prev => (prev === item ? null : item));

        // Do NOT clear currentActiveNav here; it stays based on active route
        // If you want highlight on clicked nav (regardless of route), you can set currentActiveNav(item);
    }, []);


    const clearAllDropdowns = useCallback(() => {
        setactiveDropdownName(null);
        setActiveNavLink(null);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }, []);


    useEffect(() => {
        const activeNav = getActiveMainNavKey(location.pathname);
        setCurrentActiveNav(activeNav || null);
    }, [location.pathname]);



    useEffect(() => {
        const extrasActive = navExtras.find(item => item.to === location.pathname);
        if (extrasActive) {
            setActiveNavLink(extrasActive.label);
        } else if (!currentActiveNav) {
            setActiveNavLink(null);
        }
    }, [location.pathname, currentActiveNav]);




    useEffect(() => {
        if (isHomePage) {
            clearAllDropdowns();
        }
    }, [isHomePage, clearAllDropdowns]);

    return (
        <header className="fixed top-0 left-0 w-full z-100 transition-colors duration-300">
            <div
                className={`flex items-center justify-between md:px-15 transition duration-300 font-family-base
                    ${
                    // For home page, transparent if not scrolled and no dropdown active
                    isHomePage
                        ? isScrolled || activeDropdownName || activeNavLink
                            ? "bg-background transition-colors duration-400"
                            : "bg-transparent text-gray-200 hover:text-text-primary hover:bg-background"
                        : // For non-home pages, always active background
                        "bg-background transition-colors duration-400"
                    }
                `}
            >
                {/* Logo */}
                <Link to="/" className="flex items-center cursor-pointer"
                    onClick={clearAllDropdowns}>
                    <img src={logoImg} alt="Logo" className="h-22 w-auto" />
                    <div className="flex flex-col leading-tight hover:text-text-primary">
                        <span
                            className="font-bold "
                            style={{
                                fontSize: "var(--font-size-heading)",
                            }}
                        >
                            RSquareSoft Technologies
                        </span>
                        <span
                            className="hover:text-text-secondary hidden lg:inline"
                            style={{
                                fontSize: "var(--font-size-description)",
                            }}
                        >
                            Delivering Best-in-Class Technology
                        </span>
                    </div>
                </Link>

                {/* Main Nav */}
                <nav
                    className="hidden md:flex space-x-10 relative pt-5"
                    style={{
                        fontSize: "var(--font-size-subheading)",
                    }}
                >
                    {Object.keys(NAV_ITEMS).map((item) => {
                        const isActive = currentActiveNav === item || activeDropdownName === item;
                        return (
                            <div
                                key={item}
                                className="relative group"
                                onClick={() => handleMainNavClick(item)}
                            >
                                <span
                                    className={`flex items-center gap-1 cursor-pointer px-1 transition-colors duration-300 ${isActive
                                        ? "text-primary after:scale-x-100"
                                        : "hover:text-text-primary"
                                        } ${!isActive && "group-hover:text-primary"
                                        } after:content-[''] after:block after:h-[3px] after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left ${!isActive && "group-hover:after:scale-x-100"
                                        }`}
                                >
                                    {item}
                                    <FaIcons.FaChevronDown
                                        className={`w-3 h-3 mt-1 transition-transform duration-300 ${isActive ? "rotate-180 text-primary" : "rotate-0"
                                            }`}
                                    />
                                </span>
                            </div>
                        );
                    })}
                    {navExtras.map((item) => {
                        const isActive = activeNavLink === item.label;
                        return (
                            <Link
                                key={item.label}
                                to={item.to}
                                className="relative group"
                                onClick={() => {
                                    clearAllDropdowns();
                                    setActiveNavLink(item.label); // set by label
                                }}
                                style={{ textDecoration: "none" }}
                            >
                                <span
                                    className={` cursor-pointer px-1  ${isActive
                                        ? "text-primary after:scale-x-100"
                                        : ""
                                        } ${!isActive && "group-hover:text-primary "
                                        } after:content-[''] after:block after:h-[3px] after:bg-secondary after:scale-x-0 after:transition-transform after:duration-300 after:origin-left ${!isActive && "group-hover:after:scale-x-100"
                                        }`}
                                >
                                    {item.label}
                                </span>
                            </Link>
                        );
                    })}
                </nav>
                {/* Button + Theme */}
                <div className="flex items-center space-x-2">
                    {/* <button
                        onClick={() => setIsDark((d) => !d)}
                        className="p-2  border-primary rounded-full text-primary hover:bg-primary hover:text-button-text transition-all duration-300 cursor-pointer"
                        aria-label="Toggle Theme"
                    >
                        {!isDark ? (
                            <FiSun className="h-5 w-5" />
                        ) : (
                            <FiMoon className="h-5 w-5" />
                        )}
                    </button> */}

                    {/* Hamburger for mobile */}
                    <button
                        className="md:hidden p-2 mr-4"
                        aria-label="Open Menu"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <FaIcons.FaBars className="h-6 w-6 text-secondary" />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {activeDropdownName && (
                    <Dropdown
                        section={activeDropdownName}
                        onClose={() => {
                            setactiveDropdownName(null);
                            // setActiveNavLink(null);
                        }}
                        setActiveNavLink={setActiveNavLink}
                    />
                )}
            </AnimatePresence>



            {/* Mobile Sidebar Overlay */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="fixed inset-0 backdrop-blur-sm z-[110]"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
                />
            )}



            {/* Mobile Sidebar */}
            <aside
                className={`fixed top-0 right-0 h-full w-70 bg-background z-[120] transform transition-all duration-400
                        ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
            >
                <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                    {/* <span className="text-primary font-semibold" style={{ fontSize: 'var(--font-size-subheading)' }}>Menu</span> */}
                    <img src={logoImg} alt="RSquareSoft" className="h-10 w-auto" />
                    <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close Menu" >
                        <FaIcons.FaTimes className="text-primary h-6 w-6" />
                    </button>
                </div>

                <nav className="flex flex-col p-4 space-y-4 overflow-y-auto" style={{ fontSize: 'var(--font-size-subheading)' }}>
                    {Object.keys(NAV_ITEMS).map((section) => {
                        // Exclude "Quick Look" items from mobile sidebar (filter)
                        const items = NAV_ITEMS[section].filter(item => item.title !== "Quick Look");

                        return (
                            <div key={section}>
                                <h3 className="text-primary font-semibold mb-2" style={{ fontSize: 'var(--font-size-subheading)' }}>{section}</h3>
                                <ul>
                                    {items.map((item, index) => {
                                        const hasSubLinks = Array.isArray(item.description) && item.description.some(desc => desc.link);
                                        const key = `${section}-${item.title}`;

                                        // For dropdown arrow toggle
                                        const isOpen = mobileSubmenuOpen === key;


                                        if (!hasSubLinks) {
                                            // No dropdown links, render label only (or possibly external links if any)
                                            return (
                                                <li key={key} className="pl-4 py-2 text-text-primary">
                                                    {item.title}
                                                </li>
                                            );
                                        }

                                        return (
                                            <li key={key} className="pl-4 py-2 flex flex-col">
                                                <button
                                                    onClick={() => toggleMobileSubmenu(key)}
                                                    className="flex items-center justify-between w-full text-text-primary font-medium"
                                                >
                                                    {item.title}
                                                    <FaIcons.FaChevronDown
                                                        className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                                                    />
                                                </button>
                                                <AnimatePresence initial={false}>
                                                    {isOpen && (
                                                        < motion.ul
                                                            className="mt-2 ml-4 space-y-2"
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.24, ease: [0.4, 0, 0.2, 1] }}
                                                            style={{ overflow: "hidden" }}
                                                        >
                                                            {item.description.map((desc, i) =>
                                                                desc.link ? (
                                                                    <li key={i}>
                                                                        <Link
                                                                            to={desc.link}
                                                                            className="flex items-center gap-2 text-text-primary hover:text-primary"
                                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                                        >
                                                                            {desc.icon && <desc.icon />}
                                                                            {desc.label}
                                                                        </Link>
                                                                    </li>
                                                                ) : null // skip non-links in mobile menu (like points or description text)
                                                            )}
                                                        </motion.ul>
                                                    )}
                                                </AnimatePresence>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        );
                    })}

                    {/* Extras */}
                    <div className="">
                        <ul>
                            {navExtras.map((item) => (
                                <li key={item.label} className="py-2">
                                    <Link
                                        to={item.to}
                                        className="text-primary hover:text-primary font-semibold"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        style={{ fontSize: 'var(--font-size-subheading)' }}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </aside>

        </header >
    );
}