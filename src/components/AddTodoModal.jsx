import { useState, useContext } from 'react';
import { TodoContext } from './TodoContext';
import '../styles/components/AddTodoModal.css';

function AddTodoModal() {
    const [newTodoValue, setNewTodoValue] = useState('');

    const {
        addTodo,
        setOpenModal,
    } = useContext(TodoContext);

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenModal(false);
    };

    const onSubmit = (event) => {
      event.preventDefault();
      addTodo(newTodoValue);
      setOpenModal(false);
      setNewTodoValue('')
    };

    return (
        <div className='Background-section'>
            <div className='Modal'>
                <div className='Icon-close' onClick={onCancel}></div>
                <h4 className='Modal-title'>NUEVA TAREA</h4>
                <form onSubmit={onSubmit}>
                    <label htmlFor='addTodo'>
                        <textarea
                            value={newTodoValue}
                            onChange={onChange}
                            className='Modal-input'
                            name='addTodo'
                            id='addTodo'
                            cols='30'
                            rows='1'
                            placeholder='Ingresar tarea'
                        ></textarea>
                    </label>
                    <input className='Modal-btn' type='submit' value='Crear' />
                </form>
            </div>
        </div>
    );
}

export { AddTodoModal };
