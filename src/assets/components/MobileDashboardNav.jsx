import '../styles/mobiledashboardnav.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function MobileDashboardNav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

  return (
    <nav className={`mobiledashboardnav ${menuOpen ? 'open' : ''}`}>
        <div>
            <NavLink to="/" id="mobile-dashboard-logo">BUKDEL</NavLink>
        </div>
        <div className="links-container">
            <NavLink to="/dashboard">Dashboard</NavLink>
            <NavLink to="/delicacies-dashboard">Order Food</NavLink>
            <NavLink to="/logistics-dashboard">Logistics</NavLink>
            <NavLink to="/events-dashboard">Events</NavLink>
            <NavLink to="/profile-dashboard">Profile</NavLink>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`hamburger ${menuOpen ? 'open' : ''}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </div>
    </nav>
  )
}

export default MobileDashboardNav