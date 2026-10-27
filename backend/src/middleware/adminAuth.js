export default function adminAuth(req, res, next) {
  const key =
    req.headers["x-admin-key"] ||
    (req.headers.authorization?.startsWith("Bearer ")
      ? req.headers.authorization.slice(7)
      : null);

  const expected = process.env.ADMIN_KEY || "xlligent-admin-2024";

  if (!key || key !== expected) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized. Invalid or missing admin key.",
    });
  }
  next();
}
