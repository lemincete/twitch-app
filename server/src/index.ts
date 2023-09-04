import { config } from 'dotenv';

config({ path: './config/.env' })

import express from 'express';

import router from './router';
import cors from 'cors';

const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))

app.use('/api', router);

const { PORT } = process.env as { PORT: string }

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log('Api is starting on port ' + PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

start();