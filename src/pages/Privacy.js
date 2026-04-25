import React from "react";
import "./Policy.css";

export default function Privacy() {
  return (
    <div className="policy-page">
      <div className="policy-content">
        <h1>Privacy Policy</h1>

        <h2>1. Introduction</h2>
        <p>
          KR Aerospace is committed to protecting your privacy and ensuring
          secure handling of user information.
        </p>

        <div className="policy-divider"></div>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect basic details such as name, email, and messages submitted
          through forms.
        </p>

        <h2>3. Usage of Information</h2>
        <ul>
          <li>Responding to user queries</li>
          <li>Improving system experience</li>
          <li>Providing updates</li>
        </ul>

        <h2>4. Data Protection</h2>
        <p>
          We ensure secure storage and handling of user data with proper safeguards.
        </p>

        <h2>5. Third-Party Sharing</h2>
        <p>
          No personal data is shared without consent unless required legally.
        </p>

        <h2>6. Updates</h2>
        <p>
          Policies may change over time. Users are advised to review periodically.
        </p>
      </div>
    </div>
  );
}