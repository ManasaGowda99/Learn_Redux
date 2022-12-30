import React, { Component } from "react";
import { connect } from "react-redux";
import { receiveData } from "../Action/actions";

class ReduxExample1 extends Component {
  handleClick = () => {
    this.props.receiveData("Updated Redux Data");
    this.setState({});
  };

  render() {
    return (
      <div>
        <div>Welcome to react learnings</div>
        <br />
        <button onClick={this.handleClick}> Redux Class </button>
        <br />
        <br />
        <div>{this.props.data}</div>;
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  const data = state.data;
  return { data };
};

const mapDispatchToProps = {
  receiveData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxExample1);
