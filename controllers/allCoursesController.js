import { getAllCourses } from "../models/db.js";


//Returns a list of all courses with basic info (id, title, credits, year, semester).
const allCoursesController = async (req, res) => {
  const allCourses = await getAllCourses();
  res.send(allCourses);
};

export { allCoursesController };
