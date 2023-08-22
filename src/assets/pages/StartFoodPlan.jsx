import '../styles/startfoodplan.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
import usePackageStore from '../../store'
import Food from '../images/small-food.png'
import { useNavigate } from 'react-router-dom'
import MobileDashboardNav from '../components/MobileDashboardNav'

function StartFoodPlan() {
    const isMobile = window.innerWidth < 768;
    const cartItems = usePackageStore((state) => state.cartItems);
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

  return (
    <div className='start-food-plan'>
       {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='start-food-plan--body'>
            <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Delicacies &gt; Start Food Plan</NavLink>
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
            <p className='start-food-plan--topic'>Start a Food Plan</p>
            <div className='start-food-plan--content'>
                <div>
                    <p>Here is Your Meal Plan</p>
                    <p>You can review the meals and make changes as you see fit.</p>
                </div>
                <div className='start-food-plan--content-group'>
                    <div className='day-group'>
                        <div className='day-heading'>Monday</div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                    </div>
                    <div className='day-group'>
                        <div className='day-heading'>Tuesday</div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                    </div>
                </div>
                <div className='start-food-plan--content-group'>
                <div className='day-group'>
                        <div className='day-heading'>Wednesday</div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                        <div className='day-group-info'>
                            <div className='food-menu'>
                                <img src={Food} />
                                <div>
                                    <p className='main-food'>White Rice</p>
                                    <p className='food-topping'>With Stew</p>
                                </div>
                            </div>
                            <button>Change Meal</button>
                        </div>
                    </div>
                    <div className='pay-group'>
                        <p>Total Amount</p>
                        <button>Next</button>
                        <button>Reset Options</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StartFoodPlan