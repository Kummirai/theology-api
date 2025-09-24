import {
  getWeeksForCourse,
  getAllCourses,
  getCourseById,
} from "../models/db.js";

//Returns all weeks for a specific course.
const weeksForCourseController = async (req, res) => {
  const { id } = req.params;
  const courseWeeks = await getWeeksForCourse(id);
  res.json(courseWeeks);
};

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

export { allCoursesController, courseByIdController, weeksForCourseController };
