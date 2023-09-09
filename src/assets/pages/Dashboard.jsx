import DashboardNav from "../components/DashboardNav"
import '../styles/dashboard.css'
import OrderFood from '../images/orderfood-icon.png'
import SendPackages from '../images/sendpackages-icon.png'
import usePackageStore from "../../store"
import { useNavigate, NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import MobileDashboardNav from "../components/MobileDashboardNav"
import Cancel from '../images/cancel.png'

function Dashboard() {
    const isMobile = window.innerWidth < 768;
    const userToken = usePackageStore(state => state.userToken);
    const navigate = useNavigate();
    const logout = usePackageStore(state => state.logout);
    const user = usePackageStore(state => state.user);
    const userId = user.user_id;
    const [balance, setBalance] = useState(0);
    const [showPopup, setShowPopup] = useState(false);
    const [accountNumber, setAccountNumber] = useState('');
    const [accountName, setAccountName] = useState('');
    const [bankName, setBankName] = useState('');
    const [message, setMessage] = useState('');
    const [transactionHistory, setTransactionHistory] = useState([]);
    

    useEffect(() => {
        topUpWallet();
    }, []);

    const handleProceedToPay = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };
    async function topUpWallet() {
        try {
          const response = await fetch(`https://bukdelbe.vercel.app/api/v1/wallets/topup/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x_token': userToken,
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log(responseData);
            setAccountName(responseData.account_name);
            setAccountNumber(responseData.account_number);
            setBankName(responseData.bank)
            setMessage(responseData.message)
          } else {
            console.error('Failed to top up wallet');
            const responseData = await response.json();
            console.log(responseData);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }
      

    async function getWalletBalance() {
        try {
          const response = await fetch(`https://bukdelbe.vercel.app/api/v1/wallets/getBalance/${userId}`, {
            method: 'GET',
            headers: {
              'x_token': userToken,
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            const balance = responseData.results.wallet;
            setBalance(balance)
          } else {
            console.error('Failed to fetch wallet balance');
            const errorData = await response.json();
            console.error(errorData);
            throw new Error('Failed to fetch wallet balance');
          }
        } catch (error) {
          console.error('An error occurred:', error);
          throw error;
        }
      }

      async function getOrderHistory() {
        try {
          const response = await fetch(`https://bukdelbe.vercel.app/api/v1/transactions/${userId}`, {
            headers: {
              'x_token': userToken,
            },
          });
    
          if (response.ok) {
            const responseData = await response.json();
            console.log('Transaction History:', responseData.data);
            setTransactionHistory(responseData.data);
          } else {
            console.error('Failed to fetch transaction history');
            const responseData = await response.json();
            console.log(responseData);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }


    useEffect(() => {
        getWalletBalance();
    }, []);

    useEffect(() => {
        getOrderHistory();
    }, []);
      

    useEffect(() => {
        if (!userToken) {
            navigate('/login');
        }
    }, [userToken, navigate]);


  return (
    
    <div className="dashboard">
        {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className="dashboard-body">
            <div className="dashboard--logout">
                <div>
                    <NavLink to="/dashboard"></NavLink>
                </div>
                <div>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            </div>
            <p className="dashboard--heading">Dashboard</p>
            <div className="wallet-balance">
                <div>
                    <p className="wallet-balance--heading">Wallet Balance</p>
                    <p className="amount">&#8358;{balance}</p>
                </div>
                <button onClick={handleProceedToPay} >Add Money</button>
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
                    <h2>Recent Transactions</h2>
                    {/* <div className="notifications-details">
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
                    </div> */}
                        {transactionHistory.length === 0 ? (
                        <p>No transactions available.</p>
                    ) : (
                        <ul>
                        {transactionHistory.map((transaction) => (
                            <li key={transaction.id}>
                            <p>Transaction ID: {transaction.id}</p>
                            <p>Amount: {transaction.name}</p>
                            <p>Amount: {transaction.price}</p>
                            <button onClick={() => openPopup(transaction.id)}>Track Order</button>
                            </li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
            {showPopup && (
                <div className='popup'>
                    <div className='popup-content'>
                        {/* Popup content goes here */}
                        <div className='ready-heading'>
                            <p className='ready-to-proceed'>Top Up Wallet</p>
                            <button onClick={handleClosePopup}><img src={Cancel} /></button>
                        </div>
                        <p>{message}</p>
                        <p>{accountNumber}</p>
                        <p>{accountName}</p>
                        <p>{bankName}</p>
                        <div className='proceed-to-pay-button'>
                            {/* <button >Proceed to Pay</button> */}
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default Dashboard