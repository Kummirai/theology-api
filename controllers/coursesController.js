import { getAllCourses, getCourseById, getWeekCourse } from "../models/db.js";

//Returns full details of a specific course.
const courseByIdController = async (req, res) => {
  const { id } = req.params;
  const course = await getCourseById(id);
  res.json(course);
};

//Returns a list of all courses with basic info (id, title, credits, year, semester).
const allCoursesController = async (req, res) => {
  const allCourses = await getAllCourses();
  res.send(allCourses);
};

//Returns details for a specific week (topic, outcomes, readings, etc.).
const weekCourseConroller = async (req, res) => {
  const { id, semester, week } = req.params;
  const weekData = await getWeekCourse(id, semester, week);
  res.json(weekData);
};

export { allCoursesController, courseByIdController, weekCourseConroller };
