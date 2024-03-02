import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://NodeReact-Blog-Site:CJAyyS3WytHxkKmP@cluster0.1hmycd1.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
