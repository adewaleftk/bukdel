import '../styles/try.css'
import Chef from '../images/chef.png'

function Try() {
  return (
    <div className='try'>
        <div className='try-heading'>
            <h3>Try our Food Plan</h3>
            <p>We can provide pre-planned meals service designed to make meal planning and preparation easier</p>
            <p>for people who may not have the time, knowledge, or inclination to plan and cook meals</p>
            <p>themselves</p>
        </div>
        <div className='try-info'>
            <div>
                <img src={Chef} alt="Chef" />
            </div>
            <div>
                <div>
                    <h3>Convenience</h3>
                    <p>Our food plan save you time and effort</p>
                    <p>by eliminating the need for meal</p>
                    <p>planning, grocery shopping, and</p>
                    <p>cooking. The meals are delivered or</p>
                    <p>ready for pickup, reducing the hassle of</p>
                    <p>meal preparation.</p>
                </div>
                <div>
                    <h3>Variety and Expertise</h3>
                    <p>We offer a wide range of meal options,</p>
                    <p>ensuring variety in the diet. We also</p>
                    <p>ensure they meet nutritional</p>
                    <p>requirements with the help of our</p>
                    <p>nutritionists, chefs, or dietitians</p>
                </div>
                <div>
                    <div className='auth'>
                        <div>Login</div>
                        <div>Sign Up</div>
                    </div>
                </div>
            </div>
            <div>
                <h3>Health and Nutrition</h3>
                <p>We provide balanced and nutritious</p>
                <p>meals tailored to specify dietary need,</p>
                <p>helping you maintain a healthy lifestyle,</p>
                <p>manage weight, or follow a specialized</p>
                <p>diet</p>
            </div>
        </div>
    </div>
  )
}

export default Try