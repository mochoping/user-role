import React from "react";
import styles from "./HorizentalCProfress.css";

const HorizentalCProfress = ({scroll}) => {

    return (
        <div className={styles.container}>
            <div className={styles.progress} style={{width:scroll}}/>
        </div>
    );
};

export default HorizentalCProfress;