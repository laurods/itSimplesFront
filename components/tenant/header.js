import React from 'react';
import styles from '../../styles.module.css';

export default({black})=>{
    return(
        <header className={styles.myHeader}>
            <div className='header--logo'>
                {/* <a href="/">
                    <img src="/images/logobaggio960_960.png" alt="Logo Baggio Festas" />
                </a> */}
            </div>
            <div className="header--seach">
                <input id="seach" type="text" placeholder="Encontre seu produto na Baggio" />
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="Usuário" />
                   
                </a>
            </div>
        </header>
    );
}