// src/API/API.jsx






// this is my api file 
// i have commited chnages to it 

// now i want commit some changes into vs code and then push to github 

import axios from 'axios';

export const BASE_URL = 'http://localhost:7001'; 

const api = axios.create({ baseURL: BASE_URL });

export const apiRequest = async (endpoint, data = {}, method = 'get') => {
    try {
        const response = await api.request({
            url: endpoint,
            method,
            data,
        });
        return response.data;
    } catch (error) {
        console.log("Error", error);
        throw error;
    }
};


export const Totalpopulation = async () => {
    const total_population = await apiRequest('/dashboard/total-population');
    return total_population;
};

export const Totalcountries = async () =>{
    const total_countries = await apiRequest('/dashboard/total-countries');
    return total_countries;
}

export const AveragePopulation = async () =>{
    const avg_population = await apiRequest('/dashboard/average-population');
    return avg_population;
}

export const TopTenCountries = async ()=>{
    const top10_countries = await apiRequest('/dashboard/top-10-populated-countries')
    return top10_countries;
}

export const Top10Languages = async ()=>{
    const top10_languages = await apiRequest('/dashboard/top-10-languages')
    return top10_languages;
}