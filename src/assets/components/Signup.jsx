import '../styles/signup.css'
import { useState } from 'react';
import SignupImage from '../images/signup-image.png';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Signup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhonenumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
  
    const handleFirstnameChange = (e) => {
      setFirstName(e.target.value);
    };
  
    const handleLastnameChange = (e) => {
      setLastname(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhonenumberChange = (e) => {
        setPhonenumber(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    async function handleSignUpSubmit(event) {
        event.preventDefault();

        const baseUrl = 'https://bukdelbe.vercel.app';
        const apiUrl = `${baseUrl}/api/v1/auth/register`;

        const requestData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                password: password,
                first_name: firstName,
                last_name: lastName,
                phone: phoneNumber,
            }),
        };

        try {
            const response = await fetch(apiUrl, requestData);
            const responseData = await response.json();

            if (response.ok && responseData.status === true) {
                // Signup successful
                console.log('Signup successful:', responseData.message);
                navigate('/login');
            } else {
                // Signup failed, handle the error scenario
                console.error('Signup failed:', responseData.message);
                // Display an error message to the user
            }
        } catch (error) {
            console.error('An error occurred:', error);
            // Handle any unexpected errors
        }
    }

  return (
    
    <div className='signup'>
        <div className='signup-box'>
            <div className='logo'>
            <Link to="/">BUKDEL</Link>
            </div>
            <div className='signup-heading'>
                <h2>Join Us</h2>
                <p>Create an account</p>
            </div>
            <form>
                <div className='signup-first-last'>
                    <div>
                        <p><label htmlFor="firstName">First Name</label></p>
                        <input
                        type="text"
                        placeholder="First Name"
                        id="firstName"
                        value={firstName}
                        onChange={handleFirstnameChange}
                        required
                        />
                    </div>
                    <div>
                        <p><label htmlFor="lastName">Last Name</label></p>
                        <input
                        type="text"
                        placeholder="Last Name"
                        id="lastName"
                        value={lastName}
                        onChange={handleLastnameChange}
                        required
                        />
                    </div>
                </div>
                <div>
                    <p><label htmlFor="email">Email Address</label></p>
                    <input
                    type="email"
                    placeholder="example@gmail.com"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                    />
                </div>
                <div>
                    <p><label htmlFor="phoneNumber">Phone </label></p>
                    <input
                    type="number"
                    placeholder="08123456789"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={handlePhonenumberChange}
                    required
                    />
                </div>
                <div>
                    <p><label htmlFor="password">Password</label></p>
                    <input
                    type="password"
                    placeholder="Password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    /> 
                </div>
                <div>
                    <button type="submit" id='submit' onClick={handleSignUpSubmit} >Create Account</button>
                </div>
            </form>
            <div className='signup-footer'>
                <p>Do you have an acount? <span><a href='/login'>Log In</a></span></p>
            </div>
        </div>
        <div className='signup-image'>
            <img src={SignupImage} alt="Signup Image" />
        </div>
    </div>
  )
}

export default Signup