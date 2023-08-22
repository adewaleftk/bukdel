import '../styles/purchasecart.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom';
import Cart from '../images/cart.png'
import Delete from '../images/delete-icon.png'
import MiniSpag from '../images/spaghetti-icon.png'
import usePackageStore from '../../store';
import { useNavigate } from 'react-router-dom';
import MobileDashboardNav from '../components/MobileDashboardNav';
import { useEffect } from 'react';

const PurchaseCart = () => {


    const isMobile = window.innerWidth < 768;
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
    const user = usePackageStore(state => state.user);
    const userId = user.user_id;
    const userToken = usePackageStore((state) => state.userToken);

    useEffect(() => {
        fetchCart();
    }, []);
    async function fetchCart() {
        try {
          const response = await fetch(`http://bukdelbe.vercel.app/api/v1/carts/${userId}`, {
            headers: {
              'Content-Type': 'application/json',
              'x_token': userToken,
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Cart Loaded Successfully');
            console.log(responseData);
          } else {
            console.error('Failed to fetch cart');
            const responseData = await response.json();
            console.log(responseData);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }


  return (
    <div className="purchase-cart">
        {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
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
