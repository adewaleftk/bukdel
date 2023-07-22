import '../styles/logisticshero.css'
import Happy from '../images/happy.png'
import Customer from '../images/customer.png'

function LogisticsHero() {
  return (
    <div className='logisticshero'>
        <div className='logisticshero-info'>
            <div>
                <h3>Experience the ease of </h3>
                <h3>fast local delivery at your</h3>
                <h3>fingertips!</h3>
            </div>
            <div>
                <p>We offer the ultimate solution for managing both on-demand</p>
                <p>and scheduled deliveries across various user segments. Whether</p>
                <p>you&apos;re a business establishment or an individual client, we&apos;ve got</p>
                <p>you covered.</p>
            </div>
            <div className='auth'>
                <div>Login</div>
                <div>Sign Up</div>
            </div>
        </div>
        <div className='logisticshero-image'>
            <img src={Happy} alt="Happy Customer" />
            <img src={Customer} alt="Goods successfully delivered to customer"/>
        </div>
    </div>
  )
}

export default LogisticsHero