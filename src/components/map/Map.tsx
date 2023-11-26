import React from "react";
import styles from './Map.module.css';

const Map: React.FC = () => {
    return (
        <div className={styles.main}>
            <iframe
                className={styles.map}
                src="https://maps.google.com/maps?q=New%20York&amp;t=&amp;z=11&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
                loading="lazy"
                title="map"
            ></iframe>
        </div>
    );
}

export default Map;
