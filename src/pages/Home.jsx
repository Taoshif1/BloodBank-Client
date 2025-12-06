import Banner from '../components/Banner';
import Ticker from '../components/Ticker';
import { FaHandHoldingHeart, FaUsers, FaHeartbeat } from 'react-icons/fa';

const Home = () => {
  return (
    <div>
      {/* Scrolling Ticker */}
      <Ticker />
      
      {/* Banner */}
      <Banner />
      
      {/* Features Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Why Donate Blood?
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaHandHoldingHeart className="text-6xl text-error mb-4" />
              <h3 className="card-title text-2xl">Save Lives</h3>
              <p className="text-gray-600">
                One donation can save up to three lives. Be a hero for someone in need.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaUsers className="text-6xl text-error mb-4" />
              <h3 className="card-title text-2xl">Join Community</h3>
              <p className="text-gray-600">
                Connect with thousands of donors and make a real difference together.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <div className="card-body items-center text-center">
              <FaHeartbeat className="text-6xl text-error mb-4" />
              <h3 className="card-title text-2xl">Health Benefits</h3>
              <p className="text-gray-600">
                Regular donation improves your cardiovascular health and reduces risks.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
            Get in Touch
          </h2>
          <div className="max-w-md mx-auto">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" placeholder="email@example.com" className="input input-bordered" />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea className="textarea textarea-bordered h-24" placeholder="Your message"></textarea>
            </div>
            <button className="btn btn-error text-white w-full mt-4">Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;