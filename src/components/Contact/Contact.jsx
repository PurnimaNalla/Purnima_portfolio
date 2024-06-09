import React from "react";

import styles from"./Contact.module.css";
import {getImageUrl} from"../../utils";
export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon"></img>
                <a href="mailto:purnimanalla029@gmail.com">purnimanalla029@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"></img>
                <a href="https://www.linkedin.com/in/purnima-nalla-490771277/">linkedin.com/purnimanalla</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon"></img>
                <a href="https://github.com/PurnimaNalla">github.com/purnimanalla</a>
            </li>
        </ul>
    </footer>
  )
  
};
