import React, { useState } from "react";

const fresherSteps = [
  { id: 1, name: "Application", desc: "Submit your resume and application form." },
  { id: 2, name: "Online Test", desc: "Complete the online aptitude and technical test." },
  { id: 3, name: "Technical Interview", desc: "Attend a technical interview with our experts." },
  { id: 4, name: "HR Interview", desc: "Discuss your goals and company fit with HR." },
  { id: 5, name: "Offer & Onboarding", desc: "Receive your offer letter and start onboarding process." },
];

const experiencedSteps = [
  { id: 1, name: "Application", desc: "Submit your resume, cover letter, and portfolio." },
  { id: 2, name: "Technical Round", desc: "Technical team evaluates your skills through interviews." },
  { id: 3, name: "Managerial Round", desc: "Meet the hiring manager to discuss role expectations." },
  { id: 4, name: "HR Discussion", desc: "Negotiate salary, benefits and company policies." },
  { id: 5, name: "Final Offer", desc: "Receive the job offer and details about joining." },
];

export default function HiringProcess() {
  const [candidateType, setCandidateType] = useState("fresher");
  const [selectedStep, setSelectedStep] = useState(1);

  const steps = candidateType === "fresher" ? fresherSteps : experiencedSteps;
  const currentStep = steps.find((step) => step.id === selectedStep);

  return (
    <div className="font-family-base" style={{ maxWidth: 900, margin: "0 auto" }}>
      <div className="text-center py-10">
        <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Hiring Process</h2>
        <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
      </div>

      {/* Toggle Fresher/Experience */}
      {/* <div style={{ display: "flex", justifyContent: "center", marginBottom: 32 }}>
        {["fresher", "experienced"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setCandidateType(type);
              setSelectedStep(1);
            }}
            style={{
              padding: "10px 28px",
              backgroundColor: candidateType === type ? "#2563eb" : "#e0e7ff",
              color: candidateType === type ? "white" : "#3b82f6",
              fontWeight: 600,
              cursor: "pointer",
              textTransform: "capitalize",
              transition: "all 0.3s",
            }}
          >
            {type}
          </button>
        ))}
      </div> */}
      <div
        style={{
          maxWidth: 304,           // 150px * 2 buttons + 4px gap approx
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto 50px",  // horizontally centered + bottom margin
          gap: 16,
        }}
      >
        {["fresher", "experienced"].map((type, idx) => {
          const isActive = candidateType === type;
          return (
            <button
              key={type}
              onClick={() => {
                setCandidateType(type);
                setSelectedStep(1);
              }}
              style={{
                backgroundColor: "white",
                color: isActive ? "#2563eb" : "#3b82f6",
                fontWeight: 600,
                width: 150,
                cursor: "pointer",
                textTransform: "capitalize",
                border: "none",
                outline: "none",
                padding: "10px 28px",
                position: "relative",
                fontSize: 16,
                userSelect: "none",
                zIndex: 1,
              }}
            >
              {type}
            </button>
          );
        })}

        {/* Sliding underline */}
        <div
          style={{
            position: "absolute",
            bottom: -5,
            left: candidateType === "fresher" ? 0 : 159,  // 150 + 4px gap
            width: 145,
            height: 3,
            backgroundColor: "#2563eb",
            transition: "left 0.3s ease",
            borderRadius: 2,
            zIndex: 0,
          }}
        />
      </div>



      {/* Steps Row with connecting line */}
      <div style={{ position: "relative", display: "flex", justifyContent: "space-between", marginBottom: 40, padding: "0 10px" }}>
        {/* Horizontal line connecting boxes */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "calc(10% + 40px)",
            right: "calc(10% + 40px)",
            height: 3,
            backgroundColor: "#cbd5e1",
            transform: "translateY(-50%)",
            zIndex: 0,
          }}
        />

        {/* Step boxes */}
        {steps.map((step, idx) => {
          const isSelected = step.id === selectedStep;
          return (
            <div
              key={step.id}
              onClick={() => setSelectedStep(step.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" ? setSelectedStep(step.id) : null)}
              aria-selected={isSelected}
              style={{
                position: "relative",
                backgroundColor: isSelected ? "#2563eb" : "#e0e7ff",
                color: isSelected ? "white" : "#3b82f6",
                padding: "14px 20px",
                borderRadius: 8,
                fontWeight: 600,
                cursor: "pointer",
                userSelect: "none",
                textAlign: "center",
                minWidth: 130,
                zIndex: 1,
                boxShadow: isSelected ? "0 0 8px rgba(37, 99, 235, 0.6)" : "none",
                transition: "background-color 0.3s, color 0.3s, box-shadow 0.3s",
              }}
            >
              {step.name}
            </div>
          );
        })}
      </div>

      {/* Description container */}
      <div
        style={{
          backgroundColor: "#e0e7ff",
          padding: 24,
          borderRadius: 8,
          boxShadow: "0 0 10px rgba(37, 99, 235, 0.15)",
          fontSize: 16,
          color: "#1e293b",
          minHeight: 90,
          lineHeight: 1.5,
          textAlign: "center",
          maxWidth: 700,
          margin: "0 auto",
        }}
        aria-live="polite"
        aria-atomic="true"
      >
        {currentStep?.desc}
      </div>
    </div>
  );
}












// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import ToggleButton from "@mui/material/ToggleButton";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import Fade from "@mui/material/Fade";
// import TimelineDot from "@mui/lab/TimelineDot";
// import TimelineConnector from "@mui/lab/TimelineConnector";

// const stepsData = {
//   fresher: [
//     { title: "Apply Online", detail: "Upload your resume and apply for your desired fresher/internship role." },
//     { title: "Aptitude/Coding Test", detail: "Showcase your problem-solving abilities in a short assessment." },
//     { title: "Group Activity", detail: "Demonstrate communication and team skills in collaborative rounds." },
//     { title: "Technical Interview", detail: "Dive deep into core concepts and discuss your projects." },
//     { title: "HR & Final Offer", detail: "Meet HR for final queries and receive your offer letter." },
//   ],
//   experienced: [
//     { title: "Submit Profile", detail: "Share your updated CV and experience highlights online." },
//     { title: "Recruiter Call", detail: "Discuss interests and expectations with our recruiter." },
//     { title: "Skill & System Interview", detail: "Tackle technical scenarios and discuss real-life solutions." },
//     { title: "Managerial/Leadership Round", detail: "Meet leadership, discuss fit and team synergy." },
//     { title: "HR & Offer Discussion", detail: "Clarify roles, rewards, and growth – then get your offer." },
//   ],
// };

// const vibrantColors = [
//   "#5996ff", "#ef61a7", "#42ddab", "#ffc46b", "#a279ee"
// ];

// export default function ModernHiringProcess() {
//   const [mode, setMode] = useState("fresher");
//   const [active, setActive] = useState(0);

//   const steps = stepsData[mode];

//   return (
//     <Box
//       sx={{
//         py: { xs: 7, sm: 2 },
//         px: { xs: 2, md: 5 },
//         my: 20,
//         maxWidth: 820,
//         mx: "auto",
//         background: "var(--color-background)",
//         fontFamily: 'var(--font-family-base)',
//         border:1,
//         // boxShadow: "0 14px 48px -15px #40576b18",
//         // borderRadius: 2,
//       }}
//     >
//       {/* <Typography
//         variant="h3"
//         fontWeight="900"
//         fontSize='var(--font-size-heading1)'
//         textAlign="center"
//         sx={{ letterSpacing: "-0.035em", color: "primary.main", mb: 2 }}
//       >
//         Our Hiring Process
//       </Typography> */}
//       <div className="text-center py-10">
//         <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Our Hiring Process</h2>
//         <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
//       </div>

//       <Typography
//         sx={{
//           color: "text.secondary",
//           textAlign: "center",
//           fontSize:'var(--font-size-subheading)',
//           mb: 4
//         }}
//       >
//         Transparent, friendly and interactive journeys: explore steps for <b>Freshers / Interns</b> and <b>Experienced Talent</b>.
//       </Typography>

//       <Box sx={{ display: "flex", justifyContent: "center", mb: 4 }}>
//         <ToggleButtonGroup
//           exclusive
//           color="primary"
//           size="large"
//           value={mode}
//           onChange={(_, v) => v && (setMode(v), setActive(0))}
//         >
//           <ToggleButton
//             value="fresher"
//             sx={{
//               px: 3, fontWeight: 600,
//               fontSize: 'var(--font-size-description)',
//               textTransform: "none"
//             }}
//           >
//             Freshers / Interns
//           </ToggleButton>
//           <ToggleButton
//             value="experienced"
//             sx={{
//               px: 3, fontWeight: 600,
//               fontSize: 'var(--font-size-description)',
//               textTransform: "none"
//             }}
//           >
//             Experienced
//           </ToggleButton>
//         </ToggleButtonGroup>
//       </Box>

//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           position: "relative",
//           pt: 2,
//           pb: { xs: 3, md: 5 },
//         }}
//       >

//         {steps.map((step, idx) => (
//           <Box
//             key={idx}
//             sx={{
//               width: "90%",
//               maxWidth: 480,
//               position: "relative",
//               mb: idx === steps.length - 1 ? 0 : 4,
//               display: "flex",
//               alignItems: "flex-start",
//               cursor: "pointer",
//               transition: "transform .19s cubic-bezier(.31,1.3,0.5,1), box-shadow .17s",
//               transform: active === idx ? "scale(1.032)" : "scale(1)",
//               zIndex: active === idx ? 20 : 5,
//               "&:hover": { transform: "scale(1.02)" }
//             }}
//             onClick={() => setActive(idx)}
//             onMouseEnter={() => setActive(idx)}
//             tabIndex={0}
//             aria-label={step.title}
//           >
//             {/* Timeline dot and indicator */}
//             <Box sx={{ minWidth: 40, display: "flex", flexDirection: "column", alignItems: "center", zIndex: 20 }}>
//               <TimelineDot
//                 sx={{
//                   bgcolor: vibrantColors[idx] + (!active || active === idx ? "E6" : "55"),
//                   boxShadow: `0 0 0 4px ${active === idx ? vibrantColors[idx] + "66" : "#fff"}`
//                 }}
//               />
//               {idx !== steps.length - 1 && (
//                 <TimelineConnector sx={{
//                   flex: 1, bgcolor: "#b5c7e8", width: 4, borderRadius: 2
//                 }} />
//               )}
//             </Box>
//             {/* Glassy Step Card */}
//             <Box
//               sx={{
//                 ml: { xs: 1, sm: 3 },
//                 p: 2.7,
//                 pr: 3.9,
//                 flex: 1,
//                 background: active === idx
//                   ? `linear-gradient(95deg, ${vibrantColors[idx]}18 28%, #fffB 100%)`
//                   : "rgba(255,255,255,0.74)",
//                 backdropFilter: "blur(9px)",
//                 borderRadius: 4,
//                 border: `2.6px solid ${active === idx ? vibrantColors[idx] : "#e6ebfb"}`,
//                 boxShadow:
//                   active === idx
//                     ? `0 4px 36px 0 ${vibrantColors[idx]}33`
//                     : "0 3px 15px #dde6fa55",
//                 position: "relative",
//                 mb: 1,
//                 display: "flex",
//                 flexDirection: "column",
//                 transition: "border .18s, background .2s, box-shadow .22s"
//               }}
//             >
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   color: active === idx ? vibrantColors[idx] : "primary.dark",
//                   fontWeight: 700,
//                   letterSpacing: "-.018em",
//                   fontSize: 'var(--font-size-subheading)',
//                 }}
//               >
//                 {step.title}
//               </Typography>
//               <Fade in={active === idx}>
//                 <Box
//                   sx={{
//                     mt: 1,
//                     p: 1.7,
//                     background: `linear-gradient(98deg,${vibrantColors[idx]}22 50%,#fcfcff 100%)`,
//                     borderRadius: 2.5,
//                     boxShadow: "0 2px 14px #b1d8ffa6",
//                     color: "#26324D",
//                     fontSize: 'var(--font-size-description)',
//                     fontWeight: 430,
//                     minHeight: 50,
//                     display: active === idx ? undefined : "none"
//                   }}
//                 >
//                   {step.detail}
//                 </Box>
//               </Fade>
//             </Box>
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   );
// }





























// this is a z Pattern


// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
// import ToggleButton from "@mui/material/ToggleButton";
// import Typography from "@mui/material/Typography";
// import { Fade } from "@mui/material";

// const stepsData = {
//   fresher: [
//     {
//       title: "Step 1: Application",
//       detail: "Submit your resume and fill in the online application form for fresher/intern positions.",
//     },
//     {
//       title: "Step 2: Aptitude Test",
//       detail: "Take an objective or coding test assessing logical and technical abilities.",
//     },
//     {
//       title: "Step 3: Group Discussion",
//       detail: "Engage in collaborative exercises that test communication and teamwork.",
//     },
//     {
//       title: "Step 4: Technical Interview",
//       detail: "Participate in a deep-dive interview on your fundamentals and project skills.",
//     },
//     {
//       title: "Step 5: HR / Offer",
//       detail: "Meet the HR team for final discussions and receive your offer letter.",
//     },
//   ],
//   experienced: [
//     {
//       title: "Step 1: Online Application",
//       detail: "Submit your updated CV and specify your experience and tech stack.",
//     },
//     {
//       title: "Step 2: Intro Call",
//       detail: "Discuss your background and interests in a brief recruiter call.",
//     },
//     {
//       title: "Step 3: Technical Rounds",
//       detail: "Solve real problems and discuss system design or past experience in depth.",
//     },
//     {
//       title: "Step 4: Managerial Round",
//       detail: "Interact with leadership about culture fit, decision making & vision.",
//     },
//     {
//       title: "Step 5: HR / Final Offer",
//       detail: "Negotiate compensation, confirm details, and receive your official offer.",
//     },
//   ],
// };

// const accentColors = ["#4f8cff", "#ae6fd6", "#36cfc9", "#ffc94f", "#ff7a85"];

// export default function HiringProcessSection() {
//   const [mode, setMode] = useState("fresher");
//   const [activeStep, setActiveStep] = useState(0);

//   const steps = stepsData[mode];

//   // Z-shape/diagonal positioning
//   const positions = [
//     { alignSelf: "flex-start", mt: 0 },
//     { alignSelf: "center", mt: 5 },
//     { alignSelf: "flex-end", mt: 0 },
//     { alignSelf: "center", mt: 5 },
//     { alignSelf: "flex-start", mt: 0 },
//   ];

//   return (
//     <Box
//       sx={{
//         maxWidth: 900,
//         mx: "auto",
//         py: 10,
//         px: 3,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         background:
//           "linear-gradient(135deg, #f5f9ff 70%, #e7d8ff 100%)",
//         borderRadius: 8,
//         boxShadow: "0 10px 40px 0 #1630591a",
//         mb: 7,
//       }}
//     >
//       <Typography
//         variant="h3"
//         fontWeight="900"
//         textAlign="center"
//         color="primary.main"
//         sx={{ mb: 1, letterSpacing: "-0.04em", fontSize: { xs: "1.9rem", md: "2.6rem" } }}
//       >
//         The Hiring Process
//       </Typography>
//       <Typography
//         variant="h6"
//         color="text.secondary"
//         textAlign="center"
//         mb={3}
//         sx={{ fontSize: { xs: "1rem", sm: "1.13rem" } }}
//       >
//         Discover your tailored journey: select your profile to see each step.
//       </Typography>

//       {/* Toggle */}
//       <ToggleButtonGroup
//         color="primary"
//         value={mode}
//         exclusive
//         onChange={(_, val) => val && (setMode(val), setActiveStep(0))}
//         sx={{
//           mb: 5,
//           background: "rgba(255,255,255,0.56)",
//           borderRadius: 5,
//           px: 2,
//           boxShadow: "0 3px 18px #0001",
//         }}
//       >
//         <ToggleButton
//           value="fresher"
//           sx={{
//             px: 3,
//             fontWeight: 600,
//             letterSpacing: "0.03em",
//             fontSize: "1.05rem",
//           }}
//         >
//           For Freshers/Interns
//         </ToggleButton>
//         <ToggleButton
//           value="experienced"
//           sx={{
//             px: 3,
//             fontWeight: 600,
//             letterSpacing: "0.03em",
//             fontSize: "1.05rem",
//           }}
//         >
//           For Experienced
//         </ToggleButton>
//       </ToggleButtonGroup>

//       {/* Steps diagonal timeline */}
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: 700,
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "stretch",
//           gap: 0,
//           minHeight: 430,
//           pb: 2,
//         }}
//       >
//         {steps.map((step, idx) => (
//           <Box
//             key={idx}
//             sx={{
//               ...positions[idx],
//               transition: "box-shadow 0.23s,background 0.28s, transform 0.23s",
//               mb: idx !== steps.length - 1 ? 3 : 0,
//               cursor: "pointer",
//               borderRadius: 4,
//               boxShadow:
//                 activeStep === idx
//                   ? `0 4px 32px 0 ${accentColors[idx]}55`
//                   : idx % 2
//                   ? `0 1px 12px 0 #2221`
//                   : `0 2px 22px 0 #2221`,
//               background:
//                 activeStep === idx
//                   ? `linear-gradient(100deg, ${accentColors[idx]}11 55%, #fff8)`
//                   : "rgba(255,255,255,0.56)",
//               border: activeStep === idx ? `2.5px solid ${accentColors[idx]}` : "2px solid #dce4ef",
//               px: 4,
//               py: 2.5,
//               minWidth: { xs: 220, sm: 300 },
//               position: "relative",
//               zIndex: activeStep === idx ? 5 : 1,
//               transform: activeStep === idx ? "scale(1.066)" : "scale(1)",
//               "&:hover": {
//                 boxShadow: `0 0px 28px 0 ${accentColors[idx]}66`,
//                 borderColor: accentColors[idx],
//                 background: `linear-gradient(100deg, ${accentColors[idx]}24 40%, #fff8)`,
//                 transform: "scale(1.030)",
//               },
//             }}
//             tabIndex={0}
//             onClick={() => setActiveStep(idx)}
//             onMouseEnter={() => setActiveStep(idx)}
//             aria-label={step.title}
//           >
//             <Typography
//               variant="h6"
//               fontWeight="700"
//               color={activeStep === idx ? accentColors[idx] : "primary.dark"}
//               sx={{
//                 fontSize: "1.14rem",
//                 mb: 0.2,
//                 letterSpacing: "-.01em",
//                 textShadow: activeStep === idx ? `0 4px 10px ${accentColors[idx]}17` : "none",
//                 userSelect: "none",
//               }}
//             >
//               {step.title}
//             </Typography>
//             <Typography
//               variant="body2"
//               color={activeStep === idx ? "text.primary" : "text.secondary"}
//               sx={{
//                 fontSize: "0.99rem",
//                 opacity: activeStep === idx ? 1 : 0.83,
//                 fontWeight: 400,
//                 whiteSpace: "pre-line",
//                 userSelect: "none",
//               }}
//             >
//               {activeStep === idx ? step.detail : ""}
//             </Typography>
//             {activeStep !== idx && (
//               <Box
//                 sx={{
//                   position: "absolute",
//                   right: 18,
//                   top: 22,
//                   width: 12,
//                   height: 12,
//                   borderRadius: "50%",
//                   background: accentColors[idx],
//                   opacity: 0.28,
//                   boxShadow: `0 0 10px 2px ${accentColors[idx]}43`,
//                 }}
//               />
//             )}
//           </Box>
//         ))}
//       </Box>

//       {/* Info box for selected step (for accessibility/on mobile/tactile users) */}
//       <Fade in={!!steps[activeStep]}>
//         <Box
//           sx={{
//             mt: 5,
//             width: "100%",
//             maxWidth: 650,
//             minHeight: 80,
//             px: { xs: 1, sm: 4 },
//             py: { xs: 2, sm: 3.5 },
//             borderRadius: 5,
//             background:
//               "linear-gradient(95deg, rgba(255,255,255,0.88) 55%, #cbccfa1a 100%)",
//             backdropFilter: "blur(7px)",
//             boxShadow: "0 4px 55px 0 #45527c12, 0 1.5px 10px 0 #5c6bc01a",
//             border: `2px solid ${accentColors[activeStep]}`,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             zIndex: 10,
//           }}
//         >
//           <Typography
//             variant="subtitle2"
//             sx={{ color: accentColors[activeStep], fontWeight: 600, mb: 1, fontSize: "1.11rem" }}
//             textAlign="center"
//           >
//             {steps[activeStep].title}
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ color: "#3E4758", fontWeight: 400, fontSize: "1.0rem" }}
//             textAlign="center"
//           >
//             {steps[activeStep].detail}
//           </Typography>
//         </Box>
//       </Fade>
//     </Box>
//   );
// }
