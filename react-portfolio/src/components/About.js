import React from 'react';

function About() {
    return (
        <section className="container">
            <div className="about">
                <div className="pic">
                    <img className="pic" src={require(`../assets/images/shannon.jpg`).default} alt="Shannon Dukes" />
                </div>
                <div className="text">
                    <h2>Full Stack Web Developer</h2>
                    <p className="mTopBottom">
                        Web Developer with a certificate in Full Stack Web Development from the UC Berkeley and a background in Finance. I am
                        known as detail-oriented and quality-oriented by my co-workers and management.</p>
                    <p className="mTopBottom">
                        Developed skill set directly relevant to web development, including strong knowledge of HTML, CSS,
                        and scripting languages; experience working with developers remotely to accomplish desired results.
                    </p>
                    <p className="mTopBottom">
                        I am self-motivated and can work alone to meet deadlines or with a team of developers. I have
                        consistently demonstrated teamwork, problem-solving and interpersonal abilities in every aspect
                        of my previous web developer role.</p>
                    <p className="mTopBottom">
                        I enjoy learning new technologies and am looking for an environment that will allow me to reach my
                        full potential.
                    </p>

                </div>
            </div>
        </section>
    );
};

export default About;