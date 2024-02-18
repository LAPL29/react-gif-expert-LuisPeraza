
import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

  const [images, setimages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setimages(newImages);
    setIsLoading(false);
  }

  useEffect(() => { //useEffect es un hook que permite ejecutar un efecto secundario cuando algo sucede en el componente
    getImages();
  }, [])


  return {
    images: images,
    isLoading
  }


}

