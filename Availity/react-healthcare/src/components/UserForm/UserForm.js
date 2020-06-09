import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import "./UserForm.css";
import { updateUser, loading } from "../../stores/User/Actions";
import { updateRoute } from "../../stores/App/Actions";
import Loader from "react-loader-spinner";
import { Redirect } from "react-router-dom";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      npiNumber: "",
      businessAddress: "",
      telephoneNumber: "",
      emailAddress: "",
      navigateTo: null,
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props._loading();
    setTimeout(() => {
      this.props.updateUser(this.state);
      this.setState({
        navigateTo: "/profile",
      });
    }, 1000);
  }

  render() {
    if (this.state.navigateTo) {
      this.props.updateRoute(this.state.navigateTo);
      return <Redirect to={this.state.navigateTo} push={true} />;
    }

    return (
      <div>
        {this.props.loading && (
          <div className="loader-overlay">
            <div className="center">
              <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
            </div>
          </div>
        )}

        <form className="pure-form" onSubmit={this.handleSubmit}>
          <label>
            First name:
            <input
              type="text"
              value={this.state.firstName}
              onChange={(input) => this.setState({ firstName: input.target.value })}
            />
          </label>

          <label>
            Last name:
            <input
              type="text"
              value={this.state.lastName}
              onChange={(input) => this.setState({ lastName: input.target.value })}
            />
          </label>

          <label>
            NPI number:
            <input
              type="text"
              value={this.state.npiNumber}
              onChange={(input) => this.setState({ npiNumber: input.target.value })}
            />
          </label>

          <label>
            Business address:
            <input
              type="text"
              value={this.state.businessAddress}
              onChange={(input) => this.setState({ businessAddress: input.target.value })}
            />
          </label>

          <label>
            Telephone number:
            <input
              type="text"
              value={this.state.telephoneNumber}
              onChange={(input) => this.setState({ telephoneNumber: input.target.value })}
            />
          </label>

          <label>
            Email address:
            <input
              type="text"
              value={this.state.emailAddress}
              onChange={(input) => this.setState({ emailAddress: input.target.value })}
            />
          </label>

          <input type="submit" value="Submit" className="pure-button pure-button-primary" />
        </form>
      </div>
    );
  }
}

UserForm.propTypes = {
  updateUser: PropTypes.func,
  updateRoute: PropTypes.func,
  loading: PropTypes.bool,
  _loading: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.user.loading,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    _loading: () => dispatch(loading()),
    updateRoute: (currentRoute) => dispatch(updateRoute(currentRoute)),
    updateUser: ({ firstName, lastName, npiNumber, businessAddress, telephoneNumber, emailAddress }) =>
      dispatch(updateUser(firstName, lastName, npiNumber, businessAddress, telephoneNumber, emailAddress)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
