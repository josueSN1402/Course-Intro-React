import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    return (
        <button className='CreateTodoButton' aria-label='Agregar'>
            <div className='Icon-add' />
        </button>
    )
}

export { CreateTodoButton };
