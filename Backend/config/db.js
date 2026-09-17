import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://asakundwiramurebiwa:Asa1234@cluster0.ubzxdfe.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
