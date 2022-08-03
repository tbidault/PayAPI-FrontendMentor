import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [onMenu, toggleMenu] = useState(false);
  return (
    <nav className="navbar container">
      <div className="navbar-1">
        <Link to="/">
          <img
            src="/assets/shared/desktop/logo.svg"
            style={{
              filter:
                "invert(30%) sepia(23%) saturate(869%) hue-rotate(165deg) brightness(90%) contrast(89%)",
            }}
          />
        </Link>
        <div className="nbl-container">
          <Links binding={false} />
        </div>
      </div>
      <div className="navbar-2">
        <button className="navbar-button">Schedule a Demo</button>
        <button className="menu-open" onClick={() => toggleMenu(true)}>
          <img className="menu-logo" src="/assets/shared/mobile/menu.svg" />
        </button>
        <Menu onMenu={onMenu} closeMenu={() => toggleMenu(false)} />
      </div>
    </nav>
  );
}

function Links(props) {
  var func = () => {};
  if (props.binding) {
    func = props.closeMenu;
  }
  return (
    <div className="navbar-links">
      <Link className="navbar-link" to="pricing" onClick={func}>
        Pricing
      </Link>
      <Link className="navbar-link" to="about" onClick={func}>
        About
      </Link>
      <Link className="navbar-link" to="contact" onClick={func}>
        Contact
      </Link>
    </div>
  );
}

function Menu(props) {
  return (
    <div className={"menu " + (props.onMenu ? "menu-active" : "")}>
      <div className="menu-layout">
        <button className="menu-close" onClick={props.closeMenu}>
          <img src="/assets/shared/mobile/close.svg" />
        </button>
        <hr className="hr menu-hr" />
        <Links binding={true} closeMenu={props.closeMenu} />
        <button className="menu-button">Schedule a Demo</button>
      </div>
    </div>
  );
}
