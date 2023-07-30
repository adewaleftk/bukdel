import '../styles/delicacieshero.css';
import Jollof from '../images/jollof.png'
import { Link } from 'react-router-dom';

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
                <Link to='/login'>Login</Link>
              </div>
              <div className='join'>
                <Link to='/join'>Sign Up</Link>
              </div>
        </div>
        </div>
        <div>
            <img src={Jollof} alt="A plate of Jollof Rice" />
        </div>
    </div>
  )
}

export default DelicaciesHero