import { Link } from 'react-router-dom';
import { FaSearch, FaHandHoldingHeart } from 'react-icons/fa';

const Banner = () => {
  return (
    <div className="hero min-h-[500px] bg-gradient-to-r from-red-50 to-pink-50">
      <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto px-4">
        <div className="flex-1">
          <img 
            src="https://i.ibb.co/74y64b9/blood-donation.png" 
            className="max-w-sm w-full rounded-lg drop-shadow-2xl" 
            alt="Blood Donation"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold text-gray-800">
            Donate Blood, <span className="text-error">Save Lives</span>
          </h1>
          <p className="py-6 text-lg text-gray-600">
            Your single donation can save up to three lives. Join our community of heroes 
            and make a difference today. Every drop counts in saving precious lives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/register" 
              className="btn btn-error text-white gap-2"
            >
              <FaHandHoldingHeart />
              Join as a Donor
            </Link>
            <Link 
              to="/search-donors" 
              className="btn btn-outline btn-error gap-2"
            >
              <FaSearch />
              Search Donors
            </Link>
          </div>
          
          {/* Stats */}
          <div className="stats shadow mt-8">
            <div className="stat">
              <div className="stat-title">Lives Saved</div>
              <div className="stat-value text-error">2.4K</div>
            </div>
            
            <div className="stat">
              <div className="stat-title">Active Donors</div>
              <div className="stat-value text-error">850+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;