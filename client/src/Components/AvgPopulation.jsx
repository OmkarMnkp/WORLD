// src/Components/AvgPopulation.jsx
import React, { useEffect, useState } from "react";
import { AveragePopulation } from "../API/API";

const AvgPopulation = () => {
    const [avgPop, setAvgPop] = useState(null);

    const fetchApi = async () => {
        try {
            const response = await AveragePopulation();
            
            setAvgPop(response.AvgPopulation[0].avg_population);
        } catch (error) {
            console.error("Error fetching average population:", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <h1 style={{color:'green',textAlign: "center"}}>AVERAGE POPULATION</h1>
            {avgPop !== null ? (
                <h2 style={{textAlign: "center"}}>{avgPop}</h2>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default AvgPopulation;
