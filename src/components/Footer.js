import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
    return (

        <footer id="contact">
            <div>
                <a href="mailto:mrs.knit.wit.dukes@gmail.com">
                    <FontAwesomeIcon icon={["fas", "envelope-square"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="https://github.com/ShannonDukes" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "git-square"]} size="3x" color="#607d8b" />
                </a>
            </div>
            <div>
                <a href="www.linkedin.com/in/shannon-d-a9b518213" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" color="#607d8b" />
                </a>
            </div>
        </footer>
    );
};

export default Footer;