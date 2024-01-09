import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import expressFileUpload from "express-fileupload";
import { registerRoutes } from "./routes/routes.js";
import cluster from "node:cluster"
import process from "node:process"

if (cluster.isPrimary){
  console.log(`Primary processId: ${process.pid}`)
  let workers = []
  for (let i = 0; i < 3; i++) {
    let worker = cluster.fork()
    worker.on("orice", () => {
      console.log("Orice event!")
      workers.push(cluster.fork())
    })

    worker.on("destroy", () => {
      worker.kill()
    })

    workers.push(worker)
  }
} else {
  dotenv.config();
  let app = express();
  let port = 3000;

  let mongoConnectionUrl = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASS}@${process.env.MONGO_DB_URL}/?retryWrites=true&w=majority`;

  app.use(express.json());
  app.use(expressFileUpload());

  registerRoutes(app);

  app.listen(port, async () => {
    try {
      await mongoose.connect(mongoConnectionUrl, { dbName: "test" });
      console.log(`App started on port: ${port} [processId: ${process.pid}]`);
    } catch (error) {
      throw error;
    }
  });
}
