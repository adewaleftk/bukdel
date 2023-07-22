import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>BUKDEL</div>
        <div className='auth'>
            <div>
              <a href='/login'>Login</a>
            </div>
            <div>Sign Up</div>
        </div>
    </div>
  )
}

export default Navbar