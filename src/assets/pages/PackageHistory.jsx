import '../styles/packagehistory.css'
import DashboardNav from '../components/DashboardNav'
import { NavLink } from 'react-router-dom'
import Vector from '../images/vector.png'

function PackageHistory() {
  return (
    <div className='package-history'>
        <DashboardNav />
        <div className='package-history-body'>
            <div className='heading'>
                <div>
                    <NavLink to="#">Logistics &gt; Package History</NavLink>
                </div>
                <div className='heading--logout'>
                    <div>
                        <NavLink to="/">Log Out</NavLink>
                    </div>
                </div>
            </div>
            <p className='package-history-topic'>Package History</p>
            <div className='package-history--content'>
                <p className='package-history--heading'>Recent Orders</p>
                <p className='package-history--sub-heading'>View your recent and past orders.</p>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
                <div className='package-history--contents-group'>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                    <div className='package-history--contents'>
                        <img src={Vector} />
                        <div>
                            <p>From Ajao Estate, Akure, Ondo State</p>
                            <p>To Ago-Egun Street, Akure, Ondo State.</p>
                        </div>
                        <button>View</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PackageHistory