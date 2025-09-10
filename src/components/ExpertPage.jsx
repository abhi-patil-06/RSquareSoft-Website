import React, { useState } from 'react';
import {
    Cloud,
    Brain,
    Database,
    Code,
    Lightbulb,
    Briefcase,
    ArrowRight,
    Check,
    Mail,
    Phone,
    User,
    X,
    Building
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Enhanced specializations data with icons and descriptions

const specializationsData = [
  {
    title: 'Cloud Platforms',
    icon: <Cloud size={40} />,
    description: 'Scalable cloud solutions for modern businesses',
    items: ['Amazon Web Services', 'Microsoft Azure', 'Google Cloud Platform (GCP)'],
    color: 'text-blue-500',
    bgGradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    hoverGradient: 'hover:from-blue-200 hover:to-blue-300',
  },
  {
    title: 'Cutting-Edge Technologies',
    icon: <Brain size={40} />,
    description: 'Artificial Intelligence, Machine Learning, and Deep Learning',
    items: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
    color: 'text-purple-500',
    bgGradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    hoverGradient: 'hover:from-blue-200 hover:to-blue-300',
  },
  {
    title: 'Data Excellence',
    icon: <Database size={40} />,
    description: 'Transform your data into actionable insights',
    items: ['Database Migration', 'Data Analytics', 'Data Science'],
    color: 'text-green-500',
    bgGradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    hoverGradient: 'hover:from-blue-200 hover:to-blue-300',
  },
  {
    title: 'Software Development',
    icon: <Code size={40} />,
    description: 'Enterprise Product Development and Custom Software Solutions',
    items: ['Enterprise Product Development', 'Custom Software Solutions', 'Agile Development'],
    color: 'text-orange-500',
    bgGradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    hoverGradient: 'hover:from-blue-200 hover:to-blue-300',
  },
  {
    title: 'Innovation at its Core',
    icon: <Lightbulb size={40} />,
    description: 'Technology Innovation, Prototyping and R&D, Future-Ready Solutions',
    items: ['Technology Innovation', 'Prototyping and R&D', 'Future-Ready Solutions'],
    color: 'text-red-500',
    bgGradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    hoverGradient: 'hover:from-blue-200 hover:to-blue-300',
  },
  {
    title: 'Professional Services',
    icon: <Briefcase size={40} />,
    description: 'Product Implementation, Staff Augmentation and Build Operate Transfer',
    items: ['Product Implementation', 'Staff Augmentation', 'Build Operate Transfer'],
    color: 'text-indigo-500',
    bgGradient: 'bg-gradient-to-br from-blue-100 to-blue-200',
    hoverGradient: 'hover:from-blue-200 hover:to-blue-300',
  },
];


import { FaBriefcase, FaCogs, FaRocket } from 'react-icons/fa';

// Key benefits data
const keyBenefits = [
    {
        icon: <FaBriefcase size={30} />,
        title: '20+ Years Experience',
        description: 'Proven expertise across industries and technologies'
    },
    {
        icon: <FaCogs size={30} />,
        title: 'Tailored Solutions',
        description: 'Custom strategies designed for your unique challenges'
    },
    {
        icon: <FaRocket size={30} />,
        title: 'Future-Ready Innovation',
        description: 'Stay ahead with cutting-edge technology adoption'
    }
];

function ModernExpertisePage() {
    const [showForm, setShowForm] = useState(false);
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    const handleOpenForm = () => setShowForm(true);

    const handleCloseForm = () => {
        setShowForm(false);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            message: ''
        });
        setErrors({});
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.message.trim()) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form submitted:', formData);
            // Handle form submission here
            alert('Thank you for your inquiry! We will get back to you within 24 hours.');
            handleCloseForm();
        }
    };

    return (
        <div className="min-h-screen py-15 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Hero Section */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold bg-primary bg-clip-text text-transparent mb-6 leading-tight">
                        Our Expertise
                    </h1>
                    <p className="text-xl text-text-primary max-w-4xl mx-auto mb-8 leading-relaxed font-light">
                        Transforming businesses through innovative technology solutions.
                        Our expert team delivers cutting-edge services across cloud platforms,
                        AI/ML, data analytics, and custom software development.
                    </p>
                    <button
                        onClick={() => navigate("/Contact-form")}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-full text-lg hover:from-secondary hover:to-primary transform cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Start Your Project
                        <ArrowRight size={20} className="ml-2" />
                    </button>
                </div>

                {/* Key Benefits Section */}
                <div className="mb-20">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-12 shadow-lg border border-white/20">
                        <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
                            Why Choose Our Expertise?
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {keyBenefits.map((benefit, index) => (
                                <div key={index} className="text-center group">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-slate-800 mb-3">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {benefit.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Specializations Grid */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">
                        Our Core Specializations
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {specializationsData.map((specialization, index) => (
                            <div
                                key={index}
                                className={`${specialization.bgGradient} ${specialization.hoverGradient} rounded-3xl p-8  transform hover:-translate-y-2 transition-all duration-300  backdrop-blur-sm border border-white/30`}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`${specialization.color} mr-3`}>
                                        {specialization.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-800">
                                        {specialization.title}
                                    </h3>
                                </div>

                                <p className="text-slate-700 mb-6 leading-relaxed text-sm">
                                    {specialization.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {specialization.items.map((item, itemIndex) => (
                                        <span
                                            key={itemIndex}
                                            className="bg-white/80 text-slate-700 px-3 py-1 rounded-full text-xs font-medium hover:bg-white/90 transition-colors duration-200"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Enhanced Contact Form Modal */}
                {showForm && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-500">
                        <div className="bg-white/95 backdrop-blur-lg rounded-3xl w-full max-w-2xl  overflow-y-auto shadow-2xl border border-white/20">
                            {/* Modal Header */}
                            <div className="p-8 pb-4 border-b border-slate-200">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h2 className="text-3xl font-bold text-slate-800">
                                            Let's Start Your Project
                                        </h2>
                                        <p className="text-slate-600 mt-2">
                                            Tell us about your requirements and we'll get back to you within 24 hours
                                        </p>
                                    </div>
                                    <button
                                        onClick={handleCloseForm}
                                        className="p-2 hover:bg-slate-100 rounded-full transition-colors duration-200"
                                    >
                                        <X size={24} className="text-slate-600" />
                                    </button>
                                </div>
                            </div>

                            {/* Modal Body */}
                            <div className="p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Name Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                First Name *
                                            </label>
                                            <div className="relative">
                                                <User size={20} className="absolute left-3 top-3 text-slate-400" />
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-3 border rounded-xl  focus:border-transparent transition-all duration-200 ${errors.firstName ? 'border-red-500' : 'border-slate-300'}`}
                                                    placeholder="Enter your first name"
                                                />
                                            </div>
                                            {errors.firstName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Last Name *
                                            </label>
                                            <div className="relative">
                                                <User size={20} className="absolute left-3 top-3 text-slate-400" />
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleInputChange}
                                                    className={`w-full pl-12 pr-4 py-3 border rounded-xl  focus:border-transparent transition-all duration-200 ${errors.lastName ? 'border-red-500' : 'border-slate-300'}`}
                                                    placeholder="Enter your last name"
                                                />
                                            </div>
                                            {errors.lastName && (
                                                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail size={20} className="absolute left-3 top-3 text-slate-400" />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className={`w-full pl-12 pr-4 py-3 border rounded-xl  focus:border-transparent transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    {/* Phone and Company Fields */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Phone Number
                                            </label>
                                            <div className="relative">
                                                <Phone size={20} className="absolute left-3 top-3 text-slate-400" />
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl  focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your phone number"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-slate-700 mb-2">
                                                Company Name
                                            </label>
                                            <div className="relative">
                                                <Building size={20} className="absolute left-3 top-3 text-slate-400" />
                                                <input
                                                    type="text"
                                                    name="company"
                                                    value={formData.company}
                                                    onChange={handleInputChange}
                                                    className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-xl  focus:border-transparent transition-all duration-200"
                                                    placeholder="Enter your company name"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 mb-2">
                                            Project Details & Requirements *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className={`w-full px-4 py-3 border rounded-xl  focus:border-transparent transition-all duration-200 resize-none ${errors.message ? 'border-red-500' : 'border-slate-300'}`}
                                            placeholder="Tell us about your project requirements, timeline, and any specific technologies you're interested in..."
                                        ></textarea>
                                        {errors.message && (
                                            <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                                        )}
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:from-secondary hover:to-primary transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-xl"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ModernExpertisePage;











// import React, { useState } from 'react';
// import {
//     Typography,
//     Button,
//     Grid,
//     Box,
//     Paper,
//     List,
//     ListItem,
//     ListItemText,
//     TextField,
//     Dialog,
//     DialogContent,
//     DialogTitle,
//     IconButton,
// } from '@mui/material';
// import { Close as CloseIcon } from '@mui/icons-material';

// // Data for specializations
// const specializationsData = [
//     {
//         title: 'Cloud Platforms',
//         items: ['AWS', 'Azure', 'Google Cloud Platform (GCP)'],
//     },
//     {
//         title: 'Cutting-Edge Technologies',
//         items: ['Artificial Intelligence', 'Machine Learning', 'Deep Learning'],
//     },
//     {
//         title: 'Data Excellence',
//         items: ['Database Migration', 'Data Analytics', 'Data Science'],
//     },
//     {
//         title: 'Software Development',
//         items: ['Enterprise Product Development', 'Custom Software Solutions', 'Agile Development'],
//     },
//     {
//         title: 'Innovation at its Core',
//         items: ['Technology Innovation', 'Prototyping and R&D', 'Future-Ready Solutions'],
//     },
//     {
//         title: 'Professional Services',
//         items: ['Product Implementation', 'Staff Augmentation', 'Build Operate Transfer'],
//     },
// ];

// // Main ExpertPage component
// function ExpertPage() {
//     const [showForm, setShowForm] = useState(false);

//     const handleOpenForm = () => {
//         setShowForm(true);
//     };
//     const handleCloseForm = () => {
//         setShowForm(false);
//     };

//     return (
//         <Box className="bg-white min-h-screen text-gray-900 py-20 font-family-base">
//             <Box className="max-w-7xl mx-auto space-y-12">
//                 {/* Hero Section with Image */}
//                 <Box className="flex flex-col-reverse md:flex-row items-center gap-10 py-10">
//                     <Box className="text-center md:text-left space-y-4 flex-1">
//                         <Typography
//                             variant="h2"
//                             component="h1"
//                             className="text-blue-900 py-5 font-extrabold"
//                         >
//                             Our Expertise
//                         </Typography>
//                         <Typography
//                             variant="body1"
//                             className="text-blue-800 max-w-2xl pb-5 leading-relaxed"
//                         >
//                             Unlock the potential of your projects with our team of seasoned professionals. We bring a wealth of expertise in various domains to drive your success. Whether you’re navigating the cloud landscape, delving into artificial intelligence, or undertaking database migration, our experts are here to guide you.
//                             <br />
//                             <br />
//                             Ready to elevate your projects? Let’s discuss how our expertise can turn your vision into reality. Connect with our experts today.
//                         </Typography>
//                         <Button
//                             variant="contained"
//                             size="large"
//                             onClick={handleOpenForm}
//                             className="mt-4 px-10 py-3 font-semibold rounded-full"
//                             sx={{
//                                 background: 'linear-gradient(45deg, #3B82F6, #1D4ED8)',
//                                 color: 'white',
//                                 '&:hover': {
//                                     background: 'linear-gradient(45deg, #1D4ED8, #3B82F6)',
//                                 },
//                             }}
//                         >
//                             Connect With Us
//                         </Button>
//                     </Box>
//                     <Box className="flex-1 flex justify-center">
//                         <img
//                             src="public/product-bg/takumi-bg3.png"
//                             alt="Professional team collaborating"
//                             className="w-full h-auto object-cover"
//                         />
//                     </Box>
//                 </Box>
//                 {/* Key Points Section */}
//                 <Box className="py-8 text-center bg-blue-50 rounded-2xl shadow-lg px-6">
//                     <Typography variant="h4" className="text-blue-900 font-bold mb-4">
//                         Why Choose Us?
//                     </Typography>
//                     <Grid container spacing={4} justifyContent="center">
//                         <Grid item xs={12} sm={4}>
//                             <Box className="flex flex-col items-center">
//                                 <Box className="text-blue-600 mb-2" sx={{ fontSize: '2.5rem' }}>
//                                     ✓
//                                 </Box>
//                                 <Typography variant="h6" className="text-blue-800 font-semibold">
//                                     Decades of Experience
//                                 </Typography>
//                                 <Typography variant="body2" className="text-gray-600">
//                                     Our team has extensive knowledge and a proven track record of success.
//                                 </Typography>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <Box className="flex flex-col items-center">
//                                 <Box className="text-blue-600 mb-2" sx={{ fontSize: '2.5rem' }}>
//                                     ✓
//                                 </Box>
//                                 <Typography variant="h6" className="text-blue-800 font-semibold">
//                                     Tailored Solutions
//                                 </Typography>
//                                 <Typography variant="body2" className="text-gray-600">
//                                     We provide custom strategies to meet the unique needs of your business.
//                                 </Typography>
//                             </Box>
//                         </Grid>
//                         <Grid item xs={12} sm={4}>
//                             <Box className="flex flex-col items-center">
//                                 <Box className="text-blue-600 mb-2" sx={{ fontSize: '2.5rem' }}>
//                                     ✓
//                                 </Box>
//                                 <Typography variant="h6" className="text-blue-800 font-semibold">
//                                     Continuous Innovation
//                                 </Typography>
//                                 <Typography variant="body2" className="text-gray-600">
//                                     We stay ahead of the curve to bring you future-ready solutions.
//                                 </Typography>
//                             </Box>
//                         </Grid>
//                     </Grid>
//                 </Box>
//                 {/* Specializations Grid */}
//                 <Box className="py-8">
//                     <Typography variant="h4" className="text-blue-900 font-bold text-center pb-10">
//                         Our Specializations
//                     </Typography>
//                     <Grid container spacing={4} justifyContent="center">
//                         {specializationsData.map((specialization, index) => (
//                             <Grid item xs={12} sm={6} md={4} key={index}>
//                                 <Paper
//                                     elevation={3}
//                                     className="p-6 rounded-3xl w-70 md:w-full h-full flex flex-col justify-between"
//                                     sx={{
//                                         backgroundColor: '#F3F8FF', // Light blue background
//                                         border: '2px solid #60A5FA', // Blue border
//                                         transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
//                                         '&:hover': {
//                                             transform: 'translateY(-10px)',
//                                             boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
//                                         },
//                                     }}
//                                 >
//                                     <Box>
//                                         <Typography
//                                             variant="h5"
//                                             className="text-blue-600 font-semibold mb-3"
//                                         >
//                                             {specialization.title}
//                                         </Typography>
//                                         <List dense className="space-y-1">
//                                             {specialization.items.map((item, itemIndex) => (
//                                                 <ListItem key={itemIndex} disablePadding>
//                                                     <ListItemText>
//                                                         <Typography
//                                                             variant="body2"
//                                                             className="text-blue-900"
//                                                         >
//                                                             - {item}
//                                                         </Typography>
//                                                     </ListItemText>
//                                                 </ListItem>
//                                             ))}
//                                         </List>
//                                     </Box>
//                                 </Paper>
//                             </Grid>
//                         ))}
//                     </Grid>
//                 </Box>


//                 {/* Contact Form Dialog */}
//                 <Dialog
//                     open={showForm}
//                     onClose={handleCloseForm}
//                     height="screen"
//                     maxWidth="md"
//                     fullWidth
//                     PaperProps={{
//                         sx: {
//                             borderRadius: '2rem',
//                             padding: 3,
//                             backgroundColor: 'white',
//                             boxShadow: '0 12px 28px rgba(0,0,0,0.15)',
//                         },
//                     }}
//                 >
//                     <DialogTitle
//                         sx={{
//                             textAlign: 'center',
//                             fontWeight: 'bold',
//                             color: '#1e3a8a',
//                             fontSize: 24,
//                             position: 'relative',
//                         }}
//                     >
//                         Contact Our Experts
//                         <IconButton
//                             aria-label="close"
//                             onClick={handleCloseForm}
//                             sx={{
//                                 position: 'absolute',
//                                 right: 12,
//                                 top: 12,
//                                 color: (theme) => theme.palette.grey[600],
//                             }}
//                         >
//                             <CloseIcon />
//                         </IconButton>
//                     </DialogTitle>
//                     <DialogContent dividers>
//                         <Box component="form" noValidate sx={{ mt: 1 }}>
//                             <Grid container spacing={3}>
//                                 {/* First Name */}
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         label="First Name"
//                                         name="firstName"
//                                         variant="outlined"
//                                         size="large"
//                                         InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {
//                                                 borderRadius: 2,
//                                             },
//                                         }}
//                                     />
//                                 </Grid>
//                                 {/* Last Name */}
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         label="Last Name"
//                                         name="lastName"
//                                         variant="outlined"
//                                         size="medium"
//                                         InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {
//                                                 borderRadius: 2,
//                                             },
//                                         }}
//                                     />
//                                 </Grid>
//                                 {/* Email */}
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         label="Email Address"
//                                         name="email"
//                                         type="email"
//                                         variant="outlined"
//                                         size="medium"
//                                         InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {
//                                                 borderRadius: 2,
//                                             },
//                                         }}
//                                     />
//                                 </Grid>
//                                 {/* Phone */}
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         fullWidth
//                                         label="Phone Number"
//                                         name="phone"
//                                         type="tel"
//                                         variant="outlined"
//                                         size="medium"
//                                         InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {
//                                                 borderRadius: 2,
//                                             },
//                                         }}
//                                     />
//                                 </Grid>
//                                 {/* Message */}
//                                 <Grid item xs={12}>
//                                     <TextField
//                                         required
//                                         fullWidth
//                                         label="Your Message"
//                                         name="message"
//                                         multiline
//                                         rows={4}
//                                         variant="outlined"
//                                         size="medium"
//                                         InputLabelProps={{ sx: { fontWeight: 600, color: '#64748b' } }}
//                                         sx={{
//                                             '& .MuiOutlinedInput-root': {
//                                                 borderRadius: 2,
//                                             },
//                                         }}
//                                     />
//                                 </Grid>
//                                 {/* Submit Button */}
//                                 <Grid item xs={12} sx={{ mt: 2 }}>
//                                     <Button
//                                         type="submit"
//                                         variant="contained"
//                                         size="large"
//                                         sx={{
//                                             background: 'linear-gradient(45deg, #3B82F6, #1D4ED8)',
//                                             color: 'white',
//                                             borderRadius: '30px',
//                                             px: 10,
//                                             py: 1.8,
//                                             fontWeight: 600,
//                                             '&:hover': {
//                                                 background: 'linear-gradient(45deg, #1D4ED8, #3B82F6)',
//                                             },
//                                         }}
//                                         fullWidth
//                                     >
//                                         Submit
//                                     </Button>
//                                 </Grid>
//                             </Grid>
//                         </Box>
//                     </DialogContent>
//                 </Dialog>

//             </Box>
//         </Box>
//     );
// }

// export default ExpertPage;
