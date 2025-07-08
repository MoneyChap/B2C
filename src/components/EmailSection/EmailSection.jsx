import React from "react";
import styles from "./EmailSection.module.css";
import BlueCircleBg from "../../assets/BlueCircleBg.png";

const EmailSection = (props) => {
    return (
        <section className={styles.emailSection}>
            <div className={styles.formContainer}>
                <h1>FREE SHIT</h1>
                Receive free daily picks straight from the source

                <li>Free daily picks from our AI</li>
                <li>News about upcoming events</li>
                <li>Insights from previous matches</li>
                <li>TOP offers from our partner sportsbooks</li>
                <form>
                    <label>Email</label>
                    <input type="text" />
                    <button>Subscribe</button>
                </form>
            </div>
            <div className={styles.backgroundContainer}>
                <img src={BlueCircleBg} alt="background" />
                <div className={styles.blueFade} />
                <div className={styles.blackFade} />
            </div>
        </section>
    )
};

export default EmailSection;
