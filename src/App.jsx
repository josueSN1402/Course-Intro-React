import React, { useState } from 'react';
import { AppUI } from './AppUI';

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

    const completeTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        setTodos(newTodos);
    };

    const deleteTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        setTodos(newTodos);
    };

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    let uncompletedTodos = todos.length - completedTodos;

    let getSearchValue = searchValue.toLowerCase();

    return (
        <AppUI
            completedTodos={completedTodos}
            uncompletedTodos={uncompletedTodos}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            completeTodo={completeTodo}
            deleteTodo={deleteTodo}
            todos={todos}
            getSearchValue={getSearchValue}
        />
    );
}

export default App;
