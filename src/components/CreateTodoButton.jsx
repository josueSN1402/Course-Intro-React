import React from 'react';
import '../styles/components/CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal(prevState => !prevState)
  };
  
    return (
        <button 
          className='CreateTodoButton'
          aria-label='Agregar'
          onClick={onClickButton}>
            <div className='Icon-add' />
        </button>
    )
}

export { CreateTodoButton };
