import React from 'react';
import '../styles/components/CreateTodoButton.css';
import { VscAdd } from 'react-icons/vsc';

function CreateTodoButton({ setOpenModal }) {
    const onClickButton = () => {
        setOpenModal(prevState => !prevState);
    };

    return (
        <button
            className='CreateTodoButton'
            aria-label='Agregar'
            onClick={onClickButton}
        >
            <VscAdd className='Icon-add' />
        </button>
    );
}

export { CreateTodoButton };
