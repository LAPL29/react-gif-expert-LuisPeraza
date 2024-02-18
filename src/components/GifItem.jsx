import React from 'react'

export const GifItem = ({ title, url }) => { //destructuramos el objeto que nos devuelve getGifs


    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>

        </div>

    )
}
