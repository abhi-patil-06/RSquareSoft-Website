import React, { useEffect } from "react";

export default function ZohoRecruitWidget() {
  useEffect(() => {
    const initZohoWidget = () => {
      if (window.rec_embed_js) {
        const container = document.getElementById("rec_job_listing_div");
        if (!container) return;

        // Prevent duplicates by clearing previous content
        container.innerHTML = "";

        // Use a per-container flag
        if (!container.dataset.zohoInitialized) {
          window.rec_embed_js.load({
            widget_id: "rec_job_listing_div",
            page_name: "Careers",
            source: "CareerSite",
            site: "https://rsquaresoft.zohorecruit.in",
            brand_color: "#6875E2",
            empty_job_msg: "No current Openings",
          });

          container.dataset.zohoInitialized = "true"; // mark as initialized
        }
      }
    };

    // If script already loaded
    if (window.rec_embed_js) {
      initZohoWidget();
    } else {
      // Wait for script to load
      const script = document.getElementById("zoho-embed-js");
      if (script) {
        script.onload = initZohoWidget;
      }
    }

    // Cleanup: optional, just clears HTML
    return () => {
      const container = document.getElementById("rec_job_listing_div");
      if (container) container.innerHTML = "";
    };
  }, []); // run on mount

  return (
    <div className="embed_jobs_head embed_jobs_with_style_3 py-20 my-20">
      <h1 className="text-3xl font-bold text-center pb-10">Job Openings</h1>
      <div className="embed_jobs_head2">
        <div className="embed_jobs_head3">
          <div id="rec_job_listing_div"></div>
        </div>
      </div>
    </div>
  );
}











// import React, { useEffect } from "react";

// export default function ZohoRecruitWidget() {
//   useEffect(() => {
//     // Global guard to prevent multiple loads
//     if (window.__zohoWidgetInitialized) {
//       // Clear existing and re-render fresh
//       const container = document.getElementById("rec_job_listing_div");
//       if (container) container.innerHTML = "";
//       window.rec_embed_js?.load({
//         widget_id: "rec_job_listing_div",
//         page_name: "Careers",
//         source: "CareerSite",
//         site: "https://rsquaresoft.zohorecruit.in",
//         brand_color: "#6875E2",
//         empty_job_msg: "No current Openings",
//       });
//       return;
//     }

//     const initZohoWidget = () => {
//       if (window.rec_embed_js) {
//         const container = document.getElementById("rec_job_listing_div");
//         if (container) container.innerHTML = "";

//         window.rec_embed_js.load({
//           widget_id: "rec_job_listing_div",
//           page_name: "Careers",
//           source: "CareerSite",
//           site: "https://rsquaresoft.zohorecruit.in",
//           brand_color: "#6875E2",
//           empty_job_msg: "No current Openings",
//         });

//         // mark as initialized
//         window.__zohoWidgetInitialized = true;
//       }
//     };

//     // ✅ Ensure Zoho CSS is loaded
//     if (!document.getElementById("zoho-embed-css")) {
//       const cssLink = document.createElement("link");
//       cssLink.id = "zoho-embed-css";
//       cssLink.rel = "stylesheet";
//       cssLink.href =
//         "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
//       cssLink.type = "text/css";
//       document.head.appendChild(cssLink);
//     }

//     // ✅ Ensure Zoho JS is loaded
//     if (!document.getElementById("zoho-embed-js")) {
//       const script = document.createElement("script");
//       script.id = "zoho-embed-js";
//       script.type = "text/javascript";
//       script.src =
//         "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";

//       script.onload = initZohoWidget;
//       document.body.appendChild(script);
//     } else {
//       initZohoWidget();
//     }

//     // cleanup just clears container, but doesn’t unset global
//     return () => {
//       const container = document.getElementById("rec_job_listing_div");
//       if (container) container.innerHTML = "";
//     };
//   }, []);

//   return (
//     <div className="embed_jobs_head embed_jobs_with_style_3 py-20">
//       <div className="embed_jobs_head2">
//         <div className="embed_jobs_head3">
//           <div id="rec_job_listing_div"></div>
//         </div>
//       </div>
//     </div>
//   );
// }









// import React, { useEffect } from 'react';

// export default function ZohoRecruitWidget() {
//   // useEffect(() => {
//   //   // Load Zoho CSS only once
//   //   if (!document.getElementById('zoho-embed-css')) {
//   //     const cssLink = document.createElement('link');
//   //     cssLink.id = 'zoho-embed-css';
//   //     cssLink.rel = 'stylesheet';
//   //     cssLink.href = 'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css';
//   //     cssLink.type = 'text/css';
//   //     document.head.appendChild(cssLink);
//   //   }

//   //   // Load Zoho JS only once and initialize
//   //   if (!document.getElementById('zoho-embed-js')) {
//   //     const script = document.createElement('script');
//   //     script.id = 'zoho-embed-js';
//   //     script.type = 'text/javascript';
//   //     script.src = 'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';

//   //     script.onload = () => {
//   //       if (window.rec_embed_js) {
//   //         window.rec_embed_js.load({
//   //           widget_id: "rec_job_listing_div",
//   //           page_name: "Careers",
//   //           source: "CareerSite",
//   //           site: "https://rsquaresoft.zohorecruit.in",  // Your Zoho Recruit site URL
//   //           brand_color: "#6875E2",
//   //           empty_job_msg: "No current Openings"
//   //         });
//   //       }
//   //     };

//   //     document.body.appendChild(script);
//   //   } else {
//   //     // If script already loaded, just initialize again (if needed)
//   //     if (window.rec_embed_js) {
//   //       window.rec_embed_js.load({
//   //         widget_id: "rec_job_listing_div",
//   //         page_name: "Careers",
//   //         source: "CareerSite",
//   //         site: "https://rsquaresoft.zohorecruit.in",
//   //         brand_color: "#6875E2",
//   //         empty_job_msg: "No current Openings"
//   //       });
//   //     }
//   //   }
//   // }, []);
//   useEffect(() => {
//   const initZohoWidget = () => {
//     if (window.rec_embed_js) {
//       // clear old widget contents before reloading
//       const container = document.getElementById("rec_job_listing_div");
//       if (container) container.innerHTML = "";

//       window.rec_embed_js.load({
//         widget_id: "rec_job_listing_div",
//         page_name: "Careers",
//         source: "CareerSite",
//         site: "https://rsquaresoft.zohorecruit.in",
//         brand_color: "#6875E2",
//         empty_job_msg: "No current Openings",
//       });
//     }
//   };

//   // ✅ Ensure Zoho CSS is loaded
//   if (!document.getElementById("zoho-embed-css")) {
//     const cssLink = document.createElement("link");
//     cssLink.id = "zoho-embed-css";
//     cssLink.rel = "stylesheet";
//     cssLink.href =
//       "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
//     cssLink.type = "text/css";
//     document.head.appendChild(cssLink);
//   }

//   // ✅ Ensure Zoho JS is loaded
//   if (!document.getElementById("zoho-embed-js")) {
//     const script = document.createElement("script");
//     script.id = "zoho-embed-js";
//     script.type = "text/javascript";
//     script.src =
//       "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";

//     script.onload = initZohoWidget;
//     document.body.appendChild(script);
//   } else {
//     initZohoWidget();
//   }

//   // cleanup
//   return () => {
//     const container = document.getElementById("rec_job_listing_div");
//     if (container) container.innerHTML = "";
//   };
// }, []);


//   return (
//     <div className="embed_jobs_head embed_jobs_with_style_3 py-20">
//       <div className="embed_jobs_head2">
//         <div className="embed_jobs_head3">
//           <div id="rec_job_listing_div"></div>
//         </div>
//       </div>
//     </div>
//   );
// }













// import React, { useEffect } from 'react';

// export default function JobOpenings() {
//   useEffect(() => {
//     // Load Zoho CSS
//     const cssLink = document.createElement('link');
//     cssLink.rel = 'stylesheet';
//     cssLink.href = 'https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css';
//     cssLink.type = 'text/css';
//     document.head.appendChild(cssLink);

//     // Load Zoho JS
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = 'https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js';

//     script.onload = () => {
//       // Initialize Zoho embed widget after script loads
//       if (window.rec_embed_js) {
//         window.rec_embed_js.load({
//           widget_id: "rec_job_listing_div",
//           page_name: "Careers",
//           source: "CareerSite",
//           site: "https://rsquaresoft.zohorecruit.in",  // Your Zoho Recruit site URL
//           brand_color: "#6875E2",
//           empty_job_msg: "No current Openings"
//         });
//       }
//     };

//     document.body.appendChild(script);

//     // Cleanup on unmount
//     return () => {
//       document.head.removeChild(cssLink);
//       document.body.removeChild(script);
//       // Also clear the widget div content if needed
//       const widgetDiv = document.getElementById('rec_job_listing_div');
//       if (widgetDiv) widgetDiv.innerHTML = '';
//     };
//   }, []);

//   return (
//     <div className="embed_jobs_head embed_jobs_with_style_3 py-20">
//       <div className="embed_jobs_head2">
//         <div className="embed_jobs_head3">
//           <div id="rec_job_listing_div"></div>
//         </div>
//       </div>
//     </div>
//   );
// }













// import React, { useState } from 'react';
// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import { Typography } from '@mui/material';
// import InputAdornment from '@mui/material/InputAdornment';
// import SearchIcon from '@mui/icons-material/Search';

// // JOB DATA
// const jobs = [
//     {
//         title: "Cloud Solutions Architect",
//         location: "Pune, India (WFO)",
//         desc: "Lead next-generation cloud architecture and drive transformation.",
//         skills: ["AWS", "Azure", "Microservices"],
//         experience: 5,
//         type: "Cloud",
//     },
//     {
//         title: "Machine Learning Engineer",
//         location: "Pune, India (WFO)",
//         desc: "Deploy and scale ML models in analytics platforms.",
//         skills: ["Python", "TensorFlow", "Deep Learning"],
//         experience: 3,
//         type: "ML",
//     },
//     {
//         title: "Data Analytics Specialist",
//         location: "Pune, India (WFO)",
//         desc: "Transform data insights into business outcomes.",
//         skills: ["SQL", "Tableau", "Big Data"],
//         experience: 2,
//         type: "Analytics",
//     },
//     {
//         title: "Front End Developer",
//         location: "Pune, India (WFO)",
//         desc: "Craft responsive, user-centric web applications.",
//         skills: ["React", "UI/UX", "TypeScript"],
//         experience: 4,
//         type: "Frontend",
//     },
//     {
//         title: "AI Product Manager",
//         location: "Pune, India (WFO)",
//         desc: "Drive product strategy for industry-leading AI solutions.",
//         skills: ["Product Management", "AI/ML", "Agile"],
//         experience: 5,
//         type: "Management",
//     },
//     {
//         title: "DevOps Engineer",
//         location: "Pune, India (WFO)",
//         desc: "Automate CI/CD and optimize cloud infrastructure.",
//         skills: ["AWS", "Docker", "Kubernetes"],
//         experience: 3,
//         type: "Cloud",
//     },
//     {
//         title: "UX Designer",
//         location: "Pune, India (WFO)",
//         desc: "Design next-gen, user-friendly digital products.",
//         skills: ["Figma", "Sketch", "User Research"],
//         experience: 2,
//         type: "Design",
//     },
//     {
//         title: "Backend Developer",
//         location: "Pune, India (WFO)",
//         desc: "Build robust APIs and scalable backend systems.",
//         skills: ["Node.js", "Express", "MongoDB"],
//         experience: 4,
//         type: "Backend",
//     },
// ];

// export default function CareersJobBoard() {
//     const [roleFilter, setRoleFilter] = useState("");
//     const [minExp, setMinExp] = useState("");
//     const [maxExp, setMaxExp] = useState("");
//     const [showMore, setShowMore] = useState(false);
//     const [search, setSearch] = useState("");


//     // Filter logic
//     const filteredJobs = jobs.filter((job) => {
//         const titleMatch = roleFilter
//             ? job.title.toLowerCase().includes(roleFilter.toLowerCase()) ||
//             job.type.toLowerCase().includes(roleFilter.toLowerCase())
//             : true;
//         const minExpMatch = minExp !== "" ? job.experience >= Number(minExp) : true;
//         const maxExpMatch = maxExp !== "" ? job.experience <= Number(maxExp) : true;
//         const isNumericSearch = /^\d+$/.test(search.trim());
//         const matchSearch = search
//             ? (
//                 job.title.toLowerCase().includes(search.toLowerCase()) ||
//                 job.desc.toLowerCase().includes(search.toLowerCase()) ||
//                 job.location.toLowerCase().includes(search.toLowerCase()) ||
//                 job.type.toLowerCase().includes(search.toLowerCase()) ||
//                 job.skills.some(s => s.toLowerCase().includes(search.toLowerCase())) ||
//                 (isNumericSearch && job.experience.toString().includes(search))
//             )
//             : true;
//         return titleMatch && minExpMatch && maxExpMatch && matchSearch;
//     });

//     // Up to 5 for initial view, rest scrollable after clicking show more
//     const visibleJobs = showMore ? filteredJobs : filteredJobs.slice(0, 5);

//     return (
//         <div className='bg-background font-family-base'>
//             <div className="text-center pb-5 pt-25">
//                 <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Job Openings</h2>
//                 <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
//             </div>
//             <Box
//                 sx={{
//                     display: 'flex',
//                     flexDirection: { xs: 'column', md: 'row' },
//                     gap: 4,
//                     maxWidth: 1024,
//                     height: '1170px',
//                     mx: 'auto',
//                     py: 8,
//                     px: 3,
//                 }}
//             >

//                 {/* FILTER SIDEBAR */}
//                 <Box
//                     sx={{
//                         width: 260,
//                         // bgcolor: '#FAFAFB',
//                         // border:1,
//                         borderRadius: 3,
//                         p: 3,
//                         // boxShadow: 3,
//                         minHeight: 440,
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: 2,
//                         flexShrink: 0
//                     }}
//                 >
//                     <Box
//                         sx={{
//                             fontWeight: 500,
//                             fontSize: "var(--font-size-heading)",
//                             color: 'primary.main',
//                             letterSpacing: '-0.02em',
//                             mb: 2,
//                             textAlign: 'left',
//                         }}
//                     >
//                         Job Filters
//                     </Box>
//                     <TextField
//                         label="Post title/role"
//                         size="small"
//                         value={roleFilter}
//                         variant="outlined"
//                         onChange={(e) => { setRoleFilter(e.target.value); setShowMore(false); }}
//                         sx={{ mb: 1 }}
//                         placeholder="e.g., ML, Backend…"
//                     />
//                     <Box sx={{ display: 'flex', gap: 1.5, mb: 1 }}>
//                         <TextField
//                             label="Min Exp"
//                             value={minExp}
//                             size="small"
//                             type="number"
//                             inputProps={{ min: 0, style: { width: 60 } }}
//                             onChange={e => {
//                                 let v = e.target.value.replace(/\D/, '');
//                                 setMinExp(v);
//                                 setShowMore(false);
//                             }}
//                         />
//                         <TextField
//                             label="Max Exp"
//                             value={maxExp}
//                             size="small"
//                             type="number"
//                             inputProps={{ min: 0, style: { width: 60 } }}
//                             onChange={e => {
//                                 let v = e.target.value.replace(/\D/, '');
//                                 setMaxExp(v);
//                                 setShowMore(false);
//                             }}
//                         />
//                     </Box>
//                     {(roleFilter || minExp || maxExp) && (
//                         <Button
//                             color="inherit"
//                             variant="text"
//                             fullWidth
//                             sx={{
//                                 fontWeight: 500,
//                                 mt: 1,
//                                 color: 'primary.main',
//                                 '&:hover': {
//                                     bgcolor: '#EFF6FB'
//                                 }
//                             }}
//                             onClick={() => {
//                                 setRoleFilter("");
//                                 setMinExp("");
//                                 setMaxExp("");
//                                 setShowMore(false);
//                             }}
//                         >
//                             Reset Filters
//                         </Button>
//                     )}
//                 </Box>



//                 {/* JOB LIST AREA */}
//                 <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 3 }}>
//                     {/* <input
//                     value={search}
//                     onChange={e => setSearch(e.target.value)}
//                     placeholder="Search..."
//                 /> */}

//                     {/* Search bar right side  */}
//                     <TextField
//                         fullWidth
//                         variant="outlined"
//                         placeholder="Search jobs, skills, technology, etc…"
//                         value={search}
//                         onChange={e => {
//                             setSearch(e.target.value);
//                             setShowMore(false);
//                         }}
//                         sx={{
//                             mb: 3,
//                             background: '#f5f7fa',
//                             maxHeight: 60,
//                             borderRadius: 2,
//                             '& .MuiOutlinedInput-root': {
//                                 borderRadius: 2,
//                                 fontSize: 18,
//                             },
//                         }}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <SearchIcon color="primary" />
//                                 </InputAdornment>
//                             ),
//                         }}
//                     />
//                     <Box sx={{ color: 'primary.main', fontWeight: 'bold', fontSize: 18, mb: 0 }}>
//                         {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
//                     </Box>

//                     {/* Top 5 jobs always visible; after read more show all in scroll */}
//                     <Box
//                         sx={{
//                             position: 'relative',
//                             mt: 1,
//                             flexGrow: 1,
//                             transition: 'max-height 0.3s ease',
//                             ...(showMore && filteredJobs.length > 5
//                                 ? {
//                                     maxHeight: 1000,
//                                     overflowY: 'auto',
//                                     // Hide scrollbar for most browsers
//                                     scrollbarWidth: 'none',
//                                     msOverflowStyle: 'none',
//                                     '&::-webkit-scrollbar': { display: 'none' },
//                                 }
//                                 : {}),
//                         }}
//                     >
//                         {filteredJobs.length === 0 ? (
//                             <Box sx={{ color: 'text.disabled', p: 4, textAlign: 'center', border: '1px dashed', borderColor: 'divider', borderRadius: 2, bgcolor: 'background.default' }}>
//                                 No posts found matching your criteria.
//                             </Box>
//                         ) : (
//                             visibleJobs.map((job, idx) => (
//                                 <Box
//                                     key={idx}
//                                     sx={{
//                                         bgcolor: '#FBFCFF',
//                                         p: 2.5,
//                                         borderRadius: 2,
//                                         boxShadow: 1,
//                                         mb: 2,
//                                         border: '1px solid',
//                                         borderColor: 'divider',
//                                         minHeight: 92,
//                                         position: 'relative',
//                                         display: 'flex',
//                                         flexDirection: { xs: 'column', sm: 'row' },
//                                         alignItems: { xs: 'flex-start', sm: 'center' },
//                                         gap: 2,
//                                     }}
//                                 >
//                                     <Box sx={{ flex: 1 }}>
//                                         <Box sx={{ fontWeight: 600, color: 'primary.dark', fontSize: 18, mb: 0.5 }}>
//                                             {job.title}
//                                         </Box>
//                                         <Box sx={{ fontSize: 13, color: 'text.secondary', mb: 0.5 }}>
//                                             {job.location} · {job.experience} years exp
//                                         </Box>
//                                         <Box sx={{ mb: 1, fontSize: 15, color: 'text.primary' }}>
//                                             {job.desc}
//                                         </Box>
//                                         <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
//                                             {job.skills.map((skill, si) => (
//                                                 <Box
//                                                     key={si}
//                                                     sx={{
//                                                         bgcolor: 'primary.light',
//                                                         color: 'white',
//                                                         px: 1.5, py: 0.4,
//                                                         borderRadius: 10, fontSize: 12
//                                                     }}
//                                                 >
//                                                     {skill}
//                                                 </Box>
//                                             ))}
//                                         </Box>
//                                     </Box>
//                                     <Button
//                                         href="#apply"
//                                         variant="contained"
//                                         size="small"
//                                         sx={{
//                                             borderRadius: 99,
//                                             textTransform: 'none',
//                                             fontWeight: 500,
//                                             backgroundColor: "#2B52FE"
//                                         }}
//                                     >
//                                         Apply
//                                     </Button>
//                                 </Box>
//                             ))
//                         )}
//                     </Box>
//                     {filteredJobs.length > 5 && !showMore && (
//                         <Box sx={{ textAlign: 'center', mt: 1 }}>
//                             <Button
//                                 onClick={() => setShowMore(true)}
//                                 sx={{
//                                     px: 4, py: 1,
//                                     borderRadius: 99,
//                                     background: '#2B52FE',
//                                     color: '#fff',
//                                     fontWeight: 500,
//                                     fontSize: 16,
//                                     '&:hover': { background: '#155DDC' }
//                                 }}
//                             >
//                                 Read More
//                             </Button>
//                         </Box>
//                     )}
//                 </Box>
//             </Box>
//         </div>
//     );
// }

