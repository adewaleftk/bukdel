import '../styles/sendpackagedashboard.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import usePackageStore from '../../store';
import MobileDashboardNav from '../components/MobileDashboardNav';
import { useState } from 'react';

function SendPackageReceiver() {

    const isMobile = window.innerWidth < 768;
    const navigate = useNavigate();
    const receiverData = usePackageStore(state => state.receiverData);
    const setReceiverData = usePackageStore(state => state.setReceiverData);
    const logout = usePackageStore(state => state.logout);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    // const [isStateValid, setIsStateValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    // const [isAltNumberValid, setIsAltNumberValid] = useState(true);
    // const [isPickupNoteValid, setIsPickupNoteValid] = useState(true);
    const [isPickupDateValid, setIsPickupDateValid] = useState(true);


    const validateForm = () => {
        const isNameValid = receiverData.receiverName.trim() !== '';
        const isAddressValid = receiverData.dropoffAddress.trim() !== '';
        const isPhoneValid = receiverData.receiverNumber.trim() !== '';
        // const isStateValid = senderData.senderState.trim() !== '';
        const isCityValid = receiverData.receiverCity.trim() !== '';
        // const isAltNumberValid = senderData.senderAltNumber.trim() !=='';
        const isPickupDateValid = receiverData.deliveryDate.trim() !== '';

        setIsNameValid(isNameValid);
        setIsAddressValid(isAddressValid);
        setIsPhoneValid(isPhoneValid);
        // setIsStateValid(isStateValid);
        setIsCityValid(isCityValid);
        // setIsAltNumberValid(isAltNumberValid);
        setIsPickupDateValid(isPickupDateValid);
        
        return isNameValid && isAddressValid && isPhoneValid  
        && isCityValid && isPickupDateValid
      };
      

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };


    const handleNextButtonClick = () => {
        const isFormValid = validateForm();
      
        if (isFormValid) {
          navigate('/logistics-dashboard/send/review');
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
                <h3>Receiver Details</h3>
                <p>Let&apos;s help you retrieve goods or packages at a specific location</p>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="receiver-name">Name of Receiver</label>
                        <input type="text" id="receiver-name" name="receiverName" value={receiverData.receiverName} onChange={(event) => setReceiverData({ receiverName: event.target.value })} placeholder='Name of Receiver' required />
                        {isNameValid ? null : <p className="error-message">Receiver&apos;s Name is required</p>}
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="dropoff-address">Drop-Off Address</label>
                        <input type="text" id="dropoff-address" name="dropoffAddress" value={receiverData.dropoffAddress} onChange={(event) => setReceiverData({ dropoffAddress: event.target.value })}  placeholder='2, Akintunde Street, Owo Road' required />
                        {isAddressValid ? null : <p className="error-message">Receiver&apos;s Address is required</p>}
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="receiver-number">Receiver&apos;s Phone Number</label>
                        <input type="number" id="receiver-number" name="receiverNumber" value={receiverData.receiverNumber} onChange={(event) => setReceiverData({ receiverNumber: event.target.value })} placeholder='08123456789' required />
                        {isPhoneValid ? null : <p className="error-message">Receiver&apos;s Phone Number is required</p>}
                    </div>
                    <div className='state--city'>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="receiver-state">State</label>
                            <input type="text" id='receiver-state' name='receiverState' value="Lagos"  onChange={(event) => setReceiverData({ receiverState: event.target.value })} />
                        </div>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="receiver-city">City</label>
                            <input type="text" id='receiver-city' name='receiverCity' value={receiverData.receiverCity}  onChange={(event) => setReceiverData({ receiverCity: event.target.value })} />
                            {isCityValid ? null : <p className="error-message">Receiver&apos;s City is required</p>}
                        </div>
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="receiver-alt-number">Alternative Phone Number</label>
                        <input type="number" id="receiver-alt-number" name="receiverAltNumber" value={receiverData.receiverAltNumber} onChange={(event) => setReceiverData({ receiverAltNumber: event.target.value })} placeholder='08123456789' required />
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="delivery-date">Date of Delivery</label>
                        <input type="date" id="delivery-date" name="deliveryDate" value={receiverData.deliveryDate} onChange={(event) => setReceiverData({ deliveryDate: event.target.value })} required />
                        {isPickupDateValid ? null : <p className="error-message">Delivery Date is required</p>}
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    {/* <div className='send-package-info-inputs'>
                        <label htmlFor="item-category">Item Category</label>
                        <select id="item-category" name="itemCategory" value={senderData.itemCategory} onChange={(event) => setSenderData({ itemCategory: event.target.value })} required>
                            <option value="perishable">Perishable</option>
                            <option value="non-perishable">Non-Perishable</option>
                        </select>
                    </div> */}
                    <div className='send-package-info-inputs'>
                        <label htmlFor="dropoff-note">Drop-Off Note</label>
                        <input type="text" id="dropoff-note" name="dropoffNote" value={receiverData.dropoffNote} onChange={(event) => setReceiverData({ dropoffNote: event.target.value })} placeholder='e.g Package is with my Gateman' required />
                    </div>
                    <div className='send-package-dashboard-save--next'>
                        <div className='send-package-info-inputs-save--address'>
                            <input type="checkbox" id="save-receiver-address" name="saveReceiverAddress" value={receiverData.saveReceiverAddress} onChange={(event) => setReceiverData({ saveReceiverAddress: event.target.checked })} />
                            <label htmlFor="save-address">Save Address</label>
                        </div>
                        <div className='send-package-info-inputs-save-address'>
                            <button onClick={handleNextButtonClick}>Next</button>
                        </div>
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    {/* <div className='send-package-info-inputs'>
                        <label htmlFor="item-size">Item Size</label>
                        <select id="item-size" name="itemSize" value={senderData.itemSize} onChange={(event) => setSenderData({ itemSize: event.target.value })} required>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                    </div> */}

                </div>
            </div>
        </div>
    </div>
  )
}

export default SendPackageReceiver