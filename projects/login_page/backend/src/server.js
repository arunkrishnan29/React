const pool = require("./db/db");
const express =require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const authenticateToken = require("./middleware/authMiddleware");

const app =express();
app.use(express.json());

const PORT =5000;

app.use(cors({
  origin: 'http://localhost:5173'
}))

app.get("/",(req,res) => {
  res.send("If you can see this message then the,<br/> Backend is working properly!!");
});

app.get("/api/protected", authenticateToken, (req, res) => {
    res.json({
        message: "You accessed a protected route",
        user: req.user
    });
});

app.get("/db-test", async (req,res) =>{
  try{
    
    const result =await pool.query("SELECT NOW()");

    res.json(result.rows);
  }catch (error){
    console.error("Database connection error:",error);
    res.status(500).send("Database connection failed");
  }
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT} hold ctrl+click on the link to open it directly`);
});