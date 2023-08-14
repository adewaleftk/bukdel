import '../styles/dashboardnav.css'
import Dashboard from '../images/dashboard-icon.png'
import Delicacies from '../images/delicacies-icon.png'
import Logistics from '../images/logistics-icon.png'
import Events from '../images/events-icon.png'
import Drinks from '../images/drinks-icon.png'
import Profile from '../images/profile-icon.png'
import { NavLink } from 'react-router-dom'

function DashboardNav() {
  return (
    <nav className="dashboardnav">
        <NavLink to="/" id="dashboard-logo">BUKDEL</NavLink>
        <NavLink to="/dashboard">
            <img src={Dashboard} />
            Dashboard
        </NavLink>
        <NavLink to="/delicacies-dashboard">
            <img src={Delicacies} />
            Delicacies
        </NavLink>
        <NavLink to="/logistics-dashboard">
            <img src={Logistics} />
            Logistics
        </NavLink>
        <a href="#">
            <img src={Events} />
            Events
        </a>
        <a href="#">
            <img src={Drinks} />
            Drinks
        </a>
        <NavLink to="/profile-dashboard">
            <img src={Profile} />
            Profile
        </NavLink>
    </nav>
  )
}

export default DashboardNav