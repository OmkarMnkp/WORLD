
import express from 'express';
import { getAveragePopulation, getLargestCities, getTop10Languages, getTop10LeastPopulatedCountries, getTop10PopulatedCountries, getTotalCountries, getTotalLanguages, getTotalPopulation, getTotalPopulationByContinent } from '../Controllers/DashBoardController.js';

const router = express.Router();

router.get('/total-population', getTotalPopulation);
router.get('/top-10-least-populated-countries', getTop10LeastPopulatedCountries);
router.get('/top-10-populated-countries', getTop10PopulatedCountries);
router.get('/total-countries', getTotalCountries);
router.get('/average-population', getAveragePopulation);
router.get('/total-population-by-continent', getTotalPopulationByContinent);
router.get('/total-languages', getTotalLanguages);
router.get('/top-10-languages', getTop10Languages)
router.get('/largest-cities', getLargestCities);

export default router;