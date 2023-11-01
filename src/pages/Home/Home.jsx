import React from  'react';
import Hero from '../../components/hero/Hero';
import Classes from '../../components/classes/Classes';
import Coaches from '../../components/coaches/Coaches';
import Statistics from '../../components/stats/Statistics';

function Home() {
    return(
        <div>
        <Hero />
        <Classes/>
        <Statistics/>
        <Coaches/>
        

        </div>
       
    )
}

export default Home;
