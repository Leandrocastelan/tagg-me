
import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(import.meta.env.VITE_API_URL + "/auth/login", {
        email, password
      });
      localStorage.setItem("token", res.data.token);
      window.location.href = "/feed";
    } catch (err) {
      setError("Credenciais inválidas");
    }
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "auto", fontFamily: "sans-serif" }}>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required style={{ width: "100%", marginBottom: "1rem" }} />
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required style={{ width: "100%", marginBottom: "1rem" }} />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
