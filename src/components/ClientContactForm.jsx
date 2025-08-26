import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Integrate with backend or email service here
    setStatus("Your message has been sent. Thank you!");
    setForm({ name: "", email: "", company: "", message: "" });
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <div className="flex py-100 items-center justify-center h-screen bg-background">
      <div className="w-full max-w-lg mx-auto p-8 bg-white   border border-gray-100">
        <h2 className="text-3xl font-extrabold text-primary mb-8 text-center">
          Connect With Us
        </h2>
        {status && (
          <div className="mb-6 text-green-600 text-center font-semibold">{status}</div>
        )}
        <form onSubmit={handleSubmit} className="space-y-7">
          <TextField
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
            required
            // variant="filled"
            InputProps={{ className: "bg-gray-50" }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Email Address"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            fullWidth
            required
            InputProps={{ className: "bg-gray-50" }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Company Name"
            name="company"
            value={form.company}
            onChange={handleChange}
            fullWidth
            required
            InputProps={{ className: "bg-gray-50" }}
            sx={{ mb: 2 }}
          />
          <TextField
            label="Your Message"
            name="message"
            value={form.message}
            onChange={handleChange}
            multiline
            rows={5}
            fullWidth
            required
            InputProps={{ className: "bg-gray-50" }}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="!bg-gradient-to-r !from-primary !to-secondary !shadow-lg !rounded-xl !py-3 !w-full hover:!from-secondary hover:!to-primary"
            sx={{ fontWeight: 'bold', letterSpacing: 2 }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
}
