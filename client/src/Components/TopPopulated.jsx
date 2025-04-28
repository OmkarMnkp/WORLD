import React, { useEffect, useState } from "react";
import { Top10PopulatedCountries } from "../API/API"; 
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const TopPopulated = () => {
    const [countries, setCountries] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await Top10PopulatedCountries();
            setCountries(response.top10Populated); 
        } catch (error) {
            console.log("Error fetching top 10 populated countries", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#AF19FF", "#FF4560", "#00E396", "#FEB019", "#775DD0", "#3F51B5"];

    return (
        <div style={{ textAlign: "center", height: "100%" }}>
            {countries.length > 0 ? (
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={countries}
                            dataKey="population"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius={40}   // Smaller inner radius
                            outerRadius={70}   // Smaller outer radius
                            fill="#8884d8"
                            label={({ name }) => name}
                        >
                            {countries.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default TopPopulated;
