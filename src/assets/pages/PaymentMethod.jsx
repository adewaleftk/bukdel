import '../styles/paymentmethod.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
import usePackageStore from '../../store'
import { useNavigate } from 'react-router-dom'
import MobileDashboardNav from '../components/MobileDashboardNav'

function PaymentMethod() {
    const isMobile = window.innerWidth < 768;
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

  return (
    <div className='payment-method'>
        {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='payment-method-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Cart &gt; Checkout</NavLink>
                </div>
                <div className='heading-cart'>
                    <div>
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase"><img src={Cart} />Cart</NavLink>
                    </div>
                    <div>
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
            <h2>Cart</h2>
            <div className='payment-method-content'>
                <h2>Checkout</h2>
                <h3>Payment Method</h3>
                <p>How would you like to pay for your orders?</p>
                <div className='payment-method-options'>
                    <div>
                        <label htmlFor="card-payment">Pay with Card</label>
                        <input type="radio" id="card-payment" name="payment" value="card-payment" required />
                    </div>
                    <div>
                        <label htmlFor="wallet-payment">Pay with wallet</label>
                        <input type="radio" id="wallet-payment" name="payment" value="wallet-payment" required />
                    </div>
                </div> 
                <div className='total-buttons'>
                    <div className="total">
                        <span>Sub-Total: &#8358;{}</span>
                        <span>Delivery Fee: &#8358;{}</span>
                        <span>Total Amount: &#8358;{}</span>
                    </div>
                    <div className="buttons">
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase/checkout">Back</NavLink>
                        <NavLink to="/">Continue</NavLink>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default PaymentMethod