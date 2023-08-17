import DashboardNav from "../components/DashboardNav"
import '../styles/dashboard.css'
import OrderFood from '../images/orderfood-icon.png'
import SendPackages from '../images/sendpackages-icon.png'
import { NavLink } from "react-router-dom"
import usePackageStore from "../../store"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"

function Dashboard() {
    // const isLoggedIn = usePackageStore(state => state.isLoggedIn);
    const userToken = usePackageStore(state => state.userToken);
    const navigate = useNavigate();
    const logout = usePackageStore(state => state.logout);

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

    function addMoney(event) {
        event.preventDefault;
    }

    useEffect(() => {
        if (!userToken) {
            // User is not logged in, redirect to login page
            navigate('/login');
        }
    }, [userToken, navigate]);


  return (
    
    <div className="dashboard">
        <DashboardNav />
        <div className="dashboard-body">
            <div className="dashboard--logout">
                <div>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </div>
                <div>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <p className="dashboard--heading">Dashboard</p>
            <div className="wallet-balance">
                <div>
                    <p className="wallet-balance--heading">Wallet Balance</p>
                    <p className="amount">&#8358;100,000</p>
                </div>
                <button onClick={addMoney} >Add Money</button>
            </div>
            <div className="order-notifications">
                <div className="order-info">
                    <div>
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard">
                            <img src={OrderFood} />
                            <h3>Order food</h3>
                            <p>Book or Request your food and get it delivered to you in less</p>
                            <p>than 24 hours</p>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/logistics-dashboard/send">
                            <img src={SendPackages} />
                            <h3>Send Packages</h3>
                            <p>Book or Request a delivery ride and get a rider assigned in less</p>
                            <p>than 24 hours</p>
                        </NavLink>
                    </div>
                </div>
                <div className="notifications">
                    <h2>Recent Notifications</h2>
                    <div className="notifications-details">
                        <div className="notifications-details-info">
                            <div>Your package has been delivered</div>
                            <div>13th April, 2023</div>
                        </div>
                        <div className="notifications-details-info">
                            <div>successfully</div>
                            <div>1:00PM</div>
                        </div>
                    </div>
                    <div className="notifications-details">
                        <div className="notifications-details-info">
                            <div>Your package has been delivered</div>
                            <div>13th April, 2023</div>
                        </div>
                        <div className="notifications-details-info">
                            <div>successfully</div>
                            <div>1:00PM</div>
                        </div>
                    </div>
                    <div className="notifications-details">
                        <div className="notifications-details-info">
                            <div>Your package has been delivered</div>
                            <div>13th April, 2023</div>
                        </div>
                        <div className="notifications-details-info">
                            <div>successfully</div>
                            <div>1:00PM</div>
                        </div>
                    </div>
                    <div className="notifications-details">
                        <div className="notifications-details-info">
                            <div>Your food has been picked up by the driver</div>
                            <div>13th April, 2023</div>
                        </div>
                        <div className="notifications-details-info">
                            <div>and would get to you soon</div>
                            <div>1:00PM</div>
                        </div>
                    </div>
                    <div className="notifications-details">
                        <div className="notifications-details-info">
                            <div>Your order has successfully</div>
                            <div>13th April, 2023</div>
                        </div>
                        <div className="notifications-details-info">
                            <div>been confirmed</div>
                            <div>1:00PM</div>
                        </div>
                    </div>
                    <div className="notifications-details">
                        <div className="notifications-details-info">
                            <div>You have successfully top-up</div>
                            <div>13th April, 2023</div>
                        </div>
                        <div className="notifications-details-info">
                            <div>your wallet with &#8358;5,000</div>
                            <div>1:00PM</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard