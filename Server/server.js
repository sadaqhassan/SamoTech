import express from 'express'
import { configApp } from './configs/configs';
import { CONNDB } from './configs/db.config.js';
import { userRoute } from './Routes/user.route.js';

const app = express();
const PORT = process.env.PORT 

app.use('/api/user', userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

CONNDB();

configApp(app);