import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ValetPlus from "./pages/products/ValetPlus";
// import Karmika from "./pages/products/Karmika";
import Takumi from './pages/products/Takumi'
// import CP from "./pages/products/CP";
import Insights from "./pages/insights/Insights";
import Careers from "./pages/career/Careers";
import ProductDevelopment from "./pages/services/ProductDevelopment";
import Home from "./pages/home/Home";
import AboutUs from "./pages/about/AboutUs"
import PodModel from "./pages/services/PodModel";
import TimeMaterialModel from "./pages/services/TimeMaterialModel";
import EnterpriseProduction from "./pages/technology/EnterpriseProducts";
import CloudExpertise from "./pages/technology/CloudExpertise";
import ArtificialIntelligence from "./pages/technology/ArtificialIntelligence";
import DataAnalytics from "./pages/technology/DataAnalytics";
import MachineLearning from "./pages/technology/MachineLearning";
import ScrollToTop from "./components/ScrollToTop"
import CeoInfoSection from "./pages/about/CeoInfoSection";
import CtoInfoSection from "./pages/about/CtoInfoSection";
import Newsroom from "./pages/newsroom/NewsRoom";
import Blog from "./pages/insights/Blog";
import BlogDetail from "./pages/insights/BlogDetail";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ExpertPage from "./components/ExpertPage";
import ClientContactForm from "./components/ClientContactForm";
import EventSection from "./pages/event/EventSection";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SupportButton from "./components/Support";

function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for demo - replace with your loading logic
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <Router >
      {loading && <Loader />}
      <ScrollToTop />
      <SupportButton />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/event" element={<EventSection />} />
        <Route path="/news-room" element={<Newsroom />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/valetplus" element={<ValetPlus />} />
        {/* <Route path="/karmika" element={<Karmika />} /> */}
        <Route path="/takumi" element={<Takumi />} />
        {/* <Route path="/cp" element={<CP />} /> */}
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/product-development" element={<ProductDevelopment />} />
        <Route path="/pod-model" element={<PodModel />} />
        <Route path="/time-material" element={<TimeMaterialModel />} />
        <Route path="/enterprise-product" element={<EnterpriseProduction />} />
        <Route path="/cloud-expertise" element={<CloudExpertise />} />
        <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
        <Route path="/data-analytics" element={<DataAnalytics />} />
        <Route path="/machine-learning" element={<MachineLearning />} />
        <Route path="/ramesh-gharmalkar" element={<CeoInfoSection />} />
        <Route path="/rajneesh-shrimali" element={<CtoInfoSection />} />
        <Route path="/expert" element={<ExpertPage />} />
        <Route path="/contact-form" element={<ClientContactForm />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </Router>
  )
}

export default App