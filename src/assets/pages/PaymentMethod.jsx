import '../styles/paymentmethod.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
import { useState } from 'react'

function PaymentMethod() {
        const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Spaghetti', unitPrice: 1500, quantity: 2 },
        { id: 2, name: 'Jollof Rice', unitPrice: 1500, quantity: 1 },
        { id: 3, name: 'Fanta', unitPrice: 200, quantity: 2 },
        { id: 2, name: 'Jollof Rice', unitPrice: 1500, quantity: 1 },
        { id: 3, name: 'Fanta', unitPrice: 200, quantity: 2 },
        // ... other cart items
      ]);
    
      const removeCartItem = (itemId) => {
        const updatedCart = cartItems.filter(item => item.id !== itemId);
        setCartItems(updatedCart);
      };
    
      const updateQuantity = (itemId, newQuantity) => {
        if (newQuantity >= 0) {
          const updatedCart = cartItems.map(item =>
            item.id === itemId ? { ...item, quantity: newQuantity } : item
          );
          setCartItems(updatedCart);
        }
      };  
    
      const subTotal = cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
      const deliveryFee = 5;
      const totalAmount = subTotal + deliveryFee;
  return (
    <div className='payment-method'>
        <DashboardNav />
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
                        <NavLink to="/">Log Out</NavLink>
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
                        <span>Sub-Total: &#8358;{subTotal}</span>
                        <span>Delivery Fee: &#8358;{deliveryFee}</span>
                        <span>Total Amount: &#8358;{totalAmount}</span>
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