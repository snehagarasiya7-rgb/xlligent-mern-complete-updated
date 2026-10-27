import Review from "../models/Review.js";

// @desc    Get all approved reviews
// @route   GET /api/reviews
// @access  Public
export const getReviews = async (req, res) => {
  try {
    const reviews = await Review.find({ isApproved: true }).sort({ createdAt: -1 });
    const avg =
      reviews.length > 0
        ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
        : null;

    res.status(200).json({
      success: true,
      count: reviews.length,
      averageRating: avg,
      data: reviews,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

// @desc    Add a new review (from website)
// @route   POST /api/reviews
// @access  Public
export const addReview = async (req, res) => {
  try {
    const { name, rating, text } = req.body;

    if (!name || !text) {
      return res.status(400).json({
        success: false,
        message: "Name and review text are required",
      });
    }

    const review = await Review.create({
      name,
      rating: rating || 5,
      text,
      date: "Just now",
      source: "website",
      isApproved: true, // auto-approve for demo; set false + admin approve in production
    });

    res.status(201).json({
      success: true,
      message: "Thank you for your review!",
      data: review,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};
