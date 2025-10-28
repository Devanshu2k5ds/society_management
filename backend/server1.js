import express from 'express';
import bodyParser from 'body-parser';
import pg from "pg"
const app = express();
const port = 3000;
const db = new pg.Client({
    user:"postgrade",
    host:"localhost",
    password:"anshansh",
    database:"world",
    port:5432
})
db.connect()
app.use(bodyParser.urlencoded({extended:true}));
app.post("/submit",(req,res)=>{
    console.log(req.body);
    res.status(200).json({ ok: true, received: req.body });
})
app.listen(port,()=>{
    console.log(`server running on part ${port}.`);
})