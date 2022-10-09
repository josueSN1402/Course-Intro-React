import React from 'react';
import '../styles/components/TodoItem.css';
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
                {!props.completed && (
                    <div
                        className='Icon Icon-check'
                        aria-label='Botón para tarea terminada'
                        tabIndex={0}
                        onClick={props.onComplete}
                        role='button'
                    ></div>
                )}
                <div
                    className='Icon Icon-delete'
                    aria-label='Botón para eliminar tarea'
                    tabIndex={0}
                    onClick={props.onDelete}
                        role='button'
                ></div>
            </div>
        </li>
    );
}

export { TodoItem };
