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

const getCourseById = async (id) => {
  return await client
    .db("theology")
    .collection("courses")
    .find({ courseId: id })
    .toArray();
};

const getWeeksForCourse = async (id, courseWeeks) => {
  return await client
    .db("theology")
    .collection("courses")
    .find({ courseId: id }, { projection: { weeks: 1, _id: 0 } })
    .toArray();
};

export { connectToDatabase, getAllCourses, getCourseById, getWeeksForCourse };
