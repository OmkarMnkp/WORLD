import React, { useEffect, useState } from "react";
import { Totalpopulation } from "../API/API";

const TotalPopulation = () => {
    const [totalPop, setTotalPop] = useState(null);

    const fetchApi = async () => {
        try {
            const totalPop = await Totalpopulation();
            console.log("Fetched population:", totalPop);
            setTotalPop(totalPop);
        } catch (error) {
            console.error("Error fetching population:", error);
        }
    };

    useEffect(() => {
        fetchApi();
    }, []);

    return (
        <div>
            <h1 style={{color:'red',textAlign: "center"}}>POPULATION</h1>
            {
                <h2  style={{textAlign: "center"}}>{totalPop}</h2>
            }
        </div>
    );
};

export default TotalPopulation;
