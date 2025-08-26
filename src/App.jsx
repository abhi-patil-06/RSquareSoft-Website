import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ValetPlus from "./pages/products/ValetPlus";
import Karmika from "./pages/products/Karmika";
import Takumi from "./pages/products/TakuMi";
import CP from "./pages/products/CP";
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
import SuccessStory from "./pages/awards/Awards";
import AwardsPage from "./pages/awards/Awards";
import Newsroom from "./pages/newsroom/NewsRoom";
import Blog from "./pages/insights/Blog";
import BlogDetail from "./pages/insights/BlogDetail";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";
import ExpertPage from "./components/ExpertPage";
import ClientContactForm from "./components/ClientContactForm";

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
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/awards" element={<AwardsPage />} />
        <Route path="/newsRoom" element={<Newsroom />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/valetplus" element={<ValetPlus />} />
        <Route path="/karmika" element={<Karmika />} />
        <Route path="/takumi" element={<Takumi />} />
        <Route path="/cp" element={<CP />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/productDev" element={<ProductDevelopment />} />
        <Route path="/podModel" element={<PodModel />} />
        <Route path="/timeMaterial" element={<TimeMaterialModel />} />
        <Route path="/enterpriseProduct" element={<EnterpriseProduction />} />
        <Route path="/cloudExpertise" element={<CloudExpertise />} />
        <Route path="/ai" element={<ArtificialIntelligence />} />
        <Route path="/dataAnalytics" element={<DataAnalytics />} />
        <Route path="/ml" element={<MachineLearning />} />
        <Route path="/ceo" element={<CeoInfoSection />} />
        <Route path="/cto" element={<CtoInfoSection />} />
        <Route path="/expert" element={<ExpertPage />} />
        <Route path="/clientContactForm" element={<ClientContactForm />} />
      </Routes>

      <ScrollToTopButton />
      <Footer />
    </Router>
  )
}

export default App