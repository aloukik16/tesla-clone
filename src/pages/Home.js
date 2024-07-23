import React from "react";
import Hero from "../components/Hero";

function Home() {
    return (
        <section className="hero">
            <div className="hero-content-s">
                <h1>Model S</h1>
                <p style={{color:'white'}}>
                    From $68,4905
                    After $6,500 Est. Savings
                </p>
                <div className="hero-buttons">
                    <button className="btn1">Custom Order</button>
                    <button className="btn2">Demo Drive</button>
                </div>
            </div>

            <div className="hero-content-y">
                <h1>Model Y</h1>
                <p>
                  1.99% APR Financing Ending August 31
                  From $31,4903
                </p>
                <div className="hero-buttons">
                    <button className="btn1">Custom Order</button>
                    <button className="btn2">Demo Drive</button>
                </div>
            </div>

            <div className="hero-content-x">
                <h1>Model X</h1>
                <p>From $65,9904 After $14,000 Est. Savings</p>
                <div className="hero-buttons">
                    <button className="btn1">Custom Order</button>
                    <button className="btn2">Demo Drive</button>
                </div>
            </div>

            <div className="hero-content-three">
                <h1>Model 3</h1>
                <p>Model 3
                    $7,500 Federal Tax Credit Available1
                    From $29,990 After Est. Savings2
                </p>
                <div className="hero-buttons">
                    <button className="btn1">Custom Order</button>
                    <button className="btn2">Demo Drive</button>
                </div>
            </div>

            <div className="hero-content-ct">
                <h1>CyberTruck</h1>
                <p>Better utility than a truck with more performance than a sports car</p>
                <div className="hero-buttons">
                    <button className="btn1">Custom Order</button>
                    <button className="btn2">Demo Drive</button>
                </div>
            </div>
        </section>
    );
}

export default Home;