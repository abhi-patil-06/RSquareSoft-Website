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
import { enterpriseProductionArticle } from "../../data/TechnologyData";
import enterpriseImg from '../../assets/enterprise.png'

export default function EnterpriseProductionModern() {
  const navigate = useNavigate()
  return (
    <main className="bg-background min-h-screen flex flex-col font-family-base">

      {/* Hero Section */}
      <section className="py-22 md:py-20  md:pt-35 bg-gradient-to-r from-blue-100 via-blue-50 to-white px-8 text-center w-full mx-auto">
        {/* <Typography variant="h2" fontWeight="bold" color="primary" gutterBottom>
          Enterprise Production Reimagined
        </Typography> */}

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
          Enterprise Production Reimagined
        </h1>
        <p className="mt-4 text-text-primary  italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Empowering businesses with scalable, secure, and automated production environments that drive growth and operational excellence.
        </p>
        <Box
          component="img"
          src={enterpriseImg}
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