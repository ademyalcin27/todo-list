import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './components/Footer';
import './assets/scss/app.scss';

function App() {

  return (
    <div className="todo-app-container">
       <header>
        <h1>Todo App </h1>
      </header>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </div>
  );
}

export default App;
