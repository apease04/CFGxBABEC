// TODO: route requests

// sample below
import express from "express";
const router = express.Router();
import * as recordsController from "../controllers/records.controller.js";
// const recordsController = require("../controllers/records.controller.js");

/* GET */
router.get("/records", recordsController.get);

router.post("/records", recordsController.post);

// /* POST */
// router.post("/", programmingLanguagesController.create);

// /* PUT */
// router.put("/:id", programmingLanguagesController.update);

// /* DELETE programming language */
// router.delete("/:id", programmingLanguagesController.remove);

export { router };