import { Link, NavLink } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const { user, logoutUser } = useAuth();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/donation-requests">Donation Requests</NavLink></li>
      {user && (
        <>
          <li><NavLink to="/funding">Funding</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl text-error font-bold">
          🩸 BloodDonor
        </Link>
      </div>
      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks}
        </ul>
      </div>
      
      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                {user.photoURL ? (
                  <img alt="User avatar" src={user.photoURL} />
                ) : (
                  <div className="flex items-center justify-center w-full h-full bg-primary text-white">
                    <FaUser />
                  </div>
                )}
              </div>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogout}>Logout</button></li>
            </ul>
          </div>
        ) : (
          <Link to="/login" className="btn btn-error btn-sm text-white">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;