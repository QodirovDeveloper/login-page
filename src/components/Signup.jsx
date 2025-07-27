import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

export default function Signup() {
  const emailRaf = useRef();
  const passwordRaf = useRef();
  const passwordConfirmRaf = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRaf.current.value !== passwordConfirmRaf.current.value) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setSuccess("");
      setLoading(true);
      await signup(emailRaf.current.value, passwordRaf.current.value);
      setSuccess("Account created successfully!");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold my-4">Sign Up</h1>

      {error && (
        <div className="toast toast-top toast-end z-50">
          <div className="alert alert-error shadow-lg">
            <span>{error}</span>
          </div>
        </div>
      )}

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
        <div className="my-3">
          <input
            type="password"
            placeholder="Confirm Password"
            ref={passwordConfirmRaf}
            required
            className="input input-bordered w-full"
          />
        </div>
        <button
          disabled={loading}
          type="submit"
          className="btn btn-primary w-full"
        >
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>

      <div className="mt-4">
        <p className="text-sm">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </div>
  );
}
