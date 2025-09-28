import { Router } from "express";
import {
  allCoursesController,
  courseByIdController,
  semesterCourseController,
} from "../controllers/coursesController.js";

const coursesRoute = Router();

coursesRoute.get("/", allCoursesController);
coursesRoute.get("/:id", courseByIdController);
coursesRoute.get("/:year/:semester", semesterCourseController);

export { coursesRoute };
