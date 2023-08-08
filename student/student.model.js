import mongoose from "mongoose";

// const rule(schema)  
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    location: String,
})

// create table(model)
// variable in capital letter for table name
const Student = mongoose.model("Student", studentSchema);

export { Student };