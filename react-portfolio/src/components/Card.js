import React from "react";
import "../assets/css/Card.css";

function Card(props) {
    return(
        <div className="card border0" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.src} alt={props.alt} width="100" height="100" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                    <div className="flexbox-container">
                        <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-light btn-lg" id="boton">{props.button}</a>
                    </div>
            </div>
        </div>

    )
}

export default Card;