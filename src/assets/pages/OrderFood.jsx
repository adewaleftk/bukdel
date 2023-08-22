import '../styles/orderfood.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Cart from '../images/cart.png'
// import Spaghetti from '../images/spaghetti.png'
import usePackageStore from '../../store'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MobileDashboardNav from '../components/MobileDashboardNav'

function OrderFood() {
  // const addToCart = usePackageStore((state) => state.addToCart);
  const cartItems = usePackageStore((state) => state.cartItems);
  const logout = usePackageStore(state => state.logout);
  const navigate = useNavigate();
  const isMobile = window.innerWidth < 768;
  const user = usePackageStore(state => state.user);
  const userId = user.user_id;
  const userToken = usePackageStore((state) => state.userToken);

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };
  const [foods, setFoods] = useState([]);


  useEffect(() => {
    fetchFoods();
}, []);




async function addToCart(food) {
  try {
    const response = await fetch(`https://bukdelbe.vercel.app/api/v1/carts/add/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x_token': userToken,
      },
      body: JSON.stringify({
        "product_id": food.id  // Assuming "id" is the product ID of the selected food
      }),
    });

    if (response.ok) {
      console.log('Food added to cart successfully');
      // Optionally, you can update the cart state here
    } else {
      console.error('Failed to add food to cart');
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}



async function fetchFoods() {
    try {
        const response = await fetch(`https://bukdelbe.vercel.app/api/v1/foods/get_foods/${userId}`, {
            headers: {
              'Content-Type': 'application/json',
              'x_token': userToken,

            },
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Foods Loaded Successfully', responseData.data);
            setFoods(responseData.data);
            console.log(user.user_id);
            console.log(userToken)

        } else {
            console.error('Failed to fetch foods');
            const responseData = await response.json();
            console.log(responseData);
            console.log(userToken)
            console.log(user.user_id);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

  return (
    <div className='orderfood'>
       {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
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
                        <button onClick={handleLogout}>Log Out</button>
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
              {foods && foods.map((food, index) => (
              <div key={index} onClick={() => addToCart(food)}>
                 <img src={food.image} alt={food.name} />
                {/* <p>{food.name}</p>
                <p>&#8358;{food.price}</p> */}
                      <p>{food.name}</p>
                      <p>Price: &#8358;{food.price}</p>
                      <p>In Stock: {food.in_stock}</p>
                      <p>Description: {food.description}</p>
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