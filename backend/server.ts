import app from "./src/app";
import dotenv from "dotenv";
import db from "./src/config/db.config";

dotenv.config();
const port: number = parseInt(process.env.PORT || '5000', 10);

db.then( res => {
    if(res) {
        console.log('Database connection successfully');
        app.listen(port, () => {
            console.log(`Server is running on PORT: ${port}`);
        });
    }
}).catch((err: any) => {
    console.log(err);
})
