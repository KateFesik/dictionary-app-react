import React from "react";
import "./Header.css";
import one from "./images/one.jpg";
import two from "./images/two.jpg";
import three from "./images/three.jpg";

export default function Header() {
  return (
    <header className="mt-3">
      <div className="row justify-content-center">
        <div className="col-lg-2 col-3">
          <img src={one} className="Header-img" alt="img-header" />
        </div>
        <div className="col-lg-2 col-3">
          <img src={two} className="Header-img" alt="img-header" />
        </div>
        <div className="col-lg-2 col-3">
          <img src={three} className="Header-img" alt="img-header" />
        </div>
      </div>
    </header>
  );
}
