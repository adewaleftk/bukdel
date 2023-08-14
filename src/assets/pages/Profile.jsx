import '../styles/profile.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import ProfilePicture from '../images/profile-picture.png'
import TransactionHistory from '../images/transaction-history.png'
import SavedAddresses from '../images/saved-addresses.png'
import ChangePassword from '../images/change-password.png'
import OrderHistory from '../images/order-history.png'
import Refer from '../images/refer.png'

function Profile() {
  return (
    <div className='profile'>
        <DashboardNav />
        <div className='profile-body'>
            <div className='heading'>
                <div>
                    <NavLink to="/profile-dashboard">Profile</NavLink>
                </div>
                <div>
                    <NavLink to="/">Log Out</NavLink>
                </div>
            </div>
            <p className='main-heading'>Profile</p>
            <div className='personal-information'>
                <div className='profile-picture'>
                    <img src={ProfilePicture} />
                </div>
                <div className='personal-info'>
                    <p className='personal-info-heading'>Personal Information</p>
                    <p className='name'>First Name</p>
                    <p className='name-info'>Babatunde</p>
                    <p className='name'>Last Name</p>
                    <p className='name-info'>Olaoluwa</p>
                    <p className='name'>Email Address</p>
                    <p className='name-info'>example@gmail.com</p>
                    <p className='name'>Phone Number</p>
                    <p className='name-info'>08123456789</p>
                    <div className='edit-profile'>
                        <div>
                            <p className='name'>Alternative Phone Number</p>
                            <p className='name-info'>08123456789</p>
                        </div>
                        <button>Edit Profile</button>
                    </div>
                </div>
            </div>
            <div className='profile-info-menu-1'>
                <div className='profile-info-menu-3'>
                    <div>
                        <img src={TransactionHistory} />
                    </div>
                    <div>
                        <p>Transaction</p>
                        <p>History</p>
                    </div>
                </div>
                <div className='profile-info-menu-3'>
                    <div>
                        <img src={SavedAddresses} />
                    </div>
                    <div>
                        <p>Saved</p>
                        <p>Addresses</p>
                    </div>
                </div>
                <div className='profile-info-menu-3'>
                    <div>
                        <img src={ChangePassword} />
                    </div>
                    <div>
                        <p>Change</p>
                        <p>Password</p>
                    </div>
                </div>
            </div>
            <div className='profile-info-menu-2'>
                <div className='profile-info-menu-3'>
                    <div>
                        <img src={OrderHistory} />
                    </div>
                    <div>
                        <p>Order</p>
                        <p>History</p>
                    </div>
                </div>
                <div className='profile-info-menu-3'>
                    <div>
                        <img src={Refer} />
                    </div>
                    <div>
                        <p>Refer &</p>
                        <p>Earn Passively</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile