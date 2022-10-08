import React, { useState } from 'react';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
// import { AddTodoModal } from './components/AddTodoModal';
import './App.css';

const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Terminar curso CodeStream', completed: true },
    { text: 'Comprar una hamburguesa', completed: true },
    { text: 'Terminar curso de Figma', completed: true },
    { text: 'Terminar el curso de intro a React', completed: false },
    { text: 'Sacar a pasear al perro', completed: false },
    { text: 'Ir a comprar churros', completed: false },
    { text: 'Preparar la cena', completed: false },
];

function App() {
    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    let uncompletedTodos = todos.length - completedTodos;

    return (
        <div className='Container'>
            {/*<AddTodoModal />*/}
            <section className='App'>
                <h1 className='Title'>MY TASKS</h1>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <TodoList
                    title='Pendientes'
                    count={uncompletedTodos}
                    todos={todos}
                    status={false}
                    search={searchValue}
                />
                <TodoList
                    title='Completadas'
                    count={completedTodos}
                    todos={todos}
                    status={true}
                    search={searchValue}
                />

                <CreateTodoButton />
            </section>
        </div>
    );
}

export default App;
