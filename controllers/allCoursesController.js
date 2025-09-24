import { getAllCourses } from "../models/db.js";

const allCoursesController = async (req, res) => {
  const allCourses = await getAllCourses();
  res.send(allCourses);
};

export { allCoursesController };
