import { motion } from 'framer-motion';
import React from 'react'
import styles from '../styles/About.module.scss';

type Props = {}

export default function About({}: Props) {
  return (
    <motion.div 
        initial = {{ opacity: 0 }}
        whileInView = {{ opacity: 1 }}
        transition = {{ duration: 1.5 }}
        className={styles.container}
    >
        <h3 className={styles.title}>About</h3>

        <motion.img 
            className={styles.image}
            src = "dylan.png" 
            initial = {{
                x: -200,
                opacity: 0,
            }}
            transition = {{
                duration: 1.2,
            }}
            whileInView = {{ 
                x: 0,
                opacity: 1,
            }}
            viewport = {{ 
                once: true
            }}
        />

        <div className={styles.textContainer}>
            <h4 className={styles.subheader}>Here is a little info about me</h4>
            <p className={styles.text}> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra malesuada bibendum.
                Nulla tristique id turpis eu mollis. In eleifend justo eu egestas maximus. Sed interdum eros aliquam felis pulvinar,
                vel placerat nisl pharetra. Fusce cursus tortor iaculis mi accumsan ultrices. Phasellus dictum eu elit et pharetra.
                Aenean cursus enim sit amet nunc hendrerit sollicitudin. Cras quis dui sit amet ligula elementum semper ut quis dui.
                Mauris malesuada, leo vitae sollicitudin ultricies, libero purus aliquet orci, quis pharetra lacus purus in risus.
                Nulla diam leo, bibendum sed dapibus at, pulvinar a enim. Aenean sapien nisl, molestie non posuere commodo,
                ultricies gravida velit. Sed mollis faucibus nunc, eget congue sapien gravida gravida. Integer ultricies,
                dui id venenatis viverra, ipsum nulla rutrum odio, vel sollicitudin massa risus id lorem.
            </p>
        </div>
    </motion.div>
  )
}
