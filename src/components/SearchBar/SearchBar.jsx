import React from 'react';
import { Search } from './style';

const SearchBar = ({ onChange }) => (
  <Search>
    <div className="search pt-4 pb-4">
      <input className="search__input" type="text" onChange={onChange} placeholder="Search here..." />
    </div>
  </Search>
);

export default SearchBar;
