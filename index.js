import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import router from "./routes/routes.js";

const PORT = process.env.PORT;

dotenv.config();
const mongoString = process.env.DATABASE_URL;

console.log(mongoString);

// connect the DATABASE to server using Mongoose
mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => console.log(error)); // database.on means it will connect to database and throws any error if the connection fail

database.once("connected", () => console.log("Database Connected")); // databae.once means it will run only one time, if it is successful it will show a message

const app = express();

// allows us to accept the data in JSON format
app.use(express.json());

// listen the changes of file on PORT 3000
app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});

app.use("/api", router); // one is the base endpoint and other is the contents of the routes, all endpoints are start from '/api
