import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import TickersRoute from "./routes/tickers.route.js";

const app = express();
const port = 8000 || process.env.PORT;

app.use(cors());
app.use(express.json());

connectDB();

app.get('/', (req, res) => {
    res.status(200).json("Working")
})
app.use('/api/v1/tickers', TickersRoute)


app.listen(port, () => {
    console.log("Server running at port", port)
})