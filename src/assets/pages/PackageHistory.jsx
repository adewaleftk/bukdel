import '../styles/packagehistory.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Vector from '../images/vector.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import usePackageStore from '../../store'
import MobileDashboardNav from '../components/MobileDashboardNav'
import { useEffect } from 'react'

function PackageHistory() {
    const isMobile = window.innerWidth < 768;
    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();
    const userToken = usePackageStore(state => state.userToken);
    const user = usePackageStore(state => state.user);
    const userId = user.user_id;
    const [packageHistory, setPackageHistory] = useState([]);

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

    async function getPackageHistory() {
        try {
          const response = await fetch(`https://bukdelbe.vercel.app/api/v1/logistics/${userId}`, {
            headers: {
              'x_token': userToken,
            },
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Package History:', responseData.data);
            setPackageHistory(responseData.data);
          } else {
            console.error('Failed to fetch package history');
            const responseData = await response.json();
            console.log(responseData);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
      }

      useEffect(() => {
        getPackageHistory();
      }, []);
      

  return (
    <div className='package-history'>
       {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='package-history-body'>
            <div className='heading'>
                <div>
                    <NavLink to="#">Logistics &gt; Package History</NavLink>
                </div>
                <div className='heading--logout'>
                    <div>
                       <button onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
            <p className='package-history-topic'>Package History</p>
            <div className='package-history--content'>
                <p className='package-history--heading'>Recent Orders</p>
                <p className='package-history--sub-heading'>View your recent and past orders.</p>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
            
            </div>
        </div>
    </div>
  )
}

export default PackageHistory