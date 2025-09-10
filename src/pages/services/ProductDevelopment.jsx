import React, { useState } from 'react'
import { Box, Button, Card, CardContent, Typography, Accordion, AccordionSummary, AccordionDetails, Chip, Container, Grid, Paper } from '@mui/material'
import { ArrowForward, ExpandMore, Rocket, Lightbulb, Speed, Security, Group, Star, CheckCircle, Timeline } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom';
import { useCases } from '../../data/serviceData/productDevData';
import { processSteps, benefits, faqs, technologies, stats } from '../../data/serviceData/productDevData';
import productDev from '../../assets/productDev.jpeg'

export default function ProductDevelopment() {
  const navigate = useNavigate();
  const [hoveredStep, setHoveredStep] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(false);

  const handleFaqChange = (panel) => (event, isExpanded) => {
    setExpandedFaq(isExpanded ? panel : false);
  };



  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100%",
        pt: { xs: '', md: 14 },
        fontFamily: "var(--font-family-base)",
        background: 'var(--color-background)',
      }}
    >

      {/* HERO - UNCHANGED */}
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
            backgroundImage: `url(${productDev})`,
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
              py: { xs: 5, md: 20 },
            }}
          >
            {/* Breadcrumb Navigation - fixed top left corner within the div */}
            <nav className="absolute -top-7 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
              {/* First line: breadcrumb links separated by slash */}
              <div className="flex space-x-3">
                <span >Service</span>
                <span>/</span>
                <span >Product Development</span>
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
              onClick={() => {
                const section = document.getElementById("product");
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

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-16">
        <Container maxWidth="lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform transition-all duration-300">
                <div className="bg-white rounded-2xl p-6">
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                  <p className="text-text-primary font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Enhanced Service Overview */}
      <div id='product' className="py-20 bg-white">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Rocket className="text-blue-600" />
              <span className="text-blue-700 font-semibold">Service Overview</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Transforming Ideas Into
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Digital Reality</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              From vision to launch, our team partners with startups and enterprises to create impactful digital products that drive business growth.
            </p>

            {/* Technology Stack */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {technologies.map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  variant="outlined"
                  className="hover:bg-blue-50 hover:border-blue-300 transition-colors"
                />
              ))}
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Group className="text-blue-600" />, title: "Client-Focused", desc: "Startups, scale-ups, established companies" },
              { icon: <Speed className="text-green-600" />, title: "Full-Stack", desc: "Web Applications, Mobile Applications" },
              { icon: <Lightbulb className="text-purple-600" />, title: "Innovation", desc: "Replatforming and all-new product builds" }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gray-50 group-hover:bg-blue-50 transition-colors">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Redesigned Process Section */}
      <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6">
              <Timeline className="text-purple-600" />
              <span className="text-purple-700 font-semibold">Our Process</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Bring Your Vision to Life</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our proven methodology ensures seamless delivery from concept to launch
            </p>
          </div>

          <div className="relative">
            {/* Process Steps */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredStep(index)}
                  onMouseLeave={() => setHoveredStep(null)}
                >
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                    {index + 1}
                  </div>

                  {/* Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 h-full ${hoveredStep === index ? 'transform -translate-y-2 shadow-2xl' : ''
                    }`}>
                    <div className="flex flex-col items-center text-center">
                      <div className="p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-4 group-hover:scale-110 transition-transform">
                        {step.icon}
                      </div>
                      <h3 className="font-bold text-gray-800 mb-3">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* Enhanced Benefits Section */}
      <div className="py-20 bg-white">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
              <Star className="text-green-600" />
              <span className="text-green-700 font-semibold">Key Benefits</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Our Development Services</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
                sx={{
                  background: 'linear-gradient(135deg, #3366ff 0%, #003399 100%)',
                  color: 'white'
                }}
              >
                <CardContent className="p-8 relative">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -mr-12 -mt-12"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/20 rounded-full">
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                    </div>
                    <p className="text-white/90 leading-relaxed">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </div>

      {/* Enhanced Why Choose Us */}
      <div className="py-20 bg-white">
        <Container maxWidth="lg">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-100 px-4 py-2 rounded-full mb-6">
              <CheckCircle className="text-orange-600" />
              <span className="text-orange-700 font-semibold">Why Partner With Us</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Building Lasting Partnerships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in building more than just products; we build lasting partnerships grounded in expertise, transparency, and a commitment to your success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Security className="w-12 h-12 text-blue-600" />,
                title: "Proven Expertise",
                description: "Our team brings deep, cross-domain knowledge to every project, ensuring innovative and robust solutions."
              },
              {
                icon: <Group className="w-12 h-12 text-green-600" />,
                title: "Transparent Collaboration",
                description: "We maintain open communication with detailed reports, keeping you informed every step of the way."
              },
              {
                icon: <Star className="w-12 h-12 text-purple-600" />,
                title: "Client-Centric Growth",
                description: "From startups to large enterprises, we tailor our approach to meet your unique business objectives."
              }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative inline-block mb-6">

                  <div className="relative border border-primary rounded-xl p-6  group-hover:scale-105 transition-all duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 group-hover:text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Enhanced FAQ Section */}
      <div className="py-20 bg-gray-50">
        <Container maxWidth="md">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Find answers to common questions about our services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={expandedFaq === index}
                onChange={handleFaqChange(index)}
                className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-shadow border-0"
                sx={{
                  '&:before': { display: 'none' },
                  borderRadius: '16px !important'
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore className="text-blue-600" />}
                  className="px-8 py-4"
                >
                  <Typography className="font-semibold text-gray-800 text-lg">
                    {faq.q}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className="px-8 pb-6">
                  <Typography className="text-gray-600 leading-relaxed">
                    {faq.a}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </Container>
      </div>

    </Box>
  )
}
































// import React from 'react'
// import { Box, Button, Card, CardContent, Typography } from '@mui/material'
// import { ArrowForward } from '@mui/icons-material'
// import { useNavigate } from 'react-router-dom';
// import { processSteps } from '../../data/serviceData/productDevData';
// import { benefits } from '../../data/serviceData/productDevData';
// import { useCases } from '../../data/serviceData/productDevData';
// import { faqs } from '../../data/serviceData/productDevData';
// import productDev from '../../assets/productDev.jpeg'


// export default function ProductDevelopment() {
//   const navigate = useNavigate();

//   return (
//     <Box
//       sx={{
//         minHeight: "100vh",
//         width: "100%",
//         py: { xs: '', md: 14 },
//         fontFamily: "var(--font-family-base)",
//         background: 'var(--color-background)',
//       }}
//     >

//       {/* HERO */}
//       <Box sx={{
//         px: { xs: 2, md: 8 },
//         pt: { xs: 13, md: 0 }
//       }}>
//         <Box
//           sx={{
//             position: "relative",
//             width: "100%",
//             minHeight: { xs: 500, md: 620 },
//             display: "flex",
//             alignItems: "end",
//             justifyContent: "center",
//             backgroundImage: `url(${productDev})`,
//             backgroundAttachment: "fixed",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             overflow: "hidden",
//             mb: 5,
//           }}
//         >
//           {/* Overlay */}
//           <Box
//             sx={{
//               position: "absolute",
//               inset: 0,
//               bgcolor: "rgba(0,0,0,0.3)", // semi-transparent white

//               zIndex: 1,
//             }}
//           />


//           {/* Content */}
//           <Box
//             sx={{
//               position: "relative",
//               zIndex: 2,
//               width: { xs: "90%", md: "80%" },
//               textAlign: { xs: "center", md: "left" },
//               // mx: "auto",
//               py: { xs: 5, md: 20 },
//             }}
//           >
//             {/* Breadcrumb Navigation - fixed top left corner within the div */}
//             <nav className="absolute -top-7 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
//               {/* First line: breadcrumb links separated by slash */}
//               <div className="flex space-x-3">
//                 {/* <a>
//                   What We Do
//                 </a>
//                 <span>/</span> */}
//                 <span >Service</span>
//                 <span>/</span>
//                 <span >Product Development</span>
//               </div>
//               {/* Second line: horizontal dividing line */}
//               <div className="md:mt-5 h-[2px] w-[300px] md:w-4xl rounded-sm bg-gradient-to-r from-background via-gray-300 to-transparent"></div>
//             </nav>
//             <Typography
//               variant="h3"
//               fontWeight="bold"
//               fontSize='var(--font-size-title)'
//               mb={2}
//               color="white"
//               sx={{ letterSpacing: "-0.02em" }}
//             >
//               Driven by passion, powered by innovation
//             </Typography>
//             <Typography variant="h6" mb={3} color="var(--color-button-text)">
//               We are RSquareSoft, dedicated to empowering businesses with advanced technology and exceptional service.
//             </Typography>
//             <Button
//               variant="contained"
//               color="primary"
//               size="large"
//               href="#open-roles"
//               onClick={() => {
//                 const section = document.getElementById("product");
//                 if (section) {
//                   const navbarOffset = 80; // Set this to your navbar height
//                   const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
//                   window.scrollTo({
//                     top: elementPosition - navbarOffset,
//                     behavior: "smooth",
//                   });
//                 }
//               }}

//               sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: "var(--font-size-description)" }}
//             >
//               Explore More
//             </Button>
//           </Box>
//         </Box>
//       </Box>



//       {/* Overview + Process */}
//       <div id='product' className="max-w-6xl  mx-auto py-10 px-4">

//         {/* Service Overview */}
//         <div className="mb-12 text-center ">
//           <h2 className="font-semibold text-primary mb-4" style={{ fontSize: 'var(--font-size-heading1)' }}>Service Overview</h2>
//           <p className="text-text-primary max-w-3xl mx-auto" style={{ fontSize: 'var(--font-size-description)' }}>
//             From vision to launch, our team partners with startups and enterprises to create impactful digital products (Web and Mobile Applications).
//           </p>
//           <ul className="list-none mt-6 hidden md:flex justify-center flex-wrap gap-x-8 gap-y-2 text-primary " style={{ fontSize: 'var(--font-size-description)' }}>
//             <li className="flex items-center">
//               <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//               Startups, scale-ups, established companies
//             </li>
//             <li className="flex items-center">
//               <svg className="w-5 h-5  mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//               Web Applications, Mobile Applications
//             </li>
//             <li className="flex items-center">
//               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
//               Innovation, replatforming, and all-new product builds
//             </li>
//           </ul>
//         </div>

//         {/* Process Timeline */}
//         <div className=" p-8 pb-14 rounded-md  border" >
//           <h2 className="font-semibold text-text-primary mb-8 text-center" style={{ fontSize: 'var(--font-size-heading)' }}>Our Process</h2>
//           <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//             {processSteps.map(({ title, icon, description }) => (
//               <div key={title} className="flex flex-col items-center flex-1 text-center relative group">
//                 {/* Tooltip */}
//                 <div className="absolute -top-14 left-1/2 transform -translate-x-1/2 bg-text-secondary text-button-text px-3 py-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap pointer-events-none" style={{ fontSize: 'var(--font-size-description)' }}>
//                   {description}
//                 </div>
//                 {/* Icon Circle */}
//                 <div className="p-4 bg-background1 rounded-full shadow-lg border border-primary mb-4 transform hover:scale-105 transition-transform duration-300">
//                   {icon}
//                 </div>
//                 {/* Title */}
//                 <span className=" text-text-primary tracking-wide uppercase" style={{ fontSize: 'var(--font-size-description)' }}>{title}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//       </div>

//       {/* Benefits */}
//       <div className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] py-12 px-7 md:px-0">
//         <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
//           {benefits.map(({ icon, title, description }) => (
//             <Card key={title} className="shadow-lg border-l-4 border-primary" >
//               <CardContent>
//                 <div className="flex items-center gap-4 mb-4">
//                   <span>{icon}</span>
//                   <h3 className="font-semibold text-primary" style={{ fontSize: 'var(--font-size-subheading)' }}>{title}</h3>
//                 </div>
//                 <Typography className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>{description}</Typography>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>

//       {/* Use Cases */}
//       <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//         <h2 className="font-semibold text-primary text-center mb-7 md:mb-12 " style={{ fontSize: 'var(--font-size-heading1)' }}>Our Innovative Products</h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
//           {useCases.map((product) => (
//             <div key={product.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:shadow-xl border border-background1 flex flex-col">
//               <img src={product.img} alt={product.name} className="w-full h-48 object-contain object-center  transform hover:scale-110 transition-transform duration-900 ease-in-out" />
//               <div className="p-6 flex-grow flex flex-col">
//                 <h3 className="font-bold text-primary mb-2" style={{ fontSize: 'var(--font-size-subheading)' }}>{product.name}</h3>
//                 <p className="text-text-primary mb-4 line-clamp-5 flex-grow" style={{ fontSize: 'var(--font-size-description)' }}>{product.desc}</p> {/* Added flex-grow here */}
//                 <div className="mt-auto flex justify-end">
//                   <button className="relative text-primary font-semibold group px-0 py-0 bg-transparent cursor-pointer border-none shadow-none transition-all duration-300 ease-in-out"
//                     style={{ fontSize: 'var(--font-size-description)' }}
//                     onClick={() => navigate(product.link)}>
//                     Read More
//                     <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 bg-primary h-0.5 mt-1" />
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
//           <h2 className=" font-extrabold text-primary mb-5" style={{ fontSize: 'var(--font-size-heading1)' }}>Why Partner With Us?</h2>
//           <p className="hidden md:block text-text-primary max-w-3xl mx-auto mb-12" style={{ fontSize: 'var(--font-size-description)' }}>
//             We believe in building more than just products; we build lasting partnerships grounded in expertise, transparency, and a commitment to your success.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8">
//             {/* Benefit Card 1 */}
//             <div className="p-8 hover:bg-blue-100">
//               <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{ background: 'var(--darkBlue-gradient)' }}>
//                 {/* Expertise Icon */}
//                 <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.785a.75.75 0 01.071-.073l2.293-2.293a1 1 0 011.414 1.414L11.414 18l-8.293-8.293a1 1 0 011.414-1.414l5.293 5.293 4-4a.75.75 0 01.07-.071z"></path></svg>
//               </div>
//               <h3 className=" font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Proven Expertise</h3>
//               <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
//                 Our team brings deep, cross-domain knowledge to every project, ensuring innovative and robust solutions.
//               </p>
//             </div>
//             {/* Benefit Card 2 */}
//             <div className=" p-8 hover:bg-blue-100">
//               <div className="p-3  rounded-full inline-flex mb-4 hover:scale-105" style={{ background: 'var(--darkBlue-gradient)' }}>
//                 {/* Transparency Icon */}
//                 <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
//               </div>
//               <h3 className=" font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Transparent Collaboration</h3>
//               <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
//                 We maintain open communication with detailed reports, keeping you informed every step of the way.
//               </p>
//             </div>
//             {/* Benefit Card 3 */}
//             <div className="p-8 hover:bg-blue-100">
//               <div className="p-3 rounded-full inline-flex mb-4 hover:scale-105" style={{ background: 'var(--darkBlue-gradient)' }}>
//                 {/* Client Focus Icon */}
//                 <svg className="w-8 h-8 text-button-text" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292V15a2 2 0 01-2 2H6l-2 4h12l-2-4h-4a2 2 0 01-2-2V9.646l-2-2.292z"></path></svg>
//               </div>
//               <h3 className="font-bold text-primary mb-3" style={{ fontSize: 'var(--font-size-heading)' }}>Client-Centric Growth</h3>
//               <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>
//                 From startups to large enterprises, we tailor our approach to meet your unique business objectives.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ */}
//       <div className="max-w-5xl mx-auto py-14 px-4 md:px-0">
//         <h2 className="font-bold text-primary mb-6" style={{ fontSize: 'var(--font-size-heading)' }}>FAQs</h2>
//         <div>
//           {faqs.map(({ q, a }) => (
//             <div key={q} className="mb-6">
//               <h4 className="text-primary font-bold" style={{ fontSize: 'var(--font-size-description2)' }}>{q}</h4>
//               <p className="text-text-primary" style={{ fontSize: 'var(--font-size-description)' }}>{a}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Call To Action */}
//       <div className="flex flex-col items-center py-16 ">
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           className="bg-primary text-button-text group hover:shadow-2xl rounded px-8 py-3"
//           style={{
//             borderRadius: '2em',
//             border: 'none',
//             fontSize: 'var(--font-size-button)'
//           }}
//           endIcon={<ArrowForward className="transition-transform duration-800 group-hover:translate-x-2" />}
//         >
//           Start Your Product Journey
//         </Button>
//       </div>

//       {/* </div> */ }
//     </Box>
//   )
// }
