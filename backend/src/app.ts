import express, { Express } from "express";
import contactRouter from "./routes/contact.routes";
import cors from "cors";

const app : Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/contact-us', contactRouter);

export default app;