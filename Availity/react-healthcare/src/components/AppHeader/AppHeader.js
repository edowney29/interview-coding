import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateRoute } from "../../stores/App/Actions";

import "./AppHeader.css";

class AppHeader extends React.Component {
  constructor(props) {
    super(props);

    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(event) {
  //   this.setState({ value: event.target.value });
  // }

  render() {
    const { currentRoute } = this.props;

    return (
      <div class="custom-menu-wrapper">
        <div class="pure-menu custom-menu custom-menu-top">
          <a href="#" class="pure-menu-heading custom-menu-brand">Register User Example</a>
          <a href="#" class="custom-menu-toggle" id="toggle"><s class="bar"></s><s class="bar"></s></a>
        </div>
        <div class="pure-menu pure-menu-horizontal pure-menu-scrollable custom-menu custom-menu-bottom custom-menu-tucked" id="tuckedMenu">
          <div class="custom-menu-screen"></div>
          <ul class="pure-menu-list">
            <li class="pure-menu-item">
              <Link to="/" class="pure-menu-link">Home</Link>
            </li>
            <li class="pure-menu-item">
              <Link to="/register" class="pure-menu-link">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

AppHeader.propTypes = {
  currentRoute: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  currentRoute: state.app.currentRoute,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
