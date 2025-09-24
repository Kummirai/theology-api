import { getCourseById } from "../models/db.js";

const courseByIdController = async (req, res) => {
  const { id } = req.params;
  const course = await getCourseById(id);
  res.json(course);
};

export { courseByIdController };
