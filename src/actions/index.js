import { v4 as uuidv4 } from 'uuid';
import { SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO, DELETE_TODO, UPDATE_TODO } from '../constants';

export const addTodo = text => ({
  type: ADD_TODO,
  id: uuidv4(),
  text
});

export const toggleTodo = id => {
  return { type: TOGGLE_TODO , id }
};

export const deleteTodo = id => {
  return { type: DELETE_TODO, id }
};

export const updateTodo = todo => {
  return { type: UPDATE_TODO, todo }
};

export const setVisibilityFilter = filter => ({ type: SET_VISIBILITY_FILTER, filter });

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
