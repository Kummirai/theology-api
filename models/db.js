import { MongoClient } from "mongodb";

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to database`);
  } catch (error) {
    console.log(`Error connecting to database ${error}`);
  }
};

const getAllCourses = async () => {
  return await client.db("theology").collection("courses").find().toArray();
};

export { connectToDatabase, getAllCourses };
