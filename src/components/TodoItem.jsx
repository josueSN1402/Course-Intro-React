import React from 'react';
import './TodoItem.css';
// import Close from '../images/close.svg';

function TodoItem(props) {
    return (
        <li
            className={`TodoItem ${
                props.completed ? 'TodoItem--complete' : ''
            }`}
        >
            <p className='TodoItem-p'>{props.text}</p>

            <div className='Icons-container'>
                {!props.completed && <div className='Icon Icon-check' aria-label='Botón para tarea terminada'></div>}
                <div className='Icon Icon-delete' aria-label='Botón para eliminar tarea'></div>
            </div>
        </li>
    );
}

export { TodoItem };
