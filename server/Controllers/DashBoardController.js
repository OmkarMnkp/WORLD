import { sequelize } from "../Config/Db.js";


// get total population
export const getTotalPopulation = async (req, res) => {
    try {
        const q1 = `select sum(Population) as TotalPopulation from country`
        const totalPopulation = await sequelize.query(q1);
        const tp =totalPopulation[0]
        const tp1 = tp[0].TotalPopulation
        res.status(200).send(tp1)
    } catch (error) {
        res.status(500).send({ error: error })

    }

}

// top 10 populated countries
export const getTop10PopulatedCountries = async (req, res) => {
    try {
        const q2 = `select name from country order by Population desc limit 10;`;
        const Top10Populated = await sequelize.query(q2);
        res.status(200).send({ top10Populated: Top10Populated[0], success: true })
    } catch (error) {
        res.status(500).send({ error: error })
    }
}
// top 10 leat populated countries
export const getTop10LeastPopulatedCountries = async (req, res) => {
    try {
        const q3 = `select name from country order by Population asc limit 10;`;
        const Top10LeatPopulated = await sequelize.query(q3);
        res.status(200).send({ Top10LeatPopulated: Top10LeatPopulated[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })

    }

}
// get total countries
export const getTotalCountries = async (req, res) => {
    try {
        const q4 = `select count(*) as total_countries from country;`;
        const TotalCountries = await sequelize.query(q4);
        res.status(200).send({ TotalCountries: TotalCountries[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })
    }
}
// get avg population
export const getAveragePopulation = async (req, res) => {
    try {
        const q5 = `select avg(Population) as avg_population from country;`;
        const AvgPopulation = await sequelize.query(q5);
        res.status(200).send({ AvgPopulation: AvgPopulation[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })
    }

}
// get population by contirnt
export const getTotalPopulationByContinent = async (req, res) => {
    try {
        const q6 = `select continent, sum(population) as total_population from country group by continent`;
        const TotalPopContinent = await sequelize.query(q6);
        res.status(200).send({ TotalPopContinent: TotalPopContinent[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })
    }

}
// total language
export const getTotalLanguages =async (req, res) => {
    try {
        const q7 = `select count(*) as total_languages from countrylanguage`;
        const TotalLanguages = await sequelize.query(q7);
        res.status(200).send({ TotalLanguages: TotalLanguages[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })
    }

}
// get top 10 language sql

export const getTop10Languages = async(req, res) => {
    try {
        const q8 = `select language ,count(*) as country_count from countryLanguage group by language order by country_count desc limit 10;`;
        const TotalCountries = await sequelize.query(q8);
        res.status(200).send({ TotalCountries: TotalCountries[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })
    }

}
// get largest citites

export const getLargestCities = async(req, res) => {
    try {
        const q9 = `select Name,SurfaceArea from country order by SurfaceArea desc limit 10;`;
        const LargestCities = await sequelize.query(q9);
        res.status(200).send({ LargestCities: LargestCities[0], success: true })

    } catch (error) {
        res.status(500).send({ error: error })
    }

}