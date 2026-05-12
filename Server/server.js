import express from 'express'
import { configApp } from './configs/configs.js';
import { CONNDB } from './configs/conn.js';
import { userRoute } from './Routes/user.route.js';

const app = express();
configApp(app);
const PORT = process.env.PORT 

app.use('/api/user', userRoute);
CONNDB()

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
