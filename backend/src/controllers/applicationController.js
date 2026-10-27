import Application from "../models/Application.js";

// @desc    Submit job application (with optional resume file)
// @route   POST /api/applications
// @access  Public
export const submitApplication = async (req, res) => {
  try {
    const { name, email, phone, position, message } = req.body;

    if (!name || !email || !phone || !position) {
      return res.status(400).json({
        success: false,
        message: "Name, email, phone and position are required",
      });
    }

    const resumeFileName = req.file?.originalname || req.body.resumeFileName || "";
    const resumePath = req.file ? `/uploads/resumes/${req.file.filename}` : "";

    const application = await Application.create({
      name,
      email,
      phone,
      position,
      resumeFileName,
      resumePath,
      message: message || "",
    });

    res.status(201).json({
      success: true,
      message: "Application submitted successfully! Our HR team will contact you soon.",
      data: {
        id: application._id,
        name: application.name,
        position: application.position,
        resumeFileName: application.resumeFileName,
      },
    });
  } catch (error) {
    console.error("Application submit error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// @desc    Get all applications
// @route   GET /api/applications
// @access  Admin
export const getApplications = async (req, res) => {
  try {
    const applications = await Application.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// @desc    Update application status
// @route   PATCH /api/applications/:id
// @access  Admin
export const updateApplicationStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const allowed = ["new", "reviewed", "shortlisted", "rejected", "hired"];
    if (!allowed.includes(status)) {
      return res.status(400).json({ success: false, message: "Invalid status" });
    }
    const application = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!application) {
      return res.status(404).json({ success: false, message: "Application not found" });
    }
    res.status(200).json({ success: true, data: application });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
