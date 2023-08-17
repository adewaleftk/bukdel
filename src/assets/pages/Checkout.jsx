import '../styles/checkout.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
import { useNavigate } from 'react-router-dom'
import usePackageStore from '../../store'

function Checkout() {
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

 
  return (
    <div className='checkout'>
        <DashboardNav />
        <div className='checkout-body'>
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
            <div className='checkout-content'>
                <h2>Checkout</h2>
                <h3>Shipping Address</h3>
                <div className='checkout-address'>
                    <p>25, Embassy Lodge, FUTA South Gate</p>
                    <p>Akure, Ondo State.</p>
                    <div className='change-address'>
                        <div>+23422233345</div>
                        <div>Change Address</div>
                    </div>
                </div>
                <div className='delivery-method'>
                    <h3>Delivery Method</h3>
                    <p>How do you want your orders delivered?</p>
                    <div className='delivery-method-options'>
                        <div>
                            <label htmlFor="door-delivery">Door Delivery</label>
                            <input type="radio" id="door-delivery" name="delivery" value="door-delivery" required />
                        </div>
                        <div>
                            <label htmlFor="pickup">Pickup</label>
                            <input type="radio" id="pickup" name="delivery" value="pickup" required />
                        </div>
                    </div> 
                </div>
                <div className='total-buttons'>
                    <div className="total">
                        <span>Sub-Total: &#8358;</span>
                        <span>Delivery Fee: &#8358;</span>
                        <span>Total Amount: &#8358;</span>
                    </div>
                    <div className="buttons">
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">Back</NavLink>
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase/checkout/payment">Continue</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout