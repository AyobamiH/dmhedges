import Welcome from './Welcome'

import HeroSection from './HeroSection';
import Services from './Services';
import OfferSection from './OfferSection';
import ServiceStories from './ServiceStories';
import FaqSection from './FaqSection';


const LandingPage = () => {


    return (
    <div className="App">
        
        <HeroSection />
        <Welcome />
        <OfferSection />
        <Services />
        <OfferSection />
        <ServiceStories />
        <FaqSection />
        
      </div>
    )
}

export default LandingPage