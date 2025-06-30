import React from "react"
import styles from "./ScrollSection.module.css";
import lightningImg from "../../../public/assets/LightningImg.png"

const ScrollSection = (props) => {
    return (
        <section className={styles.scrollSectionContainer}>
            <div className={styles.scrollContainer}>
                <div className={styles.scrollItem}>
                    <img className={styles.itemImg} src={lightningImg} alt={lightningImg}/>
                    <p className={styles.itemText}>Experience sports betting like never before</p>
                </div>
            </div>
        </section>
    )
};

export default ScrollSection;
