import '../styles/sendpackagedashboard.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'

function SendPackageDashboard() {

    const handleStateChange = (event) => {
        const selectedState = event.target.value;
        const selectedStateObj = statesAndCities.find(state => state.name === selectedState);
        
        const cityDropdown = document.getElementById('selected-city');
        cityDropdown.innerHTML = ''; // Clear previous city options
    
        if (selectedStateObj) {
            selectedStateObj.cities.forEach(city => {
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
        <DashboardNav />
        <div className='send-package-dashboard-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/logistics-dashboard">Logistics &gt; Send Packages</NavLink>
                </div>
                <div className='heading-cart'>
                    <div>
                        <NavLink to="/">Log Out</NavLink>
                    </div>
                </div>
            </div>
            <h2>Send Packages</h2>
            <div className='send-package-dashboard-content'>
                <h3>Pick-Up Details</h3>
                <p>Let&apos;s help you retrieve goods or packages at a specific location</p>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-name">Name of Sender</label>
                        <input type="text" id="sender-name" name="sender-name" placeholder='Name of Sender' required />
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-address">Pick-Up Address</label>
                        <input type="text" id="pickup-address" name="pickup-address" placeholder='2, Akintunde Street, Owo Road' required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-number">Sender&apos;s Phone Number</label>
                        <input type="number" id="sender-number" name="sender-number" placeholder='08123456789' required />
                    </div>
                    <div className='state--city'>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="selected-state">State</label>
                            <select
                                id="selected-state"
                                name="selected-state"
                                onChange={handleStateChange} // Create this function
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
                            <label htmlFor="selected-city">City</label>
                            <select id="selected-city" name="selected-city" required>
                                <option value="">Select a City</option>
                                {/* Dynamically populate the city options based on selected state */}
                            </select>
                        </div>
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-alt-number">Alternative Phone Number</label>
                        <input type="number" id="sender-alt-number" name="sender-alt-number" placeholder='08123456789' required />
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="delivery-date">Date of Delivery</label>
                        <input type="date" id="delivery-date" name="delivery-date" required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="item-category">Item Category</label>
                        <select id="item-category" name="item-category" required>
                            <option value="perishable">Perishable</option>
                            <option value="non-perishable">Non-Perishable</option>
                        </select>
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-note">Pick-Up Note</label>
                        <input type="text" id="pickup-note" name="pickup-note" placeholder='e.g Package is with my Gateman' required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="item-size">Item Size</label>
                        <select id="item-size" name="item-size" required>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div>
                    <div className='send-package-dashboard-save--next'>
                        <div className='send-package-info-inputs-save--address'>
                            <input type="checkbox" id="save-address" name="save-address" />
                            <label htmlFor="save-address">Save Address</label>
                        </div>
                        <div className='send-package-info-inputs-save-address'>
                            <button>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendPackageDashboard