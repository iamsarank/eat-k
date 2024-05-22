import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://iamsarank:CMfqxYWsyiK9vcAI@cluster0.3ielvki.mongodb.net/eatk')
        .then(() => console.log("DB Connected"));
}

