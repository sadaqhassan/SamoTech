import express from 'express'
import { configApp } from './configs/configs';

const app = express();
const PORT = process.env.PORT 


CONNDB();

configApp(app);