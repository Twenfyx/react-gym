import React from  'react';
import Hero from '../../components/hero/Hero';
import Classes from '../../components/classes/Classes';
import Coaches from '../../components/coaches/Coaches';
import Statistics from '../../components/stats/Statistics';
import Footer from '../../components/footer/Footer';
import Map from '../../components/map/Map';


function Home() {
    return(
        <div>
        <Hero />
        <Classes/>
        <Statistics/>
        <Coaches/>
        <Statistics/>

        <Map />
        <Footer />

        </div>
       
    )
}

export default Home;
