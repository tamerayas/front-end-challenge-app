import React, { Component } from "react";

class Confirm extends Component {
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Remove Link
                </h5>
                <span aria-hidden="true" onClick={() => this.props.onOk(false)}>
                  &times;
                </span>
              </div>
              <div className="modal-body">
                <span>Do you want to remove:</span>
                <span className="delete-element">
                  {this.props.deleteElementName}
                </span>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="rounded-pill confirm-button btn-style"
                  data-dismiss="modal"
                  onClick={() => this.props.onOk(true)}
                >
                  OK
                </button>
                <button
                  type="button"
                  className="rounded-pill confirm-button"
                  onClick={() => this.props.onOk(false)}
                >
                  CANCEL
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
