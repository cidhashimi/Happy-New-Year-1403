// NewYear.js
import React from "react";
import "./NewYear.css";

const NewYear = () => {
  return (
    <>
      <div className="msg"> سال نو مبارک</div>
      <div className="year">
        <span className="first_year">
          <span className="y1">1</span>
          <span className="y2">4</span>
          <span className="y3">0</span>
        </span>
        <span className="old">2</span>
        <span className="y4 new">3</span>
        <div className="balloon"></div>
      </div>
      <div className="firework" id="firework1">
        <Crackers />
      </div>
      <div className="firework" id="firework2">
        <Crackers />
      </div>
      <div className="firework" id="firework3">
        <Crackers />
      </div>
      <div className="firework" id="firework4">
        <Crackers />
      </div>
    </>
  );
};
const Crackers = () => {
  return (
    <>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
      <div className="cracker"></div>
    </>
  );
}


export default NewYear;
