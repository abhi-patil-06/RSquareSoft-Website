import { ArrowForward, Build, Security, VerifiedUser } from "@mui/icons-material";
import { Star } from "lucide-react";
import { TbTarget } from "react-icons/tb";

// POD Model Steps
export const processSteps = [
  {
    title: "Requirement Mapping",
    icon: <TbTarget size={28} color="#167efb" />,
    description: "In-depth discovery sessions to align scope, deliverables, and timelines."
  },
  {
    title: "POD Onboarding",
    icon: <VerifiedUser sx={{ color: "#2563eb" }} />,
    description: "Deployment of a tailored, multidisciplinary team as a self-managed POD."
  },
  {
    title: "Sprints & Milestones",
    icon: <Build color="primary" />,
    description: "Execution via regular sprints, aligned with client milestones and demos."
  },
  {
    title: "Quality Assurance",
    icon: <Security sx={{ color: "#60a5fa" }} />,
    description: "Continuous QA and transparent progress tracking across the lifecycle."
  },
  {
    title: "UAT & Delivery",
    icon: <ArrowForward sx={{ color: "#0891b2" }} />,
    description: "User Acceptance Testing before fixed-price, milestone-based deliveries."
  },
  {
    title: "Support & Transition",
    icon: <Star sx={{ color: "#1e40af" }} />,
    description: "Knowledge transfer, hypercare, and warranty support post-launch."
  }
];

// POD Model Benefits
export const benefits = [
  { icon: <VerifiedUser sx={{ color: "#2563eb" }} />, title: "Predictable Budgeting", description: "Scope, timeline, and price are locked up-front—no surprises or overruns." },
  { icon: <Build sx={{ color: "#167efb" }} />, title: "Dedicated POD Team", description: "A self-governing skilled unit focused on your outcomes, not task-based hours." },
  { icon: <Star sx={{ color: "#60a5fa" }} />, title: "Accountability & Transparency", description: "Single-point responsibility for delivery, unrivaled process rigor, and real-time reporting." },
];



import podModelImg1 from '../../assets/takumiProdService.png'

// Use Case Examples (POD Fixed-Price) - Add `link` if you want routing
export const useCases = [
  {
    name: "eHealth Platform Rollout",
    desc: "End-to-end delivery of a scalable eHealth web portal for a hospital chain—regulatory compliant, highly available, delivered via a dedicated product POD.",
    img: podModelImg1,
    link: "/ehealth-platform-rollout",
  },
  {
    name: "Banking SaaS Core Upgrade",
    desc: "Major feature extensions for a fintech SaaS platform, delivered on fixed deadlines by a cross-functional POD team—reduced project risk by 30%.",
    img: podModelImg1,
    link: "/banking-saas-core-upgrade",
  },
  {
    name: "Insurance Claims Automation",
    desc: "Migration of claims workflows to a modern cloud-native stack—POD model enabled phased delivery and seamless user transition.",
    img: podModelImg1,
    link: "/insurance-claims-automation",
  },
  {
    name: "Global eCommerce Launch",
    desc: "Multiregion eCommerce launch with fixed scope and staged go-lives, managed by a multi-skill POD for rapid market entry.",
    img: podModelImg1,
    link: "/global-ecommerce-launch",
  },
];

// POD Model FAQs
export const faqs = [
  { q: "What is the POD model in fixed-price delivery?", a: "A cross-functional, self-managed team (POD) is allocated to your project under a fixed-price contract, ensuring end-to-end accountability and predictable outcomes." },
  { q: "Who manages the POD?", a: "You get a dedicated delivery manager and product owner; the POD self-organizes, with robust communication and status reporting." },
  { q: "What types of projects suit POD fixed price?", a: "Projects with well-defined scope, digital transformation initiatives, MVPs, migrations, SaaS rollouts, and compliance upgrades." },
  { q: "Are change requests possible?", a: "Scope changes are tracked and quoted transparently; you approve any incremental work before we continue." },
];