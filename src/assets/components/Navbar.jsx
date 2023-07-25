import '../styles/navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
          <a href="/">BUKDEL</a>
        </div>
        <div className='auth'>
            <div>
              <a href='/login'>Login</a>
            </div>
            <div className='join'>
              <a href='/join'>Sign Up</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar