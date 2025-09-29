import {
  getAllCourses,
  getCourseById,
  getSemesterCourses,
} from "../models/db.js";

//Returns full details of a specific course.
const courseByIdController = async (req, res) => {
  const { id } = req.params;
  const course = await getCourseById(id);
  res.json(course);
};

//Returns a list of all courses with basic info (id, title, credits, year, semester).
const allCoursesController = async (req, res) => {
  console.log("request received!");

  const allCourses = await getAllCourses();
  res.json(allCourses);
};

const semesterCourseController = async (req, res) => {
  const { year, semester } = req.params;
  const semesterCourses = await getSemesterCourses(year, semester);
  res.json(semesterCourses);
};

export { allCoursesController, courseByIdController, semesterCourseController };
