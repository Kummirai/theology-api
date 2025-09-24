import { Router } from "express";
import {
  allCoursesController,
  courseByIdController,
  weeksForCourseController,
  weekCourseConroller,
} from "../controllers/coursesController.js";

const coursesRoute = Router();

coursesRoute.get("/", allCoursesController);
coursesRoute.get("/:id", courseByIdController);
coursesRoute.get("/:id/weeks", weeksForCourseController);
coursesRoute.get("/:id/weeks/:weekNumber", weekCourseConroller);

export { coursesRoute };
