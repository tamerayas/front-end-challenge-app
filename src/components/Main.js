import React, { Component } from "react";
import SubmitCard from "./SubmitCard";
import Connections from "./Connections";
import AddConnection from "./AddConnection";

class Main extends Component {
  state = {
    isAddConnectionPage: false,
  };

  setPageStatus = (status) => {
    this.setState({
      isAddConnectionPage: status,
    });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.isAddConnectionPage && (
          <React.Fragment>
            <SubmitCard setPageStatus={this.setPageStatus} />
            <Connections />
          </React.Fragment>
        )}
        {this.state.isAddConnectionPage && (
          <React.Fragment>
            <AddConnection setPageStatus={this.setPageStatus} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}

export default Main;
