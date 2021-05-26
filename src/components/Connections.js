import React, { Component } from "react";
import Confirm from "./Confirm";
import Pagination from "./Pagination";
import Select from "./Select";
class Connection extends Component {
  connections;
  connections = localStorage.getItem("connections");

  currentPageConnections = JSON.parse(this.connections);

  state = {
    deleteElementId: null,
    deleteElementName: null,
    isActiveConfirm: false,
    currentPage: 1,
    connectionsPerPage: 5,
    connections: JSON.parse(this.connections) || [],
  };

  upVote = (id, point) => {
    let connections = this.state.connections;
    connections.forEach((connection) => {
      if (connection.id === id) {
        connection.point = point + 1;
        connection.date = Date.now();
      }
    });
    this.sortHelper(connections);
  };

  downVote = (id, point) => {
    let connections = this.state.connections;

    connections.forEach((connection) => {
      if (connection.id === id) {
        connection.point = point - 1;
        connection.date = Date.now();
      }
    });
    this.sortHelper(connections);
  };

  sortHelper = (connections) => {
    connections.sort((a, b) => {
      if (a.point === b.point) {
        return b.date - a.date;
      }
      return b.point - a.point;
    });
    localStorage.setItem("connections", JSON.stringify(connections));
    this.setState({ connections });
  };

  removeConnection = (type, id) => {
    if (!type) {
      this.setState({ isActiveConfirm: false });
      return;
    }
    let connections = this.state.connections;

    let foundIndex = connections.findIndex(
      (connection) => connection.id === id
    );
    connections.splice(foundIndex, 1);
    localStorage.setItem("connections", JSON.stringify(connections));

    this.setState({ connections, isActiveConfirm: false });

    if (this.state.connections.length > 0 && ((this.state.connections.length %5  === 0))) {
      this.paginate(this.state.currentPage - 1);
      this.setState({ currentPage : this.state.currentPage - 1})
    }

  };

  sorter = (type, connections) => {
    if (type === "descend") {
      connections.sort((a, b) => b.point - a.point);
    } else {
      connections.sort((a, b) => a.point - b.point);
    }
    this.setState({ connections });
  };

  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { currentPage, connectionsPerPage, connections } = this.state;
    const indexOfLastConnection = currentPage * connectionsPerPage;
    const indexOfFirstConnection = indexOfLastConnection - connectionsPerPage;
    this.currentPageConnections = this.state.connections.slice(
      indexOfFirstConnection,
      indexOfLastConnection
    );
    return (
      <React.Fragment>
        <Select
          data-testid="select"
          sorter={(type) => this.sorter(type, this.state.connections)}
        />
        {this.state.isActiveConfirm && (
          <Confirm
            deleteElementName={this.state.deleteElementName}
            onOk={(type) =>
              this.removeConnection(type, this.state.deleteElementId)
            }
          />
        )}
        {this.currentPageConnections?.length > 0 ? (
          this.currentPageConnections.map((connection) => {
            return (
              <div
                className="list-parent"
                key={
                  connection.id
                    ? connection.id
                    : Math.floor(Math.random() * 999999) + 1
                }
              >
                <div className="card list-card">
                  <span>
                    <span>{connection.point}</span>
                    <h6>POINTS</h6>
                  </span>
                </div>
                <div className="list-detail">
                  <img
                    data-testid="delete"
                    className="bi bi-trash delete"
                    src="/remove.png"
                    onClick={() => {
                      this.setState({
                        deleteElementId: connection.id,
                        deleteElementName: connection.name,
                        isActiveConfirm: true,
                      });
                    }}
                  />
                  <h5>{connection.name}</h5>
                  <a href={connection.url}>{`(${connection.url})`}</a>
                  <div className="voting">
                    <span
                      title="up-vote"
                      onClick={() =>
                        this.upVote(connection.id, connection.point)
                      }
                    >
                      <i className="bi bi-arrow-up-short"></i>Up Vote
                    </span>
                    <span
                      title="down-vote"
                      className="down-vote"
                      onClick={() =>
                        this.downVote(connection.id, connection.point)
                      }
                    >
                      <i className="bi bi-arrow-down-short"></i>Down Vote
                    </span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="empty-list" title="empty">
            You have not added a connection yet!
          </div>
        )}
        <Pagination
          totalConnections={connections.length}
          connectionsPerPage={connectionsPerPage}
          currentPage={currentPage}
          paginate={this.paginate}
        />
      </React.Fragment>
    );
  }
}

export default Connection;
