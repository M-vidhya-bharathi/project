import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://vidhyabharathi:94439949@cluster0.o0jte.mongodb.net/food-app"
    )
    .then(() => console.log("DB Connected"));
};
