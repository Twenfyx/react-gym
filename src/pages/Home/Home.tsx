import React from  'react';
import Hero from '../../components/hero/Hero.tsx';
import Classes from '../../components/classes/Classes.tsx';
import Coaches from '../../components/coaches/Coaches.tsx';
import Statistics from '../../components/stats/Statistics.tsx';
import Footer from '../../components/footer/Footer.tsx';
import Map from '../../components/map/Map.tsx';
import Pricing from '../../components/pricing/Pricing.tsx';
import Newsletter from '../../components/newsletter/Newsletter.tsx';
import CoachBanner from '../../components/coachBanner/CoachBanner.tsx';



const Home:React.FC = () => {
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
