import express from "express";
import { connectToDatabase, getAllCourses } from "./models/db.js";
import { coursesRoute } from "./routes/allCoursesRoute.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/api/courses", coursesRoute);

await connectToDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
