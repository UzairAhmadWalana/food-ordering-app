import express from "express";
import { getMenu, createMenu, updateMenu, deleteMenu } from "../controllers/menuController.js";
import { protect } from "../middleware/authMiddleware.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = express.Router();
router.get("/", getMenu);
router.post("/", protect, isAdmin, createMenu);
router.put("/:id", protect, isAdmin, updateMenu);
router.delete("/:id", protect, isAdmin, deleteMenu);

export default router;
