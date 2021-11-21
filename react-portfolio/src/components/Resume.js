import React from 'react';

function About() {
    return (
        <section className="container">
            <h3 className="mAll">Resume</h3>
            <div className="mLeftRight">Download my <a href={require(`../assets/downloads/Resume.pdf`).default}>Resume</a></div>
            <div className="resume">
                <div className="mAll">
                    <h4>Front-end Skills</h4>
                    <ul className="skillsList">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Media Queries</li>
                        <li>Responsive Design</li>
                        <li>Version Control (Git)</li>
                        <li>Testing/Debugging (Jest)</li>
                    </ul>
                </div>
                <div className="mAll">
                    <h4>Back-end Skills</h4>
                    <ul className="skillsList">
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>Handlebars.js</li>
                        <li>MySQL, Sequelize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>GraphQL</li>
                        <li>C#</li>
                        <li>JSON</li>
                        <li>REST</li>
                    </ul>
                </div>
                <div className="mAll">
                    <h4>Applications</h4>
                    <ul className="skillsList">
                        <li>Github</li>
                        <li>GitHub Pages</li>
                        <li>Heroku</li>
                        <li>MySQL Workbench</li>
                        <li>Visual Studio Code</li>
                        <li>Insomnia</li>
                        <li>Microsoft Suite</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default About;