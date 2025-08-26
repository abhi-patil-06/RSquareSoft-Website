import {
  Button,
  Divider,
  Typography,
  Grid,
  Box
} from "@mui/material";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import SecurityIcon from "@mui/icons-material/Security";
import PublicIcon from "@mui/icons-material/Public";
import { useNavigate } from "react-router-dom";

// DATA OBJECT FOR SECTION CONTENT
const enterpriseProductionArticle = {
  title: "Enterprise Production",
  sections: [
    {
      heading: "What is Enterprise Production?",
      content:
        "Enterprise Production refers to the holistic process of architecting, orchestrating, and managing large-scale, mission-critical systems for complex organizations. Unlike standard production operations, it leverages advanced automation, modular architectures, and seamless integration with business-wide platforms (such as ERP, supply chain, and customer management). Enterprise production entails end-to-end control over systems, ensuring performance, resiliency, and governance for continuously evolving enterprise needs."
    },
    {
      heading: "Why Do Enterprises Need Specialized Production?",
      content:
        "Enterprises operate in volatile, high-stakes environments, handling large data volumes and facing evolving regulatory and operational challenges. Specialized enterprise production infrastructure provides the ability to: (1) respond swiftly to market or supply chain changes; (2) ensure compliance with industry and governmental standards; (3) guarantee business continuity through redundant, resilient systems; and (4) enable agile, cross-functional collaboration at scale. As organizations expand or diversify offerings, a robust production backbone is critical for supporting new business models and digital transformations."
    },
    {
      heading: "How Does Enterprise Production Work?",
      content:
        "Successful enterprise production environments are built around several core paradigms:\n• Automation: Streamlining operations with CI/CD pipelines and IT orchestration tools.\n• Security & Compliance: Implementing multi-layered controls, centralized monitoring, and audit trails.\n• Data Analytics: Gathering real-time metrics for predictive insights and rapid decision-making.\n• Integration: Connecting disparate business apps, third-party tools, and custom workflows to create a unified operational ecosystem.\n• Scalability: Leveraging cloud-native and hybrid infrastructure that can grow on demand while maintaining high performance and minimal downtime."
    },
    {
      heading: "Key Features & Capabilities",
      content: [
        "Scalability to manage global operations and unpredictable growth",
        "Advanced integration with ERP, CRM, and legacy systems",
        "Enterprise-grade security, compliance management, and end-to-end audit trails",
        "Comprehensive, real-time monitoring, analytics, and alerting dashboards",
        "Automation of deployment, quality assurance, and routine workflows",
        "Configurable workflows and infrastructure for dynamic business needs"
      ]
    },
    {
      heading: "Real-World Usage & Examples",
      content:
        "Across industries, enterprise production solutions are the linchpin for digital transformation. Manufacturers use them to connect smart factories and automate logistics; financial firms deploy them for regulatory reporting, fraud detection, and 24/7 client operations; and e-commerce giants rely on them for seamless multichannel order fulfillment. In every use case, they ensure high availability, security, and rapid adaptability, empowering leading organizations to stay competitive in demanding global markets."
    },
    {
      heading: "Typical Usage Scenarios",
      content: [
        "Enterprise-wide workflow automation to accelerate delivery and reduce errors.",
        "High availability architecture and redundancy for mission-critical system uptime.",
        "Industry-specific compliance and cybersecurity frameworks (GDPR, HIPAA, SOX, etc.).",
        "Orchestrated CI/CD and deployment pipelines for faster releases and reduced downtime.",
        "Real-time monitoring and analytics to support business intelligence and proactive maintenance.",
        "Self-healing infrastructure to mitigate outages with automated failover and rollback."
      ]
    }
  ]
};

export default function EnterpriseProductionModern() {
  const navigate = useNavigate()
  return (
    <main className="bg-background min-h-screen flex flex-col font-family-base">

      {/* Hero Section */}
      <section className="py-22 md:py-20  md:pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
        {/* <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
          Enterprise Production Reimagined
        </Typography> */}
        <h1 className="text-primary tracking-tight font-bold drop-shadow-lg" style={{ fontSize: 'var(--font-size-title)' }}>
          Enterprise Production Reimagined
        </h1>
        <p className="mt-4 text-text-primary  italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Empowering businesses with scalable, secure, and automated production environments that drive growth and operational excellence.
        </p>
        <Box
          component="img"
          src="/enterprise.png"
          alt="Enterprise Production Modern"
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
          {enterpriseProductionArticle.sections.map((sec, idx) => (
            <Box key={idx} mb={idx < enterpriseProductionArticle.sections.length - 1 ? 7 : 0}>
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
                        <Box mr={2}><PublicIcon sx={{ color: "#46aef7" }} /></Box>
                        <span>{sec.content[0]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#1683c6" }} /></Box>
                        <span>{sec.content[1]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><SecurityIcon sx={{ color: "#009be5" }} /></Box>
                        <span>{sec.content[2]}</span>
                      </li>
                    </ul>
                  </Grid>
                  <Grid item xs={12} md={6} fontSize={'var(--font-size-description)'}>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><AutoGraphIcon sx={{ color: "#09c" }} /></Box>
                        <span>{sec.content[3]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#14cdda" }} /></Box>
                        <span>{sec.content[4]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><AutoGraphIcon sx={{ color: "#43d2ff" }} /></Box>
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
                // All other sections as regular text
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

              {idx < enterpriseProductionArticle.sections.length - 1 && (
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
            title: "Scalability",
            desc: "Effortlessly manage, expand, and balance your production capacity to meet dynamic, global business goals.",
            color: "bg-primary"
          },
          {
            title: "Security",
            desc:
              "Protect enterprise environments and sensitive data with layered, adaptive security and industry compliance frameworks.",
            color: "bg-primary"
          },
          {
            title: "Automation",
            desc:
              "Reduce manual errors, increase agility, and streamline operations with orchestrated process automation and intelligent workflows.",
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
          Our Expertise & Services
        </Typography>
        <Typography mb={4} color="textSecondary" fontSize={'var(--font-size-description)'}>
          We provide end-to-end consulting, deployment, and continuous support for enterprise production ecosystems—from designing scalable, secure architectures to integrating automation and compliance across your organization.
        </Typography>
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 1.5, borderRadius: 5 }}
        >
          Contact Our Experts
        </Button>
      </section>
    </main>
  );
}

// --- Helper component for icon+text feature rows ---
function FeatureItem({ icon, text }) {
  return (
    <Box display="flex" alignItems="center" mb={1.6}>
      <Box mr={2} display="flex" alignItems="center" fontSize={28}>
        {icon}
      </Box>
      <Typography sx={{ fontSize: "1.05rem", color: "#16436b" }}>{text}</Typography>
    </Box>
  );
}