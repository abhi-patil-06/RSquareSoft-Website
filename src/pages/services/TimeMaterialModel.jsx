import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { ArrowForward, Star, Build, Security, VerifiedUser } from '@mui/icons-material'
import { TbTarget } from 'react-icons/tb'
import { processSteps, benefits, useCases, faqs } from '../../data/serviceData/timeMaterialModelData'
import timeMaterialImg from "../../assets/timeAndMaterial.jpeg"

export default function TimeAndMaterial() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        py: { xs: '', md: 14 },
        fontFamily: "var(--font-family-base)",
        background: 'var(--color-background)',
      }}
    >

      {/* HERO */}
      <Box sx={{
        px: { xs: 2, md: 8 },
        pt: { xs: 13, md: 0 }
      }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: 500, md: 620 },
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            backgroundImage: `url(${timeMaterialImg})`,
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
              bgcolor: "rgba(0,0,0,0.3)", // semi-transparent white

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
            <nav className="absolute -top-7 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
              {/* First line: breadcrumb links separated by slash */}
              <div className="flex space-x-3">
                {/* <a>
                  What We Do
                </a>
                <span>/</span> */}
                <span >Service</span>
                <span>/</span>
                <span >Time Material Model</span>
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
              Driven by passion, powered by innovation
            </Typography>
            <Typography variant="h6" mb={3} color="var(--color-button-text)">
              We are RSquareSoft, dedicated to empowering businesses with advanced technology and exceptional service.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="#open-roles"
              onClick={() => {
                const section = document.getElementById("time");
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
              Explore More
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Overview + Process */}
      <div id='time' className="max-w-6xl mx-auto py-10 px-4">

        {/* Service Overview */}
        <div className="mb-12 text-center">
          <h2 className="font-semibold text-primary mb-4" style={{ fontSize: 'var(--font-size-heading1)' }}>Service Overview</h2>
          <p className="text-text-primary max-w-3xl mx-auto" style={{ fontSize: 'var(--font-size-description)' }}>
            Resource augmentation and specialist pods on a time & material basis for innovation, digital transformation, maintenance or projects where requirements are not yet stable.
          </p>
          <ul className="list-none mt-6 hidden md:flex justify-center flex-wrap gap-x-8 gap-y-2 text-primary " style={{ fontSize: 'var(--font-size-description)' }}>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Adaptive team composition
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Transparent cost and usage tracking
            </li>
            <li className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              Zero vendor lock-in, rapid onboarding
            </li>
          </ul>
        </div>

        {/* Process Timeline */}
        <div className="p-8 pb-14 rounded-md border">
          <h2 className="font-semibold text-text-primary mb-8 text-center" style={{ fontSize: 'var(--font-size-heading)' }}>How It Works</h2>
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
                <span className="text-text-primary tracking-wide uppercase" style={{ fontSize: 'var(--font-size-description)' }}>{title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits */}
      <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] py-12 px-4 md:px-0">
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
        <h2 className="font-semibold text-primary text-center mb-7 md:mb-12" style={{ fontSize: 'var(--font-size-heading1)' }}>Real-World T&M Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((product) => (
            <div key={product.name} className="bg-background rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl border border-background1 flex flex-col">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover object-center transform hover:scale-110 transition-transform duration-900 ease-in-out" />
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="font-bold text-primary mb-2" style={{ fontSize: 'var(--font-size-subheading)' }}>{product.name}</h3>
                <p className="text-text-primary mb-4 line-clamp-5 flex-grow" style={{ fontSize: 'var(--font-size-description)' }}>{product.desc}</p>
                <div className="mt-auto flex justify-end">
                  <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition-all duration-300 ease-in-out"
                    style={{ fontSize: 'var(--font-size-description)' }}>
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
          <h2 className=" font-extrabold text-primary mb-5" style={{ fontSize: 'var(--font-size-heading1)' }}>Why Clients Prefer T&M</h2>
          <p className="hidden md:block text-text-primary max-w-3xl mx-auto mb-12" style={{ fontSize: 'var(--font-size-description)' }}>
            Focused on your goals: Time & Material puts you in the driver's seat, letting you pivot, accelerate, and experiment as business needs evolve—without the constraints of fixed scope.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
            <div className="p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{ background: 'var(--darkBlue-gradient)' }}>
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.785a.75.75 0 01.071-.073l2.293-2.293a1 1 0 011.414 1.414L11.414 18l-8.293-8.293a1 1 0 011.414-1.414l5.293 5.293 4-4a.75.75 0 01.07-.071z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Fast Launch & Pivot</h3>
              <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
                No months-long RFP cycles; onboard and begin iterating immediately, adjust direction as your market does.
              </p>
            </div>
            <div className="bg-transparent p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{ background: 'var(--darkBlue-gradient)' }}>
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Total Cost Control</h3>
              <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
                Pause, slow down, or double down as budgets and business needs change—no change order negotiations required.
              </p>
            </div>
            <div className="bg-transparent p-8">
              <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{ background: 'var(--darkBlue-gradient)' }}>
                <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292V15a2 2 0 01-2 2H6l-2 4h12l-2-4h-4a2 2 0 01-2-2V9.646l-2-2.292z"></path></svg>
              </div>
              <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Best-Fit Talent</h3>
              <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
                Assemble and evolve a team that fits today's challenge—tap experts for new tech or specialized spikes at any time.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-5xl mx-auto py-14 px-4 md:px-0">
        <h2 className="font-bold text-primary mb-6" style={{ fontSize: 'var(--font-size-heading)' }}>FAQs</h2>
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
      <div className="flex flex-col items-center py-16">
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
          endIcon={<ArrowForward className="transition-transform duration-800 group-hover:translate-x-2" />}
        >
          Start Your T&M Engagement
        </Button>
      </div>
    </Box>
  )
}



















// import React from 'react'
// import { Button, Card, CardContent, Typography } from '@mui/material'
// import { ArrowForward, Star, Build, Security, VerifiedUser } from '@mui/icons-material'
// import { TbTarget } from 'react-icons/tb'

// // Process Steps for Time & Material Model
// const processSteps = [
//   {
//     title: "Discovery",
//     icon: <TbTarget size={28} color="#167efb" />,
//     description: "Initial understanding of your objectives, requirements, and key business challenges."
//   },
//   {
//     title: "Team Assembly",
//     icon: <VerifiedUser sx={{ color: "#2563eb" }} />,
//     description: "Forming a blended, skilled team on-demand with the right talent fit for evolving needs."
//   },
//   {
//     title: "Agile Iteration",
//     icon: <Build color="primary" />,
//     description: "Work proceeds in sprints or kanban, timelines and scope adjusted as new requirements emerge."
//   },
//   {
//     title: "Transparent Tracking",
//     icon: <Security sx={{ color: "#60a5fa" }} />,
//     description: "Real-time dashboards and weekly reports for full visibility of work performed and costs."
//   },
//   {
//     title: "Continuous Delivery",
//     icon: <ArrowForward sx={{ color: "#0891b2" }} />,
//     description: "Frequent releases and demos, with your feedback steering priorities and output."
//   },
//   {
//     title: "Optimization",
//     icon: <Star sx={{ color: "#1e40af" }} />,
//     description: "Ongoing team right-sizing, process improvement, and knowledge transfer as your program evolves."
//   }
// ];

// // Benefits for Time & Material Model
// const benefits = [
//   { icon: <Build sx={{ color: "#0ea5e9" }} />, title: "Ultimate Flexibility", description: "Modify scope, scale, and priorities at any time—no change orders or re-negotiations needed." },
//   { icon: <Star sx={{ color: "#60a5fa" }} />, title: "Transparent Billing", description: "You pay for actual team hours and resources used, detailed by task and role, no hidden fees." },
//   { icon: <VerifiedUser sx={{ color: "#2563eb" }} />, title: "Fast Start & Expert Staff", description: "Quick ramp-up with specialists or generalists as needed—perfect for evolving or exploratory projects." },
// ]

// // Use Cases for Time & Material
// const useCases = [
//   {
//     name: "Enterprise App Modernization",
//     desc: "Legacy CRM system upgraded in phases; team size and expertise scaled up and down monthly as requirements evolved.",
//     img: "public/About-Us.jpg"
//   },
//   {
//     name: "AI Research Prototyping",
//     desc: "Collaborative rapid-prototyping of advanced analytics tools for a global retailer—R&D priorities shifted every two sprints.",
//     img: "public/Career-Section.jpg"
//   },
//   {
//     name: "Mobile Product Launch",
//     desc: "Development of an iOS/Android MVP for a startup—product scope and UI/UX iterated based on live user feedback.",
//     img: "public/img1.png"
//   },
//   {
//     name: "Continuous Support & Evolution",
//     desc: "24/7 React/Node.js support and feature development for a SaaS firm, providing monthly usage reporting and adjustable resourcing.",
//     img: "public/img2.png"
//   },
// ];

// // FAQs for Time & Material Model
// const faqs = [
//   { q: "When is the Time & Material model ideal?", a: "Best for projects with evolving requirements, R&D, innovation sprints, or when speed and flexibility outweigh rigid deliverables." },
//   { q: "How do you track time and billing?", a: "Detailed timesheets are submitted, tracked by task, role, and sprint. You'll receive weekly summaries for transparency." },
//   { q: "Can I scale the team up or down?", a: "Yes, resources can be added or reduced with agreed lead time. This helps optimize your investment as priorities change." },
//   { q: "How is quality maintained with T&M?", a: "Quality is enforced via agile ceremonies, regular code reviews, automated testing, and your continuing feedback." },
// ];

// export default function TimeAndMaterial() {
//   return (
//     <div className="bg-white min-h-screen font-serif">

//       {/* Hero Section */}
//       <div
//         className="relative w-full flex flex-col items-center pt-36 pb-20 bg-[url('/hero/classical-workspace.jpg')] bg-cover bg-center"
//         style={{
//           backgroundBlendMode: "overlay",
//           backgroundColor: "rgba(37, 99, 235,0.75)",
//         }}
//       >
//         <h1 className="text-5xl md:text-6xl text-white tracking-tight font-serif font-bold drop-shadow-lg">
//           Time & Material Engagements
//         </h1>
//         <p className="mt-6 text-xl text-blue-100 font-light italic">
//           Flexible, transparent, and responsive delivery for dynamic needs
//         </p>
//       </div>

//       {/* Overview + Process */}
//       <div className="max-w-6xl mx-auto py-16 px-4">

//         {/* Service Overview */}
//         <div className="mb-12 text-center">
//           <h2 className="text-4xl font-extrabold text-[#1e40af] mb-4">Service Overview</h2>
//           <p className="text-lg text-blue-900 max-w-3xl mx-auto">
//             Resource augmentation and specialist pods on a time & material basis for innovation, digital transformation, maintenance or projects where requirements are not yet stable.
//           </p>
//           <ul className="list-none mt-6 flex justify-center flex-wrap gap-x-8 gap-y-2 text-blue-700 font-medium">
//             <li className="flex items-center">
//               <svg className="w-5 h-5 text-[#167efb] mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//               Adaptive team composition
//             </li>
//             <li className="flex items-center">
//               <svg className="w-5 h-5 text-[#167efb] mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//               Transparent cost and usage tracking
//             </li>
//             <li className="flex items-center">
//               <svg className="w-5 h-5 text-[#167efb] mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//               Zero vendor lock-in, rapid onboarding
//             </li>
//           </ul>
//         </div>

//         {/* Process Timeline */}
//         <div className="bg-white p-8 pb-14 rounded-lg shadow-xl border" style={{ borderColor: '#3b82f6' }}>
//           <h2 className="text-3xl font-bold text-[#1e40af] mb-8 text-center">How It Works</h2>
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             {processSteps.map(({ title, icon, description }) => (
//               <div key={title} className="flex flex-col items-center flex-1 text-center relative group">
//                 {/* Tooltip */}
//                 <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-slate-500 text-blue-100 text-xs px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap pointer-events-none">
//                   {description}
//                 </div>
//                 {/* Icon Circle */}
//                 <div className="p-4 bg-gradient-to-br from-[#8ab1f1] to-[#e2ecf9] rounded-full shadow-lg border border-[#3b82f6] mb-4 transform hover:scale-105 transition-transform duration-300">
//                   {icon}
//                 </div>
//                 {/* Title */}
//                 <span className="text-sm md:text-base text-[#0f172a] font-semibold tracking-wide uppercase">{title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Benefits */}
//       <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] py-12">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//           {benefits.map(({ icon, title, description }) => (
//             <Card key={title} className="shadow-lg border-l-4" style={{ borderColor: "#167efb" }}>
//               <CardContent>
//                 <div className="flex items-center gap-4 mb-4">
//                   <span>{icon}</span>
//                   <h3 className="text-lg font-semibold text-[#1e40af]">{title}</h3>
//                 </div>
//                 <Typography className="text-blue-900">{description}</Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Use Cases */}
//       <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <h2 className="text-4xl font-extrabold text-[#1e40af] text-center mb-12">Real-World T&M Success Stories</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {useCases.map((product) => (
//             <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl border border-blue-100 flex flex-col">
//               <img src={product.img} alt={product.name} className="w-full h-48 object-cover object-center" />
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="text-xl font-bold text-[#167efb] mb-2">{product.name}</h3>
//                 <p className="text-blue-900 text-sm mb-4 line-clamp-5 flex-grow">{product.desc}</p>
//                 <div className="mt-auto flex justify-end">
//                   <button className="relative text-[#2563eb] font-semibold group px-0 py-0 bg-transparent border-none shadow-none transition-all duration-300 ease-in-out">
//                     Read More
//                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-[#2563eb] h-0.5 mt-1" />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Why Choose Us */}
//       <div className="bg-gradient-to-br from-[#e0ecff] to-[#f3f8ff] py-16 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-extrabold text-[#1e40af] mb-6">Why Clients Prefer T&M</h2>
//           <p className="text-lg text-blue-900 max-w-3xl mx-auto mb-12">
//             Focused on *your* goals: Time & Material puts you in the driver's seat, letting you pivot, accelerate, and experiment as business needs evolve—without the constraints of fixed scope.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="bg-transparent p-8">
//               <div className="p-3 bg-gradient-to-br from-[#167efb] to-[#1e40af] rounded-full inline-flex mb-4 hover:scale-105">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.785a.75.75 0 01.071-.073l2.293-2.293a1 1 0 011.414 1.414L11.414 18l-8.293-8.293a1 1 0 011.414-1.414l5.293 5.293 4-4a.75.75 0 01.07-.071z"></path></svg>
//               </div>
//               <h3 className="text-2xl font-bold text-[#1e40af] mb-3">Fast Launch & Pivot</h3>
//               <p className="text-blue-800">
//                 No months-long RFP cycles; onboard and begin iterating immediately, adjust direction as your market does.
//               </p>
//             </div>
//             <div className="bg-transparent p-8">
//               <div className="p-3 bg-gradient-to-br from-[#60a5fa] to-[#167efb] rounded-full inline-flex mb-4 hover:scale-105">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
//               </div>
//               <h3 className="text-2xl font-bold text-[#1e40af] mb-3">Total Cost Control</h3>
//               <p className="text-blue-800">
//                 Pause, slow down, or double down as budgets and business, needs change—no change order negotiations required.
//               </p>
//             </div>
//             <div className="bg-transparent p-8">
//               <div className="p-3 bg-gradient-to-br from-[#167efb] to-[#60a5fa] rounded-full inline-flex mb-4 hover:scale-105">
//                 <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292V15a2 2 0 01-2 2H6l-2 4h12l-2-4h-4a2 2 0 01-2-2V9.646l-2-2.292z"></path></svg>
//               </div>
//               <h3 className="text-2xl font-bold text-[#1e40af] mb-3">Best-Fit Talent</h3>
//               <p className="text-blue-800">
//                 Assemble and evolve a team that fits today's challenge—tap experts for new tech or specialized spikes at any time.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ */}
//       <div className="max-w-5xl mx-auto py-14">
//         <h2 className="text-2xl font-bold text-[#1e40af] mb-6">FAQs</h2>
//         <div>
//           {faqs.map(({ q, a }) => (
//             <div key={q} className="mb-6">
//               <h4 className="text-[#3b82f6] font-bold">{q}</h4>
//               <p className="text-blue-900">{a}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Call To Action */}
//       <div className="flex flex-col items-center py-16 bg-gradient-to-br from-[#bcd3f9] to-[#d8e2f0]">
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           className="bg-[#2563eb] hover:bg-[#0ea5e9] shadow-xl rounded text-xl px-8 py-3"
//           style={{
//             fontFamily: 'serif',
//             letterSpacing: '0.05em',
//             background: '#2563eb',
//             color: '#fff',
//             borderRadius: '2em',
//             border: 'none'
//           }}
//           endIcon={<ArrowForward />}
//         >
//           Start Your T&M Engagement
//         </Button>
//       </div>
//     </div>
//   )
// }
