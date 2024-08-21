import express from "express";
import {
  getMahasiswa,
  getMahasiswaBynim,
  postMahasiswa,
  editMahasiswa,
  deleteMahasiswa
} from "../controller/controllerMahasiswa.js";

const router = express.Router();

router.get("/", getMahasiswa);
router.get("/find", getMahasiswaBynim);
router.post("/create", postMahasiswa);
router.put("/edit", editMahasiswa);
router.delete("/delete", deleteMahasiswa);

export default router;
