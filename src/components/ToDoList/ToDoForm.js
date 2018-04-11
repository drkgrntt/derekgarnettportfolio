import React from 'react';

const ToDoForm = (props) => {
  return (
    <div className="todo-space">
      <form onSubmit={props.onSubmit}>
        <input
          value={props.text}
          onChange={props.onChange}
          type="text"
          className="list-input"
        />
        <button
          className="list-button"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default ToDoForm;