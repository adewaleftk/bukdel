import '../styles/getestimate.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import usePackageStore from '../../store'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cancel from '../images/cancel.png'
import MobileDashboardNav from '../components/MobileDashboardNav'

function GetEstimate() {
    const isMobile = window.innerWidth < 768;
    const [showPopup, setShowPopup] = useState(false);
    const estimateData = usePackageStore(state => state.estimateData);
    const setEstimateData = usePackageStore(state => state.setEstimateData);

    const logout = usePackageStore(state => state.logout);
    const navigate = useNavigate();

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };


    const handleProceedToGetEstimate = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    const handleEstimatePickupStateChange = (event) => {
        const estimatePickupState = event.target.value;
        setEstimateData({ estimatePickupState });
        const estimatePickupStateObj = statesAndCities.find(state => state.name === estimatePickupState);
        
        const cityDropdown = document.getElementById('estimate-pickup-city');
        cityDropdown.innerHTML = ''; // Clear previous city options
    
        if (estimatePickupStateObj) {
            setEstimateData({ estimatePickupCity: estimatePickupStateObj.cities[0] });
            estimatePickupStateObj.cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                cityDropdown.appendChild(option);
            });
        }
    };

    function proceedToSendPackage() {
        //
    }

    const handleEstimateDropoffStateChange = (event) => {
        const estimatDropoffState = event.target.value;
        setEstimateData({ estimatDropoffState });
        const estimateDropoffStateObj = statesAndCities.find(state => state.name === estimatDropoffState);
        
        const cityDropdown = document.getElementById('estimate-dropoff-city');
        cityDropdown.innerHTML = ''; // Clear previous city options
    
        if (estimateDropoffStateObj) {
            setEstimateData({ estimateDropoffCity: estimateDropoffStateObj.cities[0] });
            estimateDropoffStateObj.cities.forEach(city => {
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
    <div className='dashboard-get-estimate'>
       {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
        <div className='dashboard-get-estimate--body'>
            <div className='heading'>
                <div>
                    <NavLink to="/logistics-dashboard/get-estimate">Logistics &gt; Get Estimate</NavLink>
                </div>
                <div className='heading--logout'>
                    <div>
                        <button onClick={handleLogout}>Log Out</button>
                    </div>
                </div>
            </div>
            <p className="get-estimate-topic">Get Estimate</p>
            <div className='get-estimate--delivery-details'>
                <p className='delivery-details--topic'>Delivery Details</p>
                <p>Select your pick-off and drop-off area</p>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-pickup-address">Pick-Up Address</label>
                        <input type="text" id="estimate-pickup-address" name="estimatePickupAddress" value={estimateData.estimatePickupAddress} onChange={(event) => setEstimateData({ estimatePickupAddress: event.target.value })}  placeholder='2, Akintunde Street, Owo Road' required />
                    </div>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-item-category">Item Category</label>
                        <select id="estimate-item-category" name="estimateItemCategory" value={estimateData.estimateItemCategory} onChange={(event) => setEstimateData({ estimateItemCategory: event.target.value })} required>
                            <option value="perishable">Perishable</option>
                            <option value="non-perishable">Non-Perishable</option>
                        </select>
                    </div>
                </div>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-child'>
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-pickup-state">State</label>
                            <select
                                id="estimate-pickup-state"
                                name="estimatePickupState"
                                value={estimateData.estimatePickupState}
                                onChange={handleEstimatePickupStateChange}
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
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-pickup-city">City</label>
                            <select id="estimate-pickup-city" name="estimatePickupCity" value={estimateData.estimatePickupCity} onChange={(event) => setEstimateData({ estimatePickupCity: event.target.value })} required>
                                <option value="">Select a City</option>
                                {/* Dynamically populate the city options based on selected state */}
                            </select>
                        </div>
                    </div>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-item-size">Item Size</label>
                        <select id="estimate-item-size" name="estimateItemSize" value={estimateData.estimateItemSize} onChange={(event) => setEstimateData({ estimateItemSize: event.target.value })} required>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                </div>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-dropoff-address">Drop-Off Address</label>
                        <input type="text" id="estimate-dropoff-address" name="estimateDropoffAddress" value={estimateData.estimatDropoffAddress} onChange={(event) => setEstimateData({ estimatDropoffAddress: event.target.value })}  placeholder='2, Akintunde Street, Owo Road' required />
                    </div>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-delivery-date">Date of Delivery</label>
                        <input type="date" id="estimate-delivery-date" name="estimateDeliveryDate" value={estimateData.estimateDeliveryDate} onChange={(event) => setEstimateData({ estimateDeliveryDate: event.target.value })} required />
                    </div>
                </div>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-child'>
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-dropoff-state">State</label>
                            <select
                                id="estimate-dropoff-state"
                                name="estimateDropoffState"
                                value={estimateData.estimatDropoffState}
                                onChange={handleEstimateDropoffStateChange}
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
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-dropoff-city">City</label>
                            <select id="estimate-dropoff-city" name="estimateDropoffCity" value={estimateData.estimateDropoffCity} onChange={(event) => setEstimateData({ estimateDropoffCity: event.target.value })} required>
                                <option value="">Select a City</option>
                                {/* Dynamically populate the city options based on selected state */}
                            </select>
                        </div>
                    </div>
                    <div className='get-estimate-button'>
                        <button onClick={handleProceedToGetEstimate} >Get Estimate</button>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className='popup'>
                    <div className='popup-content'>
                        {/* Popup content goes here */}
                        <div className='ready-heading'>
                            <p className='ready-to-proceed'>Get Estimate</p>
                            <button onClick={handleClosePopup}><img src={Cancel} /></button>
                        </div>
                        <p>Pick-Up Address</p>
                        <p>{estimateData.estimatePickupAddress}</p>

                        <p>Drop-Off Address</p>
                        <p>{estimateData.estimatDropoffAddress}</p>

                        <p>Delivery Date</p>
                        <p>{estimateData.estimateDeliveryDate}</p>

                        <p>Delivery Price:</p>
                        
                        <div className='proceed-to-pay-button'>
                            <button onClick={proceedToSendPackage}>Proceed to Pay</button>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  )
}

export default GetEstimate