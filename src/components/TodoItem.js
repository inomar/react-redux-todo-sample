import React, { Component } from 'react';

class TodoItem extends Component {
  
  deleteTodo(index) {
    this.props.del(index);
  }

  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.deleteTodo.bind(this, this.props.index)}>DEL</button>
      </li>
    )
  }
}

export default TodoItem;