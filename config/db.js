import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected successflly.");
    } catch (error) {
        console.log("FAILED to connect database.");
    }
}

export default connectDB