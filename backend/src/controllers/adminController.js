import Contact from "../models/Contact.js";
import Application from "../models/Application.js";
import Review from "../models/Review.js";

export const getDashboard = async (_req, res) => {
  try {
    const [contacts, applications, reviews, newContacts, newApps] = await Promise.all([
      Contact.countDocuments(),
      Application.countDocuments(),
      Review.countDocuments({ isApproved: true }),
      Contact.countDocuments({ status: "new" }),
      Application.countDocuments({ status: "new" }),
    ]);
    res.json({
      success: true,
      data: {
        contacts,
        applications,
        reviews,
        newContacts,
        newApplications: newApps,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getContactsAdmin = async (_req, res) => {
  try {
    const data = await Contact.find().sort({ createdAt: -1 });
    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const updateContactStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ["new", "read", "replied", "archived"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!contact) {
      return res.status(404).json({ success: false, message: "Contact not found" });
    }
    res.json({ success: true, data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getReviewsAdmin = async (_req, res) => {
  try {
    const data = await Review.find().sort({ createdAt: -1 });
    res.json({ success: true, count: data.length, data });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const toggleReviewApproval = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) {
      return res.status(404).json({ success: false, message: "Review not found" });
    }
    review.isApproved = !review.isApproved;
    await review.save();
    res.json({ success: true, data: review });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const verifyAdmin = (_req, res) => {
  res.json({ success: true, message: "Admin key is valid" });
};
