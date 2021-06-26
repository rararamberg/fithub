import React from "react";
import "./Landing.css";

function Landing() {
  return (
    <div className="landing-div">
      <div className="build-schedule-div"></div>
      <h2>
        Build Your <span className="schedule">Schedule.</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
      <div className="build-practice-div"></div>
      <h2>
        Build Your <span className="practice">Practice.</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  );
}

export default Landing;
