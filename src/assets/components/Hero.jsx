import '../styles/hero.css'
import HeroImage from '../images/heroimage.png'

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
              <a href='/login'>Login</a>
            </div>
            <div>Sign Up</div>
        </div>
        </div>
        <div className='hero-image'>
          <img src={HeroImage} alt="Group of cooking chef" />
        </div>
    </div>
  )
}

export default Hero