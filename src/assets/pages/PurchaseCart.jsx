import '../styles/purchasecart.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom';
import Cart from '../images/cart.png'
import Delete from '../images/delete-icon.png'
import usePackageStore from '../../store';
import { useNavigate } from 'react-router-dom';
import MobileDashboardNav from '../components/MobileDashboardNav';
import { useEffect } from 'react';
import { useState } from 'react';
import Cancel from '../images/cancel.png'

const PurchaseCart = () => {


    const isMobile = window.innerWidth < 768;
    const [cartItems, setCartItems] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const deliveryFee = 3000;
    const totalFee = deliveryFee + totalPrice ;
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const handleLogout = () => {
        logout(); 
        navigate('/');
    };
    const user = usePackageStore(state => state.user);
    const userId = user.user_id;
    const userToken = usePackageStore((state) => state.userToken);
    const handleClosePopup = () => {
      setShowPopup(false);
  }

    useEffect(() => {
        fetchCart();
    }, []);

    async function deleteFromCart(product_id) {
      try {
        const response = await fetch(`https://bukdelbe.vercel.app/api/v1/carts/delete/${userId}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            'x_token': userToken,
          },
          body: JSON.stringify({
            "cart_id": product_id
          }),
        });
    
        if (response.ok) {
          console.log('Item removed from cart');
          fetchCart();
        } else {
          console.error('Failed to remove item from cart');
          const errorData = await response.json();
          console.log('Error data:', errorData);
          // Handle failure, display an error message, update UI, etc.
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle network error or other exceptions
      }
    }
    
    async function checkOut() {
      try {
        const response = await fetch(`https://bukdelbe.vercel.app/api/v1/orders/checkout/${userId}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x_token': userToken,
          },
          body: JSON.stringify({
            cartItems,
            totalPrice,
            deliveryFee,
            totalFee,
          }),
        });
  
        if (response.ok) {
          console.log('Checkout successful');
          usePackageStore.setState({ cartItems: [] });
          setCartItems([]);
          setShowPopup(true);
          // navigate('/delicacies-dashboard/orderfood-dashboard/purchase/checkout');
        } else {
          console.error('Checkout failed');
          const errorData = await response.json();
          console.log('Error data:', errorData);
          // Handle failure, display an error message, update UI, etc.
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle network error or other exceptions
      }
    }

    async function fetchCart() {
        try {
          const response = await fetch(`https://bukdelbe.vercel.app/api/v1/carts/${userId}`, {
            headers: {
              'Content-Type': 'application/json',
              'x_token': userToken,
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Cart Loaded Successfully');
            setTotalPrice(responseData.total);
            console.log(responseData)
            if (Array.isArray(responseData.data)) {
              console.log('Cart Data:', responseData.data);
              setTotalPrice(responseData.total);
              setCartItems(responseData.data);
          } else {
              console.error('Cart data is not an array:', responseData.data);
          }
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
                  {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                      <div><span className='item-name'><img src={item.image} alt={item.name} />{item.name}</span></div>
                      <div><span>&#8358;{item.price}</span></div>
                      <p>{item.qty}</p>
                      <div><button onClick={() => deleteFromCart(item.id)}><img src={Delete} /></button></div>
                    </div>
                  ))}
            </div>
            <div className='total-buttons'>
              <div className='total'>
                <span>Sub-Total: &#8358;{totalPrice}</span>
                <span>Delivery Fee: &#8358;{deliveryFee}</span>
                <span>Total Amount: &#8358;{totalFee}</span>
              </div>
              <div className='buttons'>
                <NavLink to="/delicacies-dashboard/orderfood-dashboard">Continue to Shopping</NavLink>
                <button onClick={checkOut}>Checkout</button>
              </div>
            </div>
      </div>

      {showPopup && (
                <div className='popup'>
                    <div className='popup-content'>
                        <div className='ready-heading'>
                            <p className='ready-to-proceed'>Success</p>
                            <button onClick={handleClosePopup}><img src={Cancel} /></button>
                        </div>
                        <p>Your have successfully placed your order.</p>
                        <p>Now sit back and relax while we</p>
                        <p>get your meal delivered in a jiffy.</p>
                        <div className='proceed-to-pay-button'>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                        {/* {sendError && <p className="error-message">{sendError}</p>} */}
                    </div>
                </div>
            )}
    </div>
  );
};

export default PurchaseCart;
