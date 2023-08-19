import { useState } from 'react';
import '../styles/login.css';
import LoginImage from '../images/login-image.png'
import { useNavigate } from 'react-router-dom';
import usePackageStore from '../../store';
import Success from '../images/try-success.png'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [loginError, setLoginError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const login = usePackageStore(state => state.login);
  
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    async function handleLoginSubmit(event) {
      event.preventDefault();
      setIsLoading(true);
      setLoginError(null); // Clear previous errors

      const baseUrl = 'https://bukdelbe.vercel.app';
      const apiUrl = `${baseUrl}/api/v1/auth/login`;

      const requestData = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              password: password,
          }),
      };

      try {
          const response = await fetch(apiUrl, requestData);
          const responseData = await response.json();

          if (response.ok && responseData.status === true) {
              // Login successful
              console.log('Login successful:', responseData.message); 
              console.log(responseData);
              console.log('User Token:', responseData.data.token);
              const userToken = responseData.data.token;
              login(userToken);
              usePackageStore.setState({ user: responseData.data });
              localStorage.setItem('user', JSON.stringify(responseData.data));
              setLoginSuccess(true);
              setTimeout(() => {
              navigate('/dashboard'); // Redirect to dashboard
              }, 5000); 
          } else {
              console.error('Login failed:', responseData.message);
              console.log(responseData);
              setLoginError(responseData.errorMessage); 
          }
        } catch (error) {
          console.error('An error occurred:', error);
        } finally {
        setIsLoading(false);
      }
  }
  
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
            <form className='login-form'>
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
              {loginError && <p className="error-message">{loginError}</p>}
              <button
                type="submit"
                onClick={handleLoginSubmit}
                className={`loading-button ${isLoading ? "loading" : ""}`}
                disabled={isLoading}
              >
                {isLoading ? "Loading" : "Login"}
              </button>
            </form>
          </div>
        </div>
        <div className='login-image'>
            <img src={LoginImage} alt="Login Image" />
        </div>
        {loginSuccess && (
        <div className="login-success-popup">
          <div className="login-success-body">
            <h2>Login Successful</h2>
            <img src={Success} />
            <p>You are now being redirected to your Dashboard</p>
          </div>
        </div>
      )}
      </div>
    );
}

export default Login;
