import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
}));

const port = process.env.PORT || 3000;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

app.get('/', (req, res) => {
    res.send('Hello, World update teste!');
});

app.get('/api/test', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json({
            message: 'Hello from the backend!',
            databaseTime: result.rows[0].now,
        });
    } catch (error: any) {
        console.error('Database connection error:', error);
        res.status(500).json({
            message: 'Error connecting to the database',
            error: error.message,
        });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
