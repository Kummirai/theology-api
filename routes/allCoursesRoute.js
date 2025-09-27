import { Router } from "express";
import {
  allCoursesController,
  courseByIdController,
  weekCourseConroller,
} from "../controllers/coursesController.js";

const coursesRoute = Router();

coursesRoute.get("/", allCoursesController);
coursesRoute.get("/:id", courseByIdController);
coursesRoute.get("/:id/:semester/:week", weekCourseConroller);

export { coursesRoute };
