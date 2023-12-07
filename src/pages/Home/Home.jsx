import React from  'react';
import Hero from '../../components/hero/Hero.jsx';
import Classes from '../../components/classes/Classes.jsx';
import Coaches from '../../components/coaches/Coaches.jsx';
import Statistics from '../../components/stats/Statistics.jsx';
import Footer from '../../components/footer/Footer.jsx';
import Map from '../../components/map/Map.jsx';
import Pricing from '../../components/pricing/Pricing.jsx';
import Newsletter from '../../components/newsletter/Newsletter.jsx';
import CoachBanner from '../../components/coachBanner/CoachBanner.jsx';


function Home () {
    return(
        <div>
        <Hero />
        <Classes/>
        <Statistics/>
        <Coaches/>
        <CoachBanner />
        <Pricing />

        <Newsletter />
        <Map />
        <Footer />

        </div>
       
    )
}

export default Home;
