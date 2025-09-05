import React, { useState, useEffect, useRef } from "react";
import { TextField, Button, Slide, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { BiSupport } from "react-icons/bi";


export default function SupportButton() {
  const theme = useTheme();
  const [showButton, setShowButton] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

  const formRef = useRef(null);

  // Show button only on scroll down
  useEffect(() => {
    function handleScroll() {
        setShowButton(window.scrollY > 10);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [formOpen, expanded]);

  // Close form when click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setFormOpen(false);
        setExpanded(false);
      }
    }
    if (formOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [formOpen]);

  if (!showButton && !formOpen) return null;

  return (
    <>
      {/* Button with slide up animation */}
      {!formOpen && (
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div
            onMouseEnter={() => setExpanded(true)}
            onMouseLeave={() => setExpanded(false)}
            onClick={() => setFormOpen(true)}
            className={`
              fixed left-0 bottom-10 z-50 flex items-center cursor-pointer 
              bg-blue-600 text-white rounded-r-full shadow-lg
              transition-all duration-1000 ease-in-out overflow-hidden
              ${expanded ? "w-40 h-12 px-4 py-2" : "w-12 h-12 justify-center"}
              select-none
            `}
            style={{ userSelect: "none" }}
          >
            <span
              className={`transition-transform duration-300 ease-in-out ${
                expanded ? "hidden transition-all duration-700" : ""
              }`}
              style={{ fontSize: "1.5rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              <BiSupport />
            </span>
            {expanded && <span className="whitespace-nowrap font-semibold text-sm transition-all duration-1000">Support </span>}
          </div>
        </Slide>
      )}

      {/* Sliding form */}
      <Slide direction="right" in={formOpen} mountOnEnter unmountOnExit>
        <Box
          ref={formRef}
          className="fixed left-0 bottom-10 z-1050 bg-white shadow-xl rounded-r-lg p-6 w-96"
          sx={{
            borderColor: theme.palette.primary.main,
            borderWidth: 2,
            borderStyle: "solid",
          }}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
              setFormOpen(false);
              setExpanded(false);
            }}
          >
            <h2 className="text-lg font-semibold mb-4 text-blue-700">Contact to Support Team</h2>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              size="small"
              margin="dense"
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              variant="outlined"
              size="small"
              margin="dense"
              required
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={3}
              variant="outlined"
              size="small"
              margin="dense"
              required
            />
            <div className="mt-4 flex justify-end">
              <Button type="submit" variant="contained" color="primary" size="small">
                Send
              </Button>
            </div>
          </form>
        </Box>
      </Slide>
    </>
  );
}
