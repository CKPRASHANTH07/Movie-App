import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, handleKeyPress }) => (
    <div className='h-8 mt-6 w-96 bg-white rounded-xl flex border-2 border-gray-400 ml-20 pl-2'>
        <input
            placeholder='Search'
            className='w-80 text-black pl-2'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
        />
        <button
            className='text-black h-8 w-12 hover:bg-slate-200 rounded-xl ml-10'
            onClick={handleSearch}
        >
            ?
        </button>
    </div>
);

export default SearchBar;
