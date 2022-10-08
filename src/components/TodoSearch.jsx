import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    return (
        <label htmlFor="search">
            <input className='TodoSearch' placeholder='Cebolla' id='search' />
        </label>
    );
}

export { TodoSearch };
