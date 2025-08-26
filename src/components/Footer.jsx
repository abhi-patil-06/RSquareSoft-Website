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
            onClick={() => navigate("/clientContactForm")}
            className="inline-block cursor-pointer bg-white text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Get started
          </a>
        </div>

        {/* Changed border color to match blue theme */}
        <hr className="border-t border-blue-700 my-10" /> {/* Darker blue border */}

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <li><a onClick={() => navigate('/aboutUs')} className="hover:text-white transition duration-200 cursor-pointer">About Us</a></li>
              <li><a onClick={() => navigate('/careers')} className="hover:text-white transition duration-200 cursor-pointer">Careers</a></li>
              <li><a onClick={() => navigate('/newsRoom')} className="hover:text-white transition duration-200 cursor-pointer">Newsroom</a></li>
              {/* Add more About-related links if needed */}
            </ul>
          </div>

          {/* Support & Follow Us */}
          <div>
            {/* Changed text color to match blue theme */}
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Support</h4>
            <ul className="space-y-2 text-sm text-gray-300 mb-6">
              <li><a href="#" className="hover:text-white transition duration-200">Support Request</a></li>
              <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
            </ul>

            {/* Changed text color to match blue theme */}
            <h4 className="text-lg font-semibold mb-4 text-blue-300">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/people/RSquareSoft-Technologies/" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaTwitter /></a>
              <a href="https://www.linkedin.com/company/rsquaresoft/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaLinkedinIn /></a>
              <a href="https://www.instagram.com/rsquaresoft/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaInstagram /></a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Privacy Policy */}
        {/* Changed border color to match blue theme */}
        <div className="mt-16 border-t border-blue-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© {currentYear} RSquareSoft Technologies. All rights reserved.</p>
          <a href="#" className="mt-2 md:mt-0 hover:text-white transition duration-220">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}












// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative overflow-hidden text-white py-10 md:py-20 px-6 md:px-16"
//             style={{
//               // Changed to an even darker blue fade/shade gradient
//               background: 'linear-gradient(135deg, #003366 0%, #001122 100%)', // Even darker blue gradient
//             }}
//     >
//       {/* Abstract Background Shapes (SVG Paths) - positioned absolutely */}
//       {/* Increased opacity for better visibility */}
//       <svg className="absolute top-10 left-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#FFFFFF" fillOpacity="0.15" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         <path fill="#FFFFFF" fillOpacity="0.1" d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>
//       <svg className="absolute bottom-0 right-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#FFFFFF" fillOpacity="0.12" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,133.3C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,160,1392,149.3L1440,139.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>


//       <div className="max-w-7xl mx-auto relative z-10"> {/* z-10 to bring content above SVGs */}
//         {/* Top CTA Section */}
//         <div className="text-center mb-16 pt-10">
//           <h3 className="text-3xl md:text-4xl font-semibold mb-4">Want to partner with us?</h3>
//           <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//             If you're interested in a partnership and would like to find out some more information,
//             one of our advisors is excited to help.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105"
//           >
//             Get started
//           </a>
//         </div>

//         {/* Changed border color to match blue theme */}
//         <hr className="border-t border-blue-600 my-10" />

//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Logo/Name (leftsone. logo from image, adapted to Rsquaresoft) */}
//           <div className="flex flex-col items-start">
//             {/* You can replace this with an actual logo image if you have one */}
//             <div className="text-4xl font-bold mb-3">
//               <span className="font-extrabold">Rsquare</span><span className="font-light text-gray-300">soft</span>
//             </div>
//             <p className="text-sm text-gray-400 mt-2">
//               Driving innovation with scalable and secure tech solutions for the digital future.
//             </p>
//           </div>

//           {/* Quick Links / Partnerships (renamed based on image) */}
//           <div>
//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">Partnerships</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-white transition duration-200">Websites</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Social Media</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Branding</a></li>
//               {/* Add more links relevant to "Partnerships" if needed */}
//             </ul>
//           </div>

//           {/* About Links (renamed to 'About' as per image) */}
//           <div>
//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">About</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#about" className="hover:text-white transition duration-200">Why our why</a></li>
//               <li><a href="#services" className="hover:text-white transition duration-200">Our work</a></li>
//               <li><a href="#careers" className="hover:text-white transition duration-200">Careers</a></li>
//               {/* Add more About-related links if needed */}
//             </ul>
//           </div>

//           {/* Support & Follow Us */}
//           <div>
//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">Support</h4>
//             <ul className="space-y-2 text-sm text-gray-300 mb-6">
//               <li><a href="#" className="hover:text-white transition duration-200">Support Request</a></li>
//               <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
//             </ul>

//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaFacebookF /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaTwitter /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaLinkedinIn /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaInstagram /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright & Privacy Policy */}
//         {/* Changed border color to match blue theme */}
//         <div className="mt-16 border-t border-blue-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© {currentYear} Rsquaresoft. All rights reserved.</p>
//           <a href="#" className="mt-2 md:mt-0 hover:text-white transition duration-220">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }














// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative overflow-hidden text-white py-10 md:py-20 px-6 md:px-16"
//             style={{
//               // Changed to blue fade/shade gradient
//               background: 'linear-gradient(135deg, #007BFF 0%, #003366 100%)', // Blue fade/shade gradient
//             }}
//     >
//       {/* Abstract Background Shapes (SVG Paths) - positioned absolutely */}
//       {/* Increased opacity for better visibility */}
//       <svg className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#FFFFFF" fillOpacity="0.15" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         <path fill="#FFFFFF" fillOpacity="0.1" d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>
//       <svg className="absolute bottom-0 right-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#FFFFFF" fillOpacity="0.12" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,133.3C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,160,1392,149.3L1440,139.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>


//       <div className="max-w-7xl mx-auto relative z-10"> {/* z-10 to bring content above SVGs */}
//         {/* Top CTA Section */}
//         <div className="text-center mb-16 pt-10">
//           <h3 className="text-3xl md:text-4xl font-semibold mb-4">Want to partner with us?</h3>
//           <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//             If you're interested in a partnership and would like to find out some more information,
//             one of our advisors is excited to help.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block bg-white text-blue-800 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105"
//           >
//             Get started
//           </a>
//         </div>

//         {/* Changed border color to match blue theme */}
//         <hr className="border-t border-blue-600 my-10" />

//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Logo/Name (leftsone. logo from image, adapted to Rsquaresoft) */}
//           <div className="flex flex-col items-start">
//             {/* You can replace this with an actual logo image if you have one */}
//             <div className="text-4xl font-bold mb-3">
//               <span className="font-extrabold">Rsquare</span><span className="font-light text-gray-300">soft</span>
//             </div>
//             <p className="text-sm text-gray-400 mt-2">
//               Driving innovation with scalable and secure tech solutions for the digital future.
//             </p>
//           </div>

//           {/* Quick Links / Partnerships (renamed based on image) */}
//           <div>
//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">Partnerships</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-white transition duration-200">Websites</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Social Media</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Branding</a></li>
//               {/* Add more links relevant to "Partnerships" if needed */}
//             </ul>
//           </div>

//           {/* About Links (renamed to 'About' as per image) */}
//           <div>
//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">About</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#about" className="hover:text-white transition duration-200">Why our why</a></li>
//               <li><a href="#services" className="hover:text-white transition duration-200">Our work</a></li>
//               <li><a href="#careers" className="hover:text-white transition duration-200">Careers</a></li>
//               {/* Add more About-related links if needed */}
//             </ul>
//           </div>

//           {/* Support & Follow Us */}
//           <div>
//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">Support</h4>
//             <ul className="space-y-2 text-sm text-gray-300 mb-6">
//               <li><a href="#" className="hover:text-white transition duration-200">Support Request</a></li>
//               <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
//             </ul>

//             {/* Changed text color to match blue theme */}
//             <h4 className="text-lg font-semibold mb-4 text-blue-300">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaFacebookF /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaTwitter /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaLinkedinIn /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaInstagram /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright & Privacy Policy */}
//         {/* Changed border color to match blue theme */}
//         <div className="mt-16 border-t border-blue-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© {currentYear} Rsquaresoft. All rights reserved.</p>
//           <a href="#" className="mt-2 md:mt-0 hover:text-white transition duration-220">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }









// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative overflow-hidden text-white py-10 md:py-20 px-6 md:px-16"
//             style={{
//               background: 'linear-gradient(135deg, #4A00B7 0%, #2A006F 100%)', // Deep purple gradient
//             }}
//     >
//       {/* Abstract Background Shapes (SVG Paths) - positioned absolutely */}
//       {/* Increased opacity for better visibility */}
//       <svg className="absolute top-0 left-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#FFFFFF" fillOpacity="0.15" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         <path fill="#FFFFFF" fillOpacity="0.1" d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>
//       <svg className="absolute bottom-0 right-0 w-full h-full opacity-40 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#FFFFFF" fillOpacity="0.12" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,133.3C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,160,1392,149.3L1440,139.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>


//       <div className="max-w-7xl mx-auto relative z-10"> {/* z-10 to bring content above SVGs */}
//         {/* Top CTA Section */}
//         <div className="text-center mb-16 pt-10">
//           <h3 className="text-3xl md:text-4xl font-semibold mb-4">Want to partner with us?</h3>
//           <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//             If you're interested in a partnership and would like to find out some more information,
//             one of our advisors is excited to help.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block bg-white text-purple-800 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105"
//           >
//             Get started
//           </a>
//         </div>

//         <hr className="border-t border-purple-600 my-10" /> {/* A divider similar to the image */}

//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Logo/Name (leftsone. logo from image, adapted to Rsquaresoft) */}
//           <div className="flex flex-col items-start">
//             {/* You can replace this with an actual logo image if you have one */}
//             <div className="text-4xl font-bold mb-3">
//               <span className="font-extrabold">Rsquare</span><span className="font-light text-gray-300">soft</span>
//             </div>
//             <p className="text-sm text-gray-400 mt-2">
//               Driving innovation with scalable and secure tech solutions for the digital future.
//             </p>
//           </div>

//           {/* Quick Links / Partnerships (renamed based on image) */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-purple-300">Partnerships</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-white transition duration-200">Websites</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Social Media</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Branding</a></li>
//               {/* Add more links relevant to "Partnerships" if needed */}
//             </ul>
//           </div>

//           {/* About Links (renamed to 'About' as per image) */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-purple-300">About</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#about" className="hover:text-white transition duration-200">Why our why</a></li>
//               <li><a href="#services" className="hover:text-white transition duration-200">Our work</a></li>
//               <li><a href="#careers" className="hover:text-white transition duration-200">Careers</a></li>
//               {/* Add more About-related links if needed */}
//             </ul>
//           </div>

//           {/* Support & Follow Us */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-purple-300">Support</h4>
//             <ul className="space-y-2 text-sm text-gray-300 mb-6">
//               <li><a href="#" className="hover:text-white transition duration-200">Support Request</a></li>
//               <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
//             </ul>

//             <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaFacebookF /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaTwitter /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaLinkedinIn /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaInstagram /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright & Privacy Policy */}
//         <div className="mt-16 border-t border-purple-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© {currentYear} Rsquaresoft. All rights reserved.</p>
//           <a href="#" className="mt-2 md:mt-0 hover:text-white transition duration-220">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }
















// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="relative overflow-hidden text-white py-10 md:py-20 px-6 md:px-16"
//             style={{
//               background: 'linear-gradient(135deg, #4A00B7 0%, #2A006F 100%)', // Deep purple gradient
//             }}
//     >
//       {/* Abstract Background Shapes (SVG Paths) - positioned absolutely */}
//       <svg className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#ffffff" fillOpacity="0.05" d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,149.3C672,139,768,117,864,112C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
//         <path fill="#ffffff" fillOpacity="0.03" d="M0,160L48,149.3C96,139,192,117,288,106.7C384,96,480,96,576,112C672,128,768,160,864,165.3C960,171,1056,149,1152,149.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>
//       <svg className="absolute bottom-0 right-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
//         <path fill="#ffffff" fillOpacity="0.07" d="M0,128L48,133.3C96,139,192,149,288,149.3C384,149,480,139,576,133.3C672,128,768,128,864,138.7C960,149,1056,171,1152,176C1248,181,1344,160,1392,149.3L1440,139.3L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
//       </svg>


//       <div className="max-w-7xl mx-auto relative z-10"> {/* z-10 to bring content above SVGs */}
//         {/* Top CTA Section */}
//         <div className="text-center mb-16 pt-10">
//           <h3 className="text-3xl md:text-4xl font-semibold mb-4">Want to partner with us?</h3>
//           <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
//             If you're interested in a partnership and would like to find out some more information,
//             one of our advisors is excited to help.
//           </p>
//           <a
//             href="#contact"
//             className="inline-block bg-white text-purple-800 font-semibold py-3 px-8 rounded-full transition duration-300 hover:bg-gray-200 hover:scale-105"
//           >
//             Get started
//           </a>
//         </div>

//         <hr className="border-t border-purple-600 my-10" /> {/* A divider similar to the image */}

//         {/* Main Footer Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Company Logo/Name (leftsone. logo from image, adapted to Rsquaresoft) */}
//           <div className="flex flex-col items-start">
//             {/* You can replace this with an actual logo image if you have one */}
//             <div className="text-4xl font-bold mb-3">
//               <span className="font-extrabold">Rsquare</span><span className="font-light text-gray-300">soft</span>
//             </div>
//             <p className="text-sm text-gray-400 mt-2">
//               Driving innovation with scalable and secure tech solutions for the digital future.
//             </p>
//           </div>

//           {/* Quick Links / Partnerships (renamed based on image) */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-purple-300">Partnerships</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#" className="hover:text-white transition duration-200">Websites</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Social Media</a></li>
//               <li><a href="#" className="hover:text-white transition duration-200">Branding</a></li>
//               {/* Add more links relevant to "Partnerships" if needed */}
//             </ul>
//           </div>

//           {/* About Links (renamed to 'About' as per image) */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-purple-300">About</h4>
//             <ul className="space-y-2 text-sm text-gray-300">
//               <li><a href="#about" className="hover:text-white transition duration-200">Why our why</a></li>
//               <li><a href="#services" className="hover:text-white transition duration-200">Our work</a></li>
//               <li><a href="#careers" className="hover:text-white transition duration-200">Careers</a></li>
//               {/* Add more About-related links if needed */}
//             </ul>
//           </div>

//           {/* Support & Follow Us */}
//           <div>
//             <h4 className="text-lg font-semibold mb-4 text-purple-300">Support</h4>
//             <ul className="space-y-2 text-sm text-gray-300 mb-6">
//               <li><a href="#" className="hover:text-white transition duration-200">Support Request</a></li>
//               <li><a href="#contact" className="hover:text-white transition duration-200">Contact</a></li>
//             </ul>

//             <h4 className="text-lg font-semibold mb-4 text-purple-300">Follow Us</h4>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaFacebookF /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaTwitter /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaLinkedinIn /></a>
//               <a href="#" className="text-gray-300 hover:text-white transition duration-200 text-xl"><FaInstagram /></a>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Copyright & Privacy Policy */}
//         <div className="mt-16 border-t border-purple-600 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
//           <p>© {currentYear} Rsquaresoft. All rights reserved.</p>
//           <a href="#" className="mt-2 md:mt-0 hover:text-white transition duration-220">Privacy Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// }











// import React from "react";
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white py-10 px-6 md:px-16 z-50">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-xl font-bold mb-3">Rsquaresoft</h3>
//           <p className="text-sm text-gray-400">
//             Driving innovation with scalable and secure tech solutions for the digital future.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm text-gray-300">
//             <li><a href="#about" className="hover:text-white">About Us</a></li>
//             <li><a href="#services" className="hover:text-white">Services</a></li>
//             <li><a href="#careers" className="hover:text-white">Careers</a></li>
//             <li><a href="#contact" className="hover:text-white">Contact</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Contact</h4>
//           <p className="text-sm text-gray-300 mb-1">Email:</p>
//           <a href="mailto:info@rsquaresoft.com" className="text-sm text-gray-400 hover:text-white">
//             info@rsquaresoft.com
//           </a>
//         </div>

//         {/* Social Media */}
//         <div>
//           <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//           <div className="flex space-x-4">
//             <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
//             <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
//             <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
//             <a href="#" className="hover:text-pink-400"><FaInstagram /></a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Strip */}
//       <div className="mt-10 text-center text-xs text-gray-500">
//         © {new Date().getFullYear()} Rsquaresoft. All rights reserved.
//       </div>
//     </footer>
//   );
// }
