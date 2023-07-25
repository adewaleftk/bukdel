import { useState } from 'react';
import '../styles/login.css';
import LoginImage from '../images/login-image.png'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Your login logic here
      console.log('Email:', email);
      console.log('Password:', password);
      // You can use this data to authenticate the user or handle the login process.
    };
  
    return (
      <div className='login'>
        <div className='login-box'>
          <div className='logo'>
            <a href="/">BUKDEL</a>
          </div>
          <div className='welcome'>
            <p>Welcome Back</p>
            <p>Log in to your account</p>
          </div>
          <div>
            <form onSubmit={handleSubmit} className='login-form'>
              <div className='form-group'>
                <p><label htmlFor="email">Email Address</label></p>
                <input
                  type="email"
                  placeholder="Email Address"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  required
                />
              </div>
              <div className='form-group'>
                <p><label htmlFor="password">Password</label></p>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                <div className='forgot-password'>
                    <div>Forgot Password?</div>
                    <div><a href="/forgot-password">Reset</a></div>
                </div>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
        <div className='login-image'>
            <img src={LoginImage} alt="Login Image" />
        </div>
      </div>
    );
}

export default Login;
