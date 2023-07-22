import '../styles/forgotpassword.css'
import Forgot from '../images/forgot.png'
import { useState } from 'react'

function ForgotPassword() {
    
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Your logic for handling the forgot password request here
        console.log('Forgot password request for email:', email);
        // You can implement the logic to send a reset password email to the user's email address.
      };

  return (
    <div className='forgot'>
        <div className='forgot-box'>
            <div className='logo'>BUKDEL</div>
            <div className='forgot-heading'>
                <h2>Forgot Password</h2>
                <p>Enter your email address</p>
            </div>
            <div>
            <form onSubmit={handleSubmit}>
            <div>
            <div className='forgot-email-label'><label htmlFor="email">Email Address</label></div>
                <input
                type="email"
                id="email"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmailChange}
                required
                />
            </div>
                <button type="submit">Reset Password</button>
            </form>
            </div>
        </div>
        <div className='forgot-image'>
            <img src={Forgot} alt="Forgot Password Image" />
        </div>
    </div>
  )
}

export default ForgotPassword