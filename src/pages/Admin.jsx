import { useCallback, useEffect, useState } from "react";
import SEO from "../component/SEO";
import {
  adminVerify,
  adminDashboard,
  adminGetContacts,
  adminUpdateContactStatus,
  adminGetApplications,
  adminUpdateApplicationStatus,
  adminGetReviews,
  adminToggleReview,
  resumeUrl,
} from "../api";
import "./Admin.css";

const STORAGE_KEY = "xlligent_admin_key";
const CONTACT_STATUSES = ["new", "read", "replied", "archived"];
const APP_STATUSES = ["new", "reviewed", "shortlisted", "rejected", "hired"];

function formatDate(d) {
  if (!d) return "—";
  try {
    return new Date(d).toLocaleString();
  } catch {
    return String(d);
  }
}

function Admin() {
  const [keyInput, setKeyInput] = useState("");
  const [adminKey, setAdminKey] = useState(() => sessionStorage.getItem(STORAGE_KEY) || "");
  const [authed, setAuthed] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState("contacts");
  const [stats, setStats] = useState(null);
  const [contacts, setContacts] = useState([]);
  const [applications, setApplications] = useState([]);
  const [reviews, setReviews] = useState([]);

  const loadAll = useCallback(async (key) => {
    setLoading(true);
    try {
      const [dash, c, a, r] = await Promise.all([
        adminDashboard(key),
        adminGetContacts(key),
        adminGetApplications(key),
        adminGetReviews(key),
      ]);
      setStats(dash.data);
      setContacts(c.data || []);
      setApplications(a.data || []);
      setReviews(r.data || []);
    } catch (err) {
      setAuthed(false);
      sessionStorage.removeItem(STORAGE_KEY);
      setLoginError(err.message || "Failed to load admin data");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!adminKey) return;
    (async () => {
      try {
        await adminVerify(adminKey);
        setAuthed(true);
        sessionStorage.setItem(STORAGE_KEY, adminKey);
        await loadAll(adminKey);
      } catch {
        setAuthed(false);
        sessionStorage.removeItem(STORAGE_KEY);
      }
    })();
  }, [adminKey, loadAll]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");
    setLoading(true);
    try {
      await adminVerify(keyInput.trim());
      setAdminKey(keyInput.trim());
      setAuthed(true);
      sessionStorage.setItem(STORAGE_KEY, keyInput.trim());
    } catch (err) {
      setLoginError(err.message || "Invalid admin key");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem(STORAGE_KEY);
    setAdminKey("");
    setAuthed(false);
    setKeyInput("");
    setStats(null);
  };

  const onContactStatus = async (id, status) => {
    await adminUpdateContactStatus(adminKey, id, status);
    setContacts((prev) => prev.map((c) => (c._id === id ? { ...c, status } : c)));
  };

  const onAppStatus = async (id, status) => {
    await adminUpdateApplicationStatus(adminKey, id, status);
    setApplications((prev) => prev.map((a) => (a._id === id ? { ...a, status } : a)));
  };

  const onToggleReview = async (id) => {
    const res = await adminToggleReview(adminKey, id);
    setReviews((prev) => prev.map((r) => (r._id === id ? res.data : r)));
  };

  return (
    <>
      <SEO path="/admin" title="Admin" description="Xlligent admin panel" />
      <div className="admin-page">
        <div className="container">
          {!authed ? (
            <div className="admin-login-wrap">
              <h1>Admin login</h1>
              <p>
                Enter the admin key from backend <code>.env</code> (
                <code>ADMIN_KEY</code>).
              </p>
              <form onSubmit={handleLogin}>
                <label htmlFor="admin-key">Admin key</label>
                <input
                  id="admin-key"
                  type="password"
                  value={keyInput}
                  onChange={(e) => setKeyInput(e.target.value)}
                  placeholder="Admin key"
                  required
                  autoComplete="current-password"
                />
                {loginError && <p className="admin-error">{loginError}</p>}
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? "Checking…" : "Login"}
                </button>
              </form>
            </div>
          ) : (
            <>
              <div className="admin-header">
                <h1>Admin dashboard</h1>
                <div className="admin-actions">
                  <button type="button" onClick={() => loadAll(adminKey)} disabled={loading}>
                    Refresh
                  </button>
                  <button type="button" onClick={logout}>
                    Logout
                  </button>
                </div>
              </div>

              {stats && (
                <div className="admin-stats">
                  <div className="admin-stat">
                    <strong>{stats.contacts}</strong>
                    <span>Contacts ({stats.newContacts} new)</span>
                  </div>
                  <div className="admin-stat">
                    <strong>{stats.applications}</strong>
                    <span>Applications ({stats.newApplications} new)</span>
                  </div>
                  <div className="admin-stat">
                    <strong>{stats.reviews}</strong>
                    <span>Approved reviews</span>
                  </div>
                </div>
              )}

              <div className="admin-tabs">
                {[
                  ["contacts", `Contacts (${contacts.length})`],
                  ["applications", `Applications (${applications.length})`],
                  ["reviews", `Reviews (${reviews.length})`],
                ].map(([id, label]) => (
                  <button
                    key={id}
                    type="button"
                    className={`admin-tab${tab === id ? " active" : ""}`}
                    onClick={() => setTab(id)}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {loading && <p className="admin-empty">Loading…</p>}

              {!loading && tab === "contacts" && (
                <div className="admin-table-wrap">
                  {contacts.length === 0 ? (
                    <p className="admin-empty">No contact messages yet.</p>
                  ) : (
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Name</th>
                          <th>Email / Phone</th>
                          <th>Message</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {contacts.map((c) => (
                          <tr key={c._id}>
                            <td>{formatDate(c.createdAt)}</td>
                            <td>{c.name}</td>
                            <td>
                              <div>{c.email}</div>
                              <div>{c.phone || "—"}</div>
                            </td>
                            <td>
                              <div className="admin-msg">{c.message}</div>
                            </td>
                            <td>
                              <span className={`admin-badge ${c.status}`}>{c.status}</span>
                              <div style={{ marginTop: 6 }}>
                                <select
                                  value={c.status}
                                  onChange={(e) => onContactStatus(c._id, e.target.value)}
                                >
                                  {CONTACT_STATUSES.map((s) => (
                                    <option key={s} value={s}>
                                      {s}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {!loading && tab === "applications" && (
                <div className="admin-table-wrap">
                  {applications.length === 0 ? (
                    <p className="admin-empty">No applications yet.</p>
                  ) : (
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Contact</th>
                          <th>Resume</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {applications.map((a) => (
                          <tr key={a._id}>
                            <td>{formatDate(a.createdAt)}</td>
                            <td>{a.name}</td>
                            <td>{a.position}</td>
                            <td>
                              <div>{a.email}</div>
                              <div>{a.phone}</div>
                            </td>
                            <td>
                              {a.resumePath ? (
                                <a
                                  href={resumeUrl(a.resumePath)}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  {a.resumeFileName || "Download"}
                                </a>
                              ) : (
                                a.resumeFileName || "—"
                              )}
                            </td>
                            <td>
                              <span className={`admin-badge ${a.status}`}>{a.status}</span>
                              <div style={{ marginTop: 6 }}>
                                <select
                                  value={a.status}
                                  onChange={(e) => onAppStatus(a._id, e.target.value)}
                                >
                                  {APP_STATUSES.map((s) => (
                                    <option key={s} value={s}>
                                      {s}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}

              {!loading && tab === "reviews" && (
                <div className="admin-table-wrap">
                  {reviews.length === 0 ? (
                    <p className="admin-empty">
                      No reviews yet. Run <code>npm run seed</code> in backend.
                    </p>
                  ) : (
                    <table className="admin-table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Rating</th>
                          <th>Text</th>
                          <th>Source</th>
                          <th>Approved</th>
                        </tr>
                      </thead>
                      <tbody>
                        {reviews.map((r) => (
                          <tr key={r._id}>
                            <td>{r.name}</td>
                            <td>{r.rating} ★</td>
                            <td>
                              <div className="admin-msg">{r.text}</div>
                            </td>
                            <td>{r.source}</td>
                            <td>
                              <span
                                className={`admin-badge ${r.isApproved ? "hired" : "rejected"}`}
                              >
                                {r.isApproved ? "Yes" : "No"}
                              </span>
                              <div style={{ marginTop: 6 }}>
                                <button type="button" onClick={() => onToggleReview(r._id)}>
                                  {r.isApproved ? "Unapprove" : "Approve"}
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Admin;
