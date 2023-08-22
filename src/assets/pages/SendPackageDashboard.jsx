import '../styles/sendpackagedashboard.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import usePackageStore from '../../store';
import MobileDashboardNav from '../components/MobileDashboardNav';

function SendPackageDashboard() {

    const isMobile = window.innerWidth < 768;
    const navigate = useNavigate();
    const senderData = usePackageStore(state => state.senderData);
    const setSenderData = usePackageStore(state => state.setSenderData);
    const logout = usePackageStore(state => state.logout);

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

    

    const handleNextButtonClick = () => {

        navigate('/logistics-dashboard/send/receiver');
    };
    

    const handleSenderStateChange = (event) => {
        const senderState = event.target.value;
        setSenderData({ senderState });
        const senderStateObj = statesAndCities.find(state => state.name === senderState);
        
        const cityDropdown = document.getElementById('sender-city');
        cityDropdown.innerHTML = ''; // Clear previous city options
        if (senderStateObj) {
            setSenderData({ senderCity: senderStateObj.cities[0] });
            senderStateObj.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityDropdown.appendChild(option);
            });
        }
    };
    

    const statesAndCities = [
        {
          name: 'State A',
          cities: ['City 1', 'City 2', 'City 3']
        },
        {
          name: 'State B',
          cities: ['City X', 'City Y', 'City Z']
        },
        // Add more states and cities as needed
      ];
      
  return (
    <div className='send-package-dashboard'>
       {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='send-package-dashboard-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/logistics-dashboard">Logistics &gt; Send Packages</NavLink>
                </div>
                <div className='heading-cart'>
                    <div>
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
            <h2>Send Packages</h2>
            <div className='send-package-dashboard-content'>
                <h3>Sender Details</h3>
                <p>Let&apos;s help you retrieve goods or packages at a specific location</p>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-name">Name of Sender</label>
                        <input type="text" id="sender-name" name="senderName" value={senderData.senderName} onChange={(event) => setSenderData({ senderName: event.target.value })} placeholder='Name of Sender' required />
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-address">Pick-Up Address</label>
                        <input type="text" id="pickup-address" name="pickupAddress" value={senderData.pickupAddress} onChange={(event) => setSenderData({ pickupAddress: event.target.value })}  placeholder='2, Akintunde Street, Owo Road' required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-number">Sender&apos;s Phone Number</label>
                        <input type="number" id="sender-number" name="senderNumber" value={senderData.senderNumber} onChange={(event) => setSenderData({ senderNumber: event.target.value })} placeholder='08123456789' required />
                    </div>
                    <div className='state--city'>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="sender-state">State</label>
                            <select
                                id="sender-state"
                                name="senderState"
                                value={senderData.senderState}
                                onChange={handleSenderStateChange} 
                                required
                            >
                                <option value="">Select a State</option>
                                {statesAndCities.map(state => (
                                    <option key={state.name} value={state.name}>
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="sender-city">City</label>
                            <select id="sender-city" name="senderCity" value={senderData.senderCity} onChange={(event) => setSenderData({ selectedCity: event.target.value })} required>
                                <option value="">Select a City</option>
                                {/* Dynamically populate the city options based on selected state */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-alt-number">Alternative Phone Number</label>
                        <input type="number" id="sender-alt-number" name="senderAltNumber" value={senderData.senderAltNumber} onChange={(event) => setSenderData({ senderAltNumber: event.target.value })} placeholder='08123456789' required />
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-date">Date of Pick-Up</label>
                        <input type="date" id="pickup-date" name="pickupDate" value={senderData.pickupDate} onChange={(event) => setSenderData({ pickupDate: event.target.value })} required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="item-category">Item Category</label>
                        <select id="item-category" name="itemCategory" value={senderData.itemCategory} onChange={(event) => setSenderData({ itemCategory: event.target.value })} required>
                            <option value="perishable">Perishable</option>
                            <option value="non-perishable">Non-Perishable</option>
                            <option value="fragile">Fragile</option>
                        </select>
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-note">Pick-Up Note</label>
                        <input type="text" id="pickup-note" name="pickupNote" value={senderData.pickupNote} onChange={(event) => setSenderData({ pickupNote: event.target.value })} placeholder='e.g Package is with my Gateman' required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="item-size">Item Size</label>
                        <select id="item-size" name="itemSize" value={senderData.itemSize} onChange={(event) => setSenderData({ itemSize: event.target.value })} required>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className='send-package-dashboard-save--next'>
                        <div className='send-package-info-inputs-save--address'>
                            <input type="checkbox" id="save-sender-address" name="saveSenderAddress" value={senderData.saveSenderAddress} onChange={(event) => setSenderData({ saveSenderAddress: event.target.checked })} />
                            <label htmlFor="save-address">Save Address</label>
                        </div>
                        <div className='send-package-info-inputs-save-address'>
                            <button onClick={handleNextButtonClick}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendPackageDashboard