import '../styles/proceedtopay.css'
import DashboardNav from '../components/DashboardNav'
import Cancel from '../images/cancel.png'
import { useNavigate } from 'react-router-dom'

function ProceedToPay() {
    const navigate = useNavigate();
    function handleBackClick() {
        navigate('/logistics-dashboard/send/review');
    }
  return (
    <div className='proceed--to-pay'>
        <DashboardNav />
        <div className='body'>
            <div className='heading'>
                <p>How would you like to pay?</p>
                <img src={Cancel} />
            </div>
            <div className='payment-method-options'>
                <div className='payment-method-options-body'>
                    <label htmlFor="wallet-payment">Wallet</label>
                    <input type="radio" id="wallet-payment" name="logistics-payment" value="wallet-payment" required />
                </div>
                <div className='payment-method-options-body'>
                    <label htmlFor="bank-payment">Card/Bank Transfer</label>
                    <input type="radio" id="bank-payment" name="logistics-payment" value="bank-payment" required />
                </div>
            </div>
            <div className='pay-ment-buttons'>
                <button>Continue</button>
                <button onClick={handleBackClick}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default ProceedToPay