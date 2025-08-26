import React, { useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
  InputAdornment,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";

// ReCaptcha checkbox styled component
const RobotCheckbox = styled("div")(({ theme, checked }) => ({
  display: "flex",
  alignItems: "center",
  gap: 8,
  cursor: "pointer",
  userSelect: "none",
  fontSize: 14,
  color: checked ? theme.palette.primary.main : theme.palette.text.primary,
  fontWeight: checked ? 600 : 400,
  "& .checkbox-box": {
    width: 20,
    height: 20,
    borderRadius: 4,
    border: `2px solid ${checked ? theme.palette.primary.main : "#cfd8dc"}`,
    backgroundColor: checked ? theme.palette.primary.main : "transparent",
    transition: "all 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      color: "#fff",
      fontSize: 16,
      display: checked ? "block" : "none",
    },
  },
}));

export default function ContactForm({ open, onClose }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [robotChecked, setRobotChecked] = useState(false);

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  // Simple phone input with country code prefix + dropdown omitted for brevity (just fixed prefix + input)
  // You can extend with a country code select if needed

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!robotChecked) {
      alert("Please confirm you are not a robot.");
      return;
    }
    // Submit form logic
    alert(`Message sent!\n\n${JSON.stringify(formData, null, 2)}`);
    onClose();
  };

  const toggleRobotChecked = () => setRobotChecked((v) => !v);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          maxWidth: "md",
          borderRadius: 4,
          backgroundColor: "white",
          p: 3,
          boxShadow:
            "0 12px 28px rgba(0,0,0,0.2), 0 2px 12px rgba(0,0,0,0.1)",
        },
      }}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle sx={{ textAlign: "center", fontWeight: "bold", color: "#1e40af", fontSize: 24 }}>
        Contact Our Experts
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            color: (theme) => theme.palette.grey[600],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={3}>
            {/* First Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="First Name"
                name="firstName"
                variant="outlined"
                size="medium"
                fullWidth
                required
                value={formData.firstName}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontWeight: 600, color: "#64748b" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* Last Name */}
            <Grid item xs={12} sm={6}>
              <TextField
                label="Last Name"
                name="lastName"
                variant="outlined"
                size="medium"
                fullWidth
                required
                value={formData.lastName}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontWeight: 600, color: "#64748b" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* Email */}
            <Grid item xs={12}>
              <TextField
                label="Email Address"
                name="email"
                variant="outlined"
                size="medium"
                fullWidth
                required
                type="email"
                value={formData.email}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontWeight: 600, color: "#64748b" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* Phone with Country Code Prefix */}
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                name="phone"
                variant="outlined"
                size="medium"
                fullWidth
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontWeight: 600, color: "#64748b" } }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start" sx={{ fontWeight: 600, color: "#374151" }}>
                      +1
                    </InputAdornment>
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* Message */}
            <Grid item xs={12}>
              <TextField
                label="Your Message"
                name="message"
                variant="outlined"
                size="medium"
                fullWidth
                required
                multiline
                minRows={4}
                value={formData.message}
                onChange={handleChange}
                InputLabelProps={{ sx: { fontWeight: 600, color: "#64748b" } }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: 2,
                  },
                }}
              />
            </Grid>
            {/* I'm not a robot checkbox */}
            <Grid item xs={12}>
              <RobotCheckbox checked={robotChecked} onClick={toggleRobotChecked} role="checkbox" aria-checked={robotChecked} tabIndex={0} onKeyDown={(e) => { if(e.key === " " || e.key === "Enter"){ e.preventDefault(); toggleRobotChecked(); } }}>
                <Box className="checkbox-box">
                  {robotChecked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ width: 16, height: 16 }}
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                </Box>
                I'm not a robot
              </RobotCheckbox>
            </Grid>
          </Grid>
          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              type="submit"
              variant="contained"
              size="large"
              sx={{
                background: "linear-gradient(45deg, #3B82F6, #1D4ED8)",
                color: "white",
                borderRadius: "30px",
                px: 10,
                py: 1.8,
                fontWeight: 600,
                "&:hover": {
                  background: "linear-gradient(45deg, #1D4ED8, #3B82F6)",
                },
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
