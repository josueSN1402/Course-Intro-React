import React from 'react';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoItem } from './components/TodoItem';
// import { AddTodoModal } from './components/AddTodoModal';
import './styles/layout/App.css';

function AppUI({
    loading,
    error,
    completedTodos,
    uncompletedTodos,
    searchValue,
    setSearchValue,
    completeTodo,
    deleteTodo,
    todos,
    getSearchValue,
}) {
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
                    .map(
                        todo =>
                            todo.completed === props.status && (
                                <TodoItem
                                    key={todo.text}
                                    text={todo.text}
                                    completed={todo.completed}
                                    onComplete={() => completeTodo(todo.text)}
                                    onDelete={() => deleteTodo(todo.text)}
                                />
                            )
                    )}
            </TodoList>
        );
    };

    return (
        <div className='Container'>
            {/*<AddTodoModal />*/}
            <section className='App'>
                <h1 className='Title'>MY TASKS</h1>
                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
                {error && <p>Desespérate, hubo un error...</p>}
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {/*{(!loading) && <p>¡Crea tu primer TODO!</p>}*/}

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

export { AppUI };
