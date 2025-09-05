// product development all data 

import { ArrowForward, Build, Security, VerifiedUser } from "@mui/icons-material";
import { Star } from "lucide-react";
import { TbTarget } from "react-icons/tb";


export const processSteps = [
  {
    title: "Ideation",
    icon: <TbTarget size={28} color="#167efb" />,
    description: "Identifying client needs, setting clear goals, and exploring innovative ideas."
  },
  {
    title: "Design",
    icon: <Build color="primary" />,
    description: "Crafting intuitive and engaging UI/UX tailored to user journeys."
  },
  {
    title: "Development",
    icon: <Star sx={{ color: "#1e40af" }} />,
    description: "Transforming designs into scalable, high-performance code."
  },
  {
    title: "QA",
    icon: <Security sx={{ color: "#60a5fa" }} />,
    description: "Thorough testing to ensure quality, security, and reliability."
  },
  {
    title: "Launch",
    icon: <ArrowForward sx={{ color: "#0891b2" }} />,
    description: "Deploying the product for real-world use with full support."
  },
  {
    title: "Support",
    icon: <VerifiedUser sx={{ color: "#2563eb" }} />,
    description: "Monitoring, maintaining, and enhancing the product post-launch."
  }
];


export const benefits = [
  { icon: <Star sx={{ color: "#60a5fa" }} />, title: "End-to-end Expertise", description: "Full-cycle product development with seasoned professionals." },
  { icon: <Build sx={{ color: "#0ea5e9" }} />, title: "Rapid Prototyping", description: "Fast, iterative approach to validate ideas early." },
  { icon: <Security sx={{ color: "#167efb" }} />, title: "Custom Solutions", description: "Tailored to your industry and business goals." },
]

import valetPlusImg from "../../assets/valetPlusProdService.svg"
import takumiImg from "../../assets/takumiProdService.png"

export const useCases = [
  {
    name: "ValetPlus",
    desc: "An intelligent parking system designed for large malls, hotels, and commercial complexes, streamlining vehicle management and enhancing user experience.",
    img: valetPlusImg,
    link: "/valetplus",
  },
  // {
  //   name: "Kaarmika",
  //   desc: "A comprehensive platform that efficiently connects contractors with a skilled workforce of laborers, simplifying project staffing and management.",
  //   img: "public/Career-Section.jpg",
  //   link: "/karmika",
  // },
  {
    name: "TakuMi",
    desc: "An advanced AI-powered solution for identifying fraudulent activities in financial sectors, including share markets and banking, ensuring secure transactions.",
    img: takumiImg,
    link: "/takumi",
  },
  // {
  //   name: "CP (Community Platform)",
  //   desc: "A dynamic community platform fostering connections and interactions among diverse groups of people, facilitating communication and shared interests.",
  //   img: "public/img2.png",
  //   link: "/cp",
  // },
];



export const faqs = [
  { q: "How long does product development take?", a: "Timelines vary by project complexity, typically 3-8 months from ideation to launch." },
  { q: "Who owns the IP?", a: "You retain full intellectual property rights to your product." },
  { q: "Do you provide post-launch support?", a: "Yes, ongoing support and maintenance are part of our service." }
]






