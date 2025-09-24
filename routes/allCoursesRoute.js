import { Router } from "express";
import { allCoursesController } from "../controllers/allCoursesController.js";

const coursesRoute = Router();

coursesRoute.get("/courses", allCoursesController);

export { coursesRoute };
