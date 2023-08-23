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

  const totalItemsInCart = cartItems.length;

  const handleLogout = () => {
    logout(); 
    navigate('/');
  };
  const [foods, setFoods] = useState([]);


  useEffect(() => {
    fetchFoods();
}, []);

useEffect(() => {
  fetchCart();
}, []);


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
      console.log(responseData.data);
      usePackageStore.setState({ cartItems: responseData.data });
    } else {
      console.error('Failed to fetch cart');
      const responseData = await response.json();
      console.log(responseData);
    }
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

async function addToCart(product_id) {
  try {
    const response = await fetch(`https://bukdelbe.vercel.app/api/v1/carts/add/${userId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x_token': userToken,
      },
      body: JSON.stringify({
        "product_id": product_id
      }),
    });

    if (response.ok) {
      console.log('Food added to cart successfully');
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
                    <NavLink to="/delicacies-dashboard">Order Food</NavLink>
                </div>
                <div className='heading-cart'>
                    <div className='cart-group'>
                      <NavLink to="/delicacies-dashboard/orderfood-dashboard/purchase">
                        <img src={Cart} className="cart-image" /> 
                        <span className="cart-count">{totalItemsInCart}</span>
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
                  <div key={index}>
                    <img src={food.image} alt={food.name} />
                    <p>{food.name}</p>
                    <p>Price: &#8358;{food.price}</p>
                    <p>In Stock: {food.in_stock}</p>
                    <p>Description: {food.description}</p>
                    <button onClick={() => addToCart(food.product_id)}>Add to Cart</button>
                  </div>
                ))}
              </div>
            </div>
      </div>
    </div>
  )
}

export default OrderFood