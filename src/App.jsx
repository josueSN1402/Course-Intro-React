import React, { useState } from 'react';
// import React, { useState, useEffect } from 'react';
import { AppUI } from './AppUI';
import { useLocalStorage } from './hooks/useLocalStorage';

/*const defaultTodos = [
    { text: 'Cortar cebolla', completed: true },
    { text: 'Terminar curso CodeStream', completed: true },
    { text: 'Comprar una hamburguesa', completed: true },
    { text: 'Terminar curso de Figma', completed: true },
    { text: 'Terminar el curso de intro a React', completed: false },
    { text: 'Sacar a pasear al perro', completed: false },
    { text: 'Ir a comprar churros', completed: false },
    { text: 'Preparar la cena', completed: false },
];*/

function App() {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');

    const completeTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
    };

    const deleteTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    let uncompletedTodos = todos.length - completedTodos;

    let getSearchValue = searchValue.toLowerCase();

    return (
        <AppUI
            loading={loading}
            error={error}
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
