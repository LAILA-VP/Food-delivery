import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://admin:admin12345@cluster0.sdxiupy.mongodb.net/YUMMYYARD').then(()=>console.log("DB Connected"));
}