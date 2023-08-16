import '../styles/orderfood.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
import Spaghetti from '../images/spaghetti.png'
import usePackageStore from '../../store'

function OrderFood() {
  const addToCart = usePackageStore((state) => state.addToCart);
  const cartItems = usePackageStore((state) => state.cartItems);

  const foodItems = [
    // List of food items with their details
    { name: 'Spaghetti', price: 2000, image: Spaghetti },
    { name: 'Fanta', price: 500, image:Spaghetti },
    { name: 'Jollof Rice', price: 3000, image:Spaghetti },
    { name: 'Fried Rice', price: 3500, image:Spaghetti },
    
    // ... other food items
  ];

  return (
    <div className='orderfood'>
      <DashboardNav />
      <div className='orderfood-body'>
          <div className='heading'>
                <div>
                    <NavLink to="/delicacies-dashboard">Delicacies &gt; Order Food</NavLink>
                </div>
                <div className='heading-cart'>
                    <div className='cart-group'>
                      <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">
                        <img src={Cart} className="cart-image" /> {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
                        
                      </NavLink>
                      <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">Cart</NavLink>
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
              {/* <div className='foods'>
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
              </div> */}
            <div className='foods'>
              {foodItems.map((food, index) => (
              <div key={index} onClick={() => addToCart(food)}>
                <img src={food.image} alt={food.name} />
                <p>{food.name}</p>
                <p>&#8358;{food.price}</p>
              </div>
            ))}
          </div>
              {/* <div className='foods'>
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
              </div> */}
              
            </div>

      </div>
    </div>
  )
}

export default OrderFood