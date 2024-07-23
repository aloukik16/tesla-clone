import React from "react";
import './Hero.css';

function Hero({ modelName, description }) {
    return (
        <section className={`hero hero-content-${modelName.replace(/\s+/g, '-').toLowerCase()}`}>
            <div className="hero-content">
                <h1>{modelName}</h1>
                <p>{description}</p>
                <div className="hero-buttons">
                    <button className="btn1">Custom Order</button>
                    <button className="btn2">Demo Drive</button>
                </div>
            </div>
        </section>
    );
}

export default Hero;
