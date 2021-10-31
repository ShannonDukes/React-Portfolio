import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/Shannon.jpg`).default} alt="Shannon Dukes" />
                </div>
                <div className="text">
                    <h2 className="mAll">Contact me</h2>
                    <div className="mAll">
                        <a href="mailto:mrs.knit.wit.dukes@gmail.net">
                            <FontAwesomeIcon icon={["fas", "envelope-square"]} size="1x" color="#607d8b" />
                        </a> <a href="mailto:mrs.knit.wit.dukes@gmail.net">mrs.knit.wit.dukes@gmail.net</a>
                    </div>
                    <div className="mAll">
                        <div>
                            <FontAwesomeIcon icon={["fas", "mobile-alt"]} size="1x" color="#607d8b" /> (801)-628-9257

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;