import React from 'react';

const ToDoForm = (props) => {
  return (
    <div className="todo-space">
      <form>
        <input
          value={props.text}
          onChange={props.onChange}
          type="text"
          className="list-input"
        />
        <input
          value="Add"
          type="submit"
          className="list-button"
          onClick={props.onSubmit}
        />
      </form>
    </div>
  );
}

export default ToDoForm;