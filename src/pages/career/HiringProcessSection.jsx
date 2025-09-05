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
          alignContent: 'center',
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
