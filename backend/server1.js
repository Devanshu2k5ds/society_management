import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import cors from 'cors';

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    password: "anshansh",
    database: "Login",
    port: 5432
});

// Connect to database
db.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Database connection error:', err));

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Submit endpoint
app.post("/register", async (req, res) => {
    try {
        console.log('Received data:', req.body);
        
        const { name, email, password, confirmPassword } = req.body;
        
        const result = await db.query(
            "INSERT INTO login (name, email, password, confirmpassword) VALUES ($1, $2, $3, $4) RETURNING *",
            [name, email, password, confirmPassword]
        );
        
        console.log('Data inserted successfully:', result.rows[0]);
        
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