import React from 'react';
import styles from '../../tenant.module.css';

export default({black})=>{
    return(
        <header className={styles.myHeader}>
            <div className={styles.headerLogo}>
                {/* <a href="/">
                    <img src="/images/logobaggio960_960.png" alt="Logo Baggio Festas" />
                </a> */}
            </div>
            <div className={styles.headerSeach}>
                <input id="seach" type="text" placeholder="Encontre seu produto na Baggio" />
            </div>

            <div className={styles.headerUser}>
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                   
                </a>
            </div>
        </header>
    );
}