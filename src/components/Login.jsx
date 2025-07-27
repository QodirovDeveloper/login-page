import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const emailRaf = useRef();
  const passwordRaf = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await login(emailRaf.current.value, passwordRaf.current.value);
      setSuccess("Logged in successfully!");
      navigate("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-4">Log In</h1>

      {/* Error Toast */}
      {error && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-error shadow-lg">
            <span>{error}</span>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {success && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-success shadow-lg">
            <span>{success}</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="my-3">
          <input
            type="email"
            placeholder="Email"
            ref={emailRaf}
            required
            className="input input-bordered w-full"
          />
        </div>
        <div className="my-3">
          <input
            type="password"
            placeholder="Password"
            ref={passwordRaf}
            required
            className="input input-bordered w-full"
          />
        </div>

        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-full"
        >
          {loading ? "Creating..." : "Log In"}
        </button>
      </form>

      <div className="mt-4">
        <p className="text-sm">
          Need an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
