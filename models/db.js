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

const getSemesterCourses = async (year, semester) => {
  return await client
    .db("theology")
    .collection("modules")
    .find({ year: parseInt(year), semester: parseInt(semester) })
    .toArray();
};

const getCourseById = async (id) => {
  return await client
    .db("theology")
    .collection("courses")
    .find({ "course.code": id })
    .toArray();
};

const getAllModules = async () => {
  return await client.db("theology").collection("modules").find().toArray();
};

const getCourseModules = async (course) => {
  return await client
    .db("theology")
    .collection("modules")
    .find({ course_id: course })
    .toArray();
};

const getWeekCourse = async (id, semesterNumber, weekNumber) => {
  return await client
    .db("theology")
    .collection("modules")
    .findOne({
      course_id: id,
      semester: parseInt(semesterNumber),
      week_number: parseInt(weekNumber),
    });
};

export {
  connectToDatabase,
  getAllCourses,
  getCourseById,
  getAllModules,
  getCourseModules,
  getWeekCourse,
  getSemesterCourses,
};
