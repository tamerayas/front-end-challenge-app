import React, { Component } from "react";

class Toast extends Component {
  state = {
    opacity: 1,
  };
  render() {
    setTimeout(() => {
      this.setState({ opacity: 0 });
    }, 1000);
    return (
      <div>
        <div
          className="toast"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          style={{
            position: "absolute",
            backgroundColor: "#ddf9d3",
            opacity: this.state.opacity,
            textAlign: "center",
          }}
        >
          <div className="toast-body">
            <span>{this.props.message.toUpperCase()}</span> added.
          </div>
        </div>
      </div>
    );
  }
}

export default Toast;
