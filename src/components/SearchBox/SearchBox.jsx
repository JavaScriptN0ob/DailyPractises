import React from 'react';

import './SearchBox.css';

const SearchBox = ({
  placeholder,
  onSearchChange,
}) => (
  <input
    type='search'
    className='search'
    placeholder={placeholder}
    onChange={(e) => onSearchChange(e.target.value)}
  />
);

export default SearchBox;
