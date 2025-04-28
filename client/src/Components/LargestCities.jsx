// src/components/LargestCities.jsx

import React, { useEffect, useState } from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Tooltip, ResponsiveContainer } from "recharts";
import { TopLargestCities } from "../API/API";

const LargestCities = () => {
    const [cities, setCities] = useState([]);

    const fetchLargestCities = async () => {
        try {
            const response = await TopLargestCities();
            console.log("Largest Cities API Response:", response);

            if (response && response.LargestCities) {
                setCities(response.LargestCities);
            } else {
                console.error("Data format incorrect:", response);
            }
        } catch (error) {
            console.error("Error fetching largest cities:", error);
        }
    };

    useEffect(() => {
        fetchLargestCities();
    }, []);

    return (
        <div style={{ width: "100%", height: 220 }}> 
            {cities && cities.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="60%" data={cities}> 
                        <PolarGrid />
                        <PolarAngleAxis dataKey="Name" />
                        <PolarRadiusAxis />
                        <Tooltip />
                        <Radar name="Surface Area" dataKey="SurfaceArea" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                    </RadarChart>
                </ResponsiveContainer>
            ) : (
                <p style={{ textAlign: "center" }}>Loading largest cities data...</p>
            )}
        </div>
    );
};

export default LargestCities;
