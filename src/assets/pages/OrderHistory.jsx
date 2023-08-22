import { useState, useEffect } from 'react';
import '../styles/orderhistory.css';
import MobileDashboardNav from '../components/MobileDashboardNav';
import DashboardNav from '../components/DashboardNav';
import { NavLink } from 'react-router-dom';
import Cart from '../images/cart.png';
import usePackageStore from '../../store';
import { useNavigate } from 'react-router-dom';

function OrderHistory() {
  const isMobile = window.innerWidth < 768;
  const cartItems = usePackageStore((state) => state.cartItems);
  const logout = usePackageStore((state) => state.logout);
  const navigate = useNavigate();
  const user = usePackageStore((state) => state.user);
  const userId = user.user_id;
  const userToken = usePackageStore((state) => state.userToken);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    getOrderHistory();
  }, []);

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

  const openPopup = async (order_id) => {
    try {
      // const order_id = transactionHistory.id
      // console.log(transactionHistory.id);
      console.log(order_id);
      const response = await fetch(`https://bukdelbe.vercel.app/api/v1/foods/track/${userId}/${order_id}`, {
        headers: {
          'x_token': userToken,
        },
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Tracking Details:', responseData);
        setOrderDetails(responseData);
        console.log(orderDetails);
        setShowPopup(true);
      } else {
        console.error('Failed to fetch tracking details');
        const responseData = await response.json();
        console.log(responseData);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='order-history'>
      {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
      <div className='order-history-body'>
        <div className='heading'>
          <div>
            <NavLink to="/delicacies-dashboard">Order History</NavLink>
          </div>
          <div className='start-food-heading-cart'>
            <div className='start-food-plan-cart-group'>
              <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">
                <img src={Cart} className="cart-image" /> {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
              </NavLink>
              <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">Cart</NavLink>
            </div>
            <div>
              <button onClick={handleLogout}>Log Out</button>
            </div>
          </div>
        </div>
        <p className='order-history--heading'>Order History</p>
        <div className='order-history--content'>
          <div>
            <h2>Transaction History</h2>
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
              <h2>Tracking Details</h2>
              {orderDetails ? (
                <div>
                  {/* Display the tracking details from the orderDetails state */}
                  {/* For example: */}
                  <p>{orderDetails.message}</p>
                  <p>Delivery Status: {orderDetails.current_state}</p>
                  {/* ...and so on */}
                </div>
              ) : (
                <p>Loading tracking details...</p>
              )}
              <button onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OrderHistory;
