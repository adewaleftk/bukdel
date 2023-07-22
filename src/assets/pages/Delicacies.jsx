import '../styles/delicacies.css'
import Navbar from '../components/Navbar'
import DelicaciesHero from '../components/DelicaciesHero'
import HowItWorks from '../components/HowItWorks'
import Try from '../components/Try'
import HowItWorks2 from '../components/HowItWorks2'
import Footer from '../components/Footer'

function Delicacies() {
  return (
    <div>
        <Navbar />
        <DelicaciesHero />
        <HowItWorks />
        <Try />
        <HowItWorks2 />
        <Footer />
    </div>
  )
}

export default Delicacies