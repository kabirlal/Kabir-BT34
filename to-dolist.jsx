import React from "react";

class TodoApp extends React.Component {
  state = {
    newTask: "",
    tasks: [
      { id: 1, text: "Task 1" },
      { id: 2, text: "Task 2" },
      { id: 3, text: "Task 3" },
    ],
  };

  handleChange = (e) => {
    this.setState({ newTask: e.target.value });
  };

  addTask = () => {
    const { newTask, tasks } = this.state;
    if (!newTask.trim()) return;
    const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1;
    this.setState({
      tasks: [...tasks, { id, text: newTask }],
      newTask: "",
    });
  };

  deleteTask = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== id),
    }));
  };

  editTask = (id) => {
    const newText = prompt("Edit task:");
    if (newText !== null && newText.trim()) {
      this.setState((prev) => ({
        tasks: prev.tasks.map((t) =>
          t.id === id ? { ...t, text: newText } : t
        ),
      }));
    }
  };

  render() {
    return (
      <div>
        {/* line 1: add item input */}
        <input
          type="text"
          placeholder="Add item"
          value={this.state.newTask}
          onChange={this.handleChange}
        />
        <br />
        {/* line 2: add button */}
        <button onClick={this.addTask}>Add</button>
        <br />
        {/* lines 3+ : tasks with delete & edit */}
        {this.state.tasks.map((task) => (
          <div key={task.id} style={{ marginTop: "8px" }}>
            {task.text}{" "}
            <button onClick={() => this.deleteTask(task.id)}>Delete</button>{" "}
            <button onClick={() => this.editTask(task.id)}>Edit</button>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoApp;
