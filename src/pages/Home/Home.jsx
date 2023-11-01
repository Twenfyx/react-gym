import React from  'react';
import FirstView from '../../components/firstView/FirstView';
import Classes from '../../components/classes/Classes';
import Coaches from '../../components/coaches/Coaches';
import Statistics from '../../components/stats/Statistics';

function Home() {
    return(
        <div>
        <FirstView />
        <Classes/>
        <Statistics/>
        <Coaches/>
        

        </div>
       
    )
}

export default Home;
