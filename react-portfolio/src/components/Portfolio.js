import React from "react";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Info from "../components/info.json";
import "../assets/css/Portfolio.css";
// import '../../src/assets/css/animation.css';

function Portfolio() {
    return (
        <div>
            <div className="container">
                <h1 className="display-4" id="disp4">Portfolio</h1>
                <hr className="light" color="white" />
                <div className="flexbox-container" id="linksPortfolio">
                    {Info.map(data => {
                        return <Card
                            key={data.id}
                            src={data.src}
                            alt={data.alt}
                            title={data.title}
                            link={data.link}
                            button={data.button}
                        />
                    })}
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Portfolio