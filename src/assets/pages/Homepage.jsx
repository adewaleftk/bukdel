import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Intro from "../components/Intro";
import WhatPeopleSay from "../components/WhatPeopleSay";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

function Homepage() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Services />
        <Intro />
        <WhatPeopleSay />
        <Faq />
        <Footer />
    </div>
  )
}

export default Homepage