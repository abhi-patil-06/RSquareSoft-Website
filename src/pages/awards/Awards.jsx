import { Box, Button, Typography } from "@mui/material";
import React from "react";

// ADD: Replace URLs, years, and award copy with real company data and assets

export default function AwardsPage() {
  // Example awards (dynamic in production)

  {/* Example 'annualAwards' data structure (you'll replace this with your actual data): */ }
  const annualAwards = [
    { year: '2025', title: 'AI Innovation of the Year', description: 'Awarded for our groundbreaking generative AI platform.', imageUrl: 'public/Career-Section.jpg' },
    { year: '2025', title: 'Digital Transformation Partner', description: 'Recognized for successful large-scale enterprise digital transitions.', imageUrl: 'public/img1.png' },
    { year: '2025', title: 'Cloud Solutions Provider', description: 'Cited as a top provider for secure and scalable cloud architectures.', imageUrl: 'public/img2.png' },
    { year: '2025', title: 'Cyber Resilience Leader', description: 'Honored for pioneering advancements in cybersecurity defense.', imageUrl: 'public/About-Us3.jpg' },
    { year: '2025', title: 'Sustainable Tech Award', description: 'Acknowledged for developing eco-friendly technology solutions.', imageUrl: 'public/award-bg.png' },
    { year: '2025', title: 'Customer Experience Champion', description: 'Praised for outstanding client satisfaction and support services.', imageUrl: 'public/Media.jpeg' },
  ];

  const awards = [
    {
      year: "July 2025",
      title: "Brand Finance India 100 & Global IT Services 2025",
      description: "Persistent recognized for sharp upward trajectory in leading industry reports.",
    },
    {
      year: "July 2025",
      title: "ISG Provider Lens™ Leader",
      description: "Named a Leader for Digital Engineering Services Europe 2025 in Customer Engagement and Experience and Platforms.",
    },
    {
      year: "July 2025",
      title: "Everest Group Talent Readiness Leader",
      description: "Leader in Next-gen Application Services PEAK Matrix® Assessment 2025.",
    },
    {
      year: "May 2025",
      title: "CII Award: Best Employer for Inclusion",
      description: "Recognized for exceptional dedication to disability inclusion and accessible workplace policies.",
    },
    {
      year: "April 2025",
      title: "BCIC Climate Action Award",
      description: "Awarded for impactful climate action initiatives in the service sector.",
    },
    {
      year: "June 2025",
      title: "Gartner® Peer Insights™ Recognition",
      description: "Recognized for Public Cloud IT Transformation Services by industry peers.",
    },
    {
      year: "June 2025",
      title: "Extel Asia Executive Team Survey",
      description: "Achieved top rankings for outstanding executive performance, two years in a row.",
    },
    {
      year: "July 2025",
      title: "America’s Greatest Workplaces for Inclusion & Diversity (Newsweek)",
      description: "Honored for fostering a diverse and inclusive culture.",
    },
  ];
  return (
    <main className="bg-background min-h-screen font-family-base">
      {/* Hero */}
      <Box
        sx={{
          bgcolor: "var(--color-background)",
          width: "100%",
          pt: { xs: 13, md: 14 },
          // pb: { xs: 3, md: 5 },
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
            backgroundImage: `url("/public/award-bg.png")`,
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
              bgcolor: "rgba(0,0,0,0.6)", // semi-transparent white

              zIndex: 1,
            }}
          />
          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              // left: -100,
              width: { xs: "90%", md: "60%" },
              textAlign: { xs: "center", md: "left" },
              mx: "auto",
              py: { xs: 5, md: 8 },
            }}
          >
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize='var(--font-size-title)'
              mb={2}
              color="white"
              sx={{ letterSpacing: "-0.02em" }}
            >
              Awards & Recognitions
            </Typography>
            <Typography mb={3} color="white" fontSize='var(--font-size-subheading)'>
              Celebrating our journey of <b>excellence, impact, and innovation</b> — each accolade a testament to our vision, values, and team.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                const section = document.getElementById("awards-visual");
                if (section) {
                  const navbarOffset = 80; // Set this to your navbar height
                  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - navbarOffset,
                    behavior: "smooth",
                  });
                }
              }}

              sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: 'var(--font-size-description)' }}
            >
              Explore More
            </Button>
          </Box>
        </Box>
      </Box>


      <section id="awards-visual" class="bg-background px-6 py-2 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            {/* <h1 class="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Celebrating Our <span class="text-purple-700">Milestones</span>
            </h1> */}
            <div className="text-center py-5">
              <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Celebrating Our Milestones</h2>
              <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
            </div>
            {/* <p class="mt-2  text-text-primary max-w-3xl mx-auto" style={{fontSize:'var(--font-size-subheading)'}}>
              Our journey of excellence is marked by significant achievements and the trust placed in us by our peers, clients, and partners.
            </p> */}
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center mb-20">
            <div class="order-2 md:order-1 bg-transparent p-5 md:p-10 transform transition duration-300 ease-in-out border-b-8 border-primary">
              <h2 class="text-3xl font-bold text-primary mb-4" style={{fontSize:"var(--font-size-heading)"}}>Recognized for Industry Leadership</h2>
              <p class="text-text-primary  leading-relaxed mb-6" style={{fontSize:"var(--font-size-subheading)"}}>
                We are consistently highlighted in prestigious reports such as the Gartner Magic Quadrant for Enterprise Services, the Forrester Wave™ for Digital Transformation, and IDC MarketScape for our innovative solutions in AI and Cloud. This global recognition underscores our commitment to pushing the boundaries of technology.
              </p>
              <ul class="list-disc list-inside text-text-primary space-y-2" style={{fontSize:"var(--font-size-subheading)"}}>
                <li>Top Tier in AI & Machine Learning Services</li>
                <li>Leader in Cloud Migration & Modernization</li>
                <li>Pioneers in Data Analytics & Insights</li>
              </ul>
            </div>
            <div class="order-1 md:order-2 bg-gradient-to-r from-secondary to-primary overflow-hidden group">
              <img
                src="public/img1.png"
                alt="Company leader receiving an award on stage"
                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div class="p-6 text-white text-center">
                <p class="font-semibold" style={{fontSize:'var(--font-size-subheading)'}}>Proudly accepting the 'Global Innovation Award 2025'</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 md:gap-12 items-center mb-20">
            <div class="bg-gradient-to-r from-secondary to-primary overflow-hidden group">
              <img
                src="public/img2.png"
                alt="Team members celebrating a workplace award"
                class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div class="p-6 text-white text-center">
                <p class="font-semibold" style={{fontSize:'var(--font-size-subheading)'}}>Honored with the 'Best Workplace for Diversity & Inclusion'</p>
              </div>
            </div>
            <div class="bg-transparent p-5 md:p-10 transform transition duration-300 ease-in-out border-b-8 border-primary">
              <h2 class="font-bold text-primary mb-4" style={{fontSize:'var(--font-size-heading)'}}>Dedicated to People & Planet</h2>
              <p class="text-text-primary leading-relaxed mb-6" style={{fontSize:'var(--font-size-subheading)'}}>
                Our commitment extends beyond technology to fostering a **diverse and inclusive workplace** and spearheading **sustainable environmental practices**. We are recognized by organizations like the **World Economic Forum** for our impact on social responsibility and climate action.
              </p>
              <ul class="list-disc list-inside text-text-primary space-y-2" style={{fontSize:'var(--font-size-subheading)'}}>
                <li>Top Employer for Women in Tech</li>
                <li>Carbon Neutrality Leader 2024</li>
                <li>Excellence in Community Engagement</li>
              </ul>
            </div>
          </div>

          <div class="bg-white shadow-inner-lg p-8 md:p-12 mb-16">
            {/* <h3 class="font-bold text-center text-indigo-800 mb-12" style={{fontSize:'var(--font-size-heading1)'}}>Annual Highlights: A Legacy of Excellence (2025)</h3> */}
            <div className="text-center pb-15">
              <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Annual Highlights <span className="hidden md:inline">: A Legacy of Excellence</span></h2>
              <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

              {annualAwards.map(({ year, title, description, imageUrl }, idx) => (
                <div key={idx} class="bg-gray-50 overflow-hidden transform  transition-all duration-300 ease-in-out border-b-6 border-primary">
                  <div class="w-full h-48 overflow-hidden">
                    <img src={imageUrl} alt={title} class="w-full h-full object-cover transform hover:scale-110 transition-transform duration-900 ease-in-out" />
                  </div>
                  <div class="p-6">
                    <div class="mb-3 text-primary font-bold uppercase tracking-wide" style={{fontSize:'var(--font-size-description)'}}>{year}</div>
                    <h4 class="font-extrabold text-text-primary mb-2 leading-tight" style={{fontSize:'var(--font-size-subheading)'}}>{title}</h4>
                    <p class="text-text-primary  leading-relaxed" style={{fontSize:'var(--font-size-description)'}}>{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div class="bg-blue-50 rounded-xl py-12 px-6 md:px-12 mb-16">
            <div class="max-w-4xl mx-auto text-center">
              <blockquote class="italic text-primary font-semibold leading-tight" style={{fontSize:'var(--font-size-heading1)'}}>
                “Every award is a testament to the <span class="text-secondary font-extrabold">dedication and innovation</span> of our exceptional team, driving us to continuously elevate our standards.”
              </blockquote>
            </div>
          </div>

          {/* <div class="py-16 bg-gradient-to-br from-secondary via-primary to-background1 text-white text-center rounded-3xl shadow-2xl">
            <h2 class="text-3xl md:text-4xl font-extrabold mb-5 leading-tight">Join Our Award-Winning Journey</h2>
            <p class="mb-10 text-xl max-w-2xl mx-auto opacity-95">
              Ready to build the future with a team recognized globally for its excellence? Let's connect and innovate together.
            </p>
            <button class="bg-white text-purple-700 font-bold px-12 py-5 rounded-full shadow-lg  cursor-pointer transform hover:scale-105 transition duration-300 ease-in-out text-lg tracking-wide uppercase">
              Explore Opportunities
            </button>
          </div> */}
        </div>
      </section>
    </main>
  );
}















// import React from "react";

// export default function SuccessStory() {
//   return (
//     <main className="bg-white min-h-screen">
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6 flex flex-col items-center">
//         <h1 className="text-4xl font-bold mb-4">Our Success Story</h1>
//         <p className="max-w-2xl text-center text-lg">
//           Launched in Feb 2025, our mid-scale team has driven innovation and created real impact for our clients and partners.
//         </p>
//         <div className="mt-8 flex space-x-4">
//           <button className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-100">
//             Book a Demo
//           </button>
//           <button className="bg-transparent border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700">
//             Contact Us
//           </button>
//         </div>
//       </section>

//       {/* Timeline & Key Moments */}
//       <section className="max-w-4xl mx-auto py-14 px-4 space-y-8">
//         {/* Introduction */}
//         <div>
//           <h2 className="text-2xl font-bold mb-2">Our Journey</h2>
//           <p className="text-gray-700">
//             Established in February 2025, we began as a small group passionate about solving industry challenges. Today, with a growing team and client base, we continue to make a difference.
//           </p>
//         </div>

//         {/* Challenge */}
//         <div className="bg-gray-50 rounded-lg p-6 shadow">
//           <h3 className="text-xl font-semibold text-blue-700 mb-1">The Challenge</h3>
//           <p className="text-gray-700">
//             Clients struggled with manual reporting processes, delayed insights, and lack of real-time data—hindering decision-making and growth.
//           </p>
//         </div>

//         {/* Solution */}
//         <div className="bg-gray-50 rounded-lg p-6 shadow">
//           <h3 className="text-xl font-semibold text-indigo-700 mb-1">Our Solution</h3>
//           <p className="text-gray-700">
//             We deployed an AI-powered dashboard for real-time reporting, seamless integration, and actionable insights—streamlining our clients' operations.
//           </p>
//         </div>

//         {/* Visual: Key Metrics */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
//           <div className="bg-blue-700 text-white p-6 rounded-lg shadow flex flex-col items-center">
//             <span className="text-3xl font-bold">+40%</span>
//             <p className="mt-2 text-center">Revenue Growth <br/> (6 Months)</p>
//           </div>
//           <div className="bg-indigo-700 text-white p-6 rounded-lg shadow flex flex-col items-center">
//             <span className="text-3xl font-bold">-50%</span>
//             <p className="mt-2 text-center">Onboarding Time</p>
//           </div>
//           <div className="bg-blue-600 text-white p-6 rounded-lg shadow flex flex-col items-center">
//             <span className="text-3xl font-bold">120+</span>
//             <p className="mt-2 text-center">Team Size</p>
//           </div>
//         </div>

//         {/* The "Aha!" Moment */}
//         <div>
//           <h3 className="text-xl font-semibold text-green-700 mb-1">The Breakthrough</h3>
//           <blockquote className="italic text-gray-600 border-l-4 border-green-500 pl-4">
//             “Onboarding time dropped by 50% after deploying the new dashboard—it changed our entire workflow.”
//           </blockquote>
//         </div>

//         {/* Testimonial */}
//         <div className="my-10 bg-white p-8 shadow-md rounded-xl flex flex-col md:flex-row items-center">
//           <img
//             src="https://randomuser.me/api/portraits/men/45.jpg"
//             alt="Client"
//             className="w-20 h-20 rounded-full object-cover mr-6 mb-4 md:mb-0"
//           />
//           <div>
//             <p className="text-lg font-medium text-gray-900">
//               “This solution enabled our team to focus more on growth and less on reporting headaches. It really changed our trajectory.”
//             </p>
//             <p className="mt-2 text-sm text-gray-500">— Alex Thompson, COO, Acme Corp</p>
//           </div>
//         </div>
//       </section>

//       {/* Call-to-Action */}
//       <section className="bg-gradient-to-r from-indigo-700 to-blue-600 text-white text-center py-12">
//         <h2 className="text-2xl font-bold mb-3">
//           Ready to Boost Your Results?
//         </h2>
//         <p className="mb-5 text-lg">
//           Join our growing community of successful businesses. Take the next step today!
//         </p>
//         <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-lg shadow hover:bg-indigo-100 hover:text-indigo-900">
//           Get Started Now
//         </button>
//       </section>
//     </main>
//   );
// }
