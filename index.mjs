import express from "express";
import routes from "./router/index.mjs";
import db from './src/Config/Db.mjs';
import cors from 'cors'; // Change require to import

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.listen(3001, () => {
    console.log("listening on port 3001");
});

db.connection.once('open', () => {
    console.log('DB connected successfully!')
});

app.use(express.json());
app.use("/", routes);
