import '../styles/proceedtopay.css';
import DashboardNav from '../components/DashboardNav';
import Cancel from '../images/cancel.png';
import { useNavigate } from 'react-router-dom';
import MobileDashboardNav from '../components/MobileDashboardNav';
import usePackageStore from '../../store';
import { useState } from 'react';

function ProceedToPay() {
  const receiverData = usePackageStore((state) => state.receiverData);
  const setReceiverData = usePackageStore((state) => state.setReceiverData);
  const senderData = usePackageStore(state => state.senderData);
  const isMobile = window.innerWidth < 768;
  const navigate = useNavigate();
  const user = usePackageStore(state => state.user);
  const userId = user.user_id;
  const userToken = usePackageStore(state => state.userToken);
  const [sendError, setSendError] = useState(null);

  const handleBackClick = () => {
    navigate('/logistics-dashboard/send/review');
  };

  const handlePaymentChange = (e) => {
    // Update the paymentType in receiverData when a radio button is selected
    setReceiverData({ ...receiverData, paymentType: e.target.value });
  };

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
    <div className="proceed--to-pay">
      {isMobile ? <MobileDashboardNav /> : <DashboardNav />}
      <div className="body">
        <div className="heading">
          <p>How would you like to pay?</p>
          <img src={Cancel} />
        </div>
        <div className="payment-method-options">
          <div className="payment-method-options-body">
            <label htmlFor="wallet-payment">Wallet</label>
            <input
              type="radio"
              id="wallet-payment"
              name="logistics-payment"
              value="wallet"
              checked={receiverData.paymentType === 'wallet'}
              onChange={handlePaymentChange}
              required
            />
          </div>
          <div className="payment-method-options-body">
            <label htmlFor="delivery-payment">On Delivery</label>
            <input
              type="radio"
              id="delivery-payment"
              name="logistics-payment"
              value="on-delivery"
              checked={receiverData.paymentType === 'on-delivery'}
              onChange={handlePaymentChange}
              required
            />
          </div>
        </div>
        {sendError && <p>{sendError}</p>}
        <div className="pay-ment-buttons">
          <button onClick={sendItemsToServer}>Continue</button>
          <button onClick={handleBackClick}>Back</button>
        </div>
      </div>
    </div>
  );
}

export default ProceedToPay;
