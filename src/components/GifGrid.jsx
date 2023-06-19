import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {
    /* Uso del custom Hook */
    const { images, isLoading } = useFetchGifs( category );
 
   return (
    <>
    {/* Titulo Categoria buscada */}
        <h3>{ category }</h3>
        {
            isLoading && ( <h2>Cargando...</h2> )
        }
        <div className='card-grid'>
            {
                images.map( ( image ) => 
                // Se utiliza componente GifItem para renderizar el contenido
                    <GifItem key={image.id}
                            {...image } />
                )
            }
         </div>
    </>
  )
}
