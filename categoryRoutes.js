import express from "express";
import Category from "../models/Category.js";
import { body, validationResult } from "express-validator";

const router = express.Router();

// GET all categories
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// CREATE category
router.post("/", body("name").notEmpty(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  const category = await Category.create(req.body);
  res.status(201).json(category);
});

export default router;