import '../styles/footer.css'
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';
import LinkedIn from '../images/linkedin.png';
import Instagram from '../images/instagram.png'

function Footer() {
  return (
    <div className='footer' style={{padding: 10}}>
        <div className='footer-bukdel'>
            <h3>BUKDEL</h3>
            <p>Exceptional services and seamless</p>
            <p>operations for you</p>
            <img src={Twitter} alt="Twitter"/>
            <img src={Facebook} alt="Facebook"/>
            <img src={Instagram} alt="Instagram" />
            <img src={LinkedIn} alt="LinkedIn" />
            <p>2023 Bukdel Group Inc. All Right Reserved</p>
        </div>
        <div className='footer-services'>
            <h4>Services</h4>
            <p style={{marginBlock: 5}}>Bukdel Delicacies</p>
            <p style={{marginBlock: 5}}>Bukdel Logistics</p>
            <p style={{marginBlock: 5}}>Bukdel Events</p>
            <p style={{marginBlock: 5}}>Bukdel Drinks</p>
        </div>
        <div className='footer-support'>
            <h4>Help and Support</h4>
            <p style={{marginBlock: 5}}>About Us</p>
            <p style={{marginBlock: 5}}>FAQs</p>
            <p style={{marginBlock: 5}}>Contact Us</p>
            <p style={{marginBlock: 5}}>Terms & Conditions</p>
            <p style={{marginBlock: 5}}>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer