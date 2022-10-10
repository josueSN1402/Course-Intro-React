import React from 'react';
import '../styles/components/AddTodoModal.css';

function AddTodoModal({ setOpenModal }) {
    return (
        <div className='Background-section'>
            <div className='Modal'>
                <div className='Icon-close' onClick={()=>setOpenModal(false)}></div>
                <h4 className='Modal-title'>NUEVA TAREA</h4>
                <form action='/'>
                    <label htmlFor='addTodo'>
                        <textarea
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
