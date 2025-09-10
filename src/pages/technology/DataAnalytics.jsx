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
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import BarChartIcon from "@mui/icons-material/BarChart";
import { useNavigate } from "react-router-dom";
import { dataAnalyticsArticle } from "../../data/TechnologyData";
import analyticsImg from '../../assets/data-analytics.png'

export default function DataAnalytics() {
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
          Data Analytics & Business Intelligence
        </h1>
        <p className="mt-4 text-text-primary italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Harness the power of data to make confident, insight-driven business decisions—faster than ever before.
        </p>
        <Box
          component="img"
          src={analyticsImg}
          alt="Data Analytics"
          className="mx-auto mb-4 mt-5 md:mt-10 max-h-72"
        />
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 2, borderRadius: 5, marginTop: 3 }}
        >
          Contact Our Experts
        </Button>
      </section>

      <Divider sx={{ borderColor: "blue.300" }} />

      {/* Article Sections */}
      <section className="w-full bg-background py-10 px-4 md:px-12 lg:px-36">
        <Box maxWidth="full" mx="auto">
          {dataAnalyticsArticle.sections.map((sec, idx) => (
            <Box key={idx} mb={idx < dataAnalyticsArticle.sections.length - 1 ? 7 : 0}>
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
                        <Box mr={2}><TimelineIcon sx={{ color: "#1683c6" }} /></Box>
                        <span>{sec.content[1]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><QueryStatsIcon sx={{ color: "#009be5" }} /></Box>
                        <span>{sec.content[2]}</span>
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={6} fontSize={'var(--font-size-description)'}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><BarChartIcon sx={{ color: "#09c" }} /></Box>
                        <span>{sec.content[3]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><AutoGraphIcon sx={{ color: "#14cdda" }} /></Box>
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

              {idx < dataAnalyticsArticle.sections.length - 1 && (
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
            title: "Actionable Insights",
            desc: "Transform raw data into business value through rapid, easy-to-understand analytics.",
            color: "bg-primary"
          },
          {
            title: "Faster Decisions",
            desc: "Empower leaders and teams with real-time dashboards and predictive analytics.",
            color: "bg-primary"
          },
          {
            title: "Secure, Trusted Data",
            desc: "Maintain data privacy and compliance at every step for stakeholder confidence.",
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
          Data Analytics Consulting & Solutions
        </Typography>
        <Typography mb={4} color="textSecondary" fontSize={'var(--font-size-description)'}>
          We help you turn data into your organization’s most valuable asset, with enterprise analytics, BI, and modern data management.
        </Typography>
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 1.5, borderRadius: 5 }}
        >
          Start Your Data Journey
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
// import QueryStatsIcon from "@mui/icons-material/QueryStats";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import BarChartIcon from "@mui/icons-material/BarChart";
// import TimelineIcon from "@mui/icons-material/Timeline";
// import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
// import PublicIcon from "@mui/icons-material/Public";
// import SecurityIcon from "@mui/icons-material/Security";
// import { AutoGraph } from "@mui/icons-material";

// // DATA OBJECT FOR SECTION CONTENT
// const dataAnalyticsArticle = {
//   title: "Data Analytics",
//   sections: [
//     {
//       heading: "What is Data Analytics?",
//       content: (
//         <>
//           <span>
//             <Link href="https://en.wikipedia.org/wiki/Data_analysis" target="_blank" underline="hover" rel="noopener noreferrer">
//               Data analytics
//             </Link>{" "}
//             is the process of examining raw data to uncover trends, patterns, correlations, and actionable insights for better decision-making. It encompasses technologies and methods for collecting, cleaning, transforming, visualizing, and interpreting <Link href="https://en.wikipedia.org/wiki/Big_data" target="_blank" underline="hover" rel="noopener noreferrer">big data</Link> from distributed sources. Modern data analytics is foundational to digital transformation, enabling predictive analytics, real-time dashboards, and self-service business intelligence.
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Why is Data Analytics Important?",
//       content: (
//         <>
//           <span>
//             According to <Link href="https://www.gartner.com/en/information-technology/glossary/data-analytics" target="_blank" underline="hover" rel="noopener noreferrer">Gartner</Link> and <Link href="https://hbr.org/2022/02/your-data-strategy-is-your-business-strategy" target="_blank" underline="hover" rel="noopener noreferrer">Harvard Business Review</Link>, companies leveraging data analytics outperform their competition in revenue, operational efficiency, and innovation. Key benefits include:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>Informed decision-making and reduced bias using real-time and historical data</li>
//               <li>Personalized customer experiences and targeted marketing</li>
//               <li>Detection of fraud, anomalies, and security threats faster</li>
//               <li>Optimization of supply chain, inventory, and business processes</li>
//               <li>Empowering all users—not just data scientists—via self-service analytics</li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "How Does Data Analytics Work?",
//       content: (
//         <>
//           <span>
//             Data analytics workflows encompass several core steps:<br />
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>
//                 <strong>Data collection & ingestion:</strong> Gathering data from databases, IoT sensors, cloud platforms, and APIs.
//               </li>
//               <li>
//                 <strong>Data cleaning & transformation:</strong> Standardizing, deduplicating, and converting data for consistency and accuracy (<Link href="https://en.wikipedia.org/wiki/Extract,_transform,_load" target="_blank" underline="hover" rel="noopener noreferrer">ETL</Link> or <Link href="https://en.wikipedia.org/wiki/ELT_(extract,_load,_transform)" target="_blank" underline="hover" rel="noopener noreferrer">ELT</Link> processes).
//               </li>
//               <li>
//                 <strong>Analysis & modeling:</strong> Applying <Link href="https://en.wikipedia.org/wiki/Statistical_model" target="_blank" underline="hover" rel="noopener noreferrer">statistical models</Link>, <Link href="https://en.wikipedia.org/wiki/Predictive_analytics" target="_blank" underline="hover" rel="noopener noreferrer">predictive analytics</Link>, or visualization tools to draw actionable conclusions.
//               </li>
//               <li>
//                 <strong>Dashboards & reporting:</strong> Using data visualization to provide business users and executives with interactive dashboards and reports.
//               </li>
//               <li>
//                 <strong>Governance & security:</strong> Ensuring data quality, privacy, and compliance (such as <Link href="https://en.wikipedia.org/wiki/General_Data_Protection_Regulation" target="_blank" underline="hover" rel="noopener noreferrer">GDPR</Link>).
//               </li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Key Features & Capabilities",
//       content: [
//         <>Ingestion of structured and unstructured data from multiple sources</>,
//         <>Scalable, real-time ETL/ELT pipelines and data lakes</>,
//         <>Interactive dashboards and self-service business intelligence (BI)</>,
//         <>Advanced data visualization, exploration, and reporting</>,
//         <>Predictive and prescriptive analytics powered by ML/AI</>,
//         <>Enterprise data governance, quality, and security</>
//       ]
//     },
//     {
//       heading: "Real-World Usage & Examples",
//       content: (
//         <>
//           <span>
//             Data analytics is revolutionizing industries around the globe:
//             <ul className="list-disc pl-6 mt-2 mb-2">
//               <li>
//                 <strong>Finance:</strong> <Link href="https://en.wikipedia.org/wiki/Fraud_detection" target="_blank" underline="hover" rel="noopener noreferrer">Fraud detection</Link>, credit scoring, and risk analytics for major banks.
//               </li>
//               <li>
//                 <strong>Retail:</strong> Inventory optimization and customer behavior analytics for demand forecasting (<Link href="https://en.wikipedia.org/wiki/Walmart" target="_blank" underline="hover" rel="noopener noreferrer">Walmart</Link>, <Link href="https://en.wikipedia.org/wiki/Amazon_(company)" target="_blank" underline="hover" rel="noopener noreferrer">Amazon</Link>).
//               </li>
//               <li>
//                 <strong>Healthcare:</strong> Patient outcome analysis and population health research.
//               </li>
//               <li>
//                 <strong>Transportation & Logistics:</strong> Real-time route optimization and predictive maintenance for fleets and airlines.
//               </li>
//               <li>
//                 <strong>Public Sector:</strong> Data-driven policies and smart city initiatives using open data platforms.
//               </li>
//             </ul>
//           </span>
//         </>
//       )
//     },
//     {
//       heading: "Typical Usage Scenarios",
//       content: [
//         <>KPI dashboards with interactive visualization for executives</>,
//         <>Real-time anomaly detection and fraud prevention in financial systems</>,
//         <>Customer segmentation for targeted marketing campaigns</>,
//         <>Supply chain and inventory analysis for cost control</>,
//         <>Clinical analytics and population health management</>,
//         <>Automated compliance and data quality monitoring</>
//       ]
//     }
//   ]
// };

// export default function DataAnalytics() {
//   return (
//     <main className="bg-white min-h-screen flex flex-col">
//       {/* Hero Section */}
//       <section className="py-20 pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
//         <h1 className="text-5xl md:text-6xl text-blue-900 tracking-tight font-serif font-bold drop-shadow-lg">
//           Data Analytics & Business Intelligence
//         </h1>
//         <p className="mt-6 text-xl text-blue-700 font-sans italic">
//           Harness the power of data to make confident, insight-driven business decisions—faster than ever before.
//         </p>
//         <Box
//           component="img"
//           src="public/data-analytics.png"
//           alt="Data Analytics"
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
//           {dataAnalyticsArticle.sections.map((sec, idx) => (
//             <Box key={idx} mb={idx < dataAnalyticsArticle.sections.length - 1 ? 7 : 0}>
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
//                         <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#1683c6" }} /></Box>
//                         <span>{sec.content[0]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><TimelineIcon sx={{ color: "#3863f6" }} /></Box>
//                         <span>{sec.content[1]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><QueryStatsIcon sx={{ color: "#1976d2" }} /></Box>
//                         <span>{sec.content[2]}</span>
//                       </li>
//                     </ul>
//                   </Grid>
//                   <Grid item xs={12} md={6}>
//                     <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><BarChartIcon sx={{ color: "#43d2ff" }} /></Box>
//                         <span>{sec.content[3]}</span>
//                       </li>
//                       <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
//                         <Box mr={2}><AutoGraph sx={{ color: "#18b6f6" }} /></Box>
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
//               {idx < dataAnalyticsArticle.sections.length - 1 && (
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
//             title: "Actionable Insights",
//             desc: "Transform raw data into business value through rapid, easy-to-understand analytics.",
//             color: "bg-blue-300"
//           },
//           {
//             title: "Faster Decisions",
//             desc: "Empower leaders and teams with real-time dashboards and predictive analytics.",
//             color: "bg-blue-400"
//           },
//           {
//             title: "Secure, Trusted Data",
//             desc: "Maintain data privacy and compliance at every step for stakeholder confidence.",
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
//           Data Analytics Consulting & Solutions
//         </Typography>
//         <Typography mb={4} color="textSecondary" fontSize="1.1rem">
//           We help you turn data into your organization’s most valuable asset, with enterprise analytics, BI, and modern data management.
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           size="large"
//           sx={{ px: 6, py: 1.5, borderRadius: 5 }}
//         >
//           Start Your Data Journey
//         </Button>
//       </section>
//     </main>
//   );
// }
