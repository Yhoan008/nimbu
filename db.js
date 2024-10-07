import mongoose from "mongoose";

export const connectDbs = async () => {
  try {
    mongoose.connect(
      "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.1"
    );
    console.log("La base de datos ha sido conectada");
  } catch (error) {
    console.log(error);
  }
};
