"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: './config/.env' });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const { PORT } = process.env;
const start = () => {
    try {
        app.listen(PORT, () => {
            console.log('Api is starting on port ' + PORT);
        });
    }
    catch (e) {
        console.log(e);
    }
};
start();
