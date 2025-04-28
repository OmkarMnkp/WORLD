import React from "react";
import TotalPopulation from "../Components/TotalPopulation";
import TotalCountries from "../Components/TotalCountries";

import TopLanguages from "../Components/TopLanguages";
import TopPopulated from "../Components/TopPopulated";
import LargestCities from "../Components/LargestCities";




const Dashboard = () => {
    return (
        <div className="container text-center py-4">
            <h2 className="mb-4" style={{ fontSize: "28px" }}>🌍 Global Dashboard 🌟</h2>

            {/* Statistics Section */}
            <div className="row mb-4">
                <div className="col-md-4 mb-3">
                    <div className="p-3 border rounded shadow-sm">
                        <h6>👥 Total Population</h6>
                        <TotalPopulation />
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="p-3 border rounded shadow-sm">
                        <h6>🗺️ Total Countries</h6>
                        <TotalCountries />
                    </div>
                </div>

                <div className="col-md-4 mb-3">
                    <div className="p-3 border rounded shadow-sm">
                        <h6>🏆 Top Populated Countries (Donut)</h6>
                        <div style={{ width: "100%", height: "180px" }}>
                            <TopPopulated />
                        </div>
                    </div>
                </div>



            </div>

            <div className="row">


                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">
                        <h6>🗣️ Most Spoken Languages</h6>
                        <div style={{ width: "100%", height: "180px" }}>
                            <TopLanguages />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-3">
                    <div className="p-3 border rounded shadow-sm">
                        <h6>🗣️Largest cities</h6>
                        <div style={{ width: "100%", height: "180px" }}>
                            <LargestCities/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
