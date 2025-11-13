// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter, FaLocationDot, FaPhone, FaEnvelope } from "react-icons/fa6";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-md bg-amber-500 flex items-center justify-center mr-2 ring-4 ring-amber-300/20">
                <span className="text-white font-black">B</span>
              </div>
              <span className="tracking-widest font-extrabold text-2xl text-white">
                BUI<span className="text-amber-400">D</span>EDGE
              </span>
            </div>
            <p className="text-gray-400">
              End‑to‑end construction services from site prep to finishing, delivered with precision, safety, and on‑time execution. 
            </p>
            <div className="flex gap-3 mt-5">
              <a aria-label="Facebook" href="https://facebook.com/buidedge" className="p-2.5 rounded-md bg-gray-800 hover:bg-amber-500 hover:text-white transition">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a aria-label="Instagram" href="https://instagram.com/buidedge" className="p-2.5 rounded-md bg-gray-800 hover:bg-amber-500 hover:text-white transition">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a aria-label="LinkedIn" href="https://linkedin.com/company/buidedge" className="p-2.5 rounded-md bg-gray-800 hover:bg-amber-500 hover:text-white transition">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a aria-label="YouTube" href="https://youtube.com/@buidedge" className="p-2.5 rounded-md bg-gray-800 hover:bg-amber-500 hover:text-white transition">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a aria-label="X" href="https://x.com/buidedge" className="p-2.5 rounded-md bg-gray-800 hover:bg-amber-500 hover:text-white transition">
                <FaXTwitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-amber-400">Services</a></li>
              <li><a href="#projects" className="hover:text-amber-400">Projects</a></li>
              <li><a href="#about" className="hover:text-amber-400">About</a></li>
              <li><a href="#contact" className="hover:text-amber-400">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaLocationDot className="mt-1 text-amber-400" />
                <span>2nd Floor, BUIDEDGE House, MG Road, Bengaluru, KA 560001</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-amber-400" />
                <a href="tel:+919876543210" className="hover:text-amber-400">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-amber-400" />
                <a href="mailto:contact@buidedge.com" className="hover:text-amber-400">contact@buidedge.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-sm flex flex-col md:flex-row items-center justify-between">
          <p>© {year} BUIDEDGE. All rights reserved.</p>
          <div className="flex gap-5 mt-3 md:mt-0">
            <a href="/privacy" className="hover:text-amber-400">Privacy Policy</a>
            <a href="/terms" className="hover:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
