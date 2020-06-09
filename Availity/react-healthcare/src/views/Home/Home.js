import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateRoute } from "../../stores/App/Actions";

function Home() {
  return (
    <div className="splash-container">
      <div className="splash">
        <h1 className="splash-head">Availity Healthcare</h1>
        <p className="splash-subhead">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <p>
          <Link to="/register" className="pure-button pure-button-primary">
            Get Started
          </Link>
        </p>
      </div>
    </div>
  );
}

Home.propTypes = {
  updateRoute: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
