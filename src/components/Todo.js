import React from 'react';

const Todo = ({ completed, text }) => {

  return (<li className={`todo-text ${completed ? 'todo-text--completed' : ''}`}> {text}</li>);
}

export default Todo;