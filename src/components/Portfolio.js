import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../src/assets/css/animation.css';

function Portfolio() {

    const [projects] = useState([
        {
            image: 'budget.jpg',
            alt: 'Budget Tracker',
            title: 'Budget Tracker',
            description: 'Progressive web app that allows for adding and subtracting money from a budget.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://shannondukes.github.io/Budget-Tracker/',
            git: 'https://github.com/ShannonDukes/Budget-Tracker'
        },
        {
            image: 'cmsblog.jpg',
            alt: 'CMS Blog',
            title: 'CMS Blog',
            description: 'Blog site where developers can publish posts and comment on other developer posts.',
            code: '(Express / MySQL / Sequelize / dotenv)',
            url: 'https://shannondukes.github.io/CMS-Blog/',
            git: 'https://github.com/ShannonDukes/CMS-Blog'
        },
        {
            image: 'employee-tracker.jpg',
            alt: 'Employee Tracker',
            title: 'Employee Tracker',
            description: 'Command-line Application to view and manage the departments, roles, and employees of a company in order to organize and plan a business.',
            code: '(Inquirer, Node, MySQL 2, Jest)',
            url: 'https://shannondukes.github.io/Employee-Tracker/',
            git: 'https://github.com/ShannonDukes/Employee-Tracker'
        },
        {
            image: 'fab-four.jpg',
            alt: 'Adventure Time',
            title: 'Adventure Time',
            description: 'A search engine for events and dining that provides information for decision making and adventure planning.',
            code: '(JavaScript, CSS, HTML, Tailwind, Google Places Library, Ticketmaster API, Weather API, Location API)',
            url: 'https://mjos7.github.io/adventure-time/',
            git: 'https://github.com/mjos7/adventure-time'
        },
        {
            image: 'finished-product.jpg',
            alt: 'Team Profile Generator',
            title: 'Team Profile Generator',
            description: 'This is a Node.js application that will generate a team profile page based on user input for companies with teams of employees.',
            code: '(Inquirer, Jest)',
            url: 'https://shannondukes.github.io/Team-Profile-Generator/',
            git: 'https://github.com/ShannonDukes/Team-Profile-Generator'
        },
        {
            image: 'hero-bg.jpg',
            alt: 'Run Buddy',
            title: 'Run Buddy',
            description: 'First edition of the Run Buddy site to learn HTML and CSS.',
            code: '(HTML / CSS)',
            url: 'https://shannondukes.github.io/run-buddy/',
            git: 'https://github.com/ShannonDukes/run-buddy'
        },
        {
            image: 'notesaver1.jpg',
            alt: 'Note Saver',
            title: 'Note Saver',
            description: 'App that allows a user to add notes or tasks. Notes can be edited or removed as needed.',
            code: '(Express / Jest)',
            url: 'https://shannondukes.github.io/Note-Saver/',
            git: 'https://github.com/ShannonDukes/Note-Saver'
        },
        {
            image: 'screenshot.jpg',
            alt: 'Book Search',
            title: 'Book Search',
            description: 'This is an application that allows you to search for books online and saved them to list of your saved books for later review as well as remove the books you no longer wish to track.',
            code: '(Express, React, MongoDB, Mongoose, Apollo, GraphQL, Node)',
            url: 'https://shannondukes.github.io/Book-Search/',
            git: 'https://github.com/ShannonDukes/Book-Search'
        },
        {
            image: 'work-day-scheduler-img.jpg',
            alt: 'Work Day Scheduler',
            title: 'Work Day Scheduler',
            description: 'This calendar app for scheduling your work day was designed to enhance my skills using 3rd party APIs.',
            code: '(HTML, CSS, Bootstrap, jQuery, Moment.js)',
            url: 'https://shannondukes.github.io/Work-Day-Scheduler/',
            git: 'https://github.com/ShannonDukes/Work-Day-Scheduler'
        },
    ])

    return (

        <div className="container">
            <h2 className="mTopBottom center">Portfolio</h2>
            <div className="main">

                {projects.map((project, i) =>
                    <div className="view view-animation" key={i}>
                        <img src={require(`../assets/images/${project.image}`).default} alt={project.alt} />
                        <div className="mask mask-1"></div>
                        <div className="mask mask-2"></div>
                        <div className="content">
                            <h2>{project.title}</h2>
                            <p>{project.description}<br /><span>{project.code}</span></p>
                            <a href={project.url} target="_blank" rel="noreferrer">View Site</a>
                            <a href={project.git} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={["fab", "github"]} size="1x" color="#ffffff" />
                            </a>

                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Portfolio;