import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../constants';

const todos = (state = [], action) => {
    switch (action.type) {
      case ADD_TODO :
        return [ ...state, { id: action.id, text: action.text, completed: false }];
      case DELETE_TODO :
        return state.filter(item => item.id !== action.id);
      case TOGGLE_TODO :
        return state.map(todo => todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
      case UPDATE_TODO :
        return state.map(todo => todo.id === action.id ? { ...todo } : todo );
      default:
        return state;
    }
  }
  
  export default todos;