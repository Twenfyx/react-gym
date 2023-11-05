import React from  'react';
import Hero from '../../components/hero/Hero';
import Classes from '../../components/classes/Classes';
import Coaches from '../../components/coaches/Coaches';
import Statistics from '../../components/stats/Statistics';
import Footer from '../../components/footer/Footer';


function Home() {
    return(
        <div>
        <Hero />
        <Classes/>
        {/* <Statistics/> */}
        {/* <Coaches/> */}
        <Footer />

        </div>
       
    )
}

export default Home;
