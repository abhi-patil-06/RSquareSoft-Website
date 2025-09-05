import {
  Button,
  Divider,
  Typography,
  Grid,
  Box,
  Link
} from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import TimelineIcon from "@mui/icons-material/Timeline";
import FunctionsIcon from "@mui/icons-material/Functions";
import MemoryIcon from "@mui/icons-material/Memory";
import { useNavigate } from "react-router-dom";
import { machineLearningArticle } from "../../data/TechnologyData";
import mlImg from '../../assets/ml.png'

export default function MachineLearning() {
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
            <span>Technology</span>
          </div>
          {/* Second line: horizontal dividing line */}
          <div className="md:mt-5 h-[2px] w-[300px] md:w-4xl rounded-sm bg-gradient-to-r from-gray-500 via-gray-300 to-transparent"></div>
        </nav>

        <h1 className="text-primary pt-15 tracking-tight font-bold drop-shadow-lg" style={{ fontSize: 'var(--font-size-title)' }}>
          Machine Learning for Business Growth
        </h1>
        <p className="mt-4 text-text-primary italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Unlock hidden insights, automate processes, and drive accurate, real-time decisions with state-of-the-art machine learning.
        </p>
        <Box
          component="img"
          src={mlImg}
          alt="Machine Learning"
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
          {machineLearningArticle.sections.map((sec, idx) => (
            <Box key={idx} mb={idx < machineLearningArticle.sections.length - 1 ? 7 : 0}>
              <Typography
                component="h2"
                variant="h5"
                fontWeight={700}
                sx={{ color: "var(--color-primary)", mb: 1.5, letterSpacing: "0.01em" }}
              >
                {sec.heading}
              </Typography>

              {Array.isArray(sec.content) && sec.heading === "Key Features & Capabilities" ? (
                <Grid container spacing={{ xs: 0, md: 7 }} marginTop={2}>
                  <Grid item xs={12} md={6} fontSize={'var(--font-size-description)'}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#46aef7" }} /></Box>
                        <span>{sec.content[0]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><FunctionsIcon sx={{ color: "#1683c6" }} /></Box>
                        <span>{sec.content[1]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><AutoGraphIcon sx={{ color: "#009be5" }} /></Box>
                        <span>{sec.content[2]}</span>
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={6} fontSize={'var(--font-size-description)'}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><TimelineIcon sx={{ color: "#09c" }} /></Box>
                        <span>{sec.content[3]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><MemoryIcon sx={{ color: "#14cdda" }} /></Box>
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
                <Typography
                  sx={{
                    color: "#454545",
                    fontSize: "var(--font-size-description)",
                    lineHeight: "1.85",
                    mb: 2,
                    whiteSpace: "pre-line"
                  }}
                >
                  {sec.content}
                </Typography>
              )}
              {idx < machineLearningArticle.sections.length - 1 && (
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
            title: "Accurate Predictions",
            desc: "Use ML to anticipate trends, detect anomalies, and make data-driven decisions in real time.",
            color: "bg-primary"
          },
          {
            title: "Process Automation",
            desc: "Automate repetitive manual tasks, freeing your team to focus on strategic priorities.",
            color: "bg-primary"
          },
          {
            title: "Customization & Personalization",
            desc: "Deliver tailored recommendations, offers, and digital experiences for every customer.",
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
          ML Consulting & Implementation
        </Typography>
        <Typography mb={4} color="textSecondary" fontSize={'var(--font-size-description)'}>
          From data preparation to production-scale deployment, we provide end-to-end machine learning expertise adapted for your business challenges.
        </Typography>
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 1.5, borderRadius: 5 }}
        >
          Start Your ML Journey
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
// import AutoGraphIcon from "@mui/icons-material/AutoGraph";
// import FunctionsIcon from "@mui/icons-material/Functions";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import SecurityIcon from "@mui/icons-material/Security";
// import MemoryIcon from "@mui/icons-material/Memory";
// import PublicIcon from "@mui/icons-material/Public";

// // DATA OBJECT FOR SECTION CONTENT
// const machineLearningArticle = {
//   title: "Machine Learning",
//   sections: [
//     {
//       heading: "What is Machine Learning?",
//       content: (
//         <>
//           <span>
//             <Link href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" underline="hover" rel="noopener noreferrer">
//               Machine Learning (ML)
//             </Link>{" "}
//             is a subset of artificial intelligence focused on building algorithms and models that enable computers to learn from data and make predictions or decisions without being explicitly programmed for each specific task. ML systems automatically improve their performance as they are exposed to more data. Modern machine learning is used for applications including recommendation engines, fraud detection, speech recognition, predictive maintenance, and image classification.
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Why is Machine Learning Important?",
//       content: (
//         <>
//           <span>
//             Machine learning helps organizations extract actionable insights from massive data sets, automate complex decision processes, and develop predictive models that drive efficiency and innovation. According to research from <Link href="https://www.gartner.com/en/information-technology/glossary/machine-learning-ml" target="_blank" rel="noopener noreferrer" underline="hover">Gartner</Link> and <Link href="https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/the-executives-ai-playbook" target="_blank" underline="hover" rel="noopener noreferrer">McKinsey</Link>, ML adoption delivers:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>Revenue growth via personalization (retail, streaming, advertising)</li>
//               <li>Operational automation and cost reduction in logistics, manufacturing, and IT</li>
//               <li>Enhanced risk management and fraud detection for banking and insurance</li>
//               <li>Faster, more accurate diagnostics and patient outcomes in healthcare</li>
//               <li>Real-time anomaly detection and preventive maintenance in IoT and industrial systems</li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "How Does Machine Learning Work?",
//       content: (
//         <>
//           <span>
//             Machine learning uses statistical algorithms, data processing, and computing power to create predictive or descriptive models. The core process includes:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>
//                 <strong>Data collection & preparation:</strong> Gathering, cleaning, and formatting large, relevant datasets from business applications, devices, or external sources.
//               </li>
//               <li>
//                 <strong>Model selection & training:</strong> Using methods such as <Link href="https://en.wikipedia.org/wiki/Supervised_learning" target="_blank" underline="hover" rel="noopener noreferrer">supervised</Link>, <Link href="https://en.wikipedia.org/wiki/Unsupervised_learning" target="_blank" underline="hover" rel="noopener noreferrer">unsupervised</Link>, or <Link href="https://en.wikipedia.org/wiki/Reinforcement_learning" target="_blank" underline="hover" rel="noopener noreferrer">reinforcement learning</Link>, ML models are trained on historical input/output data to learn patterns.
//               </li>
//               <li>
//                 <strong>Evaluation & tuning:</strong> Testing model accuracy and tuning hyperparameters to avoid overfitting or bias, typically using a separate validation dataset.
//               </li>
//               <li>
//                 <strong>Deployment & monitoring:</strong> Integrating models into business processes or digital services; using <Link href="https://en.wikipedia.org/wiki/MLOps" target="_blank" underline="hover" rel="noopener noreferrer">MLOps</Link> to automate retraining, scaling, and monitoring for constantly improving results.
//               </li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Key Features & Capabilities",
//       content: [
//         <>Data processing pipelines for structured and unstructured sources</>,
//         <>Custom model development using regression, classification & clustering</>,
//         <>Automated machine learning for rapid prototyping and deployment</>,
//         <>Scalable real-time inference and batch prediction</>,
//         <>MLOps tools for continuous integration, delivery, and monitoring of ML solutions</>,
//         <>Enterprise-grade security, privacy, and compliance for machine learning workflows</>
//       ]
//     },
//     {
//       heading: "Real-World Usage & Examples",
//       content: (
//         <>
//           <span>
//             Machine learning is a foundation for digital transformation across industries:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>
//                 <Link href="https://en.wikipedia.org/wiki/Spotify" target="_blank" underline="hover" rel="noopener noreferrer">Spotify</Link> leverages ML for music recommendations and playlist personalization.
//               </li>
//               <li>
//                 <strong>Manufacturing:</strong> Supervisory control and predictive maintenance reduce downtime by predicting equipment failures before they occur.
//               </li>
//               <li>
//                 <strong>Healthcare:</strong> ML models analyze medical images, electronic health records, and genomics to improve diagnostics and treatment recommendations.
//               </li>
//               <li>
//                 <strong>Finance:</strong> Credit risk assessment and automated fraud alerting using real-time ML algorithms.
//               </li>
//               <li>
//                 <strong>Supply Chain:</strong> Demand prediction and inventory optimization for global retailers.
//               </li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Typical Usage Scenarios",
//       content: [
//         <>Dynamic pricing and real-time recommendation engines</>,
//         <>Predictive maintenance for equipment and vehicles</>,
//         <>Automated document classification and data extraction</>,
//         <>Speech-to-text, voice assistants, and language translation</>,
//         <>Customer segmentation for targeted marketing</>,
//         <>AI-powered security and fraud detection systems</>
//       ]
//     }
//   ]
// };

// export default function MachineLearning() {
//   return (
//     <main className="bg-white min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section className="py-20 pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
//         <h1 className="text-5xl md:text-6xl text-blue-900 tracking-tight font-serif font-bold drop-shadow-lg">
//           Machine Learning for Business Growth
//         </h1>
//         <p className="mt-6 text-xl text-blue-700 font-sans italic">
//           Unlock hidden insights, automate processes, and drive accurate, real-time decisions with state-of-the-art machine learning.
//         </p>
//         <Box
//           component="img"
//           src="public/ml.png"
//           alt="Machine Learning"
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
//           {machineLearningArticle.sections.map((sec, idx) => (
//             <Box key={idx} mb={idx < machineLearningArticle.sections.length - 1 ? 7 : 0}>
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
//                         <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#18b6f6" }} /></Box>
//                         <span>{sec.content[0]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><FunctionsIcon sx={{ color: "#1976d2" }} /></Box>
//                         <span>{sec.content[1]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><AutoGraphIcon sx={{ color: "#43d2ff" }} /></Box>
//                         <span>{sec.content[2]}</span>
//                       </li>
//                     </ul>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><TimelineIcon sx={{ color: "#446bea" }} /></Box>
//                         <span>{sec.content[3]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><MemoryIcon sx={{ color: "#6f42c1" }} /></Box>
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
//               {idx < machineLearningArticle.sections.length - 1 && (
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
//             title: "Accurate Predictions",
//             desc: "Use ML to anticipate trends, detect anomalies, and make data-driven decisions in real time.",
//             color: "bg-blue-300"
//           },
//           {
//             title: "Process Automation",
//             desc:
//               "Automate repetitive manual tasks, freeing your team to focus on strategic priorities.",
//             color: "bg-blue-400"
//           },
//           {
//             title: "Customization & Personalization",
//             desc:
//               "Deliver tailored recommendations, offers, and digital experiences for every customer.",
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
//           ML Consulting & Implementation
//         </Typography>
//         <Typography mb={4} color="textSecondary" fontSize="1.1rem">
//           From data preparation to production-scale deployment, we provide end-to-end machine learning expertise adapted for your business challenges.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{ px: 6, py: 1.5, borderRadius: 5 }}
//         >
//           Start Your ML Journey
//         </Button>
//       </section>
//     </main>
//   );
// }
