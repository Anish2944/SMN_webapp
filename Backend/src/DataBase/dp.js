const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`mongodb+srv://anishkh0276:A3wgxjV1aNkk28sR@cluster0.2hqzmac.mongodb.net/`);
        console.log(`MongoDB connected Successfully DB host ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed",error);
        process.exit(1);
    }
};

module.exports={connectDB};