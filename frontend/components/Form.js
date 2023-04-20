import React from "react";

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form id="todoForm" onSubmit={this.props.onTodoFormSubmit}>
          <input
            value={this.props.state.todoNameInput}
            type="text"
            placeholder="New Todo"
            onChange={this.props.onTodoNameInputChange}
          />
          <input type="submit" />
        </form>
        <button onClick={this.props.toggleDisplayCompleted}>
          {this.props.state.displayCompleted ? "Hide" : "Show"} Completed
        </button>
      </div>
    );
  }
}
