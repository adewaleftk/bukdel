import '../styles/different.css'
import Logis from '../images/logis.png'

function Different() {
  return (
    <div className='different'>
        <div className='different-heading'>
            <h3>We are different</h3>
        </div>
        <div className='different-info'>
            <div>
                <img src={Logis} alt="Delivered" />
            </div>
            <div className='different-cust'>
                <div className='different-cust-info'>
                    <h3>Customer-Centric</h3>
                    <h3>Approach</h3>
                    <p>We prioritize your needs, understand</p>
                    <p>your pain points, and strive to provide</p>
                    <p>tailored logistics solutions that align with</p>
                    <p>your requirements.</p>
                </div>
                <div>
                    <h3>Transparent and</h3>
                    <h3>Competitive Pricing</h3>
                    <p>We believe in transparency when it</p>
                    <p>comes to pricing our services. Our</p>
                    <p>pricing structure is fair, competitive, and</p>
                    <p>devoid of hidden fees or surprises,</p>
                    <p>providing cost-effective logistics</p>
                    <p>solutions without compromising on</p>
                    <p>quality or reliablity</p>
                </div>
                <div className='auth'>
                    <div>Login</div>
                    <div>Sign Up</div>
                </div>
            </div>
            <div className='different-ext'>
                <div>
                    <h3>Extensive Network</h3>
                    <h3>and Resources</h3>
                    <p>Our logistics company boasts an</p>
                    <p>extensive network of trusted partners,</p>
                    <p>including transportation providers,</p>
                    <p>warehouses, and distribution centers</p>
                    <p>that we leverage to deliver flexible,</p>
                    <p>scalable, and cost-effective solutions to</p>
                    <p>you.</p>
                </div>
                <div>
                    <h3>Skilled and</h3>
                    <h3>Dedicated Team</h3>
                    <p>Our team consists of highly skilled</p>
                    <p>proffesionals with extensive experience</p>
                    <p>in the logistics industry, from logistics</p>
                    <p>experts to customer service</p>
                    <p>representatives and drivers.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Different