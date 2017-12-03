import React, { Component } from "react";
import { connect } from "react-redux";
import { PieChart as RePieChart, Pie, Tooltip, Cell } from "recharts";

class PieChart extends Component {
  render() {
    const users = this.props.users.data;
    const cells = () => {
      if (!users.length) {
        return <Cell name="Waiting for Data" value={100} />;
      }
      return users.map(user => (
        <Cell
          key={user.id}
          name={user.name}
          value={user.posts.length}
          fill={"#" + Math.floor(Math.random() * 16777215).toString(16)}
        />
      ));
    };
    return (
      <div className="col-md-6">
        <div className="card">
          <div className="card-block">
            <RePieChart width={538} height={400}>
              <Pie
                dataKey="value"
                isAnimationActive={true}
                innerRadius="72%"
                outerRadius="80%"
                fill="#A0A09A"
              >
                {cells()}
              </Pie>
              <Tooltip />
            </RePieChart>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProp(state) {
  return {
    users: state.graph
  };
}

export default connect(mapStateToProp)(PieChart);
