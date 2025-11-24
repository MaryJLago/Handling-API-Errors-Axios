// src/components/LoginForm.jsx
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return setMessage("Email is required");
    if (!password) return setMessage("Password is required");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message);

      setMessage("Login successful");
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">Login</button>
      {message && <div>{message}</div>}
    </form>
  );
}
