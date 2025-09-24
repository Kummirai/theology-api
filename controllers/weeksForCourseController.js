import { getWeeksForCourse } from "../models/db.js";

//Returns all weeks for a specific course.
const weeksForCourseController = async (req, res) => {
  const { id } = req.params;
  const courseWeeks = await getWeeksForCourse(id);
  res.json(courseWeeks);
};

export { weeksForCourseController };
