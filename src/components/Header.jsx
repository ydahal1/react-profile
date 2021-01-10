import React, { useState, useContext } from "react";
import "./header.css";
import { GlobalContext } from "../Context";
import { Link } from "react-router-dom";

function Header() {
  const [display, setDisplay] = useState(false);
  const { personalInfo, navBarStatus, setNavBarStatus } = useContext(
    GlobalContext
  );

  //Collapse menu bar
  const handleDisplay = () => {
    setDisplay(!display);
    setNavBarStatus(!navBarStatus);
  };

  return (
    <header className={display ? "fixed-top expended" : "fixed-top collapsed"}>
      <div className="navbar   collapse bg-dark " id="navbarHeader">
        <div className="container">
          <div className="row ">
            <div className="col-sm-8 col-md-7 py-4 navDetails ">
              <h4>
                <Link to="/" className="text-white brand">
                  {personalInfo.name}
                </Link>
              </h4>
              <p className="text-muted headerAboutMe">{personalInfo.about}</p>
            </div>
            <div className="col-sm-4 offset-md-1 py-4 navDetails">
              <h4 className="text-white contact-heading">Contact</h4>
              <ul className="list-unstyled contact-info">
                <li>
                  <i
                    className="fa fa-volume-control-phone contact-icon"
                    aria-hidden="true"
                  ></i>{" "}
                  &nbsp;
                  <a
                    href={`Tel:${personalInfo.phone}`}
                    className="text-white contact-link"
                  >
                    {personalInfo.phone}
                  </a>
                </li>
                <li>
                  <i
                    className="fa fa-envelope-o contact-icon"
                    aria-hidden="true"
                  ></i>
                  &nbsp;
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-white contact-link"
                  >
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <i
                    className="fa fa-linkedin contact-icon"
                    aria-hidden="true"
                  ></i>
                  &nbsp;
                  <a
                    href={personalInfo.linkedIn}
                    className="text-white contact-link"
                  >
                    {personalInfo.linkedIn.substring(12)}
                  </a>
                </li>
                <li>
                  <i
                    className="fa fa-github contact-icon"
                    aria-hidden="true"
                  ></i>
                  &nbsp;
                  <a
                    href={personalInfo.gitHub}
                    className="text-white contact-link"
                  >
                    {personalInfo.gitHub.substring(12)}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={
          display
            ? "navbar navbar-dark bg-dark shadow-sm navHidden"
            : "navbar navbar-dark bg-dark shadow-sm"
        }
      >
        <div className="container navigation">
          <div className="nameAndButtons">
            <div className="navbar-brand d-flex align-items-center ">
              <Link className="brand" to="/">
                {display ? null : personalInfo.name}
              </Link>
            </div>
            {display ? null : (
              <div>
                <a
                  href={personalInfo.gitHub}
                  className="btn btn-primary my-12 callToActionBtns"
                >
                  <i className="fa fa-github fa-btns" aria-hidden="true"></i>
                  GitHub
                </a>
                <a
                  href={personalInfo.gitHub}
                  className="btn btn-secondary -12 callToActionBtns"
                >
                  <i className="fa fa-linkedin fa-btns" aria-hidden="true"></i>
                  LinkedIn
                </a>
              </div>
            )}
          </div>
          <div
            className={display ? "navbar-togglerTop  " : "navbar-toggler  "}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarHeader"
            aria-controls="navbarHeader"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={handleDisplay}
          >
            <i
              className="fa fa-navicon navbar-toggler-icons"
              style={{ color: "#fff", fontSize: "28px" }}
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
