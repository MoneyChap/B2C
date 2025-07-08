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
                <div className={styles.linkContainer}>
                    <a href="#">
                        Blog
                    </a>
                    <a href="#">
                        Brains
                    </a>
                    <a href="#">
                        Price
                    </a>
                    <a href="#">
                        About Us
                    </a>
                    <a href="#">
                        Community
                    </a>
                    <a href="#">
                        FAQ
                    </a>
                </div>
            </div>
        </div>
    )
};

export default NavBar;