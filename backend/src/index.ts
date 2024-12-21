import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors({
    origin: '*',
}));

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World update teste!');
});

app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
