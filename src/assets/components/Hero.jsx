import '../styles/hero.css'
import HeroImage from '../images/heroimage.png'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <div className='hero-info'>
          <div className='hero-words'>
            <p>Enjoy exceptional</p>
            <p>experience and seamless</p>
            <p>operations for your</p>
            <p>Delicacies</p>
          </div>
        <div className='auth'>
            <div>
              <Link to='/login'>Login</Link>
            </div>
            <div className='join'>
              <Link to='/join'>Sign Up</Link>
            </div>
        </div>
        </div>
        <div className='hero-image'>
          <img src={HeroImage} alt="Group of cooking chef" />
        </div>
    </div>
  )
}

export default Hero