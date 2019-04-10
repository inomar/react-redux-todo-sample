import React, { Component } from 'react';
import TodoIetm from './TodoItem';
import { connect } from 'react-redux';

class TodoList extends Component {

  render() {
    return (
      <div>
        <h5>TodoList</h5>
        <ul>
          {
            this.props.todos.map((todo, index) => {
              return (
                <TodoIetm todo={todo} index={index} key={index} />
              )
            })
          }
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoList);