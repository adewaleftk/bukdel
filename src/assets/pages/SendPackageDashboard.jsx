import '../styles/sendpackagedashboard.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import usePackageStore from '../../store';
import MobileDashboardNav from '../components/MobileDashboardNav';
import { useState } from 'react';

function SendPackageDashboard() {

    const isMobile = window.innerWidth < 768;
    const navigate = useNavigate();
    const senderData = usePackageStore(state => state.senderData);
    const setSenderData = usePackageStore(state => state.setSenderData);
    const logout = usePackageStore(state => state.logout);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isAddressValid, setIsAddressValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    // const [isStateValid, setIsStateValid] = useState(true);
    const [isCityValid, setIsCityValid] = useState(true);
    // const [isAltNumberValid, setIsAltNumberValid] = useState(true);
    // const [isPickupNoteValid, setIsPickupNoteValid] = useState(true);
    const [isPickupDateValid, setIsPickupDateValid] = useState(true);
    const [isItemCategoryValid, setIsItemCategoryValid] = useState(true);
    const [isItemSizeValid, setIsItemSizeValid] = useState(true);


    const validateForm = () => {
        const isNameValid = senderData.senderName.trim() !== '';
        const isAddressValid = senderData.pickupAddress.trim() !== '';
        const isPhoneValid = senderData.senderNumber.trim() !== '';
        // const isStateValid = senderData.senderState.trim() !== '';
        const isCityValid = senderData.senderCity.trim() !== '';
        // const isAltNumberValid = senderData.senderAltNumber.trim() !=='';
        const isPickupDateValid = senderData.pickupDate.trim() !== '';
        const isItemCategoryValid = senderData.itemCategory.trim() !== '';
        const isItemSizeValid = senderData.itemSize.trim() !== '';

        setIsNameValid(isNameValid);
        setIsAddressValid(isAddressValid);
        setIsPhoneValid(isPhoneValid);
        // setIsStateValid(isStateValid);
        setIsCityValid(isCityValid);
        // setIsAltNumberValid(isAltNumberValid);
        setIsPickupDateValid(isPickupDateValid);
        setIsItemCategoryValid(isItemCategoryValid);
        setIsItemSizeValid(isItemSizeValid);
        
        return isNameValid && isAddressValid && isPhoneValid  
        && isCityValid && isPickupDateValid && isItemCategoryValid
        && isItemSizeValid
      };
      


    const handleLogout = () => {
      logout(); 
      navigate('/');
    };

    

    const handleNextButtonClick = () => {
        const isFormValid = validateForm();
      
        if (isFormValid) {
          navigate('/logistics-dashboard/send/receiver');
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
                <h3>Sender Details</h3>
                <p>Let&apos;s help you retrieve goods or packages at a specific location</p>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-name">Name of Sender</label>
                        <input type="text" id="sender-name" name="senderName" value={senderData.senderName}
                        onChange={(event) => setSenderData({ senderName: event.target.value })}
                        className={isNameValid ? '' : 'input-error'}
                        placeholder='Name of Sender' required />
                        {isNameValid ? null : <p className="error-message">Sender&apos;s Name is required</p>}
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-address">Pick-Up Address</label>
                        <input type="text" id="pickup-address" name="pickupAddress" value={senderData.pickupAddress} onChange={(event) => setSenderData({ pickupAddress: event.target.value })}
                        className={isAddressValid ? '' : 'input-error'}
                        placeholder='2, Akintunde Street, Owo Road' required />
                        {isAddressValid ? null : <p className="error-message">Sender&apos;s Address is required</p>}
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-number">Sender&apos;s Phone Number</label>
                        <input type="number" id="sender-number" name="senderNumber" value={senderData.senderNumber} onChange={(event) => setSenderData({ senderNumber: event.target.value })}  className={isPhoneValid ? '' : 'input-error'} placeholder='08123456789' required />
                        {isPhoneValid ? null : <p className="error-message">Sender&apos;s Phone Number is required</p>}
                    </div>
                    <div className='state--city'>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="sender-state">State</label>
                            <input type="text" id='sender-state' name='senderState' value="Lagos"  onChange={(event) => setSenderData({ senderState: event.target.value })} />
                            {/* {isStateValid ? null : <p className="error-message">Sender&apos;s State is required</p>} */}
                        </div>
                        <div className='send-package-info-inputs'>
                            <label htmlFor="sender-city">City</label>
                            <input type="text" id='sender-city' name='senderCity' value={senderData.senderCity}  onChange={(event) => setSenderData({ senderCity: event.target.value })}  className={isCityValid ? '' : 'input-error'} />
                            {isCityValid ? null : <p className="error-message">Sender&apos;s City is required</p>}
                        </div>
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="sender-alt-number">Alternative Phone Number</label>
                        <input type="number" id="sender-alt-number" name="senderAltNumber" value={senderData.senderAltNumber} onChange={(event) => setSenderData({ senderAltNumber: event.target.value })}  placeholder='08123456789' required />
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-date">Date of Pick-Up</label>
                        <input type="date" id="pickup-date" name="pickupDate" value={senderData.pickupDate} onChange={(event) => setSenderData({ pickupDate: event.target.value })}  className={isPickupDateValid ? '' : 'input-error'} required />
                        {isPickupDateValid ? null : <p className="error-message">Pickup Date is required</p>}
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="item-category">Item Category</label>
                        <select id="item-category" name="itemCategory" value={senderData.itemCategory} onChange={(event) => setSenderData({ itemCategory: event.target.value })}  className={isItemCategoryValid ? '' : 'input-error'} required>
                            <option value="perishable">Perishable</option>
                            <option value="non-perishable">Non-Perishable</option>
                            <option value="fragile">Fragile</option>
                        </select>
                        {isItemCategoryValid ? null : <p className="error-message">Item Category is required</p>}
                    </div>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="pickup-note">Pick-Up Note</label>
                        <input type="text" id="pickup-note" name="pickupNote" value={senderData.pickupNote} onChange={(event) => setSenderData({ pickupNote: event.target.value })} placeholder='e.g Package is with my Gateman' required />
                    </div>
                </div>
                <div className='send-package-dashboard-info'>
                    <div className='send-package-info-inputs'>
                        <label htmlFor="item-size">Item Size</label>
                        <select id="item-size" name="itemSize" value={senderData.itemSize} onChange={(event) => setSenderData({ itemSize: event.target.value })}  className={isItemSizeValid ? '' : 'input-error'} required>
                            <option value="small">Small</option>
                            <option value="medium">Medium</option>
                            <option value="large">Large</option>
                        </select>
                        {isItemSizeValid ? null : <p className="error-message">Item Size is required</p>}
                    </div>
                    <div className='send-package-dashboard-save--next'>
                        <div className='send-package-info-inputs-save--address'>
                            <input type="checkbox" id="save-sender-address" name="saveSenderAddress" value={senderData.saveSenderAddress} onChange={(event) => setSenderData({ saveSenderAddress: event.target.checked })} />
                            <label htmlFor="save-address">Save Address</label>
                        </div>
                        <div className='send-package-info-inputs-save-address'>
                            <button onClick={handleNextButtonClick}
                            // disabled={!isNameValid || !isAddressValid || !isPhoneValid }
                            >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendPackageDashboard