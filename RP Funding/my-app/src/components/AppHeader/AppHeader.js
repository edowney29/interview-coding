import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateRoute } from "../../stores/App/Actions";
import "./AppHeader.css";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.updateRoute(window.location.pathname);
  }

  render() {
    const { currentRoute } = this.props;

    return (
      <div className="custom-wrapper pure-g" id="menu">
        <div className="pure-u-1 pure-u-md-1-3">
          <div className="pure-menu">
            <a href="#" className="pure-menu-heading custom-brand">
              Register User Example
            </a>
            {/* <a href="#" className="custom-toggle" id="toggle">
              <s className="bar"></s>
              <s className="bar"></s>
            </a> */}
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <div className="pure-menu pure-menu-horizontal custom-can-transform">
            <ul className="pure-menu-list">
              <li class={`pure-menu-item ${currentRoute === "/" ? "pure-menu-selected" : ""}`}>
                <Link to="/" className="pure-menu-link" onClick={(event) => this.props.updateRoute("/")}>
                  Home
                </Link>
              </li>
              <li class={`pure-menu-item ${currentRoute === "/register" ? "pure-menu-selected" : ""}`}>
                <Link
                  to="/register"
                  className="pure-menu-link"
                  onClick={(event) => this.props.updateRoute("/register")}
                >
                  Register
                </Link>
              </li>
              <li className="pure-menu-item">
                <a
                  className="pure-menu-link"
                  href="https://github.com/edowney29/interview-assignments/tree/master/Availity/react-healthcare"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pure-u-1 pure-u-md-1-3">
          <div className="pure-menu pure-menu-horizontal custom-menu-3 custom-can-transform">
            <ul className="pure-menu-list">
              <li className="pure-menu-item">
                {/* <a href="#" className="pure-menu-heading">
                  {this.props.firstName === "" && this.props.lastName === ""
                    ? ""
                    : `${this.props.firstName} ${this.props.lastName}`}
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  currentRoute: PropTypes.string,
  updateRoute: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  currentRoute: state.app.currentRoute,
  firstName: state.user.firstName,
  lastName: state.user.lastName,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
