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


    const [isSenderAddressValid, setIsSenderAddressValid] = useState(true);
    const [isItemCategoryValid, setIsItemCategoryValid] = useState(true);
    const [isSenderStateValid, setIsSenderStateValid] = useState(true);
    const [isSenderCityValid, setIsSenderCityValid] = useState(true);
    const [isItemSizeValid, setIsItemSizeValid] = useState(true);
    const [isReceiverAddressValid, setIsReceiverAddressValid] = useState(true);
    const [isDeliveryDateValid, setIsDeliveryDateValid] = useState(true);
    const [isReceiverStateValid, setIsReceiverStateValid] = useState(true);
    const [isReceiverCityValid, setIsReceiverCityValid] = useState(true);


    const validateForm = () => {
        const isSenderAddressValid = estimateData.estimatePickupAddress.trim() !== '';
        const isItemCategoryValid = estimateData.estimateItemCategory.trim() !== '';
        const isSenderStateValid = estimateData.estimatePickupState.trim() !== '';
        const isSenderCityValid = estimateData.estimatePickupCity.trim() !== '';
        const isItemSizeValid = estimateData.estimateItemCategory.trim() !== '';  
        const isReceiverAddressValid = estimateData.estimateDropoffAddress.trim() !== '';
        const isDeliveryDateValid = estimateData.estimateDeliveryDate.trim() !=='';
        const isReceiverStateValid = estimateData.estimateDropoffState.trim() !== '';
        const isReceiverCityValid = estimateData.estimateDropoffCity.trim() !== '';

        setIsSenderAddressValid(isSenderAddressValid);
        setIsItemCategoryValid(isItemCategoryValid);
        setIsSenderStateValid(isSenderStateValid);
        setIsSenderCityValid(isSenderCityValid);
        setIsItemSizeValid(isItemSizeValid);
        setIsReceiverAddressValid(isReceiverAddressValid);
        setIsDeliveryDateValid(isDeliveryDateValid);
        setIsReceiverStateValid(isReceiverStateValid);
        setIsReceiverCityValid(isReceiverCityValid);

        
        return isSenderAddressValid && isItemCategoryValid && isSenderStateValid 
        && isSenderCityValid && isItemSizeValid && isReceiverAddressValid 
        && isDeliveryDateValid && isReceiverStateValid && isReceiverCityValid
      };
      

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };


    const handleProceedToGetEstimate = () => {
        const isFormValid = validateForm();
      
        if (isFormValid) {
            setShowPopup(true);
        } else {
          const firstInvalidInput = document.querySelector('.input-error');
      
          if (firstInvalidInput) {
            window.scrollTo({
              top: firstInvalidInput.offsetTop - 20,
              behavior: 'smooth',
            });
          }
        }
      };



    const handleClosePopup = () => {
        setShowPopup(false);
    }


    function proceedToSendPackage() {
        //
    }



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
                        {isSenderAddressValid ? null : <p className="error-message">Sender&apos;s Address is required</p>}
                    </div>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-item-category">Item Category</label>
                        <select id="estimate-item-category" name="estimateItemCategory" value={estimateData.estimateItemCategory} onChange={(event) => setEstimateData({ estimateItemCategory: event.target.value })} required>
                            <option value="perishable">Perishable</option>
                            <option value="non-perishable">Non-Perishable</option>
                        </select>
                        {isItemCategoryValid ? null : <p className="error-message">Item Category is required</p>}
                    </div>
                </div>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-child'>
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-pickup-state">State</label>
                            <input type="text" id="estimate-pickup-state" name="estimatePickupState" value={estimateData.estimatePickupState} onChange={(event) => setEstimateData({ estimatePickupState: event.target.value })} placeholder="Lagos" required />
                            {isReceiverStateValid ? null : <p className="error-message">Receiver&apos;s State is required</p>}
                        </div>
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-pickup-city">City</label>
                            <input type="text" id="estimate-pickup-city" name="estimatePickupCity" value={estimateData.estimatePickupCity} onChange={(event) => setEstimateData({ estimatePickupCity: event.target.value })} placeholder="" required />
                            {isReceiverCityValid ? null : <p className="error-message">Receiver&apos;s City is required</p>}
                        </div>
                    </div>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-item-size">Item Size</label>
                        <select id="estimate-item-size" name="estimateItemSize" value={estimateData.estimateItemSize} onChange={(event) => setEstimateData({ estimateItemSize: event.target.value })} required>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        {isItemSizeValid ? null : <p className="error-message">Item Size is required</p>}
                    </div>
                </div>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-dropoff-address">Drop-Off Address</label>
                        <input type="text" id="estimate-dropoff-address" name="estimateDropoffAddress" value={estimateData.estimateDropoffAddress} onChange={(event) => setEstimateData({ estimateDropoffAddress: event.target.value })}  placeholder='2, Akintunde Street, Owo Road' required />
                        {isReceiverAddressValid ? null : <p className="error-message">Receiver&apos;s Address is required</p>}
                    </div>
                    <div className='get-estimate--delivery-details-inputs-info'>
                        <label htmlFor="estimate-delivery-date">Date of Delivery</label>
                        <input type="date" id="estimate-delivery-date" name="estimateDeliveryDate" value={estimateData.estimateDeliveryDate} onChange={(event) => setEstimateData({ estimateDeliveryDate: event.target.value })} required />
                        {isDeliveryDateValid ? null : <p className="error-message">Delivery Date is required</p>}
                    </div>
                </div>
                <div className='get-estimate--delivery-details-inputs'>
                    <div className='get-estimate--delivery-details-inputs-child'>
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-dropoff-state">State</label>
                            <input type="text" id="estimate-dropoff-state" name="estimateDropoffState" value={estimateData.estimateDropoffState} onChange={(event) => setEstimateData({ estimateDropoffState: event.target.value })} placeholder="" required />
                            {isReceiverStateValid ? null : <p className="error-message">Receiver&apos;s State is required</p>}
                        </div>
                        <div className='get-estimate--delivery-details-inputs-info'>
                            <label htmlFor="estimate-dropoff-city">City</label>
                            <input type="text" id="estimate-dropoff-city" name="estimateDropoffCity" value={estimateData.estimateDropoffCity} onChange={(event) => setEstimateData({ estimateDropoffCity: event.target.value })} placeholder="" required />
                            {isReceiverStateValid ? null : <p className="error-message">Receiver&apos;s City is required</p>}
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