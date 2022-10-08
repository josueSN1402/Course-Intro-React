import { TodoItem } from './TodoItem';
import { TodoCounter } from './TodoCounter';
import React from 'react';
import './TodoList.css';

function TodoList(props) {
    let searchValue = (props.search).toLowerCase();

    return (
        <section className='Tasks-Container'>
            <TodoCounter title={props.title} count={props.count} />

            <ul className='Tasks-List'>
                {props.todos
                    .filter(t => t.text.toLowerCase().includes(searchValue))
                    .map(todo => (
                        todo.completed === props.status && (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                            />)
                    ))
                }
            </ul>
        </section>
    );
}

export { TodoList };