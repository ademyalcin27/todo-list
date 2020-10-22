import { connect } from 'react-redux';
import { VisibilityFilters, toggleTodo, deleteTodo, updateTodo } from '../actions'
import TodoList from '../components/TodoList';

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(task => task.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(task => !task.completed);
    default:
      return todos;
  }
}

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (todo) => dispatch(updateTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);