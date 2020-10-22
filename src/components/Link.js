import React from 'react';
import cb from 'classnames'

import '../assets/scss/button.scss';

const Link = ({ active, onClick, children, className, ...props  }) => (
  <button className={cb('btn', className)} onClick={ onClick } disabled={ active } {...props}>
    {children}
  </button>
);

export default Link;