import React, { Component } from "react";

class SubmitCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="card parent-card">
          <div className="card-body">
            <div
              className="card submit-card c-pointer"
              onClick={() => this.props.setPageStatus(true)}
            >
              <div className="card-body plus">
                <i className="bi bi-plus-lg"></i>
              </div>
            </div>
            <div className="submit-link">
              <h5>SUBMIT A LINK</h5>
            </div>
          </div>
        </div>
        <div className="divider" />
      </React.Fragment>
    );
  }
}

export default SubmitCard;
