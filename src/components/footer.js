import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <Ready />
      <Footbar />
    </div>
  );
}

function Ready() {
  return (
    <div className="ready container">
      <h2 className="ready-title h2">Ready to start?</h2>
      <form className="email">
        <input
          className="email-field"
          type="text"
          placeholder="Enter email address"
        />
        <input className="email-button" type="submit" value="Schedule a Demo" />
      </form>
    </div>
  );
}

function Footbar() {
  return (
    <footer className="footbar">
      <div>
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          className="bg-footbar"
        />
      </div>
      <div className="container footbar-layout">
        <div className="footbar-1">
          <Link to="/">
            <img
              src="/assets/shared/desktop/logo.svg"
              style={{
                filter:
                  "invert(100%) sepia(44%) saturate(145%) hue-rotate(106deg)",
              }}
            />
          </Link>
          <div className="footbar-links">
            <Link className="footbar-link" to="pricing">
              Pricing
            </Link>
            <Link className="footbar-link" to="about">
              About
            </Link>
            <Link className="footbar-link" to="contact">
              Contact
            </Link>
          </div>
        </div>
        <div className="footbar-2">
          <img
            className="footbar-icon"
            src="/assets/shared/desktop/facebook.svg"
          />
          <img
            className="footbar-icon"
            src="/assets/shared/desktop/twitter.svg"
          />
          <img
            className="footbar-icon"
            src="/assets/shared/desktop/linkedin.svg"
          />
        </div>
      </div>
    </footer>
  );
}
