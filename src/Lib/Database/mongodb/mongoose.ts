import config from "@/Config";
import mongoose from "mongoose";

export const connectMongodb = async () => {
    try {
        mongoose.set('strictQuery', true);

        await mongoose.connect(config.MONGODB);

    } catch (error:any) {
        console.log(`Mongo Connection Failed: ${error.message}`);
    }
}