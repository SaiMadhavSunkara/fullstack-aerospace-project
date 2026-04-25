import React, { useState } from "react";
import "./Contact.css";
import "./PageBackground.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);   // 🔥 NEW
  const [error, setError] = useState("");          // 🔥 NEW

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);

        // 🔥 Clear form after success
        setFormData({
          name: "",
          email: "",
          message: ""
        });

      } else {
        setError(data.message || "Something went wrong");
      }

    } catch (err) {
      console.error(err);
      setError("Server error");
    }

    setLoading(false);
  };

  return (
    <div className="page-container">
      <h1>Contact Us</h1>

      {submitted ? (
        <p className="success-msg">✅ Message sent successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">

          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />

          {/* 🔥 ERROR MESSAGE */}
          {error && <p className="error-msg">{error}</p>}

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      )}
    </div>
  );
};

export default Contact;