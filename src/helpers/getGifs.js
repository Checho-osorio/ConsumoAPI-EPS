export const getGifs = async (category)=> {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=9zVgL5bnv2KJ0Y2PAeIsv6TfUDbSnKWt&q=${category}&limit=6`; // URL Petición
    const resp = await fetch( url ); // peticion
    const { data } = await resp.json() // respuesta

    /* Depuración de respuesta con los datos necesarios. */
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }))

    return gifs
}