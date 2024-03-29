import React from 'react';

function SearchBar({ searchText, setSearchText }) {
  return (
    <div className='text-center'>
    <input
      className='border-red-400 border-8 text-xl pl-2 pb-3 pt-3 rounded-full placeholder-stone-300 text-center text-red-500 md:text-5xl'
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      placeholder=' Type in your dish'
    />
    </div>
  );
}

export default SearchBar;
