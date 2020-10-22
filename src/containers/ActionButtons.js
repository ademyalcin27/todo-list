import { connect } from 'react-redux';
import { deleteTodo, updateTodo } from '../actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  delete: (id) => dispatch(deleteTodo(id)),
  statusChange: (todo) => dispatch(updateTodo(todo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);