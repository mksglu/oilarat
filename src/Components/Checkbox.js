import React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        isChecked: false
    };
  }

  componentWillReceiveProps(props) {
    this.setState({isChecked: props.checked});
  }

  handleCheckedState(e) {
   
  }

  render() {
    return (
      <div className="form-check">
        <label className="form-check-label">
          <input
            type="checkbox"
            className="form-check-input position-static"
            checked={this.state.isChecked}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </label>
      </div>
    );
  }
}
