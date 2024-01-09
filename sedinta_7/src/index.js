import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import expressFileUpload from "express-fileupload"
import { registerRoutes } from "./routes/registerRoutes.js";
import "path"

dotenv.config()
let app = express();
let port = 3000;

let mongoConnectionUrl =
  `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority`

app.use(express.json())
app.use(expressFileUpload())

registerRoutes(app)

app.listen(port, async () => {
    try {
        await mongoose.connect(
            mongoConnectionUrl, 
            { dbName: "test" }
        )
        // let users = await User.find()
        // console.log(users)
        console.log("App started on port: " + port);
    } catch (error) {
        throw error
    }
});
