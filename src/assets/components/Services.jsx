import '../styles/services.css';
import Delicacies from '../images/delicacies.png';
import Logistics from '../images/logistics.png';
import Events from '../images/events.png'
import Drinks from '../images/drinks.png';

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
                <a href='/delicacies'>Get Started &#8594;</a>
            </div>
            <div>
                <img src={Logistics} alt="Bukdel Logistics"/>
                <h3>Bukdel Logistics</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <a href='logistics'>Get Started &#8594;</a>
            </div>
            <div>
                <img src={Events} alt="Bukdel Events" />
                <h3>Bukdel Events</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <p>Get Started &#8594;</p>
            </div>
            <div>
                <img src={Drinks} alt="Bukdel Drinks"/>            
                <h3>Bukdel Drinks</h3>
                <p>Order delicious chef-prepared meals you&apos;ll</p>
                <p>enjoy and get it delivered on time.</p>
                <p>Get Started &#8594;</p>
            </div>
        </div>
    </div>
  )
}

export default Services