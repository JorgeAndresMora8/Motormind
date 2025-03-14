import mongoose from "mongoose"
import { MONGO_DB_URI } from "../../config"

const connectDB = async () => { 
    try {
        await mongoose.connect(MONGO_DB_URI as string)
    } catch (error) {
        console.error(`Error connecting to MongoDB ${error}`)
        process.exit(1)
    }
}

export default connectDB;