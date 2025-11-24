import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password: pass,
      });
      alert("Login Success!");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Network Error. Server unreachable.");
      }
    }
  }

  return (
    <form onSubmit={submit}>
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Password"
        type="password"
      />
      <button>Login</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
