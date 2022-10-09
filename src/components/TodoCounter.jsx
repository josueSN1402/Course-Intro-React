import React from 'react';
import '../styles/components/TodoCounter.css';

function TodoCounter(props) {
    return (
        <h2 className='TodoCounter'>
            {props.title} ({props.count})
        </h2>
    );
}

export { TodoCounter };
