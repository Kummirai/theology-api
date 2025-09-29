import {
  getAllElectives
} from "../models/db.js";



const allElectivesController = async (req, res) => {
  console.log("request received!");

  const allCourses = await getAllElectives();
  res.json(allCourses);
};


export { allElectivesController};