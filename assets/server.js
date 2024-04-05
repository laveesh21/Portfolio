import express from "express";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(express.json());



const PORT = 5800;
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});