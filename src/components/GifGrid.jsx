import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>

            <h3>{category}</h3>

            {
                isLoading && (<h2>Cargando...</h2>) //si isLoading es true, mostramos el mensaje de cargando
            }




            <div className="card-grid">
                {
                    images.map((image) => ( //destructuramos el objeto que nos devuelve getGifs
                        <GifItem
                            key={image.id}
                            {...image} //enviamos todas las propiedades del objeto image

                        />
                    ))
                }
            </div>

        </>
    )

}