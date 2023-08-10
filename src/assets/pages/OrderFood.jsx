import '../styles/orderfood.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
import Spaghetti from '../images/spaghetti.png'

function OrderFood() {
  return (
    <div className='orderfood'>
      <DashboardNav />
      <div className='orderfood-body'>
          <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Delicacies &gt; Order Food</NavLink>
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
            <div>
              <h2>Order Food</h2>
            </div>
            <div className='foods-body'>
              <div className='foods-body--heading'>
                <div>Pasta and Grains</div>
                <div className='pasta-category'>
                  <div>Category</div>
                  <div>Pasta and Grains</div>
                </div>
              </div>
              <div className='foods'>
                <div>
                  <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
              </div>
              <div className='foods'>
                <div>
                  <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
              </div>
              <div className='foods'>
                <div>
                  <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
                <div>
                <img src={Spaghetti} />
                  <p>Spaghetti</p>
                  <p>&#8358;1500</p>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default OrderFood