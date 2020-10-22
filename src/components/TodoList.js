import React from 'react';
import cn from 'classnames'
import '../assets/scss/todolist.scss';

import Link from '../components/Link';
import Todo from './Todo';


const TodoList = ({ todos, toggleTodo, deleteTodo, updateTodo }) => (
  <div className="todo-container">
    <ul className="todo-list">
      {todos.map(todo => (
        <div className="todo" key={todo.id} >
          <Todo {...todo} />
          <div className="todo__buttons">
            <Link onClick={() => toggleTodo(todo.id)}  className="btn--complete"><i className={cn('fas', todo.completed ? 'fa-check-double' : 'fa-check')} /></Link>
            <Link onClick={() => deleteTodo(todo.id)} className="btn--trash"><i className="fas fa-trash" /></Link>
          </div>
        </div>
      ))}
    </ul>
  </div>
);

export default TodoList;