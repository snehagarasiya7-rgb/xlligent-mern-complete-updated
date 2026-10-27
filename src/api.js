/**
 * Backend API helper for Xlligent Softwares
 * Base URL can be overridden via VITE_API_URL in .env
 */
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const headers = { ...(options.headers || {}) };
  // Don't force JSON content-type when body is FormData
  if (!(options.body instanceof FormData) && !headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers,
  });

  let data;
  try {
    data = await res.json();
  } catch {
    data = { success: false, message: "Invalid server response" };
  }

  if (!res.ok) {
    const err = new Error(data.message || `Request failed (${res.status})`);
    err.status = res.status;
    err.data = data;
    throw err;
  }

  return data;
}

function adminHeaders(adminKey) {
  return { "x-admin-key": adminKey };
}

/** POST /api/contact */
export function submitContact(payload) {
  return request("/api/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/**
 * POST /api/applications
 * Accepts either plain object (JSON) or FormData (with resume file)
 */
export function submitApplication(payload) {
  if (payload instanceof FormData) {
    return request("/api/applications", {
      method: "POST",
      body: payload,
    });
  }
  return request("/api/applications", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

/** GET /api/reviews — approved reviews from MongoDB */
export function getReviews() {
  return request("/api/reviews");
}

// ── Admin APIs ──────────────────────────────────────────────

export function adminVerify(adminKey) {
  return request("/api/admin/verify", {
    headers: adminHeaders(adminKey),
  });
}

export function adminDashboard(adminKey) {
  return request("/api/admin/dashboard", {
    headers: adminHeaders(adminKey),
  });
}

export function adminGetContacts(adminKey) {
  return request("/api/admin/contacts", {
    headers: adminHeaders(adminKey),
  });
}

export function adminUpdateContactStatus(adminKey, id, status) {
  return request(`/api/admin/contacts/${id}`, {
    method: "PATCH",
    headers: adminHeaders(adminKey),
    body: JSON.stringify({ status }),
  });
}

export function adminGetApplications(adminKey) {
  return request("/api/applications", {
    headers: adminHeaders(adminKey),
  });
}

export function adminUpdateApplicationStatus(adminKey, id, status) {
  return request(`/api/applications/${id}`, {
    method: "PATCH",
    headers: adminHeaders(adminKey),
    body: JSON.stringify({ status }),
  });
}

export function adminGetReviews(adminKey) {
  return request("/api/admin/reviews", {
    headers: adminHeaders(adminKey),
  });
}

export function adminToggleReview(adminKey, id) {
  return request(`/api/admin/reviews/${id}/toggle`, {
    method: "PATCH",
    headers: adminHeaders(adminKey),
  });
}

export function resumeUrl(resumePath) {
  if (!resumePath) return null;
  if (resumePath.startsWith("http")) return resumePath;
  return `${API_BASE}${resumePath}`;
}

export { API_BASE };
