import React from 'react';

function SearchComponent({ updateInput, updateInputValue }) {
  return (
    <span>
      <input className="form-control" value={updateInputValue} onChange={updateInput} />
    </span>
  );
}

export default SearchComponent;
