import {
  getAllModules,
  getCourseModules,
  getWeekCourse,
} from "../models/db.js";

const modulesController = async (req, res) => {
  const allModules = await getAllModules();
  res.json(allModules);
};

const courseModulesController = async (req, res) => {
  const { course } = req.params;
  console.log(course);
  const courseModules = await getCourseModules(course);
  res.json(courseModules);
};

const courseModuleByWeekNumberController = async (req, res) => {
  const { course, semester, week_number } = req.params;
  const courseWeek = await getWeekCourse(course, semester, week_number);
  res.json(courseWeek);
};

export {
  modulesController,
  courseModulesController,
  courseModuleByWeekNumberController,
};
