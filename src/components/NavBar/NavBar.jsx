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
                    <a href="/blog">
                        Blog
                    </a>
                    <a href="/brains">
                        Brains
                    </a>
                    <a href="/price">
                        Price
                    </a>
                    <a href="/aboutus">
                        About Us
                    </a>
                    <a href="/community">
                        Community
                    </a>
                    <a href="/faq">
                        FAQ
                    </a>
                </div>
            </div>
        </div>
    )
};

export default NavBar;