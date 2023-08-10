import '../styles/purchasecart.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Cart from '../images/cart.png'
import Delete from '../images/delete-icon.png'
import MiniSpag from '../images/spaghetti-icon.png'

const PurchaseCart = () => {
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
    <div className="purchase-cart">
        <DashboardNav />
        <div className='purchase-cart-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">Cart</NavLink>
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
            <div className='cart-list'>
                <h3>Purchase Order Cart</h3>
                <div className='cart-list-heading'>
                    <div>Product</div>
                    <div>Unit Price(&#8358;)</div>
                    <div>Quantity</div>
                    <div>Total Price(&#8358;)</div>
                    <div>Action</div>
                </div>
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <div><span className='item-name'><img src={MiniSpag} />{item.name}</span></div>
                        <div><span>&#8358;{item.unitPrice}</span></div>
                        <div className='toggle-quantity'><button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button></div>
                        <div><span>&#8358;{item.unitPrice * item.quantity}</span></div>
                        <div><button onClick={() => removeCartItem(item.id)}><img src={Delete} /></button></div>
                    </div>
                ))}
                <div className='total-buttons'>
                    <div className="total">
                        <span>Sub-Total: &#8358;{subTotal}</span>
                        <span>Delivery Fee: &#8358;{deliveryFee}</span>
                        <span>Total Amount: &#8358;{totalAmount}</span>
                    </div>
                    <div className="buttons">
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard">Continue to Shopping</NavLink>
                        <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase/checkout">Checkout</NavLink>
                    </div>
                </div>
            </div>
      </div>
    </div>
  );
};

export default PurchaseCart;
