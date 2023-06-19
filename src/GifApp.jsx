import { useState } from "react";
import { AddCategory, GifGrid } from "./components";


export const GifApp = () => {

    //UseState de categorias tipo array
    const [categories, setCategories] = useState([ ])

    const onAddCategory = ( newCategory ) => {
        
        if ( categories.includes(newCategory)) return;

        setCategories( [ newCategory , ...categories ])
        // setCategories( cat => [...cat, 'Valorant'])
    }


console.log(categories)
  return (
    <>
        
                
        <h1>Buscador de GIF</h1>
        <div className="contentDescription">
         <p> Ejercicio Practico de consumo de API:</p>
         <p> API utilizada: https://developers.giphy.com/ </p>
        </div>

{/* Componeente de buscador  */}
        <AddCategory 
            onNewCategory = { onAddCategory}
        /> 

{/* Componente de Grid */}
        { categories.map( category => (
                <GifGrid key={ category } category={ category }/>
            ))
        }

{/* Instrucciones uso */}
<div className="contentinstructions">
    <h2>A tener en cuenta</h2>
    <ul>
        <li>En el buscador ingrese una termino o busqueda deseada para iniciar</li>
        <li>El resultado esta limitado a 6 elementos</li>
        <li>El uso del API es publico, pero es necesario registrarse para usarla, ya que genera un apiKey de consumo</li>
        <li>Se mostrara el historial de los elementos buscados</li>
        <li>Si el termino buscado no tiene resultados, solo se mostrata el titulo buscado</li>
    </ul>
</div>
<div className="contentDescription">
         <p> Sergio Osorio</p>
         <p> Especialización en desarrollo de software</p>
</div>


    </>
  )
}
