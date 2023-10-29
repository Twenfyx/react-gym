import React from  'react';
import FirstView from '../../components/firstView/FirstView';
import Classes from '../../components/classes/Classes';
import Coaches from '../../components/coaches/Coaches';

function Home() {
    return(
        <div>
        <FirstView />
        <Classes/>
        
        <Coaches/>
        </div>
       
    )
}

export default Home;
