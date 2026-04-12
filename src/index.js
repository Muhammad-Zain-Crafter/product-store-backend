import app from "./app.js";
import initDB from "./db/database.js";


import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;


initDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server is running on port " + PORT);
    });
});