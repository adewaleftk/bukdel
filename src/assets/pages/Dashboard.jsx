import DashboardNav from "../components/DashboardNav"
import '../styles/dashboard.css'
import OrderFood from '../images/orderfood-icon.png'
import SendPackages from '../images/sendpackages-icon.png'
import { NavLink } from "react-router-dom"

function Dashboard() {

    function addMoney() {
        event.preventDefault;
    }
  return (
    
    <div className="dashboard">
        <DashboardNav />
        <div className="dashboard-body">
            <div className="dashboard--logout">
                <div>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </div>
                <div>
                    <NavLink to="/">Log Out</NavLink>
                </div>
            </div>
            <h2>Dashboard</h2>
            <div className="wallet-balance">
                <div><h4>Wallet Balance</h4></div>
                <div className="money"><div>&#8358;100,000 </div><div><button onClick={addMoney} >Add Money</button></div></div>
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
                        <img src={SendPackages} />
                        <h3>Send Packages</h3>
                        <p>Book or Request a delivery ride and get a rider assigned in less</p>
                        <p>than 24 hours</p>
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