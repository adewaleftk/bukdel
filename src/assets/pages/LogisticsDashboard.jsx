import '../styles/logisticsdashboard.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Send from '../images/sendpackages-icon.png'
import TrackPackage from '../images/trackpackage-icon.png'
import GetEstimate from '../images/getestimate-icon.png'
import PackageHistory from '../images/packagehistory-icon.png'
import { useNavigate } from 'react-router-dom'
import usePackageStore from '../../store'
import MobileDashboardNav from '../components/MobileDashboardNav'

function LogisticsDashboard() {

    const isMobile = window.innerWidth < 768;
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

  return (
    <div className='logistics-dashboard'>
    {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
      <div className='logistics-dashboard-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/logistics-dashboard">Logistics</NavLink>
                </div>
                <div>
                      <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <p className='logistics--heading'>Logistics</p>
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
                    <NavLink to="/logistics-dashboard/get-estimate">
                        <img src={GetEstimate} />
                        <h3>Get Estimates</h3>
                        <p>Choose your pick-up and drop-off locations to get an estimate</p>
                        <p>cost for your delivery at the most competitive rates</p>
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/logistics-dashboard/package-history">
                        <img src={PackageHistory} />
                        <h3>Package History</h3>
                        <p>Easily view your past orders on our Package History Page</p>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LogisticsDashboard