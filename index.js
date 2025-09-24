import express from "express";
import { connectToDatabase, getAllCourses } from "./models/db.js";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/api/courses", async (req, res) => {
  const allCourses = await getAllCourses();
  res.send(allCourses);
});

await connectToDatabase();
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
