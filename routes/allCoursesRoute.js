import { Router } from "express";
import {
  allCoursesController,
  courseByIdController,
  weeksForCourseController,
} from "../controllers/coursesController.js";

const coursesRoute = Router();

coursesRoute.get("/", allCoursesController);
coursesRoute.get("/:id", courseByIdController);
coursesRoute.get("/:id/weeks", weeksForCourseController);

export { coursesRoute };
