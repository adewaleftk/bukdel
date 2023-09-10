import '../styles/sendpackagereview.css'
import DashboardNav from '../components/DashboardNav';
import usePackageStore from '../../store';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Cancel from '../images/cancel.png'
import { useNavigate } from 'react-router-dom';
import MobileDashboardNav from '../components/MobileDashboardNav';

function ReviewPage() {
    const user = usePackageStore(state => state.user);
    const userId = user.user_id;
    const userToken = usePackageStore(state => state.userToken);
    const isMobile = window.innerWidth < 768;
    const senderData = usePackageStore(state => state.senderData);
    const receiverData = usePackageStore(state => state.receiverData);
    const [sendError, setSendError] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

    const logout = usePackageStore(state => state.logout);

    const handleLogout = () => {
      logout(); 
      navigate('/');
    };


    function proceedToPay() {
        navigate('/logistics-dashboard/send/review/pay');
    }

    const handleProceedToPay = () => {
        sendItemsToServer();
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    }


    async function sendItemsToServer() {

        try {
          const response = await fetch(`https://bukdelbe.vercel.app/api/v1/logistics/send_item/${userId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x_token': userToken,
            },
            body: JSON.stringify({
                sender_name: senderData.senderName,
                sender_phone: senderData.senderNumber,
                sender_alternative_phone: senderData.senderAltNumber,
                pick_up_address: senderData.pickupAddress,
                state: senderData.senderState,
                city: senderData.senderCity,
                pick_up_date: senderData.pickupDate,
                item_categoty: senderData.itemCategory,
                pick_up_note: senderData.pickupNote,
                item_size: senderData.itemSize,
                receiver_name: receiverData.receiverName,
                receiver_phone: receiverData.receiverNumber,
                receiver_alternative_phone: receiverData.receiverAltNumber,
                drop_off_address: receiverData.dropoffAddress,
                drop_off_state: receiverData.receiverState,
                drop_off_city: receiverData.receiverCity,
                drop_off_date: receiverData.deliveryDate,
                drop_off_note: receiverData.dropoffNote
            }),
          });
      
          if (response.ok) {
            const responseData = await response.json();
            console.log('Items sent successfully:', responseData);
            // Handle success, display a success message, update UI, etc.
          } else {
            console.error('Failed to send items');
            const errorData = await response.json();
            console.log(errorData)
            setSendError(errorData.errorMessage)
            // Handle failure, display an error message, update UI, etc.
          }
      
        } catch (error) {
          console.error('An error occurred:', error);
          // Handle network error or other exceptions
        }
      }

    return (
        <div className='send-package-review'>
       {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
           <div className='send-package-review-body'>
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
                <div className='send-package-review-content'>
                    <p className='review-heading'>Review Delivery Details</p>
                    <p>Let&apos;s help you retrieve goods or packages at a specified location</p>
                    <p className='delivery-type'>Delivery Type: Pick-Up and Drop-Off</p>
                    <p>Name of Sender: {senderData.senderName}</p>
                    <p>Sender&apos;s Phone Number: {senderData.senderNumber}</p>
                    <p>Alternative Phone Number: {senderData.senderAltNumber}</p>
                    <p>Pick-Up Address: {senderData.pickupAddress},{senderData.senderCity},{senderData.senderState} State</p>
                    <p>Pick-Up Window: {senderData.pickupDate} (between 02:00pm - 05:00pm)</p>
                    <p className='receiver-name'>Name of Receiver: {receiverData.receiverName}</p>
                    <p>Receiver&apos;s Phone Number: {receiverData.receiverNumber}</p>
                    <p>Alternative Phone Number: {receiverData.receiverAltNumber}</p>
                    <p>Drop-Off Address: {receiverData.dropoffAddress},{receiverData.receiverCity},{receiverData.receiverState} State</p>
                    <p>Drop-Off Window: {receiverData.deliveryDate} (between 02:00pm - 05:00pm)</p>
                    <p className='delivery-fee'>Delivery Fee: </p>
                    <div className='nav-buttons'>
                        <NavLink to="/logistics-dashboard/send">Edit Details</NavLink>
                        <button className='proceed-to-pay' onClick={handleProceedToPay}>Proceed to Pay</button>
                    </div>

                </div>
                {showPopup && (
                <div className='popup'>
                    <div className='popup-content'>
                        {/* Popup content goes here */}
                        <div className='ready-heading'>
                            <p className='ready-to-proceed'>Ready to Proceed?</p>
                            <button onClick={handleClosePopup}><img src={Cancel} /></button>
                        </div>
                        <p>To process your delivery request,you will be charged</p>
                        <p>a non-refundable fee of #3,000. Please review your</p>
                        <p>delivery details carefully before proceeding with the</p>
                        <p>payment to avoid any errors.</p>
                        <p>Deliveries to incorrect addresses or those outside</p>
                        <p>Lagos State may result in delays, cancellations, delivery</p>
                        <p>rescheduling, or additional charges. Kindly ensure</p>
                        <p>that your package is prepared and labeled correctly</p>
                        <p>before the scheduled pick-up window.</p>
                        <p>If you wish to cancel or reschedule your delivery</p>
                        <p>without incurring any extra charges, we suggest</p>
                        <p>doing so before your preferred delivery date.</p>
                        <div className='proceed-to-pay-button'>
                            <button onClick={proceedToPay}>Proceed to Pay</button>
                            <button onClick={handleClosePopup}>Close</button>
                        </div>
                        {sendError && <p className="error-message">{sendError}</p>}
                    </div>
                </div>
            )}
           </div>
        </div>
    );
}

export default ReviewPage;
