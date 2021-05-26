import React, { Component } from "react";
import Toast from "./Toast";

class AddConnection extends Component {
  state = {
    name: "",
    url: "",
    hasToast: false,
  };

  addNewConnection = () => {
    let connectionList = [];

    const pushInputValues = () => {
      connectionList.unshift({
        name: this.state.name,
        url: this.state.url,
        point: 0,
        id: Math.floor(Math.random() * 999999) + 1,
        date: Date.now(),
      });
      localStorage.setItem("connections", JSON.stringify(connectionList));
    };

    if (localStorage.getItem("connections")?.length > 0) {
      JSON.parse(localStorage.getItem("connections")).forEach((value) => {
        connectionList.push(value);
      });
      pushInputValues();
    } else {
      pushInputValues();
    }

    this.setState({ hasToast: true });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.hasToast && <Toast message={this.state.name} />}
        <div className="add-to-list mt-20 parent-list">
          <i
            className="bi bi-arrow-left-short c-pointer"
            onClick={() => this.props.setPageStatus(false)}
          ></i>
          <h6>Return to List</h6>
        </div>
        <h3 className="mt-4">Add New Link</h3>
        <div className="mt-20">
          <div>
            <span>Link Name:</span>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Alphabet"
              onInput={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="mt-20">
            <span>Link URL:</span>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. http://abc.xyz"
              onInput={(e) => this.setState({ url: e.target.value })}
            />
          </div>
          <button
            className="btn btn-primary mt-4 add-button rounded-pill"
            type="submit"
            onClick={() => {
              setTimeout(() => {
                this.setState({ hasToast: false });
              }, 1000);
              this.addNewConnection();
            }}
          >
            ADD
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default AddConnection;
