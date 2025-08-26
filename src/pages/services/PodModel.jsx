import React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { ArrowForward, Star, Build, Security, VerifiedUser } from '@mui/icons-material'
import { TbTarget } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom'


// POD Model Steps
const processSteps = [
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
const benefits = [
  { icon: <VerifiedUser sx={{ color: "#2563eb" }} />, title: "Predictable Budgeting", description: "Scope, timeline, and price are locked up-front—no surprises or overruns." },
  { icon: <Build sx={{ color: "#167efb" }} />, title: "Dedicated POD Team", description: "A self-governing skilled unit focused on your outcomes, not task-based hours." },
  { icon: <Star sx={{ color: "#60a5fa" }} />, title: "Accountability & Transparency", description: "Single-point responsibility for delivery, unrivaled process rigor, and real-time reporting." },
];

// Use Case Examples (POD Fixed-Price) - Add `link` if you want routing
const useCases = [
  {
    name: "eHealth Platform Rollout",
    desc: "End-to-end delivery of a scalable eHealth web portal for a hospital chain—regulatory compliant, highly available, delivered via a dedicated product POD.",
    img: "/About-Us3.jpg",
    link: "/ehealth-platform-rollout",
  },
  {
    name: "Banking SaaS Core Upgrade",
    desc: "Major feature extensions for a fintech SaaS platform, delivered on fixed deadlines by a cross-functional POD team—reduced project risk by 30%.",
    img: "/Career-Section.jpg",
    link: "/banking-saas-core-upgrade",
  },
  {
    name: "Insurance Claims Automation",
    desc: "Migration of claims workflows to a modern cloud-native stack—POD model enabled phased delivery and seamless user transition.",
    img: "/img1.png",
    link: "/insurance-claims-automation",
  },
  {
    name: "Global eCommerce Launch",
    desc: "Multiregion eCommerce launch with fixed scope and staged go-lives, managed by a multi-skill POD for rapid market entry.",
    img: "/img2.png",
    link: "/global-ecommerce-launch",
  },
];

// POD Model FAQs
const faqs = [
  { q: "What is the POD model in fixed-price delivery?", a: "A cross-functional, self-managed team (POD) is allocated to your project under a fixed-price contract, ensuring end-to-end accountability and predictable outcomes." },
  { q: "Who manages the POD?", a: "You get a dedicated delivery manager and product owner; the POD self-organizes, with robust communication and status reporting." },
  { q: "What types of projects suit POD fixed price?", a: "Projects with well-defined scope, digital transformation initiatives, MVPs, migrations, SaaS rollouts, and compliance upgrades." },
  { q: "Are change requests possible?", a: "Scope changes are tracked and quoted transparently; you approve any incremental work before we continue." },
];

export default function PodFixedPrice() {
  const navigate = useNavigate();

  return (
    <div className="bg-background mt-23 min-h-screen font-family-base">

      {/* Hero Section */}
      <div
        className="relative w-full flex flex-col items-center pt-27 pb-27 bg-cover bg-center"
        style={{
          backgroundImage: "url('services/podModel.jpeg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 50, 70, 0.5)",
          backgroundAttachment: "fixed"
        }}
      >
        <h1 className="text-button-text text-center tracking-tight font-bold drop-shadow-lg" style={{ fontSize: 'var(--font-size-title)' }}>
          POD Model — Fixed Price Excellence
        </h1>
        <p className="font-semibold italic text-center text-button-text" style={{ fontSize: 'var(--font-size-subheading)' }}>
          Self-managed teams for outcome-driven, predictable delivery
        </p>
      </div>

      {/* Overview + Process */}
      <div className="max-w-6xl mx-auto py-10 px-4">

        {/* Service Overview */}
        <div className="mb-12 text-center">
          <h2 className="font-semibold text-primary mb-4" style={{ fontSize: 'var(--font-size-heading1)' }}>Service Overview</h2>
          <p className="text-text-primary max-w-3xl mx-auto" style={{ fontSize: 'var(--font-size-description)' }}>
            Fixed-price, full-stack product teams (PODs) for digital transformation, platform modernization, SaaS launches, and business-critical application development.
          </p>
          <ul className="list-none mt-6 hidden  md:flex justify-center flex-wrap gap-x-8 gap-y-2 text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
            <li className="flex items-center">
              <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Enterprise and scale-up delivery
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Fixed-price, outcomes-based contracts
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Dedicated agile teams (PODs)
            </li>
          </ul>
        </div>

        {/* Process Timeline */}
        <div className="p-8 pb-14 rounded-md border border-primary">
          <h2 className="font-semibold text-text-primary mb-8 text-center" style={{ fontSize: 'var(--font-size-heading)' }}>Our POD Model Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {processSteps.map(({ title, icon, description }) => (
              <div key={title} className="flex flex-col items-center flex-1 text-center relative group">
                {/* Tooltip */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-text-secondary text-button-text px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap pointer-events-none" style={{ fontSize: 'var(--font-size-description)' }}>
                  {description}
                </div>
                {/* Icon Circle with gradient background */}
                <div className="p-4 rounded-full shadow-lg border border-primary mb-4 transform hover:scale-105 transition-transform duration-300 bg-background1">
                  {icon}
                </div>
                {/* Title */}
                <span className="tracking-wide uppercase text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>{title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] py-12 px-7 md-px-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {benefits.map(({ icon, title, description }) => (
            <Card key={title} className="shadow-lg border-l-4 border-primary">
              <CardContent>
                <div className="flex items-start gap-4 mb-4">
                  <span>{icon}</span>
                  <h3 className="font-semibold text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>{title}</h3>
                </div>
                <Typography className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>{description}</Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="font-semibold text-primary text-center mb-7 md:mb-12" style={{ fontSize: 'var(--font-size-heading1)' }}>
          Enterprise POD Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map(({ name, desc, img, link }) => (
            <div key={name} className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl border border-background1 flex flex-col">
              <img src={img} alt={name} className="w-full h-48 object-cover object-center transform hover:scale-110 transition-transform duration-900 ease-in-out" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-primary mb-2" style={{ fontSize: 'var(--font-size-subheading)' }}>{name}</h3>
                <p className="text-text-primary mb-4 line-clamp-5 flex-grow" style={{ fontSize: 'var(--font-size-description)' }}>{desc}</p>
                <div className="mt-auto flex justify-end">
                  <button
                    className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition-all duration-300 ease-in-out"
                    style={{ fontSize: 'var(--font-size-description)' }}
                    onClick={() => navigate(link)}
                  >
                    Read More
                    <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-primary h-0.5 mt-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gradient-to-br from-[#e0ecff] to-[#f3f8ff] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-extrabold text-primary mb-6" style={{ fontSize: 'var(--font-size-heading1)' }}>
            Why Partner With Our POD Teams?
          </h2>
          <p className="hidden md:block text-text-primary max-w-3xl mx-auto mb-12" style={{ fontSize: 'var(--font-size-description)' }}>
            Our fixed-price POD model brings you certainty, speed, and focus: robust delivery, strong quality culture, and transparent communication from initial scope to post-launch assurance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105 " style={{background: 'var(--darkBlue-gradient)'}}>
                {/* Icon */}
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.785a.75.75 0 01.071-.073l2.293-2.293a1 1 0 011.414 1.414L11.414 18l-8.293-8.293a1 1 0 011.414-1.414l5.293 5.293 4-4a.75.75 0 01.07-.071z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Delivery Certainty</h3>
              <p className="text-blue-800">
                All commitments are supported by clear SLAs, with the POD model eliminating resource churn and handoff risks.
              </p>
            </div>
            <div className="p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105 " style={{background: 'var(--darkBlue-gradient)'}}>
                {/* Icon */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>
                Full Transparency
              </h3>
              <p className="text-blue-800">
                Weekly demos, milestone reviews, and integrated reporting—always know where your investment stands.
              </p>
            </div>
            <div className="p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105 " style={{background: 'var(--darkBlue-gradient)'}}>
                {/* Icon */}
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292V15a2 2 0 01-2 2H6l-2 4h12l-2-4h-4a2 2 0 01-2-2V9.646l-2-2.292z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Scalable Expertise</h3>
              <p className="text-blue-800">
                Swiftly scale individual PODs up or down as your program evolves—no loss of know-how or momentum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-5xl mx-auto py-14 px-4 md:px-0">
        <h2 className=" font-bold text-primary mb-6" style={{ fontSize: 'var(--font-size-heading)' }}>FAQs</h2>
        <div>
          {faqs.map(({ q, a }) => (
            <div key={q} className="mb-6">
              <h4 className="text-primary font-bold" style={{ fontSize: 'var(--font-size-description2)' }}>{q}</h4>
              <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call To Action */}
      <div className="flex flex-col items-center py-16 ">
        <Button
          variant="contained"
          color="primary"
          size="large"
          className="bg-primary text-button-text group hover:shadow-2xl rounded px-8 py-3"
          style={{
            borderRadius: '2em',
            border: 'none',
            fontSize: 'var(--font-size-button)',
            fontFamily: 'serif',
            letterSpacing: '0.05em'
          }}
          endIcon={<ArrowForward className="transition-transform duration-800 group-hover:translate-x-2" />}
        >
          Start Your POD Model Journey
        </Button>
      </div>

    </div>
  )
}