import React from 'react';
import '../styles/components/CreateTodoButton.css';

function CreateTodoButton(props) {
  const onClickButton = (msg) => {
    alert(msg);
  };
  
    return (
        <button className='CreateTodoButton' aria-label='Agregar' onClick={() => onClickButton('Aquí se debería abrir el modal')}>
            <div className='Icon-add' />
        </button>
    )
}

export { CreateTodoButton };
