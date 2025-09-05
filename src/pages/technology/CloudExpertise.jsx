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
import { cloudExpertiseArticle } from "../../data/TechnologyData";
import cloudImg from '../../assets/cloud-service.png'


export default function CloudExpertise() {
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
          Cloud Expertise for Modern Business
        </h1>
        <p className="mt-4 text-text-primary italic" style={{ fontSize: 'var(--font-size-description)' }}>
          Empowering enterprises to achieve agility, security, and innovation through world-class cloud solutions.
        </p>
        <Box
          component="img"
          src={cloudImg}
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