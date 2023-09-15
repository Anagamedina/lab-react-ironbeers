import React from "react";
import { Link } from "react-router-dom";

import img1 from "../assets/beers.png";
import img2 from "../assets/new-beer.png";
import img3 from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="list">
      {/* <h1>Welcome to IronBeers</h1> */}
      <Link to="/beers">
        <div className="beer-card">
          <img src={img1} />
          <div className="beer-card-body">
            <h2> All Beers</h2>
            <p> lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          </div>
        </div>
      </Link>
      <br />
      <Link to="/random-beer">
        <div className="beer-card">
          <img src={img2} />
          <div className="beer-card-body">
            <h2> Random Beer</h2>
            <p> lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          </div>
        </div>
      </Link>
      <br />
      <Link to="/new-beer">
        <div className="beer-card">
          <img src={img2} />
          <div className="beer-card-body">
            <h2> New Beer</h2>
            <p> lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem </p>
          </div>
        </div>
      </Link>
      <br />
    </div>
  );
}

export default HomePage;
