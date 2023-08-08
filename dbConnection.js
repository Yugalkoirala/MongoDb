import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        await mongoose.connect("mongodb+srv://yugal:yugal123@cluster0.lenond5.mongodb.net/?retryWrites=true&w=majority");
        console.log("Database connected");
    } catch (error) {
        console.log("Database connection failed");
        console.error(error.message);
    }
};

// export { dbConnect };
export default dbConnect;