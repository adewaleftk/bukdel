import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
          <NavLink to="/">BUKDEL</NavLink>
        </div>
        <div className='auth'>
            <div>
              <NavLink to='/login'>Login</NavLink>
            </div>
            <div className='join'>
              <NavLink to='/join'>Sign Up</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar