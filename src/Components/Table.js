import React, { Component } from "react";
import { connect } from "react-redux";
import pickBy from "lodash/pickBy";
import keys from "lodash/keys";
import mapValues from "lodash/mapValues";

import Row from "./Row";
import Checkbox from "./Checkbox";

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkBoxControl: {},
      isCheckedAll: false
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(e, checkAll) {
    let currentState = this.state.checkBoxControl;
    if (checkAll) {
      currentState = mapValues(currentState, () => !this.state.isCheckedAll);
      this.setState({
        isCheckedAll: !this.state.isCheckedAll
      });
    } else {
      const uid = e.target.value;
      if (!this.state.isCheckedAll) {
        currentState[uid] = !currentState[uid];
      }
    }

    this.setState({
      checkBoxControl: currentState
    });
    this.props.selectedUser(keys(pickBy(currentState)));
  }

  componentWillReceiveProps(props) {
    if (!props.userList.data.length) {
      return false;
    }
    const data = props.userList.data;
    const checkBoxControl = {};

    for (var key in data) {
      checkBoxControl[data[key].id] = false;
    }

    this.setState({
      checkBoxControl: checkBoxControl
    });
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
                    <Checkbox
                      onChange={e => this.handleSelect(e, true)}
                      checked={this.state.isCheckedAll}
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
                  <Row
                    key={i}
                    handleSelect={this.handleSelect.bind(this)}
                    details={user}
                    selected={this.state.checkBoxControl[user.id]}
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
