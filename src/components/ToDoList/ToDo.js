import React, { Component } from 'react';
import _ from 'lodash';
import firebase from 'firebase';
import ToDoForm from './ToDoForm';
import ToDoListItem from './ToDoListItem';

class ToDo extends Component {
  // ToDo setup
  constructor(props) {
    super(props);

    this.state = { text: '', todos: {}, uid: '' }
  }

  componentDidMount() {
    firebase.database().ref('/todos')
      .on('value', snapshot => {
        this.setState({ editing: true, todos: snapshot.val() });
      });
  }

  // Form methods
  handleInputChange(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmitNew(text, event) {
    firebase.database().ref('/todos')
      .push({ text , complete: false })
      .then(() => {
        event.preventDefault();
        this.setState({ text: '' });
      });
  }

  handleSubmitEdited(uid, text, event) {
    firebase.database().ref(`/todos/${uid}`)
      .update({ text, complete: false })
      .then(() => {
        event.preventDefault();
        this.setState({ text: '', uid: '' });
      });
  }

  // List method
  handleEditClick(uid, text) {
    this.setState({ uid, text });
  }

  renderList() {
    return _.map(this.state.todos, (todo, uid) => {
      return (
        <ToDoListItem
          key={uid}
          todo={todo}
          uid={uid}
          onEditClick={this.handleEditClick.bind(this, uid, todo.text)}
        />
      );
    });
  }

  handleSubmit(uid, text) {
    const SubmitNew = event => {
      this.handleSubmitNew(text, event);
    }

    const SubmitEdited = event => {
      this.handleSubmitEdited(uid, text, event);
    }

    if (uid === '') {
      return SubmitNew();
    }

    return SubmitEdited();
  }

  // Render
  render() {
    const { uid, text } = this.state;

    return (
      <div className="small-container">
        <div className="todo">
          <div className="todo-space">
            <h2 className="todo-title">
              To Do List
            </h2>
          </div>
          <ToDoForm 
            text={text} 
            onChange={event => this.handleInputChange(event)}
            onSubmit={this.handleSubmit.bind(this, uid, text)}
          />
          {this.renderList()}
        </div>
      </div>
    );
  }
}

export default ToDo;