import React, { Component } from 'react';
import firebase from 'firebase';

class ToDoListItem extends Component {
  handleDeleteClick(uid) {
    const confirm = window.confirm("Are you sure you are completely finished with this item?");

    if (confirm) {
      firebase.database().ref(`/todos/${uid}`)
        .remove();
    }
  }

  handleCompleteClick(todo, uid) {
    const toggle = todo.complete ? false : true;

    firebase.database().ref(`/todos/${uid}`)
      .update({ complete: toggle });
  }

  render() {
    const { todo, uid } = this.props;

    return (
      <div key={uid} className="todo-space">
        <div className="todo-item">
          <span 
            style={{ cursor: 'pointer' }}
            onClick={this.handleCompleteClick.bind(this, todo, uid)}
          ><i className="far fa-check-square"></i>
          </span>
          <span 
            className={todo.complete ? "complete" : ""}
            style={{ marginLeft: '10px' }}
          >{todo.text}</span>
          <span 
            className="todo-right"
            onClick={this.handleDeleteClick.bind(this, uid)}
          ><i className="far fa-trash-alt"></i></span>
          <span
            className="todo-right"
            onClick={this.props.onEditClick}
          ><i className="far fa-edit"></i></span>
        </div>
      </div>
    );
  }
}

export default ToDoListItem;