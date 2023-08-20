import '../styles/delicaciesdashboard.css'
import DashboardNav from '../components/DashboardNav'
import OrderFood from '../images/orderfood-icon.png'
import Track from '../images/track.png'
import Start from '../images/start.png'
import Manage from '../images/manage.png'
import Cart from '../images/cart.png'
import { NavLink } from 'react-router-dom'
import usePackageStore from '../../store'
import { useNavigate } from 'react-router-dom'
import MobileDashboardNav from '../components/MobileDashboardNav'

function DelicaciesDashboard() {
    const cartItems = usePackageStore((state) => state.cartItems);
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();
    const isMobile = window.innerWidth < 768;

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };


  return (
    <div className='delicacies-dashboard'>
        {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='delicacies-dashboard-body'>
        <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Delicacies</NavLink>
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
            <p className='delicacy---heading'>Delicacies</p>
            <div className='delicacies-order'>
                <div>
                    <NavLink to="/delicacies-dashboard/orderfood-dashboard">
                        <img src={OrderFood} />
                        <h3>Order food</h3>
                        <p>Book or Request your food and get it delivered to you in</p>
                        <p>less than 24 hours</p>
                    </NavLink>
                </div>
                <div>
                    <img src={Track} />
                    <h3>Track Your Food</h3>
                    <p>Stay informed about the progress of your delivery with</p>
                    <p>monitoring and regular update</p>
                </div>
            </div>
            <div className='food-plan'>
                <div>
                    <NavLink to="/delicacies-dashboard/start-food-plan">
                    <img src={Start} />
                    <h3>Start a Food Plan</h3>
                    <p>Customize and plan your food options for a month and</p>
                    <p>let us handle it for you</p>
                    </NavLink>
                </div>
                <div>
                    <img src={Manage} />
                    <h3>Manage Your Food Plan</h3>
                    <p>Manage your food plans.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DelicaciesDashboard