//Core Modules
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//Actions
import { fetchUsers } from "../Actions/FetchAction";
import { updateGraphs } from "../Actions/GraphAction";

//Components
import GMap from "../Components/MapCustom"; //TODO one component.
import PieChart from "../Components/PieChart";
import Table from "../Components/Table";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleUserSelection = this.handleUserSelection.bind(this);
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  handleUserSelection(users) {
    this.props.updateGraphs(users);
  }

  render() {
    return (
      <div className="container">
        <div className="row h-100 justify-content-md-center">
          <GMap users={this.props.graph.data} />
          <PieChart users={this.props.graph.data} />
        </div>
        <div className="row h-100 mt-5 justify-content-md-center">
          <Table
            
            selectedUser={this.handleUserSelection}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userList: state.users,
    graph: state.graph
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchUsers: fetchUsers,
      updateGraphs: updateGraphs
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
