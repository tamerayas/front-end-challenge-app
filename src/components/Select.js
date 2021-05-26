import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <select
        className="form-select order-select"
        title="select"
        onChange={(event) => this.props.sorter(event.target.value)}
      >
        <option hidden>Order By</option>
        <option value="descend">Most Voted (Z - A)</option>
        <option value="ascend">Less Voted (A - Z)</option>
      </select>
    );
  }
}

export default Select;
