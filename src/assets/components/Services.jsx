import '../styles/services.css';
import Delicacies from '../images/delicacies.png';
import Logistics from '../images/logistics.png';
import Events from '../images/events.png'
import Drinks from '../images/drinks.png';
import { Link } from 'react-router-dom';

function Services() {
  return (
    <div className='services'>
        <div className='services-heading'>Our Services</div>
        <div className='services-info'>
            <div>
                <img src={Delicacies} alt="Bukdel Delicacies" />
                <h3>Bukdel Delicacies</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <p><Link to='/delicacies'>Get Started </Link></p>
            </div>
            <div>
                <img src={Logistics} alt="Bukdel Logistics"/>
                <h3>Bukdel Logistics</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <p><Link to='logistics'>Get Started</Link></p>
            </div>
            <div>
                <img src={Events} alt="Bukdel Events" />
                <h3>Bukdel Events</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <p>Get Started</p>
            </div>
            <div>
                <img src={Drinks} alt="Bukdel Drinks"/>            
                <h3>Bukdel Drinks</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <p>Get Started</p>
            </div>
        </div>
    </div>
  )
}

export default Services