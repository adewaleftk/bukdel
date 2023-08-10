import '../styles/delicaciesdashboard.css'
import DashboardNav from '../components/DashboardNav'
import OrderFood from '../images/orderfood-icon.png'
import Track from '../images/track.png'
import Start from '../images/start.png'
import Manage from '../images/manage.png'
import Cart from '../images/cart.png'
import { NavLink } from 'react-router-dom'

function DelicaciesDashboard() {
  return (
    <div className='delicacies-dashboard'>
        <DashboardNav />
        <div className='delicacies-dashboard-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Delicacies</NavLink>
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
            <h2>Delicacies</h2>
            <div className='delicacies-order'>
                <div>
                    <NavLink to="/delicacies-dashboard/orderfood-dashboard">
                        <img src={OrderFood} />
                        <h3>Order food</h3>
                        <p>Book or Request your food and get it delivered to you in less</p>
                        <p>than 24 hours</p>
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
                    <img src={Start} />
                    <h3>Start a Food Plan</h3>
                    <p>Customize and plan your food options for a month and let us</p>
                    <p>handle it for you</p>
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