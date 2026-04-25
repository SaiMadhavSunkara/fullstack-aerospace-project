import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {

        // store user (simple)
        localStorage.setItem("user", JSON.stringify(data.user));

        // 🔥 FORCE FULL RELOAD
        window.location.href = "/";  

      } else {
        alert(data.message);
      }

    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

    return (
    <>
        <div className="page-bg"></div>
        <div className="page-bg-overlay"></div>

        <div className="login-page">
        <div className="login-container">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />

            <button type="submit">Login</button>
            </form>

            <div className="login-footer">
            Secure access to KR Aerospace systems
            </div>
        </div>
        </div>
    </>
    );
}