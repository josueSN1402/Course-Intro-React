import React from 'react';
import './TodoCounter.css';

function TodoCounter(props) {
    return (
        <h2 className='TodoCounter'>
            {props.title} ({props.count})
        </h2>
    );
}

export { TodoCounter };
