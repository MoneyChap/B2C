import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/BetBrainsLogo.png";

const Footer = (props) => {
    return (
        <section className={styles.footerSection}>
            <div>
                <div className={styles.logoContainer}>
                    <img className={styles.logoImg} src={logo} alt={logo}/>
                    <h2 className={styles.logoText}>
                        BetBrains
                    </h2>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
};

export default Footer;
