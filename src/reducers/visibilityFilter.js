import { VisibilityFilters } from '../actions';
import { SET_VISIBILITY_FILTER } from '../constants';
const filter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default filter;