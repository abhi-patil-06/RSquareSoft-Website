import {
  Button,
  Divider,
  Typography,
  Grid,
  Box,
  Link
} from "@mui/material";
import MemoryIcon from "@mui/icons-material/Memory";
import TimelineIcon from "@mui/icons-material/Timeline";
import PsychologyIcon from "@mui/icons-material/Psychology";
import PublicIcon from "@mui/icons-material/Public";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SecurityIcon from "@mui/icons-material/Security";
import { useNavigate } from "react-router-dom";
import { artificialIntelligenceArticle } from "../../data/TechnologyData";
import aiImg from '../../assets/ai.png'


export default function ArtificialIntelligence() {
  const navigate = useNavigate();
  return (
    <main className="bg-background min-h-screen flex flex-col font-family-base">

      {/* Hero Section */}
      <section className="py-22 md:py-20  md:pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
        
        {/* Breadcrumb Navigation - fixed top left corner within the div */}
        <nav className="absolute top-26 md:top-25 md:left-23 text-text-primary text-xl uppercase ">
          {/* First line: breadcrumb links separated by slash */}
          <div className="flex space-x-3">
            <a>
              What We Do
            </a>
            <span>/</span>
            <span>technology</span>
          </div>
          {/* Second line: horizontal dividing line */}
          <div className="md:mt-5 h-[2px] w-[300px] md:w-4xl rounded-sm bg-gradient-to-r from-gray-500 via-gray-300 to-transparent"></div>
        </nav>
        
        <h1 className="text-primary pt-15 tracking-tight font-bold drop-shadow-lg" style={{ fontSize: 'var(--font-size-title)' }}>
          Artificial Intelligence Solutions
        </h1>
        <p className="mt-4 text-text-primary italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Unlock the power of learning, perception, and intelligent automation for your enterprise.
        </p>
        <Box
          component="img"
          src={aiImg}
          alt="Artificial Intelligence"
          className="mx-auto mb-4 mt-5 md:mt-10 max-h-72"
        />
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 2, borderRadius: 5, marginTop: 5 }}
        >
          Contact Our Experts
        </Button>
      </section>

      <Divider sx={{ borderColor: "blue.300" }} />

      {/* Article Sections */}
      <section className="w-full bg-background py-10 px-4 md:px-12 lg:px-36">
        <Box maxWidth="full" mx="auto">
          {artificialIntelligenceArticle.sections.map((sec, idx) => (
            <Box key={idx} mb={idx < artificialIntelligenceArticle.sections.length - 1 ? 7 : 0}>
              <Typography
                component="h2"
                variant="h5"
                fontWeight={700}
                sx={{ color: "var(--color-primary)", mb: 1.5, letterSpacing: "0.01em" }}
              >
                {sec.heading}
              </Typography>

              {/* Key Features & Capabilities as two-column grid */}
              {Array.isArray(sec.content) && sec.heading === "Key Features & Capabilities" ? (
                <Grid container spacing={{ xs: 0, md: 7 }} marginTop={2} >
                  <Grid item xs={12} md={6} fontSize={'var(--font-size-description)'}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><MemoryIcon sx={{ color: "#46aef7" }} /></Box>
                        <span>{sec.content[0]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><TimelineIcon sx={{ color: "#1683c6" }} /></Box>
                        <span>{sec.content[1]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><PsychologyIcon sx={{ color: "#009be5" }} /></Box>
                        <span>{sec.content[2]}</span>
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={6} fontSize={'var(--font-size-description)'}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><PublicIcon sx={{ color: "#09c" }} /></Box>
                        <span>{sec.content[3]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#14cdda" }} /></Box>
                        <span>{sec.content[4]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><SecurityIcon sx={{ color: "#43d2ff" }} /></Box>
                        <span>{sec.content[5]}</span>
                      </li>
                    </ul>
                  </Grid>
                </Grid>

              ) : Array.isArray(sec.content) && sec.heading === "Typical Usage Scenarios" ? (
                <ul className="list-inside list-disc space-y-3 text-lg text-text-primary mb-2" style={{ fontSize: 'var(--font-size-description)' }}>
                  {sec.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              ) : (
                // All other sections as regular text or with links
                <Typography
                  sx={{
                    color: "#454545",
                    fontSize: "var(--font-size-description)",
                    lineHeight: "1.85",
                    mb: 2,
                    whiteSpace: "pre-line"
                  }}
                  component="div"
                >
                  {sec.content}
                </Typography>
              )}

              {idx < artificialIntelligenceArticle.sections.length - 1 && (
                <Divider sx={{ my: 4, borderColor: "#d1eaff" }} />
              )}
            </Box>
          ))}
        </Box>
      </section>

      <Divider sx={{ my: 6, borderColor: "blue.300" }} />

      {/* Key Benefits */}
      <section className="px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Automation",
            desc: "AI automates repetitive processes, enabling staff to focus on high-value work.",
            color: "bg-primary"
          },
          {
            title: "Data-Driven Insights",
            desc: "Transform raw information into actionable forecasts, trends, and decisions using AI-based analytics.",
            color: "bg-primary"
          },
          {
            title: "Personalization",
            desc: "Deliver intelligent, tailored experiences across digital channels and customer touchpoints.",
            color: "bg-primary"
          }
        ].map((item, idx) => (
          <Box
            key={idx}
            className={`bg-primary text-button-text rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
          >
            <Typography variant="h6" fontWeight="bold" gutterBottom fontSize={'var(--font-size-subheading)'}>
              {item.title}
            </Typography>
            <Typography fontSize={'var(--font-size-description)'}>{item.desc}</Typography>
          </Box>
        ))}
      </section>

      <Divider sx={{ my: 6, borderColor: "blue.300" }} />

      {/* Expertise & CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <Typography variant="h5" fontWeight="700" gutterBottom className="text-primary">
          AI Strategy & Implementation
        </Typography>
        <Typography mb={4} color="textSecondary" fontSize={'var(--font-size-description)'}>
          Unlock business value with end-to-end AI consulting—machine learning development, large-scale deployment, and responsible AI for the enterprise.
        </Typography>
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 1.5, borderRadius: 5 }}
        >
          Talk to an AI Expert
        </Button>
      </section>
    </main>
  );
}
































// import {
//   Button,
//   Divider,
//   Typography,
//   Grid,
//   Box,
//   Link
// } from "@mui/material";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import SecurityIcon from "@mui/icons-material/Security";
// import AutoGraphIcon from "@mui/icons-material/AutoGraph";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import PublicIcon from "@mui/icons-material/Public";
// import MemoryIcon from "@mui/icons-material/Memory";

// // DATA OBJECT FOR SECTION CONTENT
// const artificialIntelligenceArticle = {
//   title: "Artificial Intelligence",
//   sections: [
//     {
//       heading: "What is Artificial Intelligence?",
//       content: (
//         <>
//           <span>
//             <Link href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" underline="hover" rel="noopener noreferrer">
//               Artificial Intelligence (AI)
//             </Link>{" "}
//             is the branch of computer science focused on building systems that can perform tasks typically requiring human intelligence. These include perception, reasoning, learning, natural language understanding, and decision making. Modern AI is powered by advances in{" "}
//             <Link href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" underline="hover" rel="noopener noreferrer">machine learning (ML)</Link>,
//             <Link href="https://en.wikipedia.org/wiki/Natural_language_processing" target="_blank" underline="hover" rel="noopener noreferrer"> NLP</Link>,
//             <Link href="https://en.wikipedia.org/wiki/Computer_vision" target="_blank" underline="hover" rel="noopener noreferrer">computer vision</Link>, and robust computing infrastructure, enabling computers to analyze large volumes of data, recognize patterns, and make intelligent predictions or automate complex tasks.
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Why is Artificial Intelligence Important?",
//       content: (
//         <>
//           <span>
//             AI transforms industries by automating repetitive work, uncovering insights in massive data sets, and enabling intelligent products and services. According to <Link href="https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai-in-2023-generative-ais-breakout-year" target="_blank" underline="hover" rel="noopener noreferrer">McKinsey</Link>, AI adoption is associated with improved productivity, cost savings, and new revenue streams. Organizations use AI for:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>Personalized customer engagement and recommendation engines</li>
//               <li>Fraud detection, risk analysis, and cybersecurity in banking and insurance</li>
//               <li>Diagnostic imaging, drug discovery, and patient care support in healthcare</li>
//               <li>Forecasting, supply optimization, and predictive maintenance in manufacturing and logistics</li>
//               <li>Intelligent automation of back-office and customer service tasks (chatbots, RPA)</li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "How Does AI Work?",
//       content: (
//         <>
//           <span>
//             AI systems combine <Link href="https://en.wikipedia.org/wiki/Big_data" target="_blank" underline="hover" rel="noopener noreferrer">big data</Link>,
//             <Link href="https://en.wikipedia.org/wiki/Deep_learning" target="_blank" underline="hover" rel="noopener noreferrer">deep learning</Link>,
//             algorithms, and cloud computing to extract meaning and automate actions from complex information:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>
//                 <strong>Data collection:</strong> Aggregating data from digital systems, sensors, and human interactions.
//               </li>
//               <li>
//                 <strong>Model training:</strong> Using <Link href="https://en.wikipedia.org/wiki/Supervised_learning" target="_blank" underline="hover" rel="noopener noreferrer">supervised</Link>,
//                 <Link href="https://en.wikipedia.org/wiki/Unsupervised_learning" target="_blank" underline="hover" rel="noopener noreferrer"> unsupervised</Link>, or
//                 <Link href="https://en.wikipedia.org/wiki/Reinforcement_learning" target="_blank" underline="hover" rel="noopener noreferrer"> reinforcement</Link> learning approaches to build predictive or generative models.
//               </li>
//               <li>
//                 <strong>Inference & deployment:</strong> Integrating trained models into applications to make real-time decisions, automate processes, or interact with users via natural language or vision.
//               </li>
//               <li>
//                 <strong>Continuous learning:</strong> Improving accuracy and adapting to new patterns via data feedback loops and
//                 <Link href="https://en.wikipedia.org/wiki/MLOps" target="_blank" underline="hover" rel="noopener noreferrer"> MLOps</Link> practices.
//               </li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Key Features & Capabilities",
//       content: [
//         <>Machine learning model development and deployment</>,
//         <>Predictive analytics for forecasting and real-time insights</>,
//         <>Natural language understanding and conversational AI</>,
//         <>Computer vision, image and video analysis</>,
//         <>Intelligent process automation and robotic process automation (RPA)</>,
//         <>Responsible AI: fairness, explainability, and security</>
//       ]
//     },
//     {
//       heading: "Real-World Usage & Examples",
//       content: (
//         <>
//           <span>
//             AI is embedded in industry-leading solutions worldwide:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>
//                 <Link href="https://en.wikipedia.org/wiki/Google_Search" target="_blank" underline="hover" rel="noopener noreferrer">Google Search</Link>, <Link href="https://en.wikipedia.org/wiki/Recommendation_system" target="_blank" underline="hover" rel="noopener noreferrer">Netflix recommendations</Link>, and <Link href="https://en.wikipedia.org/wiki/ChatGPT" target="_blank" rel="noopener noreferrer" underline="hover">ChatGPT</Link> use AI to provide highly personalized experience.
//               </li>
//               <li>
//                 <strong>Healthcare:</strong> AI algorithms support radiologists in detecting diseases from X-rays and MRI scans, such as <Link href="https://en.wikipedia.org/wiki/IBM_Watson_Health" target="_blank" underline="hover" rel="noopener noreferrer">IBM Watson Health</Link>.
//               </li>
//               <li>
//                 <strong>Retail and e-commerce:</strong> Companies like <Link href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" underline="hover" rel="noopener noreferrer">Amazon</Link> use AI for demand forecasting, warehouse automation, and dynamic pricing.
//               </li>
//               <li>
//                 <strong>Banking:</strong> Major banks use AI for anti-money laundering (AML), fraud analytics, and loan risk models.
//               </li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Typical Usage Scenarios",
//       content: [
//         <>Conversational AI for chatbots and virtual assistants</>,
//         <>Predictive maintenance for industrial IoT</>,
//         <>Personalized recommendations in e-commerce and content platforms</>,
//         <>Medical imaging and patient care support</>,
//         <>Automated document processing and intelligent data extraction</>,
//         <>Real-time risk monitoring and cybersecurity analytics</>
//       ]
//     }
//   ]
// };

// export default function ArtificialIntelligence() {
//   return (
//     <main className="bg-white min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section className="py-20 pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
//         <h1 className="text-5xl md:text-6xl text-blue-900 tracking-tight font-serif font-bold drop-shadow-lg">
//           Artificial Intelligence Solutions
//         </h1>
//         <p className="mt-6 text-xl text-blue-700 font-sans italic">
//           Unlock the power of learning, perception, and intelligent automation for your enterprise.
//         </p>
//         <Box
//           component="img"
//           src="public/ai.png"
//           alt="Artificial Intelligence"
//           className="mx-auto mb-4 mt-10 max-h-72"
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{ px: 6, py: 2, borderRadius: 5, marginTop: 5 }}
//         >
//           Contact Our Experts
//         </Button>
//       </section>

//       <Divider sx={{ borderColor: "blue.300" }} />

//       {/* Article Sections */}
//       <section className="w-full bg-white py-10 px-4 md:px-12 lg:px-36">
//         <Box maxWidth="full" mx="auto">
//           {artificialIntelligenceArticle.sections.map((sec, idx) => (
//             <Box key={idx} mb={idx < artificialIntelligenceArticle.sections.length - 1 ? 7 : 0}>
//               <Typography
//                 component="h2"
//                 variant="h5"
//                 fontWeight={700}
//                 sx={{ color: "#1665c1", mb: 1.5, letterSpacing: "0.01em" }}
//               >
//                 {sec.heading}
//               </Typography>
//               {/* Key Features & Capabilities as two-column grid */}
//               {Array.isArray(sec.content) && sec.heading === "Key Features & Capabilities" ? (
//                 <Grid container spacing={7} marginTop={2}>
//                   <Grid item xs={12} md={6}>
//                     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><MemoryIcon sx={{ color: "#6f42c1" }} /></Box>
//                         <span>{sec.content[0]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><TimelineIcon sx={{ color: "#3863f6" }} /></Box>
//                         <span>{sec.content[1]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><PsychologyIcon sx={{ color: "#1976d2" }} /></Box>
//                         <span>{sec.content[2]}</span>
//                       </li>
//                     </ul>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><PublicIcon sx={{ color: "#46aef7" }} /></Box>
//                         <span>{sec.content[3]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#1683c6" }} /></Box>
//                         <span>{sec.content[4]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><SecurityIcon sx={{ color: "#009be5" }} /></Box>
//                         <span>{sec.content[5]}</span>
//                       </li>
//                     </ul>
//                   </Grid>
//                 </Grid>
//               ) : Array.isArray(sec.content) && sec.heading === "Typical Usage Scenarios" ? (
//                 // Typical Usage Scenarios as bullet list
//                 <ul className="list-inside list-disc space-y-3 text-lg text-gray-700 mb-2">
//                   {sec.content.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>
//               ) : (
//                 // All other sections as regular text or with links
//                 <Typography
//                   sx={{
//                     color: "#454545",
//                     fontSize: "1.12rem",
//                     lineHeight: "1.85",
//                     mb: 2,
//                     whiteSpace: "pre-line"
//                   }}
//                   component="div"
//                 >
//                   {sec.content}
//                 </Typography>
//               )}
//               {idx < artificialIntelligenceArticle.sections.length - 1 && (
//                 <Divider sx={{ my: 4, borderColor: "#d1eaff" }} />
//               )}
//             </Box>
//           ))}
//         </Box>
//       </section>

//       <Divider sx={{ my: 6, borderColor: "blue.300" }} />

//       {/* Key Benefits */}
//       <section className="px-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             title: "Automation",
//             desc: "AI automates repetitive processes, enabling staff to focus on high-value work.",
//             color: "bg-blue-300"
//           },
//           {
//             title: "Data-Driven Insights",
//             desc:
//               "Transform raw information into actionable forecasts, trends, and decisions using AI-based analytics.",
//             color: "bg-blue-400"
//           },
//           {
//             title: "Personalization",
//             desc:
//               "Deliver intelligent, tailored experiences across digital channels and customer touchpoints.",
//             color: "bg-blue-500"
//           }
//         ].map((item, idx) => (
//           <Box
//             key={idx}
//             className={`bg-blue-500 text-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow`}
//             sx={{ backgroundColor: item.color }}
//           >
//             <Typography variant="h6" fontWeight="bold" gutterBottom>
//               {item.title}
//             </Typography>
//             <Typography>{item.desc}</Typography>
//           </Box>
//         ))}
//       </section>

//       <Divider sx={{ my: 6, borderColor: "blue.300" }} />

//       {/* Expertise & CTA */}
//       <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
//         <Typography variant="h4" color="primary" fontWeight="medium" gutterBottom>
//           AI Strategy & Implementation
//         </Typography>
//         <Typography mb={4} color="textSecondary" fontSize="1.1rem">
//           Unlock business value with end-to-end AI consulting—machine learning development, large-scale deployment, and responsible AI for the enterprise.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{ px: 6, py: 1.5, borderRadius: 5 }}
//         >
//           Talk to an AI Expert
//         </Button>
//       </section>
//     </main>
//   );
// }
