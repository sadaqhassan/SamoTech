import express from 'express'
import { configApp } from './configs/configs';

const app = express();

configApp(app);