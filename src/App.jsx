import React, {Component } from 'react';
import "./styles/Todo.css";
import data from "./components/data/data";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends Component {
constructor() {
  super();
  this.state = {
    todo: data
  }
}

addTask = task => {
  const newTask = {
    task: task,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todo: [...this.state.todo, newTask]
  });
};

toggleCompleted = id => {
  this.setState({
    todo: this.state.todo.map(task => {
      if (task.id === id) {
        return {
          ...task,
          completed: !task.completed
        };
      } else {
        return task;
      }
    })
  });
};

clearCompleted = e => {
  e.preventDefault();
  this.setState({
    todo: this.state.todo.filter(task => task.completed === false)});
};

  render() {
    return (
      <div className="App">
        {/* <div className="header"> */}
          <h1>Todo List: MVP</h1>
          <TodoForm addTask={this.addTask} />
        {/* </div> */}
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
