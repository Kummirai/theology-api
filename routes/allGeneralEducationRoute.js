import { Router } from "express";
import {
  allGeneralEducationController,
} from "../controllers/generalEducationController.js";

const generalEducationRoute = Router();

generalEducationRoute.get("/", allGeneralEducationController);


export { generalEducationRoute };
