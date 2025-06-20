import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import productsRoutes from "./routes/products.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config()

const app = express();
const PORT = 5400;  

app.use(cors());

app.use(express.json());


// Routes
app.use('/api/products', productsRoutes)
app.use('/api/auth', authRoutes)

app.get("/", (req, res) => {
    res.send("Welcome , server is live");
});

// Connect to database first, then start the server
const startServer = async () => {
    try {
        // Temporarily comment out database connection
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:5400`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();