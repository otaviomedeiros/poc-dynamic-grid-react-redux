import React, { Component } from "react";
import { connect } from "react-redux";

class NewItemForm extends Component {
  constructor(props) {
    super(props);
    this.state = { key: "JQA", name: "Test Case", environment: "Env" };
    this.onChangeKey = this.onChangeKey.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEnvironment = this.onChangeEnvironment.bind(this);
  }

  onChangeKey(inputValue) {
    this.setState({ key: inputValue.target.value });
  }

  onChangeName(inputValue) {
    this.setState({ name: inputValue.target.value });
  }

  onChangeEnvironment(inputValue) {
    this.setState({ environment: inputValue.target.value });
  }

  render() {
    return (
      <div>
        <div>
          <b>New Item Form</b>
        </div>
        <div>
          <input
            placeholder="Key"
            defaultValue={this.state.key}
            onChange={this.onChangeKey}
          />
          <input
            placeholder="Name"
            defaultValue={this.state.name}
            onChange={this.onChangeName}
          />
          <input
            placeholder="Environment"
            defaultValue={this.state.environment}
            onChange={this.onChangeEnvironment}
          />
        </div>
        <div>
          <button onClick={() => this.props.handleAddNewItem(this.state)}>
            Add
          </button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAddNewItem: newItem => dispatch({ type: "ADD_ITEM", newItem })
  };
};

export default connect(
  null,
  mapDispatchToProps
)(NewItemForm);
