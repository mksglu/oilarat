import React, { Component } from "react";
import { connect } from "react-redux";

import TableList from "./TableList";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedBoxes: [],
      checkedAll: null
    };

    this.handleChecks = this.handleChecks.bind(this);
    this.handeChecksAll = this.handleChecksAll.bind(this);
  }

  handleChecksAll = e => {
    const checkedBoxes = this.state.checkedBoxes;
    const id = this.props.userList.data.map(user => user.id);
    if (e.target.checked) {
      this.setState(
        {
          checkedBoxes: id,
          checkedAll: true
        },
        () => {
          this.props.selectedUser(this.state.checkedBoxes);
        }
      );
    } else {
      this.setState(
        {
          checkedBoxes: [],
          checkedAll: null
        },
        () => {
          this.props.selectedUser(this.state.checkedBoxes);
        }
      );
    }
  };

  handleChecks(e) {
    const value = e.target.value;
    const checkedBoxes = this.state.checkedBoxes;
    if (!e.target.checked) {
      checkedBoxes.splice(checkedBoxes.indexOf(value), 1);
    } else {
      checkedBoxes.push(value);
    }
    this.setState(
      {
        checkedBoxes: checkedBoxes
      },
      this.props.selectedUser(this.state.checkedBoxes)
    );
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card">
          <div className="card-block">
            <table className="table">
              <thead className="thead-inverse">
                <tr>
                  <th>
                    <input
                      type="checkbox"
                      onChange={this.handleChecksAll}
                      checked={this.state.checkedAll}
                      id="checkall"
                    />
                  </th>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Company</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                {this.props.userList.data.map((user, i) => (
                  <TableList
                    key={i}
                    handleChecks={this.handleChecks.bind(this)}
                    details={user}
                    check={this.state.checkedAll}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.users
  };
}

export default connect(mapStateToProps)(Table);
