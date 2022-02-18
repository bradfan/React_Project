import "./index.css";
import React, { Component } from "react";
import RouterComponent from "./component/general/RouterComponent.jsx";

class App extends Component {
  render() {
    return (
      <div className="app">
        <RouterComponent />
      </div>
    );
  }
}

export default App;
