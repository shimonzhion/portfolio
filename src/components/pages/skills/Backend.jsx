import React from "react";

function Backend() {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend</h3>
      <div className="skills__box">
        <div className="skills__group">
          {/* Node Js */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node Js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>

          {/* MongoDB */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express Js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* express */}
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MongoDB</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Backend;
