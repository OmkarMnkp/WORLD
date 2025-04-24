// src/Components/TotalCountries.jsx
import React, { useEffect, useState } from "react";
import { Totalcountries } from "../API/API";

const TotalCountries = () => {
    const [totalCont, setTotalCont] = useState(null);

    const fetchApi = async () => {
        try {
            const totalCont = await Totalcountries();
            setTotalCont(totalCont.TotalCountries[0].total_countries);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <h1 style={{color:'orange',textAlign: "center"}}>Countries</h1>
            {totalCont !== null ? (
                <h2 style={{textAlign: "center"}}>{totalCont}</h2>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default TotalCountries;
