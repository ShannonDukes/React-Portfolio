import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../src/assets/css/animation.css';

function Portfolio() {

    const [projects] = useState([
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
        },
        {
            image: '',
            alt: '',
            title: '',
            description: '',
            code: '',
            url: '',
            git: ''
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