import React from 'react'
import { Button, Card, CardContent, Typography } from '@mui/material'
import { ArrowForward, Star, Build, Security, VerifiedUser } from '@mui/icons-material'
import { TbTarget } from 'react-icons/tb'
import { useNavigate } from 'react-router-dom';


const processSteps = [
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

const benefits = [
  { icon: <Star sx={{ color: "#60a5fa" }} />, title: "End-to-end Expertise", description: "Full-cycle product development with seasoned professionals." },
  { icon: <Build sx={{ color: "#0ea5e9" }} />, title: "Rapid Prototyping", description: "Fast, iterative approach to validate ideas early." },
  { icon: <Security sx={{ color: "#167efb" }} />, title: "Custom Solutions", description: "Tailored to your industry and business goals." },
]

const useCases = [
  {
    name: "ValetPlus",
    desc: "An intelligent parking system designed for large malls, hotels, and commercial complexes, streamlining vehicle management and enhancing user experience.",
    img: "public/valetPlusProdService.svg",
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
    img: "public/takumiProdService.png",
    link: "/takumi",
  },
  // {
  //   name: "CP (Community Platform)",
  //   desc: "A dynamic community platform fostering connections and interactions among diverse groups of people, facilitating communication and shared interests.",
  //   img: "public/img2.png",
  //   link: "/cp",
  // },
];

const faqs = [
  { q: "How long does product development take?", a: "Timelines vary by project complexity, typically 3-8 months from ideation to launch." },
  { q: "Who owns the IP?", a: "You retain full intellectual property rights to your product." },
  { q: "Do you provide post-launch support?", a: "Yes, ongoing support and maintenance are part of our service." }
]

export default function ProductDevelopment() {
  const navigate = useNavigate();

  return (
    <div className="bg-background mt-23 min-h-screen font-family-base ">

      {/* Hero Section */}
      <div
        className="relative w-full flex flex-col items-center pt-27 pb-27 bg-cover bg-center"
        style={{
          backgroundImage: "url('services/productDev.jpeg')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0, 50, 70, 0.5)",
          backgroundAttachment: "fixed",  // This makes the background fixed
        }}
      >
        <h1 className="text-button-text text-center tracking-tight font-bold drop-shadow-lg" style={{ fontSize: 'var(--font-size-title)' }}>
          Product Development Excellence
        </h1>
        <p className="font-semibold text-center italic text-button-text" style={{ fontSize: 'var(--font-size-subheading)' }}>
          Transforming ideas into market-ready solutions
        </p>
      </div>

      {/* Overview + Process */}
      <div className="max-w-6xl  mx-auto py-10 px-4">

        {/* Service Overview */}
        <div className="mb-12 text-center ">
          <h2 className="font-semibold text-primary mb-4" style={{ fontSize: 'var(--font-size-heading1)' }}>Service Overview</h2>
          <p className="text-text-primary max-w-3xl mx-auto" style={{ fontSize: 'var(--font-size-description)' }}>
            From vision to launch, our team partners with startups and enterprises to create impactful digital products (Web and Mobile Applications).
          </p>
          <ul className="list-none mt-6 hidden md:flex justify-center flex-wrap gap-x-8 gap-y-2 text-primary " style={{ fontSize: 'var(--font-size-description)' }}>
            <li className="flex items-center">
              <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Startups, scale-ups, established companies
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Web Applications, Mobile Applications
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Innovation, replatforming, and all-new product builds
            </li>
          </ul>
        </div>

        {/* Process Timeline */}
        <div className=" p-8 pb-14 rounded-md  border" >
          <h2 className="font-semibold text-text-primary mb-8 text-center" style={{ fontSize: 'var(--font-size-heading)' }}>Our Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {processSteps.map(({ title, icon, description }) => (
              <div key={title} className="flex flex-col items-center flex-1 text-center relative group">
                {/* Tooltip */}
                <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-text-secondary text-button-text px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap pointer-events-none" style={{ fontSize: 'var(--font-size-description)' }}>
                  {description}
                </div>
                {/* Icon Circle */}
                <div className="p-4 bg-background1 rounded-full shadow-lg border border-primary mb-4 transform hover:scale-105 transition-transform duration-300">
                  {icon}
                </div>
                {/* Title */}
                <span className=" text-text-primary tracking-wide uppercase" style={{ fontSize: 'var(--font-size-description)' }}>{title}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] py-12 px-7 md:px-0">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {benefits.map(({ icon, title, description }) => (
            <Card key={title} className="shadow-lg border-l-4 border-primary" >
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
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
        <h2 className="font-semibold text-primary text-center mb-7 md:mb-12 " style={{ fontSize: 'var(--font-size-heading1)' }}>Our Innovative Products</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {useCases.map((product) => (
            <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl border border-background1 flex flex-col">
              <img src={product.img} alt={product.name} className="w-full h-48 object-contain object-center  transform hover:scale-110 transition-transform duration-900 ease-in-out" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-primary mb-2" style={{ fontSize: 'var(--font-size-subheading)' }}>{product.name}</h3>
                <p className="text-text-primary mb-4 line-clamp-5 flex-grow" style={{ fontSize: 'var(--font-size-description)' }}>{product.desc}</p> {/* Added flex-grow here */}
                <div className="mt-auto flex justify-end">
                  <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition-all duration-300 ease-in-out"
                    style={{ fontSize: 'var(--font-size-description)' }}
                    onClick={() => navigate(product.link)}>
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
          <h2 className=" font-extrabold text-primary mb-5" style={{fontSize: 'var(--font-size-heading1)'}}>Why Partner With Us?</h2>
          <p className="hidden md:block text-text-primary max-w-3xl mx-auto mb-12" style={{fontSize: 'var(--font-size-description)'}}>
            We believe in building more than just products; we build lasting partnerships grounded in expertise, transparency, and a commitment to your success.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            {/* Benefit Card 1 */}
            <div className="p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{background: 'var(--darkBlue-gradient)'}}>
                {/* Expertise Icon */}
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.785a.75.75 0 01.071-.073l2.293-2.293a1 1 0 011.414 1.414L11.414 18l-8.293-8.293a1 1 0 011.414-1.414l5.293 5.293 4-4a.75.75 0 01.07-.071z"></path></svg>
              </div>
              <h3 className=" font-bold text-primary mb-3" style={{fontSize: 'var(--font-size-heading)'}}>Proven Expertise</h3>
              <p className="text-text-primary" style={{fontSize: 'var(--font-size-description)'}}>
                Our team brings deep, cross-domain knowledge to every project, ensuring innovative and robust solutions.
              </p>
            </div>
            {/* Benefit Card 2 */}
            <div className="bg-transparent p-8">
              <div className="p-3  rounded-full inline-flex mb-4 hover:scale-105" style={{background: 'var(--darkBlue-gradient)'}}>
                {/* Transparency Icon */}
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className=" font-bold text-primary mb-3" style={{fontSize: 'var(--font-size-heading)'}}>Transparent Collaboration</h3>
              <p className="text-text-primary" style={{fontSize: 'var(--font-size-description)'}}>
                We maintain open communication with detailed reports, keeping you informed every step of the way.
              </p>
            </div>
            {/* Benefit Card 3 */}
            <div className="bg-transparent p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{background: 'var(--darkBlue-gradient)'}}>
                {/* Client Focus Icon */}
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292V15a2 2 0 01-2 2H6l-2 4h12l-2-4h-4a2 2 0 01-2-2V9.646l-2-2.292z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{fontSize: 'var(--font-size-heading)'}}>Client-Centric Growth</h3>
              <p className="text-text-primary" style={{fontSize: 'var(--font-size-description)'}}>
                From startups to large enterprises, we tailor our approach to meet your unique business objectives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto py-14 px-4 md:px-0">
        <h2 className="font-bold text-primary mb-6" style={{fontSize: 'var(--font-size-heading)'}}>FAQs</h2>
        <div>
          {faqs.map(({ q, a }) => (
            <div key={q} className="mb-6">
              <h4 className="text-primary font-bold" style={{fontSize: 'var(--font-size-description2)'}}>{q}</h4>
              <p className="text-text-primary" style={{fontSize: 'var(--font-size-description)'}}>{a}</p>
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
            fontSize: 'var(--font-size-button)'
          }}
          endIcon={<ArrowForward className="transition-transform duration-800 group-hover:translate-x-2"/>}
        >
          Start Your Product Journey
        </Button>
      </div>

    </div>
  )
}
