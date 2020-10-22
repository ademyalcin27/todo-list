import React from 'react';
import '../assets/scss/footer.scss';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <footer className="footer">
    <FilterLink className="btn--wide" filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink className="btn--wide" filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink className="btn--wide" filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </footer>
);

export default Footer;