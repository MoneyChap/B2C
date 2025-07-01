import React, { useEffect, useRef } from 'react';
import styles from './HomePage.module.css';
import { Link } from "react-router";
import lightningImg from "../../assets/LightningImg.png";
import blackBottomFade from "../../assets/blackBottomFade.avif";
import SportsBalls from "../../assets/SportsBalls.png";
import orangeBG from "../../assets/orangeBG.png";
import blueBG from "../../assets/bluefadebg.png";
import greyBG from "../../assets/greyBG.png";
import purpleBG from "../../assets/purpleBG.jpeg";
import liveClock from "../../assets/liveClock.png";
import brain from "../../assets/brain.png";
import Trophy from "../../assets/80Trophy.png";


const HomePage = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        // 1) clone each of the 5 cards so we get 10 total
        Array.from(slider.children).forEach(child =>
            slider.appendChild(child.cloneNode(true))
        );

        // 2) force a reflow so width: max-content takes effect
        //    (reading offsetWidth triggers it)
        // eslint-disable-next-line
        const _w = slider.offsetWidth;

        // 3) add the animation class
        slider.classList.add(styles.scrollAnimate);
    }, []);


    return (
        <div>
            <section className={styles.homeSection}>
                <div className={styles.textContainer}>
                    <h1 className={styles.mainHeader}>#1 AI Sports App in Europe</h1>
                    <p className={styles.text}>The only Sports analitycs app you need.</p>
                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. At commodi error recusandae quos, minima cum eius tenetur facilis est suscipit a, soluta consectetur ipsam eveniet unde. Dolores ipsa aut sapiente.</p>
                    <Link className={styles.homeLink} to="/blank"><button className={styles.homeButton}>Get the app</button></Link>
                    <img className={styles.homeBottomFade} src={blackBottomFade} alt={blackBottomFade} />
                </div>
            </section>
            <section className={styles.scrollSection}>
                <div className={styles.scrollViewport}>
                    <div className={styles.scrollContainer} ref={sliderRef}>
                        <div className={styles.scrollItem}>
                            <div className={styles.bluefade}>
                                <div className={styles.itemImgContainer}>
                                    <img className={styles.itemImg} src={lightningImg} alt={lightningImg} />
                                </div>
                                <p className={styles.itemText}>Experience sports betting like never before</p>
                            </div>
                        </div>
                        <div className={styles.scrollItem}>
                            <div className={styles.bluefade}>
                                <div className={styles.itemImgContainer}>
                                    <img className={styles.itemImg} src={liveClock} alt={liveClock} />
                                </div>
                                <p className={styles.itemText}>Get real time updates on live matches</p>
                            </div>
                        </div>
                        <div className={styles.scrollItem}>
                            <div className={styles.bluefade}>
                                <div className={styles.itemImgContainer}>
                                    <img className={styles.itemImg} src={brain} alt={brain} />
                                </div>
                                <p className={styles.itemText}>Experience sports betting like never before</p>
                            </div>
                        </div>
                        <div className={styles.scrollItem}>
                            <div className={styles.bluefade}>
                                <div className={styles.itemImgContainer}>
                                    <img className={styles.itemImg} src={Trophy} alt={Trophy} />
                                </div>
                                <p className={styles.itemText}>Up to 80% accuracy over 5 years</p>
                            </div>
                        </div>
                        <div className={styles.scrollItem}>
                            <div className={styles.bluefade}>
                                <div className={styles.itemImgContainer}>
                                    <img className={styles.itemImg} src={lightningImg} alt={lightningImg} />
                                </div>
                                <p className={styles.itemText}>Experience sports betting like never before</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.userAmountContainer}>
                    <h1 className={styles.amountHeader}>1.000.000</h1>
                    <p className={styles.amountText}>Users in Europe already placing bets on the most deeply analyzed Global Sports Matches</p>
                </div>
            </section>
            <section className={styles.sportAmountSection}>
                <div className={styles.sportAmountContainer} style={{ backgroundImage: `url(${blueBG})` }}>
                    <div className={styles.sportAmountMainContainer}>
                        <div className={styles.sportAmountTextContainer}>
                            <p>SPORTSBETTING, BUT <strong>EASY</strong></p>
                            <h1>Get sports predictions instantly</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cupiditate atque sunt quidem, veniam nihil reiciendis libero cumque. Aut animi itaque omnis ducimus dolorem labore necessitatibus rerum suscipit fugiat magni!</p>
                            <Link to="/blank">
                                <button className={styles.sportAmountBtn}>
                                    <div className={styles.sportAmountIconContainer}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    See more
                                </button>
                            </Link>
                        </div>
                        <div className={styles.sportAmountImgContainer}>
                            <img src={SportsBalls} alt={SportsBalls} />
                        </div>
                    </div>
                    <div className={styles.sportsCarousel}>
                        <div className={styles.sportsCarouselItem}>

                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sportAmountSection}>
                <div className={styles.sportAmountContainer} style={{ backgroundImage: `url(${orangeBG})`, backgroundPosition: "bottom" }}>
                    <div className={styles.sportAmountMainContainer} style={{ flexDirection: "row-reverse" }}>
                        <div className={styles.sportAmountTextContainer} style={{ alignItems: "end", textAlign: "right" }}>
                            <p>REAL TIME <strong>UPDATES</strong></p>
                            <h1>Fast updates for live matches</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cupiditate atque sunt quidem, veniam nihil reiciendis libero cumque. Aut animi itaque omnis ducimus dolorem labore necessitatibus rerum suscipit fugiat magni!</p>
                            <Link to="/blank">
                                <button className={styles.sportAmountBtn}>
                                    <div className={styles.sportAmountIconContainer}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    See more
                                </button>
                            </Link>
                        </div>
                        <div className={styles.sportAmountImgContainer}>
                            <img src={liveClock} alt={liveClock} />
                        </div>
                    </div>
                    <div className={styles.sportsCarousel}>
                        <div className={styles.sportsCarouselItem}>

                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sportAmountSection}>
                <div className={styles.sportAmountContainer} style={{ backgroundImage: `url(${greyBG})` }}>
                    <div className={styles.sportAmountMainContainer}>
                        <div className={styles.sportAmountTextContainer}>
                            <p>EXPERT LEVEL <strong>ADVICE</strong></p>
                            <h1>Highest level of sport match analisys</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cupiditate atque sunt quidem, veniam nihil reiciendis libero cumque. Aut animi itaque omnis ducimus dolorem labore necessitatibus rerum suscipit fugiat magni!</p>
                            <Link to="/blank">
                                <button className={styles.sportAmountBtn}>
                                    <div className={styles.sportAmountIconContainer}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    See more
                                </button>
                            </Link>
                        </div>
                        <div className={styles.sportAmountImgContainer}>
                            <img src={brain} alt={brain} />
                        </div>
                    </div>
                    <div className={styles.sportsCarousel}>
                        <div className={styles.sportsCarouselItem}>

                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.sportAmountSection}>
                <div className={styles.sportAmountContainer} style={{ backgroundImage: `url(${purpleBG})`, backgroundPosition: "bottom" }}>
                    <div className={styles.sportAmountMainContainer} style={{ flexDirection: "row-reverse" }}>
                        <div className={styles.sportAmountTextContainer} style={{ alignItems: "end", textAlign: "right" }}>
                            <p>HIGH <strong>WINRATE</strong></p>
                            <h1>Up to 80% winrate over 5 years</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum cupiditate atque sunt quidem, veniam nihil reiciendis libero cumque. Aut animi itaque omnis ducimus dolorem labore necessitatibus rerum suscipit fugiat magni!</p>
                            <Link to="/blank">
                                <button className={styles.sportAmountBtn}>
                                    <div className={styles.sportAmountIconContainer}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M 8 12 L 16 12"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M 12 16 L 16 12 L 12 8"
                                                fill="transparent"
                                                strokeWidth="2"
                                                stroke="rgb(0,0,0)"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    See more
                                </button>
                            </Link>
                        </div>
                        <div className={styles.sportAmountImgContainer}>
                            <img src={Trophy} alt={Trophy} />
                        </div>
                    </div>
                    <div className={styles.sportsCarousel}>
                        <div className={styles.sportsCarouselItem}>

                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.latestArticleSection}>
                <div className={styles.latestArticleContainer}>
                    <h1 className={styles.latestArticleHeadline}>Latest articles</h1>
                    <div className={styles.latestArticles}>
                        <div className={styles.latestArticleItem}>
                            <img className={styles.latestArticleImg} src={purpleBG} alt={purpleBG} />
                            <p className={styles.latestArticleTag}>Events</p>
                            <p className={styles.latestArticleItemHeadline}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ipsum quasi.</p>
                            <p className={styles.latestArticleDate}>Jun 23, 2025</p>
                        </div>
                        <div className={styles.latestArticleItem}>
                            <img className={styles.latestArticleImg} src={purpleBG} alt={purpleBG} />
                            <p className={styles.latestArticleTag}>Events</p>
                            <p className={styles.latestArticleItemHeadline}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ipsum quasi.</p>
                            <p className={styles.latestArticleDate}>Jun 23, 2025</p>
                        </div>
                        <div className={styles.latestArticleItem}>
                            <img className={styles.latestArticleImg} src={purpleBG} alt={purpleBG} />
                            <p className={styles.latestArticleTag}>Events</p>
                            <p className={styles.latestArticleItemHeadline}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, ipsum quasi.</p>
                            <p className={styles.latestArticleDate}>Jun 23, 2025</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default HomePage;
