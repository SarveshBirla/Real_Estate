import express from "express";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());


app.use("/api/posts" , postRoute );
app.use("/api/auth",authRoute);



// listen 
app.listen(3000,()=>{
    console.log("Server is Running!");
})