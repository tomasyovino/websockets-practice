import mongoose from "mongoose";
import config from "./config";

mongoose.set("strictQuery", false);

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongo_uri);
        console.log("The database connection has been successful.");
    } catch (err) {
        console.log(err);
    };
};