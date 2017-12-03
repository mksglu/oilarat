import React, { Component } from "react";
 
class TableList extends Component {
  render() {
    const { id, username, name, email, phone, website } = this.props.details;
    return (
      <tr>
        <th scope="row">
          <input type="checkbox" checked={this.props.check}  value={id} onChange={this.props.handleChecks}/>
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

export default TableList;
