import '../styles/howitworks2.css'

function HowItWorks2() {
  return (
    <div className='howitworks2'>
        <div className='howitworks2-heading'>
            <h3>How it Works</h3>
        </div>
        <div className='howitworks2-info'>
            <div className='select'>
                <div className='select-info'>
                    <h4>Select a Meal Plan</h4>
                    <p>Choose a meal plan and schedule</p>
                    <p>that works for you; when you want</p>
                    <p>it, how you want it etc.</p>
                </div>
            </div>
            <div className='prepare'>
                <div className='prepare-info'>
                    <h4>We Prepare Yout Meal</h4>
                    <p>We prepare the meals according to</p>
                    <p>the chosen plan, carefully select</p>
                    <p>ingredients.</p>
                </div>
            </div>
            <div className='consume'>
                <div className='consume-info'>
                    <h4>You Heat and Consume</h4>
                    <p>We deliver fresh and hot. You can</p>
                    <p>also heat it up before consumption.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks2