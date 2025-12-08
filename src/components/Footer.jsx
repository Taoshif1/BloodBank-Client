import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-error mb-4">🩸 BloodDonor</h3>
            <p className="text-gray-400">
              Saving lives, one donation at a time. Join our community of heroes today.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-error">Home</Link></li>
              <li><Link to="/donation-requests" className="text-gray-400 hover:text-error">Donation Requests</Link></li>
              <li><Link to="/search-donors" className="text-gray-400 hover:text-error">Search Donors</Link></li>
              <li><Link to="/funding" className="text-gray-400 hover:text-error">Funding</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-error">About Blood Donation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-error">FAQs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-error">Eligibility</a></li>
              <li><a href="#" className="text-gray-400 hover:text-error">Contact Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl text-gray-400 hover:text-error transition-colors">
                <FaFacebook />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-error transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-error transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="text-2xl text-gray-400 hover:text-error transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>Copyright © 2025 BloodDonor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;