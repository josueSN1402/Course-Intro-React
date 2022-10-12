import React from 'react';
import '../styles/components/TodoItem.css';
import { VscCheck, VscDiscard, VscChromeClose } from 'react-icons/vsc';

function TodoItem(props) {
    return (
        <li
            className={`TodoItem ${
                props.completed ? 'TodoItem--complete' : ''
            }`}
        >
            <p className='TodoItem-p'>{props.text}</p>

            <div className='Icons-container'>
                <div
                    className='Icon-content'
                    onClick={props.onComplete}
                    tabIndex={0}
                    role='button'
                    aria-label={
                        !props.completed
                            ? 'Marcar como tarea terminada'
                            : 'Desmarcar tarea terminada'
                    }
                >
                    {!props.completed ? (
                        <VscCheck className='Icon Icon-check' />
                    ) : (
                        <VscDiscard className='Icon Icon-discard' />
                    )}
                </div>
                <div
                    className='Icon-content'
                    onClick={props.onDelete}
                    tabIndex={0}
                    role='button'
                    aria-label='Eliminar tarea'
                >
                    <VscChromeClose className='Icon Icon-delete' />
                </div>
            </div>
        </li>
    );
}

export { TodoItem };
