import { useContext } from 'react';
import { TodoContext } from './TodoContext';
import '../styles/components/TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = useContext(TodoContext);

    const onSearchValueChange = e => {
        setSearchValue(e.target.value);
    };

    return (
        <label htmlFor='search'>
            <input
                className='TodoSearch'
                placeholder='Buscar tarea'
                id='search'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </label>
    );
}

export { TodoSearch };
