import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  return (
    <footer className="relative overflow-hidden text-white py-10 md:py-10 px-6 md:px-16"
            style={{
              background: 'linear-gradient(135deg, #002244 0%, #000A14 100%)', // Made even darker
            }}
    >


      <div className="max-w-7xl mx-auto relative z-10"> {/* z-10 to bring content above SVGs */}
        {/* Top CTA Section */}
        <div className="text-center mb-16 pt-10">
          <h3 className="text-3xl md:text-4xl font-semibold mb-4">Want to partner with us?</h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            If you're interested in a partnership and would like to find out some more information,
            one of our advisors is excited to help.
          </p>
          <a
            onClick={() => navigate("/contact-form")}
            className="inline-block cursor-pointer bg-white text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Get started
          </a>
        </div>

        {/* Changed border color to match blue theme */}
        <hr className="border-t border-blue-700 my-10" /> {/* Darker blue border */}

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Logo/Name (leftsone. logo from image, adapted to Rsquaresoft) */}
          <div className="flex flex-col items-start">
            {/* You can replace this with an actual logo image if you have one */}
            <div className="text-4xl font-bold mb-3">
              <span>RSquareSoft Technologies</span>
            </div>
            <p className="text-sm text-gray-400 mt-2">
              Driving innovation with scalable and secure tech solutions for the digital future.
            </p>
          </div>

          {/* Quick Links / Partnerships (renamed based on image) */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Products</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a onClick={() => navigate("/valetplus")} className="hover:text-white transition duration-200 cursor-pointer">ValetPlus</a></li>
              {/* <li><a href="#" className="hover:text-white transition duration-200">Kaarmika</a></li> */}
              <li><a onClick={() => navigate("/takuMi")} className="hover:text-white transition duration-200 cursor-pointer">TakuMi</a></li>
              {/* <li><a href="#" className="hover:text-white transition duration-200">CP</a></li> */}
            </ul>
          </div>

          {/* About Links (renamed to 'About' as per image) */}
          <div>
            {/* Changed text color to match blue theme */}
            <h4 className="text-lg font-semibold mb-4 text-blue-300">About</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a onClick={() => navigate('/about-us')} className="hover:text-white transition duration-200 cursor-pointer">About Us</a></li>
              <li><a onClick={() => navigate('/careers')} className="hover:text-white transition duration-200 cursor-pointer">Careers</a></li>
              <li><a onClick={() => navigate('/news-room')} className="hover:text-white transition duration-200 cursor-pointer">Newsroom</a></li>
              {/* Add more About-related links if needed */}
            </ul>
          </div>

          {/* Support & Follow Us */}
          <div>
            {/* Changed text color to match blue theme */}
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li><a onClick={() => navigate("/contact-form")} className="hover:text-white transition duration-200 cursor-pointer">Support Request</a></li>
              <li><a onClick={() => navigate("/contact-form")} className="hover:text-white transition duration-200 cursor-pointer">Contact</a></li>
            </ul>

            {/* Changed text color to match blue theme */}
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/RSquareSoft-Technologies/" target="_blank" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaFacebookF /></a>
              <a href="https://x.com/" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/rsquaresoft/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/rsquaresoft/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Privacy Policy */}
        {/* Changed border color to match blue theme */}
        <div className="mt-16 border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {currentYear} RSquareSoft Technologies India Private Limited, All Rights Reserved</p>
          <a onClick={() => navigate("/privacy-policy")} className="mt-2 md:mt-0 hover:text-white transition duration-220 cursor-pointer">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
