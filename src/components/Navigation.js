import React from 'react';

function Nav(props) {
    const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume'];

    return (
        <header>
            <h1>Shannon Dukes</h1>
            <nav>
                <ul>
                    {tabs.map(tab => (

                        <li key={tab}>
                            <a
                                href={'#' + tab.toLowerCase()}
                                onClick={() => props.handlePageChange(tab)}
                                className={
                                    props.currentPage === tab ? 'nav-link active' : 'nav-link'
                                }
                            >
                                {tab}
                            </a>
                        </li>
                    ))}

                </ul>
            </nav>
        </header>
    );
}

export default Nav;