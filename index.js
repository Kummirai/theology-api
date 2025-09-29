import express from "express";
import { connectToDatabase, getAllCourses } from "./models/db.js";
import { coursesRoute } from "./routes/allCoursesRoute.js";
import { modulesRoute } from "./routes/allModulesRoute.js";
import {electivesRoute} from "./routes/allElectivesRoutes.js"
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3000",
};

const app = express();
app.use(cors(corsOptions));
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use("/api/courses", coursesRoute);
app.use("/api/modules", modulesRoute);
app.use("/api/electives", electivesRoute)

await connectToDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
