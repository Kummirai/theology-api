import { Router } from "express";
import { allCoursesController } from "../controllers/allCoursesController.js";
import { courseByIdController } from "../controllers/courseByIdController.js";
import { weeksForCourseController } from "../controllers/weeksForCourseController.js";

const coursesRoute = Router();

coursesRoute.get("/", allCoursesController);
coursesRoute.get("/:id", courseByIdController);
coursesRoute.get("/:id/weeks", weeksForCourseController);

export { coursesRoute };
