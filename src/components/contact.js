import React, { useEffect } from "react";

const lengthLimit = 30;

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="contact">
      <div className="container">
        <h2 className="h2 contact-title">
          Submit a help request and we’ll get in touch shortly.
        </h2>
        <section className="contact-section">
          <Form />
          <Partners />
        </section>
      </div>
    </main>
  );
}

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      companyName: "",
      title: "",
      message: "",
      errors: {
        name: {
          class: "cf-no-error",
          text: "",
        },
        email: {
          class: "cf-no-error",
          text: "",
        },
        message: {
          class: "cf-no-error",
          text: "",
        },
      },
    };
  }

  handleName = (event) => {
    const text = event.target.value;
    if (text.length < lengthLimit && sanitize(text)) {
      const errors = this.state.errors;
      errors.name = { class: "cf-no-error", text: "" };
      this.setState({ name: text, errors: errors });
    }
  };

  handleEmail = (event) => {
    const text = event.target.value;
    if (text.length < lengthLimit) {
      const errors = this.state.errors;
      errors.email = { class: "cf-no-error", text: "" };
      this.setState({ email: text, errors: errors });
    }
  };

  handleCompanyName = (event) => {
    const text = event.target.value;
    if (text.length < lengthLimit && sanitize(text)) {
      this.setState({ companyName: text });
    }
  };

  handleTitle = (event) => {
    const text = event.target.value;
    if (text.length < lengthLimit && sanitize(text)) {
      this.setState({ title: text });
    }
  };

  handleMessage = (event) => {
    const text = event.target.value;
    if (sanitize(text)) {
      const errors = this.state.errors;
      errors.message = { class: "cf-no-error", text: "" };
      this.setState({ message: text, errors: errors });
    }
  };

  handleSubmission = () => {
    const errors = this.state.errors;
    if (this.state.name.length == 0) {
      errors.name = { class: "cf-error", text: "This field can't be empty" };
    }
    if (this.state.email.length == 0) {
      errors.email = { class: "cf-error", text: "This field can't be empty" };
    } else if (!validateEmail(this.state.email)) {
      errors.email = {
        class: "cf-error",
        text: "Please use a valid email address",
      };
    }
    if (this.state.message.length == 0) {
      errors.message = { class: "cf-error", text: "This field can't be empty" };
    }
    this.setState({ errors: errors });
  };

  render() {
    return (
      <div id="contact-form">
        <div className="index">
          <img
            src="/assets/shared/desktop/bg-pattern-circle.svg"
            className="bg-contact"
          />
        </div>
        <div className={"contact-form " + this.state.errors.name.class}>
          <input
            className="p cf-text"
            type="text"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleName}
          />
          <hr className="hr cf-hr" />
          <p className="p">{this.state.errors.name.text}</p>
        </div>
        <div className={"contact-form " + this.state.errors.email.class}>
          <input
            className="p cf-text"
            type="text"
            placeholder="Email Address"
            value={this.state.email}
            onChange={this.handleEmail}
          />
          <hr className="hr cf-hr" />
          <p className="p">{this.state.errors.email.text}</p>
        </div>
        <div className="contact-form">
          <input
            className="p cf-text"
            type="text"
            placeholder="Company Name"
            value={this.state.companyName}
            onChange={this.handleCompanyName}
          />
          <hr className="hr cf-hr" />
        </div>
        <div className="contact-form">
          <input
            className="p cf-text"
            type="text"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <hr className="hr cf-hr" />
        </div>

        <div className={"contact-form " + this.state.errors.message.class}>
          <textarea
            className="p cf-area"
            form="contact-form"
            rows="3"
            placeholder="Message"
            value={this.state.message}
            onChange={this.handleMessage}
          />
          <hr className="hr cf-hr" />
          <p className="p">{this.state.errors.message.text}</p>
        </div>
        <div className="newsletter">
          <label className="newsletter-label">
            <input type="checkbox" />
            <span className="newsletter-custom">
              <img src="/assets/shared/desktop/icon-check.svg" />
            </span>
          </label>
          <p className="p newsletter-p">
            Stay up-to-date with company announcements and updates to our API
          </p>
        </div>
        <div className=" cf-submit">
          <button className="request" onClick={this.handleSubmission}>
            Submit
          </button>
        </div>
      </div>
    );
  }
}

function Partners() {
  return (
    <div className="contact-partners">
      <div className="cp-layout">
        <h4 className="h4 cp-h4">
          Join the thousands of innovators already building with us
        </h4>
        <div className="partners-grid cp-grid">
          <img className="svg-blue" src="/assets/shared/desktop/tesla.svg" />
          <img
            className="svg-blue"
            src="/assets/shared/desktop/microsoft.svg"
          />
          <img
            className="svg-blue"
            src="/assets/shared/desktop/hewlett-packard.svg"
          />
          <img className="svg-blue" src="/assets/shared/desktop/oracle.svg" />
          <img className="svg-blue" src="/assets/shared/desktop/google.svg" />
          <img className="svg-blue" src="/assets/shared/desktop/nvidia.svg" />
        </div>
      </div>
    </div>
  );
}

function validateEmail(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}

function sanitize(text) {
  const res = /^[^~`^<>]+$/;
  return res.test(text) || text.length === 0;
}
