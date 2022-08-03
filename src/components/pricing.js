import React, { useEffect } from "react";

const features = [
  "Transactions",
  "Auth",
  "Identity",
  "Investments",
  "Assets",
  "Liabilities",
  "Income",
];

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="pricing">
      <div className="index">
        <img
          src="/assets/shared/desktop/bg-pattern-circle.svg"
          className="bg-pricing"
        />
      </div>
      <div className="container pricing-layout">
        <h1 className="h1-small pricing-title">Pricing</h1>
        <section className="offer-container">
          <div className="offer offer-left">
            <div className="offer-content">
              <h4 className="h4 offer-name">Free Plan</h4>
              <p className="p offer-p">
                Build and test using our core set of products with up to 100 API
                requests
              </p>
              <h1 className="h1-small offer-price">$0.00</h1>
              <hr className="hr" />
              <ul className="pricing-features">
                {features.map((feature, index) => {
                  let available = false;
                  if (index < 3) {
                    available = true;
                  }
                  return (
                    <li
                      className={
                        "p pricing-feature " + (available ? "available" : "")
                      }
                      key={"free" + index}
                    >
                      <span>
                        {available ? (
                          <img
                            src="/assets/shared/desktop/icon-check.svg"
                            className="marker"
                          />
                        ) : null}
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <hr className="hr" />
              <button className="request">Request Access</button>
            </div>
          </div>
          <div className="offer offer-center">
            <div className="offer-content">
              <h4 className="h4 offer-name">Basic Plan</h4>
              <p className="p offer-p">
                Launch your project with unlimited requests and no contractual
                minimums
              </p>
              <h1 className="h1-small offer-price">$249.00</h1>
              <hr className="hr" />
              <ul className="pricing-features">
                {features.map((feature, index) => {
                  let available = false;
                  if (index < 5) {
                    available = true;
                  }
                  return (
                    <li
                      className={
                        "p pricing-feature " + (available ? "available" : "")
                      }
                      key={"basic" + index}
                    >
                      <span>
                        {available ? (
                          <img
                            src="/assets/shared/desktop/icon-check.svg"
                            className="marker"
                          />
                        ) : null}
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <hr className="hr" />
              <button className="request">Request Access</button>
            </div>
          </div>
          <div className="offer offer-right">
            <div className="offer-content">
              <h4 className="h4 offer-name">Premium Plan</h4>
              <p className="p offer-p">
                Get tailored solutions, volume pricing, and dedicated support
                for your team
              </p>
              <h1 className="h1-small offer-price">$499.00</h1>
              <hr className="hr" />
              <ul className="pricing-features">
                {features.map((feature, index) => {
                  let available = true;
                  return (
                    <li
                      className={
                        "p pricing-feature " + (available ? "available" : "")
                      }
                      key={"premium" + index}
                    >
                      <span>
                        {available ? (
                          <img
                            src="/assets/shared/desktop/icon-check.svg"
                            className="marker"
                          />
                        ) : null}
                      </span>
                      {feature}
                    </li>
                  );
                })}
              </ul>
              <hr className="hr" />
              <button className="request">Request Access</button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
