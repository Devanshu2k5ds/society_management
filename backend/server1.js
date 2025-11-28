import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';
import bcrypt from 'bcryptjs';
const app = express();
const port = 3000;
const saltrounds = 12;
const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    password: "anshansh",
    database: "Login",
    port: 5432
});

db.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Database connection error:', err));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post("/register", async (req, res) => {
    try {
        console.log('Received data:', req.body);
        
        const { name, email, password, confirmPassword } = req.body;
        const row = await db.query("SELECT * from login where email=$1",[email]);
        if(row.rows.length>0){
            return res.status(400).json({message:"User already exists",success:false})
        }
        if(password!=confirmPassword){
            return res.status(400).json({message: "Please enter same password in both fields",success:false});
        }
        async function hashPassword(){
            const hashedPassword = await bcrypt.hash(password,saltrounds)
            return hashedPassword;
        }
        const hashedPassword = await hashPassword();
        const result = await db.query(
            "INSERT INTO login (name, email, password, confirmpassword) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, hashedPassword, confirmPassword]
        );
        console.log('Data inserted successfully:', result.rows[0]);
        res.status(200).json({message:"member registered succesfully",success:true});    
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to save data',
            error: error.message 
        });
    }
});
app.post("/login", async (req, res) => {
    try {
        console.log('Received data:', req.body);
        
        const {  email, password} = req.body;
        
        const result = await db.query(
            "SELECT * from login where email=$1",[email]
        );
        if(result.rows.length===0){
            return res.status(400).json({message:"Email is not registered",success:false});
        }
        const isMatch = await bcrypt.compare(password,result.rows[0].password)
        if(isMatch){
            res.status(200).json({message:"user verified",success:true});
        }
        else{
            res.status(400).json({message:"Invalid credentials",success:false});
        }
    } catch (error) {
        console.error('Error inserting data:', error);
        res.status(500).json({ 
            success: false, 
            message: 'Failed to save data',
            error: error.message 
        });
    }
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});