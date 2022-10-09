import React, { useState } from 'react';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
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

    const completeTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos[todoIndex].completed = true;
      setTodos(newTodos);
    };

    const deleteTodo = (text) => {
      const todoIndex = todos.findIndex(todo => todo.text === text);
      const newTodos = [...todos];
      newTodos.splice(todoIndex, 1);
      setTodos(newTodos);
    };

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    let uncompletedTodos = todos.length - completedTodos;

    let getSearchValue = (searchValue).toLowerCase();

    const TaksList = props => {
        return (
            <TodoList 
                title={props.title}
                count={props.count}
                todos={todos}
                status={props.status}
                search={searchValue}
            >
                {todos
                    .filter(t => t.text.toLowerCase().includes(getSearchValue))
                    .map(todo => (
                        todo.completed === props.status && (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={() => completeTodo(todo.text)}
                                onDelete={() => deleteTodo(todo.text)}
                            />
                        )
                    ))
                }
            </TodoList>
        )
    }

    return (
        <div className='Container'>
            {/*<AddTodoModal />*/}
            <section className='App'>
                <h1 className='Title'>MY TASKS</h1>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />

                <TaksList
                    title='Pendientes'
                    count={uncompletedTodos}
                    status={false}
                />
                <TaksList
                    title='Completadas'
                    count={completedTodos}
                    status={true}
                />

                <CreateTodoButton />
            </section>
        </div>
    );
}

export default App;
