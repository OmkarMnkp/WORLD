import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        logging: false,
        dialectOptions: {},
    }
);

// ✅ Correct self-invoking async function
(async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Connected to the database successfully');
    } catch (error) {
        console.error('❌ Connection error:', error.message);
        process.exit(1);
    }
})();
