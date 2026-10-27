import express from "express";
import rateLimit from "express-rate-limit";
import {
  submitApplication,
  getApplications,
  updateApplicationStatus,
} from "../controllers/applicationController.js";
import { uploadResume } from "../middleware/upload.js";
import adminAuth from "../middleware/adminAuth.js";

const router = express.Router();

const formLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  message: { success: false, message: "Too many requests, please try again later." },
});

router.post(
  "/",
  formLimiter,
  (req, res, next) => {
    uploadResume.single("resume")(req, res, (err) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: err.message || "File upload failed",
        });
      }
      next();
    });
  },
  submitApplication
);

router.get("/", adminAuth, getApplications);
router.patch("/:id", adminAuth, updateApplicationStatus);

export default router;
