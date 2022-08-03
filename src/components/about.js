import React from "react";

const image = {
  desktop: "/assets/about/desktop/image-team-members.jpg",
  tablet: "/assets/about/tablet/image-team-members.jpg",
  mobile: "/assets/about/mobile/image-team-members.jpg",
};

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      device: "desktop",
    };
  }

  componentDidMount() {
    const pointer = this;
    window.addEventListener("resize", function () {
      pointer.manageDevice();
    });
    this.manageDevice();
    window.scrollTo(0, 0);
  }

  manageDevice = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 580 && this.state.device != "mobile") {
      this.setState({ device: "mobile" });
    } else if (
      screenWidth > 580 &&
      screenWidth <= 768 &&
      this.state.device != "tablet"
    ) {
      this.setState({ device: "tablet" });
    } else if (screenWidth > 768 && this.state.device != "desktop") {
      this.setState({ device: "desktop" });
    }
  };

  render() {
    return (
      <main className="about">
        <div className="index">
          <img
            src="/assets/shared/desktop/bg-pattern-circle.svg"
            className="bg-about-1"
          />
        </div>
        <div className="index">
          <img
            src="/assets/shared/desktop/bg-pattern-circle.svg"
            className="bg-about-2"
          />
        </div>
        <div className="container">
          <div className="h3-big about-title-container">
            <h1 className="h1-small about-title">
              We empower innovators by delivering access to the financial system
            </h1>
          </div>
        </div>
        <div className="container">
          <div className="about-feature">
            <div className="af-h3-container">
              <h3 className="h3-big af-h3">Our Vision</h3>
            </div>
            <p className="p ">
              Our main goal is to build beautiful consumer experiences along
              with developer-friendly infrastructure. The result is an
              intelligent tool that gives everyone the ability to create amazing
              products that solve big problems. We are deeply focused on
              democratizing financial services through technology.
            </p>
          </div>
          <div className="about-feature">
            <div className="af-h3-container">
              <h3 className="h3-big af-h3">Our Business</h3>
            </div>
            <p className="p ">
              At the core of our platform is the technical infrastructure APIs
              that connect consumers. Our innovative product provides key
              insights for businesses and individuals, as well as robust
              reporting for traditional financial institutions and developers.
            </p>
          </div>
        </div>
        <img className="about-img" src={image[this.state.device]} />
        <div className="about-numbers container">
          <div className="about-number">
            <div className="about-number-content">
              <hr className="about-hr" />
              <p className="p an-p">Team Members</p>
              <h1 className="h1-small an-h1">300+</h1>
              <hr className="about-hr no-mobile" />
            </div>
          </div>
          <div className="about-number">
            <div className="about-number-content">
              <hr className="about-hr no-mobile" />
              <p className="p an-p">Offers in the US</p>
              <h1 className="h1-small an-h1">3</h1>
              <hr className="about-hr no-mobile" />
            </div>
          </div>
          <div className="about-number">
            <div className="about-number-content">
              <hr className="about-hr no-mobile" />
              <p className="p an-p">Transaction analysed</p>
              <h1 className="h1-small an-h1">10M+</h1>
              <hr className="about-hr \" />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="about-feature">
            <div className="af-h3-container">
              <h3 className="h3-big af-h3 ">The Culture</h3>
            </div>
            <p className="p ">
              We strongly believe there's always an opportunity to learn from
              each other outside of day-to-day work, whether it's company-wide
              offsites, internal hackathons, or co-worker meetups. We always
              value cross-team collaboration and diversity of thought, no matter
              the job title.
            </p>
          </div>
          <div className="about-feature">
            <div className="af-h3-container">
              <h3 className="h3-big af-h3 ">The People</h3>
            </div>
            <p className="p ">
              We're all passionate about building a more efficient and inclusive
              financial infrastructure together. At PayAPI, we have diverse
              backgrounds and skills.
            </p>
          </div>
        </div>
      </main>
    );
  }
}
