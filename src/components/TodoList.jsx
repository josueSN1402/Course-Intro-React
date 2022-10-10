import React from 'react';
import { TodoCounter } from './TodoCounter';
import '../styles/components/TodoList.css';

function TodoList(props) {
    return (
        <section className='Tasks-Container'>
            <TodoCounter title={props.title} count={props.count} />

            <ul className='Tasks-List' tabIndex='-1'>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };
