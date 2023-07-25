import '../styles/delicacieshero.css';
import Jollof from '../images/jollof.png'

function DelicaciesHero() {
  return (
    <div className='delicacieshero'>
        <div>
            <p>Hungry?</p>
            <p>Order and Enjoy</p>
            <p><span>Jollof Rice </span>Prepared</p>
            <p>and Ready in 5minutes</p>
            <div className='auth'>
              <div>
                <a href='/login'>Login</a>
              </div>
            <div>Sign Up</div>
        </div>
        </div>
        <div>
            <img src={Jollof} alt="A plate of Jollof Rice" />
        </div>
    </div>
  )
}

export default DelicaciesHero