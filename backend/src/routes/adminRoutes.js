import express from "express";
import adminAuth from "../middleware/adminAuth.js";
import {
  getDashboard,
  getContactsAdmin,
  updateContactStatus,
  getReviewsAdmin,
  toggleReviewApproval,
  verifyAdmin,
} from "../controllers/adminController.js";

const router = express.Router();

router.use(adminAuth);

router.get("/verify", verifyAdmin);
router.get("/dashboard", getDashboard);
router.get("/contacts", getContactsAdmin);
router.patch("/contacts/:id", updateContactStatus);
router.get("/reviews", getReviewsAdmin);
router.patch("/reviews/:id/toggle", toggleReviewApproval);

export default router;
