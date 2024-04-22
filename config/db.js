import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const mongoURI = 'mongodb+srv://pst_dev20:D0gRyUpWgD1oyzDF@cluster2.d1sgpye.mongodb.net/?retryWrites=true&w=majority&appName=Cluster2';
    await mongoose.connect(mongoURI);
    console.log(`Successfully connected to MongoDB 👍`);
  } catch (error) {
    console.error(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
