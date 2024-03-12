import React, { useState } from "react";
import "./projects.css";

function Projects() {
  const [toggleState, setToggleState] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="projects">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="services__container container grid">
        <div className="services__content">
          <img
            className="project__img"
            src="https://www.yarddiant.com/images/web-development-projects-for-students.jpg"
            alt=""
          />

          <span className="services__button" onClick={() => toggleTab(1)}>
            View <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
            </div>
          </div>
        </div>

        <div className="services__content">
          <img
            className="project__img"
            src="https://www.yarddiant.com/images/web-development-projects-for-students.jpg"
            alt=""
          />

          <span className="services__button" onClick={() => toggleTab(2)}>
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
            </div>
          </div>
        </div>

        <div className="services__content">
          <img
            className="project__img"
            src="https://www.yarddiant.com/images/web-development-projects-for-students.jpg"
            alt=""
          />

          <span className="services__button" onClick={() => toggleTab(3)}>
            View <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services__modal-close"
              ></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
