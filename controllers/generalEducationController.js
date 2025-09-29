import {
  getAllGeneralEducation
} from "../models/db.js";



const allGeneralEducationController = async (req, res) => {

  const allCourses = await getAllGeneralEducation();
  res.json(allCourses);
};


export { allGeneralEducationController};