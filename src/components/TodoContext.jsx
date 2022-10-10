import { useState, createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = createContext();

function TodoProvider(props) {
    const {
        item: todos,
        saveItem: saveTodos,
        loading,
        error,
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const addTodo = (text) => {
      const newTodos = [...todos];
      newTodos.push({
        completed: false,
        text,
      });
      saveTodos(newTodos);
    };

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
        <TodoContext.Provider
            value={{
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
                openModal,
                setOpenModal,
                addTodo
            }}
        >
            {props.children}
        </TodoContext.Provider>
    );
}

export { TodoContext, TodoProvider };
