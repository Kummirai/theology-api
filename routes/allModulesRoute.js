import { Router } from "express";
import {
  modulesController,
  courseModulesController,
  courseModuleByWeekNumberController,
  moduleByIdController,
} from "../controllers/modulesController.js";

const modulesRoute = Router();

modulesRoute.get("/", modulesController);
// modulesRoute.get("/:course", courseModulesController);
modulesRoute.get(
  "/:course/:semester/:week_number",
  courseModuleByWeekNumberController
);
modulesRoute.get("/:moduleId", moduleByIdController);

export { modulesRoute };
