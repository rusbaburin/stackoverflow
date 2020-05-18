import React from 'react';
import '../assets/styles/search.css';

function SearchFrom() {
  return (
    <div className="search-container">
      <div>
        <h1 className='search-title'>Search on stackoverflow</h1>
      </div>
      <div className="search-form">
        <div className='search-item-container'>
          <input className='search-input' type='text' />
        </div>
        <div className='search-item-container'>
          <button className='search-button'>Search</button>
        </div>
      </div>
    </div>
  );
}

export default SearchFrom;
