import React from "react";
import "./UserForm.css";

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstName: "", lastName: "", npiNumber: "", businessAddress: "", telephoneNumber: "", emailAddress: "" };
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form class="pure-form" onSubmit={this.handleSubmit}>
        <label>
          First name:
          <input type="text" value={this.state.firstName} onChange={(input) => this.setState({ firstName: input.target.value })} />
        </label>

        <label>
          Last name:
          <input type="text" value={this.state.lastName} onChange={(input) => this.setState({ lastName: input.target.value })} />
        </label>

        <label>
          NPI number:
          <input type="text" value={this.state.npiNumber} onChange={(input) => this.setState({ npiNumber: input.target.value })} />
        </label>

        <label>
          Business address:
          <input type="text" value={this.state.businessAddress} onChange={(input) => this.setState({ businessAddress: input.target.value })} />
        </label>

        <label>
          Telephone number:
          <input type="text" value={this.state.telephoneNumber} onChange={(input) => this.setState({ telephoneNumber: input.target.value })} />
        </label>

        <label>
          Email address:
          <input type="text" value={this.state.emailAddress} onChange={(input) => this.setState({ emailAddress: input.target.value })} />
        </label>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}
