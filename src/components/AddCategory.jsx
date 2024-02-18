import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setinputValue] = useState(''); //useState es un hook que permite manejar el estado de un componente funcional

    const onInputChange = (event) => { //Función para manejar el cambio en el input
        setinputValue(event.target.value);
    }

    const onSubmit = (event) => { //Función para manejar el envío del formulario
        event.preventDefault(); //Evita que se recargue la pagina
        if (inputValue.trim().length <= 2) return;

        // setCategories(categories => [inputValue, ...categories]); 
        setinputValue('');
        onNewCategory(inputValue.trim());


    }

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>

    )
}

