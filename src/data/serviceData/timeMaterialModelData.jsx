import { ArrowForward, Build, Security, Speed, VerifiedUser } from "@mui/icons-material";
import { Group, Lightbulb, Star } from "lucide-react";
import { TbTarget } from "react-icons/tb";


export const stats = [
  { number: '10+', label: 'Projects Delivered' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '1+', label: 'Years Experience' }
];

export const technologies = [
  'React', 'Fast API', 'Python', 'AWS', 'SQL', 'Java', 'Monitoring', 'DataBricks'
];

export const serviceOverviewData = [
  { icon: <Group className="text-blue-600" />, title: "Client-Focused", desc: "Startups, scale-ups, established companies" },
  { icon: <Speed className="text-green-600" />, title: "Full-Stack", desc: "Web Applications, Mobile Applications" },
  { icon: <Lightbulb className="text-purple-600" />, title: "Innovation", desc: "Replatforming and all-new product builds" }
]


export const processSteps = [
  {
    title: "Discovery",
    icon: <TbTarget size={28} color="#167efb" />,
    description: "Initial understanding of your objectives, requirements, and key business challenges."
  },
  {
    title: "Team Assembly",
    icon: <VerifiedUser sx={{ color: "#2563eb" }} />,
    description: "Forming a blended, skilled team on-demand with the right talent fit for evolving needs."
  },
  {
    title: "Agile Iteration",
    icon: <Build color="primary" />,
    description: "Work proceeds in sprints or kanban, timelines and scope adjusted as new requirements emerge."
  },
  {
    title: "Transparent Tracking",
    icon: <Security sx={{ color: "#60a5fa" }} />,
    description: "Real-time dashboards and weekly reports for full visibility of work performed and costs."
  },
  {
    title: "Continuous Delivery",
    icon: <ArrowForward sx={{ color: "#0891b2" }} />,
    description: "Frequent releases and demos, with your feedback steering priorities and output."
  },
  {
    title: "Optimization",
    icon: <Star sx={{ color: "#1e40af" }} />,
    description: "Ongoing team right-sizing, process improvement, and knowledge transfer as your program evolves."
  }
];

export const benefits = [
  { icon: <Build sx={{ color: "#0ea5e9" }} />, title: "Ultimate Flexibility", description: "Modify scope, scale, and priorities at any time—no change orders or re-negotiations needed." },
  { icon: <Star sx={{ color: "#60a5fa" }} />, title: "Transparent Billing", description: "You pay for actual team hours and resources used, detailed by task and role, no hidden fees." },
  { icon: <VerifiedUser sx={{ color: "#2563eb" }} />, title: "Fast Start & Expert Staff", description: "Quick ramp-up with specialists or generalists as needed—perfect for evolving or exploratory projects." },
];



import timeMaterialImg1 from '../../assets/takumiProdService.png'

export const useCases = [
  {
    name: "Enterprise App Modernization",
    desc: "Legacy CRM system upgraded in phases; team size and expertise scaled up and down monthly as requirements evolved.",
    img: timeMaterialImg1
  },
  {
    name: "AI Research Prototyping",
    desc: "Collaborative rapid-prototyping of advanced analytics tools for a global retailer—R&D priorities shifted every two sprints.",
    img: timeMaterialImg1
  },
  {
    name: "Mobile Product Launch",
    desc: "Development of an iOS/Android MVP for a startup—product scope and UI/UX iterated based on live user feedback.",
    img: timeMaterialImg1
  },
  {
    name: "Continuous Support & Evolution",
    desc: "24/7 React/Node.js support and feature development for a SaaS firm, providing monthly usage reporting and adjustable resourcing.",
    img: timeMaterialImg1
  },
];

export const faqs = [
  { q: "When is the Time & Material model ideal?", a: "Best for projects with evolving requirements, R&D, innovation sprints, or when speed and flexibility outweigh rigid deliverables." },
  { q: "How do you track time and billing?", a: "Detailed timesheets are submitted, tracked by task, role, and sprint. You'll receive weekly summaries for transparency." },
  { q: "Can I scale the team up or down?", a: "Yes, resources can be added or reduced with agreed lead time. This helps optimize your investment as priorities change." },
  { q: "How is quality maintained with T&M?", a: "Quality is enforced via agile ceremonies, regular code reviews, automated testing, and your continuing feedback." },
];