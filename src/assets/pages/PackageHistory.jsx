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
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedPackage, setSelectedPackage] = useState(null);

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

    function handleOpenPopup(packageData) {
      setSelectedPackage(packageData);
      setIsPopupOpen(true);
    }
    

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
                      {packageHistory.length === 0 ? (
                        <p>No transactions available.</p>
                      ) : (
                        <ul>
                          {packageHistory.map((packages) => (
                            <li key={packages.id}>
                              <div className='package-history--contents'>
                                <img src={Vector} />
                                <div>
                                  <p>From {packages.pick_up_address},{packages.state} State</p>
                                  <p>To {packages.drop_off_address},{packages.drop_off_city} {packages.drop_off_state} State</p>
                                </div>
                                <button onClick={() => handleOpenPopup(packages)}>View</button>
                              </div>
                            </li>
                          ))}
                        </ul>    
                      )} 
                </div>
                {isPopupOpen && selectedPackage && (
                <div className='popup'>
                  <div className='popup-content'>
                    <span className='close-popup' onClick={() => setIsPopupOpen(false)}>
                      &times;
                    </span>
                      <h2>Package Details</h2>
                      <p>Name of Sender: {selectedPackage.sender_name}</p>
                      <p>Sender&apos;s Phone Number: {selectedPackage.sender_phone}</p>
                      <p>Alternative Phone Number: {selectedPackage.sender_alternative_phone}</p>
                      <p>Pick-Up Address: {selectedPackage.pick_up_address},{selectedPackage.city},{selectedPackage.State} State</p>
                      <p>Pick-Up Date: {selectedPackage.pickup_date}</p>
                      <p className='receiver-name'>Name of Receiver: {selectedPackage.receiver_name}</p>
                      <p>Receiver&apos;s Phone Number: {selectedPackage.receiver_phone}</p>
                      <p>Alternative Phone Number: {selectedPackage.receiver_alternative_phone}</p>
                      <p>Drop-Off Address: {selectedPackage.drop_off_address},{selectedPackage.drop_off_ciy},{selectedPackage.drop_off_state} State</p>
                      <p>Drop-Off Date: {selectedPackage.drop_off_date}</p>
                    </div>
                  </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default PackageHistory




