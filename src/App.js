import React, { Component } from "react";
import "./App.css";
import Board from "./Board";
import Rules from "./Rules";

class App extends Component {
  state = {
    showRules: false
  };

  toggleRules = value => {
    this.setState({ showRules: value });
  };

  render() {
    return (
      <div className="App">
        <Board
          ncols={5}
          nrows={5}
          chanceLightStartOn={0.25}
          toggleRules={this.toggleRules}
        />
        <Rules toggleRules={this.toggleRules} show={this.state.showRules} />
      </div>
    );
  }
}

export default App;
