import { Router } from "express";
import {
  allElectivesController,
} from "../controllers/electivesController.js";

const electivesRoute = Router();

electivesRoute.get("/", allElectivesController);


export { electivesRoute };
