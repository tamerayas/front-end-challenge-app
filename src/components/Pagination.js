import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const { totalConnections, connectionsPerPage } = this.props;
    const pageNumbers = [];
    for (
      let index = 1;
      index <= Math.ceil(totalConnections / connectionsPerPage);
      index++
    ) {
      pageNumbers.push(index);
    }
    return (
      <div className="pagination">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a
                className="page-link"
                href="!#"
                aria-label="Previous"
                onClick={() =>
                  this.props.currentPage > 1 &&
                  this.props.paginate(this.props.currentPage - 1)
                }
                style={{ boxShadow: 'none'}}
              >
                <span aria-hidden="true">&lt;</span>
              </a>
            </li>
            {pageNumbers.length > 0 ? (
              pageNumbers.map((number, index) => {
                return (
                  <li key={index} className="page-item">
                    <a
                      className="page-link"
                      href="!#"
                      autoFocus={true}
                      onClick={() => this.props.paginate(number)}
                      style={{ boxShadow: number === this.props.currentPage ? '0 0 0 0.1rem #000000' : 'none'}}
                    >
                      {number}
                    </a>
                  </li>
                );
              })
            ) : (
              <li className="page-item">
                <a className="page-link" href="!#">
                  1
                </a>
              </li>
            )}
            <li className="page-item">
              <a
                className="page-link"
                href="!#"
                aria-label="Next"
                onClick={() => {
                  this.props.currentPage < pageNumbers.length &&
                    this.props.paginate(this.props.currentPage + 1);
                  this.setState({ active: true });
                }}
                style={{ boxShadow: 'none'}}
              >
                <span aria-hidden="true">&gt;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Pagination;
