import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import styles from "./Hero.module.scss";


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, i'm Dylan Chamberlain!",
            "I study Engineering at the University of Auckland.",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className={styles.container}>
            <BackgroundCircles />
            <img 
                className={styles.image}
                src="dylan.png"
                alt=""
            />
            <div className={styles.text}>
                <h2 className={styles.subheader}>Software & Computer Engineer</h2>
                <h1>
                    <span>{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>

                <div>
                    <Link href="#about">
                        <button className={styles.button}>About</button>
                    </Link>
                    <Link href="#experience">
                        <button className={styles.button}>Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className={styles.button}>Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className={styles.button}>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}