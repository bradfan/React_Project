import React, { Component } from "react";
import { Link } from "react-router-dom";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
    };
  }
  render() {
    return (
      <div className="container">
        <div className="box">
          <h1 className="welcome">Welcome {this.state.name} to the....</h1>
          <h2 class="manage">
            You can manage your employees{" "}
            <Link to="/EmployeeRegistry">here</Link>
          </h2>
        </div>
      </div>
    );
  }
}
export default Welcome;
