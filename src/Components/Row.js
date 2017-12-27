import React, { Component } from "react";
import Checkbox from './Checkbox';

class Row extends Component {
  render() {
    const { id, username, name, email, phone, website } = this.props.details;
    return (
      <tr>
        <th scope="row">
          <Checkbox checked={this.props.selected} value={id} onChange={this.props.handleSelect} />
        </th>
        <td>{id}</td>
        <td>{username}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>{phone}</td>
        <td>{website}</td>
        <td>{this.props.details.address.street}</td>
        <td>{this.props.details.company.name}</td>
      </tr>
    );
  }
}

export default Row;
