import '../styles/events.css'
import DashboardNav from '../components/DashboardNav';
import MobileDashboardNav from '../components/MobileDashboardNav';
import { NavLink, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../store';
import Cart from '../images/cart.png'

function Events() {
    const isMobile = window.innerWidth < 768;
    const cartItems = usePackageStore((state) => state.cartItems);
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

  return (
    <div className='events-dashboard'>
        {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='events-dashboard-body'>
        <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Events</NavLink>
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
            <p className='delicacy---heading'>Events</p>
            <div className='events-dashboard-content'>
                <div>
                    <Link to="https://wa.me/+2347034542528">Order For Catering Service</Link>
                </div>
                <div>
                    <Link to="https://wa.me/+2347034542528">Event Management</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Events