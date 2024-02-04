import express from "express";
import {
  addData,
  allData,
  deleteDataById,
  getDataById,
  updateDataById,
} from "../controller/controller.js";

const router = express.Router();

router.post("/post", addData);

router.get("/getAll", allData);

router.get("/getOne/:id", getDataById);

router.patch("/update/:id", updateDataById);

router.delete("/delete/:id", deleteDataById);

// The router is taking routes as the first parameter and second parameter taking callback

export default router;
