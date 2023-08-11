import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();

const mongoURI = process.env.MONGDB_URI;
const dbName = process.env.DB_NAME;
const connectionString = `${mongoURI}/${dbName}?retryWrites=true&w=majority`;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000,
};

const db = mongoose.connect(connectionString, options);

export default db;