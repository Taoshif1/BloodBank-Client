import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { BiDonateBlood } from "react-icons/bi";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  const [open, setOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
      // toast success if you have toast
    } catch (err) { /* ignore */ }
    setOpen(false);
  };

  return (
    <>
      <header className="app-navbar">
        <div className="container">
          <Link to="/" className="brand">
            <BiDonateBlood className="icon" />
            <span><span style={{color:'#ef4444'}}>Blood</span>Donor</span>
          </Link>

          <nav className="nav-links" aria-label="main-navigation">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/donation-requests">Donation Requests</NavLink>
            <NavLink to="/search-donors">Search Donors</NavLink>
            {user && <NavLink to="/funding">Funding</NavLink>}
          </nav>

          <div className="actions">
            {!user ? (
              <>
                <Link to="/login" className="link-cta">Login</Link>
                <Link to="/register" className="btn btn-primary">Register</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard" className="link-cta">Dashboard</Link>
                <button onClick={handleLogout} className="btn">Logout</button>
              </>
            )}

            <button
              className="mobile-toggle"
              aria-label="menu"
              onClick={() => setOpen(s => !s)}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile panel */}
      {open && (
        <div className="mobile-panel">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/donation-requests" onClick={() => setOpen(false)}>Donation Requests</Link>
          <Link to="/search-donors" onClick={() => setOpen(false)}>Search Donors</Link>
          {!user ? (
            <>
              <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
              <Link to="/register" onClick={() => setOpen(false)}>Register</Link>
            </>
          ) : (
            <>
              <Link to="/dashboard" onClick={() => setOpen(false)}>Dashboard</Link>
              <button onClick={handleLogout} style={{marginTop:8}}>Logout</button>
            </>
          )}
        </div>
      )}
    </>
  );
}
