import '../styles/services.css';
import Delicacies from '../images/delicacies.png';
import Logistics from '../images/logistics.png';
import Events from '../images/events.png'
import Drinks from '../images/drinks.png';
import { NavLink } from 'react-router-dom';

function Services() {
  return (
    <div className='services' style={{marginBlock: 40}}>
        <div className='services-heading'>Our Services</div>
        <div className='services-info'>
            <div style={{margin: 5, backgroundColor: "#7631E6", borderRadius: 30, paddingBottom: 20,  height: "auto", border: "1px solid #e2e3e5", borderColor: "#e2e3e5"}}>
                <img style={{width: "100%"}} src={Delicacies} alt="Bukdel Delicacies" />
                
                <div style={{ padding: 10, }}>
                    <h3 style={{color: "#fff", fontWeight: "900"}}>Bukdel Delicacies</h3>
                    <p style={{color: "#fff", fontWeight: "700"}}>Order delicious chef-prepared meals you&apos;ll enjoy and get it delivered on time.</p>
                    
                    <p><NavLink to='/delicacies'>Get Started </NavLink></p>
                </div>
            </div>
            <div style={{margin: 5, backgroundColor: "#7631E6", borderRadius: 30, paddingBottom: 20,  height: "auto", border: "1px solid #e2e3e5", borderColor: "#e2e3e5"}}>
                <img style={{width: "100%"}} src={Logistics} alt="Bukdel Logistics"/>
                <div style={{ padding: 10, }}>
                    <h3 style={{color: "#fff", fontWeight: "900"}}>Bukdel Logistics</h3>
                    <p style={{color: "#fff", fontWeight: "700"}}>Order delicious chef-prepared meals you&apos;ll enjoy and get it delivered on time.</p>
                   
                    <p><NavLink to='logistics'>Get Started</NavLink></p>
                </div>
            </div>
            <div style={{margin: 5, backgroundColor: "#7631E6", borderRadius: 30, paddingBottom: 20,  height: "auto", border: "1px solid #e2e3e5", borderColor: "#e2e3e5"}}>
                <img style={{width: "100%"}} src={Events} alt="Bukdel Events" />
                <div style={{ padding: 10, }}>
                    <h3 style={{color: "#fff", fontWeight: "900"}}>Bukdel Events</h3>
                    <p style={{color: "#fff", fontWeight: "700"}}>Order delicious chef-prepared meals you&apos;ll enjoy and get it delivered on time.</p>
                    
                    <p><NavLink to='logistics'>Get Started</NavLink></p>
                </div>
            </div>
            <div style={{margin: 5, backgroundColor: "#7631E6", borderRadius: 30, paddingBottom: 20,  height: "auto", border: "1px solid #e2e3e5", borderColor: "#e2e3e5"}}>
                <img style={{width: "100%"}} src={Drinks} alt="Bukdel Drinks"/> 
                <div style={{ padding: 10, }}>        
                    <h3 style={{color: "#fff", fontWeight: "900"}}>Bukdel Drinks</h3>
                    <p style={{color: "#fff", fontWeight: "700"}}>Order delicious chef-prepared meals you&apos;ll enjoy and get it delivered on time.</p>
                    
                    <p><NavLink to='logistics'>Get Started</NavLink></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services