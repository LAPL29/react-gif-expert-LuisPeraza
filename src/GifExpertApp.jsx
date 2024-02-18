import React from 'react'
import { useState } from 'react'; //importamos el useState
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => { /* rafc */

    const [categories, setCategories] = useState(['Dragon Ball']); //useState es un hook que permite manejar el estado de un componente funcional

    const onAddCategory = (newCategory) => { //Función para agregar una nueva categoría
        if (categories.includes(newCategory)) return; //Si el arreglo ya tiene el elemento, no lo agrega

        setCategories([newCategory, ...categories]); //El operador spread es para que haga una copia del arreglo y se pueda agregar un nuevo elemento
        // setCategories(cat =>[...cat,'Hola']); 
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {categories.map(category =>  //map recorre el arreglo y devuelve un nuevo arreglo
            (
                <GifGrid
                    key={category}
                    category={category}

                />
            )

            )}

        </>
    )

}
