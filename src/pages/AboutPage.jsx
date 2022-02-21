import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

const AboutPage = () => {
  return (
    <Card>
      <div className="about">
        <h1>About this Project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>Version: 1.0.0</p>

        <Link to="/">
          <p>Back to Home</p>
        </Link>
      </div>
    </Card>
  );
};

export default AboutPage;
