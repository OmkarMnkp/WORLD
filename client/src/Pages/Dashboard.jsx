import React from "react";
import TotalPopulation from "../Components/TotalPopulation";
import TotalCountries from "../Components/TotalCountries";
import AvgPopulation from "../Components/AvgPopulation";
import Top10 from "../Components/Top10";
import TopLanguages from "../Components/TopLanguages";
import one from '../assets/one.png';
import two from '../assets/two.png';

const Dashboard = () => {
    return (
        <div className="container text-center py-5">
            <h1 className="mb-5">🌍 Global Dashboard 🌟</h1>

            <div className="row align-items-center mb-5">
                {/* Left Image */}
                <div className="col-lg-3 d-none d-lg-block">
                    <img src={one} alt="World Map" className="img-fluid" />
                </div>

                {/* Centered Components with emojis */}
                <div className="col-lg-6 d-flex flex-column align-items-center justify-content-center gap-4">
                    <h4>👥 Total Population</h4>
                    <TotalPopulation />
                    <h4>🗺️ Total Countries</h4>
                    <TotalCountries />
                    <h4>📊 Average Population</h4>
                    <AvgPopulation />
                </div>

                {/* Right Image */}
                <div className="col-lg-3 d-none d-lg-block">
                    <img src={two} alt="Data Illustration" className="img-fluid" />
                </div>
            </div>

            {/* Bottom Sections with emojis */}
            <h2 className="my-4">🏆 Top 10 Populated Countries</h2>
            <Top10 />

            <h2 className="my-4">🗣️ Most Spoken Languages</h2>
            <TopLanguages />
        </div>
    );
};

export default Dashboard;
