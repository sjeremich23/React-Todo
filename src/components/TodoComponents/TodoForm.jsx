import React, { Component } from "react";

class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      newTask: ""
    };
  }

  handleChanges = e => {
    this.setState({
      newTask: e.target.value
    }); 
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p><label htmlFor="task">New Task</label></p>
        <input
          type="text"
          name="task"
          id="task"
          value={this.state.newTask}
          onChange={this.handleChanges}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default TodoForm;
