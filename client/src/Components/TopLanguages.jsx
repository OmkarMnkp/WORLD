import React, { useEffect, useState } from "react";
import { Top10Languages } from "../API/API";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const TopLanguages = () => {
    const [toplang, setTopLang] = useState([]);

    const fetchApi = async () => {
        try {
            const response = await Top10Languages();
            setTopLang(response.TotalCountries); 
        } catch (error) {
            console.log("Error fetching top 10 languages", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []); 

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{color:'purple'}}>Top 10 Languages</h1>
            {toplang.length > 0 ? (
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={toplang}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="language" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="country_count" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <p>Loading chart data...</p>
            )}
        </div>
    );
};

export default TopLanguages;
