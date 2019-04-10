import React, { Component } from 'react';
import TodoIetm from './TodoItem';

class TodoList extends Component {
  deleteTodo(index) {
    this.props.del(index);
  }

  render() {
    return (
      <div>
        <h5>TodoList</h5>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return (<TodoIetm todo={todo} index={index} key={index} del={this.deleteTodo.bind(this)} />)
            })
          }
        </ul>
      </div>
    )
  }
}

export default TodoList;