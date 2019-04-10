import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions/todoActions';

class TodoItem extends Component {

  render() {
    return (
      <li>
        {this.props.todo}
        <button onClick={this.props.deleteTodo.bind(this.props.index)}>DEL</button>
      </li>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (index) => dispatch(deleteTodo(index)),
  }
}

export default connect(null, mapDispatchToProps)(TodoItem);