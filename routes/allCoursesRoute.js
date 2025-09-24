import { Router } from "express";
import { allCoursesController } from "../controllers/allCoursesController.js";
import { courseByIdController } from "../controllers/courseByIdController.js";

const coursesRoute = Router();

coursesRoute.get("/", allCoursesController);
coursesRoute.get("/:id", courseByIdController);

export { coursesRoute };
