import React, { useEffect, useState } from "react";
import { TopTenCountries } from "../API/API";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Top10 = () => {
    const [topten, setTopten] = useState([]);

    // Fetch data from API
    const fetchApi = async () => {
        try {
            const response = await TopTenCountries();
            // Add dummy population data for chart visualization
            const populatedData = response.top10Populated.map((item, index) => ({
                name: item.name,
                population: (index + 1) * 100000000  // Dummy population for demo
            }));
            setTopten(populatedData);
        } catch (error) {
            console.error("Error fetching top 10 countries", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []); // Empty dependency array to fetch data once on component mount

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{color:'blue'}}>Top 10 Most Populated Countries</h1>
            {topten.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={topten}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="population" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default Top10;
