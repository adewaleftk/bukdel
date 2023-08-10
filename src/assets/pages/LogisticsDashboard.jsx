import '../styles/logisticsdashboard.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Send from '../images/sendpackages-icon.png'
import TrackPackage from '../images/trackpackage-icon.png'
import GetEstimate from '../images/getestimate-icon.png'
import PackageHistory from '../images/packagehistory-icon.png'

function LogisticsDashboard() {
  return (
    <div className='logistics-dashboard'>
      <DashboardNav />
      <div className='logistics-dashboard-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/logistics-dashboard">Logistics</NavLink>
                </div>
                <div>
                      <NavLink to="/">Log Out</NavLink>
                </div>
            </div>
            <h2>Logistics</h2>
            <div className='logistics-send'>
                <div>
                    <NavLink to="/logistics-dashboard/send">
                    <img src={Send} />
                    <h3>Send Packages</h3>
                    <p>Book or Request a delivery ride and get a rider assigned in less</p>
                    <p>than 24 hours</p>
                    </NavLink>
                </div>
                <div>
                    <img src={TrackPackage} />
                    <h3>Track Your Packages</h3>
                    <p>Stay informed about the progress of your delivery with</p>
                    <p>monitoring and regular update</p>
                </div>
            </div>
            <div className='logistics-estimate'>
                <div>
                    <img src={GetEstimate} />
                    <h3>Get Estimates</h3>
                    <p>Choose your pick-up and drop-off locations to get an estimate</p>
                    <p>cost for your delivery at the most competitive rates</p>
                </div>
                <div>
                    <img src={PackageHistory} />
                    <h3>Package History</h3>
                    <p>Easily view your past orders on our Package History Page</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogisticsDashboard