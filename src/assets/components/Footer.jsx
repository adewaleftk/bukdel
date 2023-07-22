import '../styles/footer.css'
import Twitter from '../images/twitter.png';
import Facebook from '../images/facebook.png';
import LinkedIn from '../images/linkedin.png';
import Instagram from '../images/instagram.png'

function Footer() {
  return (
    <div className='footer'>
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
            <p>Bukdel Delicacies</p>
            <p>Bukdel Logistics</p>
            <p>Bukdel Events</p>
            <p>Bukdel Drinks</p>
        </div>
        <div className='footer-support'>
            <h4>Help and Support</h4>
            <p>About Us</p>
            <p>FAQs</p>
            <p>Contact Us</p>
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
        </div>
    </div>
  )
}

export default Footer