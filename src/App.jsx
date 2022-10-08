import React from 'react';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
// import { AddTodoModal } from './components/AddTodoModal';
import './App.css';

const todos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Cortar cebollas', completed: true },
    { text: 'Cortar cebollassss', completed: true },
    { text: 'Cortar cebollass', completed: true },
    { text: 'Cortar cebollasss', completed: true },
    { text: 'Tomar el cursso de intro a React', completed: false },
    { text: 'Llorar con la llorona', completed: false },
    { text: 'LALALALAA', completed: false },
];

function App() {
    return (
        <div className='Container'>
            {/*<AddTodoModal />*/}
            <section className='App'>
                <h1 className='Title'>MY TASKS</h1>
                <TodoSearch />

                <TodoList
                    title='Pendientes'
                    count={5}
                    todos={todos}
                    status={false}
                />
                <TodoList
                    title='Completadas'
                    count={2}
                    todos={todos}
                    status={true}
                />

                <CreateTodoButton />
            </section>
        </div>
    );
}

export default App;
