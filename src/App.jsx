import React from "react";
import ServiceTabs from "./components/ServiceTabs";
import "./App.css";

export default function App() {
    return (
        <>
            {/* PUT THE TAB PILL BAR AT THE VERY TOP */}
            <ServiceTabs />

            <div className="hero-wrapper">

                {/* LEFT SIDE */}
                <div className="hero-left">

                    <h1 className="hero-headline">
                        THE ABC <br />
                        <span className="hero-italic">Transportation</span> <br />
                        EXPERIENCE
                    </h1>

                    <p className="hero-subtext">
                        COOL AND NEW Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nunc eget sapien vel nulla feugiat vehicula, et tempor sapien non tellus.
                    </p>

                    <div className="bullet-list">
                        <div className="bullet-item">
                            <span className="bullet-icon">🚗</span>
                            <span className="bullet-text">Comprehensive Driver Clearances</span>
                        </div>

                        <div className="bullet-item">
                            <span className="bullet-icon">📡</span>
                            <span className="bullet-text">Real-Time GPS Tracking & Monitoring</span>
                        </div>

                        <div className="bullet-item">
                            <span className="bullet-icon">🔧</span>
                            <span className="bullet-text">In-House Maintenance & Safety Options</span>
                        </div>

                        <div className="bullet-item">
                            <span className="bullet-icon">♿</span>
                            <span className="bullet-text">Wheelchair-Accessible Vehicles</span>
                        </div>
                    </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="hero-right">

                    <img src="/src/assets/car-hero.jpg" className="hero-image" alt="Car" />

                    <div className="hero-card">
                        <h2 className="hero-card-title">Comprehensive Driver Clearances</h2>

                        <p className="hero-card-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
                        </p>

                        <div className="button-row">
                            <button className="btn btn-quote">Get a Quote</button>
                            <button className="btn btn-book">Book Online</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    );
}
