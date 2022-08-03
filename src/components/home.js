import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="home">
      <Presentation />
      <Partners />
      <Features />
    </main>
  );
}

function Presentation() {
  return (
    <section className="presentation">
      <div className="index">
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          className="bg-home-1"
        />
      </div>
      <div className="index">
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          className="bg-home-3"
        />
      </div>
      <div className="container presentation-layout">
        <div className="presentation-text">
          <h1 className="h1-large presentation-title">
            Start building with our APIs for absolutely free.
          </h1>
          <div className="presentation-email">
            <form className="email">
              <input
                className="email-field"
                type="text"
                placeholder="Enter email address"
              />
              <input
                className="email-button"
                type="submit"
                value="Schedule a Demo"
              />
            </form>
          </div>

          <p className="p presentation-p">
            Have any questions?
            <Link className="presentation-a" to="contact">
              <strong>Contact Us</strong>
            </Link>
          </p>
        </div>
        <img
          className="presentation-phone"
          src="/assets/home/desktop/illustration-phone-mockup.svg"
        />
      </div>
    </section>
  );
}

function Partners() {
  return (
    <section className="partners">
      <div>
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          className="bg-home-2"
        />
      </div>
      <div className="container partners-layout">
        <div className="partners-text">
          <h2 className="h2 partners-title">Who we work with</h2>
          <p className="p">
            Today, millions of people around the world have successfully
            connected theirs accounts to apps they love using our API. We
            provide developers with the tools they need to create easy and
            accessible experiences for their users.
          </p>
          <div>
            <Link to="about">
              <button className="partners-button">About Us</button>
            </Link>
          </div>
        </div>
        <div className="partners-grid">
          <img className="svg-white" src="/assets/shared/desktop/tesla.svg" />
          <img
            className="svg-white"
            src="/assets/shared/desktop/microsoft.svg"
          />
          <img
            className="svg-white"
            src="/assets/shared/desktop/hewlett-packard.svg"
          />
          <img className="svg-white" src="/assets/shared/desktop/oracle.svg" />
          <img className="svg-white" src="/assets/shared/desktop/google.svg" />
          <img
            className="svg-white"
            src="../assets/shared/desktop/nvidia.svg"
          />
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="home-features">
      <div className="container">
        <div className="hf-grid">
          <div className="easy hf-block">
            <div className="hf-text">
              <h2 className="h2 hf-h2">Easy to implement</h2>
              <p className="p">
                Our API comes with just a few lines of code. You’ll be up and
                running in no time. We built our documentation page to integrate
                payments functionality with ease.
              </p>
            </div>
            <img
              className="hf-img"
              src="/assets/home/desktop/illustration-easy-to-implement.svg"
            />
          </div>
          <div className="simple hf-block">
            <div className="hf-text" style={{ gridArea: "simple" }}>
              <h2 className="h2 hf-h2">Simple UI & UX</h2>
              <p className="p">
                Our pre-built form is easy to integrate in your app or website’s
                checkout flow and designed to optimize conversion.
              </p>
            </div>
            <img
              className="hf-img"
              src="/assets/home/desktop/illustration-simple-ui.svg"
            />
          </div>
          <div className="hf-subgrid">
            <div className="hf-feature-container">
              <div className="hf-feature">
                <img src="/assets/home/desktop/icon-personal-finances.svg" />
                <h3 className="h3-small">Personal Finances</h3>
                <p className="p">
                  Consolidate financial data from multiple sources and
                  categorize transactions up to 2 years of history. Analyze
                  reports to reconcile activities in your account.
                </p>
              </div>
            </div>
            <div className="hf-feature-container">
              <div className="hf-feature">
                <img src="/assets/home/desktop/icon-banking-and-coverage.svg" />
                <h3 className="h3-small">Banking & Coverage</h3>
                <p className="p">
                  With our platform, you can speed up account onboarding and
                  support ongoing payments for checking, savings, credit card,
                  and brokerage accounts.
                </p>
              </div>
            </div>
            <div className="hf-feature-container">
              <div className="hf-feature">
                <img src="/assets/home/desktop/icon-consumer-payments.svg" />
                <h3 className="h3-small">Consumer Payments</h3>
                <p className="p">
                  It’s easier to set up secure bank payments with us through a
                  flow designed with the user experience in mind. Customers
                  could instantly authenticate their account.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
