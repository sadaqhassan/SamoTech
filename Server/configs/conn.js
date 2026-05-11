import mongoose from 'mongoose'

export const CONNDB = async () => {
    const DB_uri = process.env.DB_URI;
    mongoose.connect(DB_uri).then(()=>console.log("connected to db")).catch((err)=>console.log(err.message))
}