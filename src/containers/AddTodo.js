import React from 'react';
import '../assets/scss/form.scss';

import { connect } from 'react-redux';
import { addTodo } from '../actions';

const AddTodo = ({ dispatch }) => {
  let input;
  const onSumbit = (e) => {
    e.preventDefault();
    if (!input.value.trim()) {
      return
    }
    dispatch(addTodo(input.value));
    input.value='';
  }

  return (
    <div>
      <form onSubmit={onSumbit} className="form">
        <input type="text" ref={el => (input = el)} className="form__input"/>
        <button className="form__button" type='submit'><i className="fas fa-plus-square"></i></button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);