
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors';
import DashboardRoute from '../server/Routes/DashboardRoute.js'
dotenv.config();


const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 7001

app.get('/',(req,res)=>{
    res.send("Hello world")
})
app.use('/dashboard',DashboardRoute);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

// http://localhost:7000/dashboard/total-population