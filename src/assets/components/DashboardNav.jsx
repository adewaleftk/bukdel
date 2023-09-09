import '../styles/dashboardnav.css'
import Dashboard from '../images/dashboard-icon.png'
import Delicacies from '../images/delicacies-icon.png'
import Logistics from '../images/logistics-icon.png'
import Events from '../images/events-icon.png'
import Profile from '../images/profile-icon.png'

import ProfilePicture from '../images/profile-picture.png'
import { NavLink } from 'react-router-dom'

function DashboardNav() {
    
  return (
    <nav className="dashboardnav">
        <NavLink to="/" id="dashboard-logo" style={{color: "#fff"}}>BUKDEL</NavLink>
        <NavLink to="/dashboard">
            <img src={Dashboard} />
            Dashboard
        </NavLink>
        <NavLink to="/delicacies-dashboard">
            <img src={Delicacies} />
            Order Food
        </NavLink>
        <NavLink to="/logistics-dashboard">
            <img src={Logistics} />
            Logistics
        </NavLink>
        <NavLink to="/events-dashboard">
            <img src={Events} />
            Events
        </NavLink>
        <NavLink to="/profile-dashboard">
            <img style={{width: 20, borderRadius: 30}} src={ProfilePicture} />
            Profile
        </NavLink>
    </nav>
  )
}

export default DashboardNav