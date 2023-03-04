import express from "express"
import { dataBaseConnection } from "./db.js";
import dotenv from "dotenv"
import { studentRouter } from "./routes/student.js";
import { mentorRouter } from "./routes/mentor.js";

dotenv.config();
dataBaseConnection();

const app = express()

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Working")
})

app.use("/student",studentRouter)
app.use("/mentor",mentorRouter)

app.listen(process.env.PORT)