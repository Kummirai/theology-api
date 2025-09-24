import {
  getWeeksForCourse,
  getAllCourses,
  getCourseById,
  getWeekCourse,
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

//Returns details for a specific week (topic, outcomes, readings, etc.).
const weekCourseConroller = async (req, res) => {
  const { id, weekNumber } = req.params;
  const week = await getWeekCourse(id, weekNumber);
  res.json(week);
};

export {
  allCoursesController,
  courseByIdController,
  weeksForCourseController,
  weekCourseConroller,
};
