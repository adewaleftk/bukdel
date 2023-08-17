import '../styles/sendpackagereview.css'
import DashboardNav from '../components/DashboardNav';
import usePackageStore from '../../store';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Cancel from '../images/cancel.png'
import { useNavigate } from 'react-router-dom';

function ReviewPage() {
    const senderData = usePackageStore(state => state.senderData);
    const receiverData = usePackageStore(state => state.receiverData);

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
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    }

    return (
        <div className='send-package-review'>
            <DashboardNav />
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
                        <p>a non-refundable fee of $1800. Please review your</p>
                        <p>delivery details carefully before proceeding with the</p>
                        <p>payment to avoid any errors.</p>
                        <p>Deliveries to incorrect addresses or those outside</p>
                        <p>Oyo State may result in delays, cancellations, delivery</p>
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
                    </div>
                </div>
            )}
           </div>
        </div>
    );
}

export default ReviewPage;
