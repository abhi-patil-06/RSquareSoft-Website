// src/pages/Careers.jsx

import React, { useState } from "react";
import { Box, Typography, Button, Card, CardContent, Avatar, Grid, Chip, Stack, TextField, MenuItem, } from "@mui/material";
import { LightbulbOutlined, MemoryOutlined, SchoolOutlined, PublicOutlined, FavoriteBorder, GroupsOutlined } from '@mui/icons-material';
import { FaUsers, FaLaptopCode, FaChartBar, FaHome, FaCoins } from "react-icons/fa";
import { GiBrain, GiSandsOfTime } from "react-icons/gi";
import { MdWork, MdOutlineStar, MdOutlinePaid } from "react-icons/md";
import JobOpenings from "./JobOpenings";
import HiringProcessSection from "./HiringProcessSection";
import ModernHiringProcess from "./HiringProcessSection";
import EmployeeGrowthSection from "./EmployeeGrowthSection";
import EmployeeCarousel from "./EmployeeGrowthSection";
import careerBg from "../../assets/Career-Section.jpg"


export default function Careers() {
  return (
    <>
      <Box
        sx={{
          bgcolor: "var(--color-background)",
          minHeight: "100vh",
          width: "100%",
          // py: { xs: 3, md: 14 }, px: { xs: 2, md: 8 },
          pt: { xs: 13, md: 14 },
          // pb: { xs: 3, md: 5 },
          px: { xs: 2, md: 8 },
          fontFamily: "var(--font-family-base)"
        }}
      >

        {/* HERO */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            minHeight: { xs: 500, md: 620 },
            display: "flex",
            alignItems: "end",
            justifyContent: "center",
            backgroundImage: `url(${careerBg})`,
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
              bgcolor: "rgba(0,0,0,0.3)", // semi-transparent white

              zIndex: 1,
            }}
          />


          {/* Content */}
          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              width: { xs: "90%", md: "80%" },
              textAlign: { xs: "center", md: "left" },
              // mx: "auto",
              py: { xs: 5, md: 20 },
            }}
          >
            {/* Breadcrumb Navigation - fixed top left corner within the div */}
            <nav className="absolute -top-12 md:top-15 text-white font-bold text-lg md:text-2xl uppercase">
              {/* First line: breadcrumb links separated by slash */}
              <div className="flex space-x-3">
                <a>
                  Careers
                </a>
                {/* <span>/</span>
            <span className="text-gray-300">Product Development</span> */}
              </div>
              {/* Second line: horizontal dividing line */}
              <div className="md:mt-5 h-[2px] w-[300px] md:w-4xl rounded-sm bg-gradient-to-r from-background via-gray-300 to-transparent"></div>
            </nav>
            <Typography
              variant="h3"
              fontWeight="bold"
              fontSize='var(--font-size-title)'
              mb={2}
              color="white"
              sx={{ letterSpacing: "-0.02em" }}
            >
              Build The Future With Us
            </Typography>
            <Typography variant="h6" mb={3} color="white" fontSize={'var(--font-size-subheading)'}>
              RSquareSoft Technologies is growing and <b>we want you onboard</b>! Join a diverse, passionate, top tier team that loves building products that make an impact.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => {
                const section = document.getElementById("career");
                if (section) {
                  const navbarOffset = 80; // Set this to your navbar height
                  const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
                  window.scrollTo({
                    top: elementPosition - navbarOffset,
                    behavior: "smooth",
                  });
                }
              }}

              sx={{ boxShadow: 2, borderRadius: "18px", px: 5, py: 1.5, fontSize: "var(--font-size-description)" }}
            >
              Explore More
            </Button>
          </Box>
        </Box>


        <section id="career" className="max-w-8xl mx-auto px-8  mt-10">
          {/* <h2 className="text-4xl font-extrabold text-blue-800 mb-8 tracking-tight">Why RSquareSoft?</h2> */}
          <div className="text-center py-7">
            <h2 className="font-bold text-text-primary" style={{ fontSize: "var(--font-size-heading1)" }}>Why RSquareSoft?</h2>
            <div className="w-30 h-1 bg-primary mx-auto mt-2 rounded"></div>
          </div>
          <p className=" text-text-primary text-center mb-15" style={{ fontSize: "var(--font-size-subheading)" }}>
            At RSquareSoft Technologies, you’ll join a workplace defined by innovation, exciting technology, and a commitment to personal and professional growth. Here, your contributions help shape major advancements in cloud computing, machine learning, data analytics, and AI—while you collaborate globally, pursue continuous learning, and thrive in a supportive environment that values both achievement and balance.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {/* Innovation Culture */}
            <div className="flex items-start gap-5 bg-gradient-to-r from-blue-100 via-blue-50 to-white rounded-lg p-5 border-l-4 border-blue-700  hover:scale-101 transition-transform">
              <div className="bg-blue-700 text-white p-3 rounded-xl shadow">
                <LightbulbOutlined fontSize="large" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-blue-900" style={{ fontSize: "var(--font-size-heading)" }}>Innovation Culture</h3>
                <p className="text-gray-600 text-sm" style={{ fontSize: "var(--font-size-description)" }}>
                  Thrive in a workplace that celebrates fresh thinking, collaboration, and creative problem-solving on every project.
                </p>
              </div>
            </div>
            {/* Cutting-Edge Technologies */}
            <div className="flex items-start gap-5 bg-gradient-to-r from-purple-100 via-purple-50 to-white rounded-lg p-5 border-l-4 border-purple-700  hover:scale-101 transition-transform">
              <div className="bg-purple-700 text-white p-3 rounded-xl shadow">
                <MemoryOutlined fontSize="large" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-purple-900" style={{ fontSize: "var(--font-size-heading)" }}>Cutting-Edge Technologies</h3>
                <p className="text-gray-600 text-sm" style={{ fontSize: "var(--font-size-description)" }}>
                  Work with the latest in Cloud Computing, Data Analytics, Machine Learning, and AI on groundbreaking, impactful products.
                </p>
              </div>
            </div>
            {/* Learning and Development */}
            <div className="flex items-start gap-5 bg-gradient-to-r from-green-100 via-green-50 to-white rounded-lg p-5 border-l-4 border-green-700  hover:scale-101 transition-transform">
              <div className="bg-green-700 text-white p-3 rounded-xl shadow">
                <SchoolOutlined fontSize="large" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-green-900" style={{ fontSize: "var(--font-size-heading)" }}>Learning &amp; Development</h3>
                <p className="text-gray-600 text-sm" style={{ fontSize: "var(--font-size-description)" }}>
                  Accelerate your career with professional certifications, continuous training, and expert mentorship programs.
                </p>
              </div>
            </div>
            {/* Global Collaborations */}
            <div className="flex items-start gap-5 bg-gradient-to-r from-yellow-100 via-yellow-50 to-white rounded-lg p-5 border-l-4 border-yellow-500  hover:scale-101 transition-transform">
              <div className="bg-yellow-500 text-white p-3 rounded-xl shadow">
                <PublicOutlined fontSize="large" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-yellow-900" style={{ fontSize: "var(--font-size-heading)" }}>Global Collaborations</h3>
                <p className="text-gray-600 text-sm" style={{ fontSize: "var(--font-size-description)" }}>
                  Engage with talented colleagues and clients worldwide—expanding your experience and perspective on a global stage.
                </p>
              </div>
            </div>
            {/* Work-Life Balance */}
            <div className="flex items-start gap-5 bg-gradient-to-r from-pink-100 via-pink-50 to-white rounded-lg p-5 border-l-4 border-pink-600  hover:scale-101 transition-transform">
              <div className="bg-pink-600 text-white p-3 rounded-xl shadow">
                <FavoriteBorder fontSize="large" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-pink-900" style={{ fontSize: "var(--font-size-heading)" }}>Work-Life Balance</h3>
                <p className="text-gray-600 text-sm" style={{ fontSize: "var(--font-size-description)" }}>
                  Enjoy flexible arrangements that empower you to achieve professional goals while nurturing your personal well-being.
                </p>
              </div>
            </div>
            {/* Supportive community */}
            <div className="flex items-start gap-5 bg-gradient-to-r from-teal-100 via-teal-50 to-white rounded-lg p-5 border-l-4 border-teal-700  hover:scale-101 transition-transform">
              <div className="bg-teal-700 text-white p-3 rounded-xl shadow">
                <GroupsOutlined fontSize="large" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-teal-900" style={{ fontSize: "var(--font-size-heading)" }}>Supportive Community</h3>
                <p className="text-gray-600 text-sm" style={{ fontSize: "var(--font-size-description)" }}>
                  At RSquareSoft, Collaborate in an environment where every team member’s success is celebrated, and support is ever a conversation away.
                </p>
              </div>
            </div>
          </div>
        </section>

        <Box>
          <JobOpenings />
        </Box>

        <Box className="mt-20">
          <ModernHiringProcess />
        </Box>

        <Box className="mt-20">
          <EmployeeCarousel />
        </Box>

      </Box></>
  );
}
