import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function Home() {
  return (
    <div class="splash-container">
      <div class="splash">
        <h1 class="splash-head">Availity Healthcare</h1>
        <p class="splash-subhead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          <Link to="/register" class="pure-button pure-button-primary">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Home;
