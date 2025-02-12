import express from "express";
import cors from "cors";
import authRoute from "./routes/auth.route.js";
import postRoute from "./routes/post.route.js";
import testRoute from "./routes/test.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
const app = express();

dotenv.config();

app.use(cors({origin:process.env.CLIENT_URL , credentials : true }));
app.use(express.json());
app.use(cookieParser());


app.use("/api/posts" , postRoute );
app.use("/api/auth",authRoute);
app.use("/api/test",testRoute);



// listen 
app.listen(3000,()=>{
    console.log("Server is Running!");
})