import React, { useState } from 'react';
import {
    Typography,
    Button,
    Grid,
    Box,
    Paper,
    List,
    ListItem,
    ListItemText,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

// Data for specializations
const specializationsData = [
    {
        title: 'Cloud Platforms',
        items: ['AWS', 'Azure', 'Google Cloud Platform (GCP)'],
    },
    {
        title: 'Cutting-Edge Technologies',
        items: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
    },
    {
        title: 'Data Excellence',
        items: ['Database Migration', 'Data Analytics', 'Data Science'],
    },
    {
        title: 'Software Development',
        items: ['Enterprise Product Development', 'Custom Software Solutions', 'Agile Development'],
    },
    {
        title: 'Innovation at its Core',
        items: ['Technology Innovation', 'Prototyping and R&D', 'Future-Ready Solutions'],
    },
    {
        title: 'Professional Services',
        items: ['Product Implementation', 'Staff Augmentation', 'Build Operate Transfer'],
    },
];

// Main ExpertPage component
function ExpertPage() {
    const [showForm, setShowForm] = useState(false);

    const handleOpenForm = () => {
        setShowForm(true);
    };
    const handleCloseForm = () => {
        setShowForm(false);
    };

    return (
        <Box className="bg-white min-h-screen text-gray-900 py-20 font-family-base">
            <Box className="max-w-7xl mx-auto space-y-12">
                {/* Hero Section with Image */}
                <Box className="flex flex-col-reverse md:flex-row items-center gap-10 py-10">
                    <Box className="text-center md:text-left space-y-4 flex-1">
                        <Typography
                            variant="h2"
                            component="h1"
                            className="text-blue-900 py-5 font-extrabold"
                        >
                            Our Expertise
                        </Typography>
                        <Typography
                            variant="body1"
                            className="text-blue-800 max-w-2xl pb-5 leading-relaxed"
                        >
                            Unlock the potential of your projects with our team of seasoned professionals. We bring a wealth of expertise in various domains to drive your success. Whether you’re navigating the cloud landscape, delving into artificial intelligence, or undertaking database migration, our experts are here to guide you.
                            <br />
                            <br />
                            Ready to elevate your projects? Let’s discuss how our expertise can turn your vision into reality. Connect with our experts today.
                        </Typography>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={handleOpenForm}
                            className="mt-4 px-10 py-3 font-semibold rounded-full"
                            sx={{
                                background: 'linear-gradient(45deg, #3B82F6, #1D4ED8)',
                                color: 'white',
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #1D4ED8, #3B82F6)',
                                },
                            }}
                        >
                            Connect With Us
                        </Button>
                    </Box>
                    <Box className="flex-1 flex justify-center">
                        <img
                            src="public/product-bg/takumi-bg3.png"
                            alt="Professional team collaborating"
                            className="w-full h-auto object-cover"
                        />
                    </Box>
                </Box>
                {/* Key Points Section */}
                <Box className="py-8 text-center bg-blue-50 rounded-2xl shadow-lg px-6">
                    <Typography variant="h4" className="text-blue-900 font-bold mb-4">
                        Why Choose Us?
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        <Grid item xs={12} sm={4}>
                            <Box className="flex flex-col items-center">
                                <Box className="text-blue-600 mb-2" sx={{ fontSize: '2.5rem' }}>
                                    ✓
                                </Box>
                                <Typography variant="h6" className="text-blue-800 font-semibold">
                                    Decades of Experience
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    Our team has extensive knowledge and a proven track record of success.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="flex flex-col items-center">
                                <Box className="text-blue-600 mb-2" sx={{ fontSize: '2.5rem' }}>
                                    ✓
                                </Box>
                                <Typography variant="h6" className="text-blue-800 font-semibold">
                                    Tailored Solutions
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    We provide custom strategies to meet the unique needs of your business.
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className="flex flex-col items-center">
                                <Box className="text-blue-600 mb-2" sx={{ fontSize: '2.5rem' }}>
                                    ✓
                                </Box>
                                <Typography variant="h6" className="text-blue-800 font-semibold">
                                    Continuous Innovation
                                </Typography>
                                <Typography variant="body2" className="text-gray-600">
                                    We stay ahead of the curve to bring you future-ready solutions.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                {/* Specializations Grid */}
                <Box className="py-8">
                    <Typography variant="h4" className="text-blue-900 font-bold text-center pb-10">
                        Our Specializations
                    </Typography>
                    <Grid container spacing={4} justifyContent="center">
                        {specializationsData.map((specialization, index) => (
                            <Grid item xs={12} sm={6} md={4} key={index}>
                                <Paper
                                    elevation={3}
                                    className="p-6 rounded-3xl w-70 md:w-full h-full flex flex-col justify-between"
                                    sx={{
                                        backgroundColor: '#F3F8FF', // Light blue background
                                        border: '2px solid #60A5FA', // Blue border
                                        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
                                        },
                                    }}
                                >
                                    <Box>
                                        <Typography
                                            variant="h5"
                                            className="text-blue-600 font-semibold mb-3"
                                        >
                                            {specialization.title}
                                        </Typography>
                                        <List dense className="space-y-1">
                                            {specialization.items.map((item, itemIndex) => (
                                                <ListItem key={itemIndex} disablePadding>
                                                    <ListItemText>
                                                        <Typography
                                                            variant="body2"
                                                            className="text-blue-900"
                                                        >
                                                            - {item}
                                                        </Typography>
                                                    </ListItemText>
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>


                {/* Contact Form Dialog */}
                <Dialog
                    open={showForm}
                    onClose={handleCloseForm}
                    height="screen"
                    maxWidth="md"
                    fullWidth
                    PaperProps={{
                        sx: {
                            borderRadius: '2rem',
                            padding: 3,
                            backgroundColor: 'white',
                            boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
                        },
                    }}
                >
                    <DialogTitle
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            color: '#1e3a8a',
                            fontSize: 24,
                            position: 'relative',
                        }}
                    >
                        Contact Our Experts
                        <IconButton
                            aria-label="close"
                            onClick={handleCloseForm}
                            sx={{
                                position: 'absolute',
                                right: 12,
                                top: 12,
                                color: (theme) => theme.palette.grey[600],
                            }}
                        >
                            <CloseIcon />
                        </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <Box component="form" noValidate sx={{ mt: 1 }}>
                            <Grid container spacing={3}>
                                {/* First Name */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="First Name"
                                        name="firstName"
                                        variant="outlined"
                                        size="large"
                                        InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                </Grid>
                                {/* Last Name */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Last Name"
                                        name="lastName"
                                        variant="outlined"
                                        size="medium"
                                        InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                </Grid>
                                {/* Email */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        variant="outlined"
                                        size="medium"
                                        InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                </Grid>
                                {/* Phone */}
                                <Grid item xs={12}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        type="tel"
                                        variant="outlined"
                                        size="medium"
                                        InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                </Grid>
                                {/* Message */}
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Your Message"
                                        name="message"
                                        multiline
                                        rows={4}
                                        variant="outlined"
                                        size="medium"
                                        InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                            },
                                        }}
                                    />
                                </Grid>
                                {/* Submit Button */}
                                <Grid item xs={12} sx={{ mt: 2 }}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            background: 'linear-gradient(45deg, #3B82F6, #1D4ED8)',
                                            color: 'white',
                                            borderRadius: '30px',
                                            px: 10,
                                            py: 1.8,
                                            fontWeight: 600,
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #1D4ED8, #3B82F6)',
                                            },
                                        }}
                                        fullWidth
                                    >
                                        Submit
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </DialogContent>
                </Dialog>

            </Box>
        </Box>
    );
}

export default ExpertPage;
