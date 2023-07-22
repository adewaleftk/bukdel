import '../styles/sendpackage.css'
import Rider from '../images/rider.png'

function SendPackage() {
  return (
    <div className='sendpackage'>
        <div>
          <img src={Rider} alt="Logistics Rider" />
        </div>
        <div>
          <h3>Send Package in 3 Steps</h3>
          <ul>
            <li>Create an Account</li>
            <p>Log in or Create an account in less than 3minutes.</p>
            <li>Schedule Your Delivery Ride</li>
            <p>Schedule a delivery and fill in all the necessary details e.g.</p>
            <p>pick-up and drop-off details, delivery date etc</p>
            <li>Watch Us Deliver</li>
            <p>We pick up your package and deliver it in no time,</p>
            <p>without having you worry.</p>
          </ul>
        </div>
    </div>
  )
}

export default SendPackage