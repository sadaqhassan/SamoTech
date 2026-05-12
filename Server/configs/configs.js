import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'

export const configApp = (app)=>{
    dotenv.config();
    app.use(express.json());
    app.use(cookieParser());
    app.use(cors({
        origin: "http://localhost:5173",
        Credential : true
    }));

}