import '../styles/navbar.css'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
          <Link to="/">BUKDEL</Link>
        </div>
        <NavLink to="/dashboard">Check Dashboard</NavLink>
        <div className='auth'>
            <div>
              <Link to='/login'>Login</Link>
            </div>
            <div className='join'>
              <Link to='/join'>Sign Up</Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar