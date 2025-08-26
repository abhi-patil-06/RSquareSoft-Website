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
import SpeedIcon from "@mui/icons-material/Speed";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import { useNavigate } from "react-router-dom";

// DATA OBJECT FOR SECTION CONTENT
const cloudExpertiseArticle = {
  title: "Cloud Expertise",
  sections: [
    {
      heading: "What is Cloud Expertise?",
      content: (
        <>
          <span>
            <Link href="https://en.wikipedia.org/wiki/Cloud_computing" target="_blank" underline="hover" rel="noopener noreferrer">
              Cloud expertise
            </Link>{" "}
            represents organization-wide proficiency in designing, deploying, maintaining, and optimizing applications and infrastructure on cloud platforms such as{" "}
            <Link href="https://en.wikipedia.org/wiki/Amazon_Web_Services" target="_blank" underline="hover" rel="noopener noreferrer">AWS</Link>,{" "}
            <Link href="https://en.wikipedia.org/wiki/Microsoft_Azure" target="_blank" underline="hover" rel="noopener noreferrer">Azure</Link>, and{" "}
            <Link href="https://en.wikipedia.org/wiki/Google_Cloud_Platform" target="_blank" underline="hover" rel="noopener noreferrer">Google Cloud</Link>{" "}
            (GCP). Cloud experts leverage the flexibility, scalability, and global reach of cloud infrastructure to drive innovation while maintaining cost efficiency, resilience, and security. This expertise covers architecture, migration, DevOps, security best practices, compliance, and cloud-native development.
          </span>
        </>
      )
    },
    {
      heading: "Why is Cloud Expertise Essential?",
      content: (
        <>
          <span>
            As organizations accelerate digital transformation, cloud adoption ensures agility, scalability, and access to cutting-edge technologies such as{" "}
            <Link href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="_blank" underline="hover" rel="noopener noreferrer">AI</Link>,{" "}
            <Link href="https://en.wikipedia.org/wiki/Big_data" target="_blank" underline="hover" rel="noopener noreferrer">Big Data</Link>, and{" "}
            <Link href="https://en.wikipedia.org/wiki/Internet_of_things" target="_blank" underline="hover" rel="noopener noreferrer">IoT</Link>. Cloud expertise allows businesses to:
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>Respond quickly to market changes and deploy IT resources on-demand.</li>
              <li>Optimize infrastructure spend and eliminate downtime with resilient, scalable architectures.</li>
              <li>Ensure data security and compliance across regions and jurisdictions.</li>
              <li>Innovate with services such as serverless, containers, and managed machine learning platforms.</li>
            </ul>
          </span>
        </>
      )
    },
    {
      heading: "How Does Cloud Expertise Work?",
      content: (
        <>
          <span>
            Cloud specialists help organizations at every stage of the <Link href="https://en.wikipedia.org/wiki/Cloud_computing#Deployment_models" target="_blank" underline="hover" rel="noopener noreferrer">cloud journey</Link>:
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>
                <strong>Assessment & Strategy:</strong> Determining business needs, regulatory requirements, and optimal cloud architecture (single, multi, or hybrid cloud).
              </li>
              <li>
                <strong>Migration:</strong> Moving data, workloads, and applications from <Link href="https://en.wikipedia.org/wiki/On-premises_software" target="_blank" underline="hover" rel="noopener noreferrer">on-premises</Link> infrastructure to the cloud with minimal disruption.
              </li>
              <li>
                <strong>Optimization:</strong> Implementing <Link href="https://en.wikipedia.org/wiki/DevOps" target="_blank" underline="hover" rel="noopener noreferrer">DevOps</Link> practices, automating deployment, integrating with CI/CD, and using cloud monitoring for performance and savings.
              </li>
              <li>
                <strong>Governance & Security:</strong> Applying <Link href="https://en.wikipedia.org/wiki/Cloud_computing_security" target="_blank" underline="hover" rel="noopener noreferrer">cloud security</Link> frameworks, access controls, compliance monitoring, and disaster recovery planning.
              </li>
            </ul>
          </span>
        </>
      )
    },
    {
      heading: "Key Features & Capabilities",
      content: [
        <>Scalable infrastructure: On-demand compute, storage, and networking</>,
        <>Multi-cloud and hybrid support for workload flexibility</>,
        <>Cloud-native security and compliance controls</>,
        <>Automated provisioning, deployment, and self-healing systems</>,
        <>Integrated analytics and monitoring across cloud resources</>,
        <>Seamless integration with <Link href="https://en.wikipedia.org/wiki/Application_programming_interface" target="_blank" underline="hover" rel="noopener noreferrer">APIs</Link>, containers, and DevOps pipelines</>
      ]
    },
    {
      heading: "Real-World Usage & Examples",
      content: (
        <>
          <span>
            Enterprises worldwide leverage cloud expertise to <Link href="https://aws.amazon.com/solutions/case-studies/" target="_blank" rel="noopener noreferrer" underline="hover">drive efficiency & resilience</Link>:
            <ul className="list-disc pl-6 mt-2 mb-2">
              <li>
                <strong>Netflix:</strong>{" "}
                <Link href="https://en.wikipedia.org/wiki/Netflix" target="_blank" rel="noopener noreferrer" underline="hover">Netflix</Link> runs its global streaming platform on AWS for scalability and speed-to-market.
              </li>
              <li>
                <strong>Airbnb:</strong>{" "}
                <Link href="https://en.wikipedia.org/wiki/Airbnb" target="_blank" rel="noopener noreferrer" underline="hover">Airbnb</Link> uses microservices architecture in the cloud to handle massive surges during peak travel seasons.
              </li>
              <li>
                <strong>Banks & Healthcare:</strong> Enable secure disaster recovery and regulatory compliance with hybrid/multi-cloud architectures.
              </li>
            </ul>
          </span>
        </>
      )
    },
    {
      heading: "Typical Usage Scenarios",
      content: [
        <>Rapid application scaling for campaign or seasonal spikes</>,
        <>Disaster recovery and business continuity solutions</>,
        <>Data analytics and <Link href="https://en.wikipedia.org/wiki/Machine_learning" target="_blank" underline="hover" rel="noopener noreferrer">machine learning</Link> workloads</>,
        <>Secure API management and integration with SaaS products</>,
        <>Multi-region deployment for high availability</>,
        <>Automated DevOps deployment, monitoring, and scaling</>
      ]
    }
  ]
};


export default function CloudExpertise() {
  const navigate = useNavigate();
  return (
    <main className="bg-background min-h-screen flex flex-col font-family-base">


      {/* Hero Section */}
      <section className="py-22 md:py-20  md:pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
        <h1 className="text-primary tracking-tight font-bold drop-shadow-lg" style={{ fontSize: 'var(--font-size-title)' }}>
          Cloud Expertise for Modern Business
        </h1>
        <p className="mt-4 text-text-primary italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Empowering enterprises to achieve agility, security, and innovation through world-class cloud solutions.
        </p>
        <Box
          component="img"
          src="public/cloud-service.png"
          alt="Cloud Expertise"
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
          {cloudExpertiseArticle.sections.map((sec, idx) => (
            <Box key={idx} mb={idx < cloudExpertiseArticle.sections.length - 1 ? 7 : 0}>
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
                        <Box mr={2}><CloudQueueIcon sx={{ color: "#46aef7" }} /></Box>
                        <span>{sec.content[0]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><PublicIcon sx={{ color: "#1683c6" }} /></Box>
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
                        <Box mr={2}><SpeedIcon sx={{ color: "#09c" }} /></Box>
                        <span>{sec.content[3]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><AutoGraphIcon sx={{ color: "#14cdda" }} /></Box>
                        <span>{sec.content[4]}</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                        <Box mr={2}><IntegrationInstructionsIcon sx={{ color: "#43d2ff" }} /></Box>
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

              {idx < cloudExpertiseArticle.sections.length - 1 && (
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
            desc: "Instantly scale resources to handle any business growth or seasonal spike.",
            color: "bg-primary"
          },
          {
            title: "Security",
            desc:
              "Protect critical data and maintain compliance with advanced, built-in cloud security features.",
            color: "bg-primary"
          },
          {
            title: "Global Reach",
            desc:
              "Deploy applications & data worldwide to serve global customers and ensure performance.",
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
          Cloud Transformation Services
        </Typography>
        <Typography mb={4} color="textSecondary" fontSize={'var(--font-size-description)'}>
          End-to-end cloud consulting, migration, and managed services—delivering secure, cost-efficient, and agile operations for your modern enterprise.
        </Typography>
        <Button
          onClick={() => navigate("/expert")}
          variant="contained"
          color="primary"
          size="large"
          sx={{ px: 6, py: 1.5, borderRadius: 5 }}
        >
          Book a Cloud Assessment
        </Button>
      </section>
    </main>
  );
}