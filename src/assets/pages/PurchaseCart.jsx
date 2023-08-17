import '../styles/purchasecart.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom';
import Cart from '../images/cart.png'
import Delete from '../images/delete-icon.png'
import MiniSpag from '../images/spaghetti-icon.png'
import usePackageStore from '../../store';
import { useNavigate } from 'react-router-dom';

const PurchaseCart = () => {

  const increaseQuantity = usePackageStore(state => state.increaseQuantity);
  const decreaseQuantity = usePackageStore(state => state.decreaseQuantity);
  const cartItems = usePackageStore((state) => state.cartItems);
  const removeFromCart = usePackageStore(state => state.removeFromCart);

  const subTotal = cartItems.reduce((total, item) => total + item.unitPrice * item.quantity, 0);
  const deliveryFee = "";
  const totalAmount = subTotal + deliveryFee;

  const logout = usePackageStore(state => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };


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
                        <button onClick={handleLogout}>Log Out</button>
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
                {cartItems.map((item, index) => (
                    <div key={index} className="cart-item">
                        <div><span className='item-name'><img src={MiniSpag} />{item.name}</span></div>
                        <div><span>&#8358;{item.price}</span></div>
                        <div className='toggle-quantity'><button  onClick={() => decreaseQuantity(item)}>-</button>
                        <span>{item.quantity}</span>
                        <button  onClick={() => increaseQuantity(item)}>+</button></div>
                        <div><span>&#8358;{item.total}</span></div>
                        <div><button onClick={() => removeFromCart(item)}><img src={Delete} /></button></div>
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
