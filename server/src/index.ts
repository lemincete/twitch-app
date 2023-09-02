import { config } from 'dotenv';

config({ path: './config/.env' })

import express from 'express';

const app = express();

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