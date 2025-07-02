import React from "react"
import styles from "./NavBar.module.css";
import logo from "../../assets/BetBrainsLogo.png"

const NavBar = (props) => {
    return (
        <div className={styles.navBarContainer}>
            <div className={styles.navBar}>
                <div className={styles.logoContainer}>
                    <img className={styles.logoImg} src={logo} alt={logo} />
                    <p className={styles.logoText}>BetBrains</p>
                </div>

            </div>
        </div>
    )
};

export default NavBar;