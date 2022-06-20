import express from "express";
import db from './config/dbConnect.js';
import routes from './routes/index.js'
import cors from 'cors';

db.on("error", console.log.bind(console, 'Connection Error'));
db.once("open", () => {
    console.log("Connection with database established");
});

const app = express();

app.use(express.json());

routes(app);



app.use(cors())
export default app;