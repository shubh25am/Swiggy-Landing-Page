import React from "react";
import JumboBox from "./JumboBox";
import "./JmboSection.css"
function JmboSection() {
  return (
    <div className="jumbo">
      <div className="jumboLeft">
        <div className="jumboLeftHeader">
          <div className="logoPart">
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/swiggy-1613371-1369418.png"
              alt="logo"
              className="swiggyLogo"
            />
            <h1>SWIGGY</h1>
          </div>
          <div className="buttons">
            <button className="login">Login</button>
            <button className="signUp">Sign up</button>
          </div>
        </div>
        <JumboBox/>
      </div>
      <div className="jumboRight">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Breakfast2-new_men3ne"
          alt="topPic"
        />
      </div>
    </div>
  );
}

export default JmboSection;
