import React, { useState } from 'react';
import { AppUI } from './AppUI';
import { TodoProvider } from './components/TodoContext';

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
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}

export default App;
