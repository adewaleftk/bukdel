import '../styles/navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
          <Link to="/">BUKDEL</Link>
        </div>
        <div className='auth'>
            <div>
              <NavLink to='/login'>Login</NavLink>
            </div>
            <div className='join'>
              <Link to='/join'>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar