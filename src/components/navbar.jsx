import React from "react";

function Boton({ texto, manejarClic}) { // rstamos usando la Desestructuración recuerda estos son los props 
	return (
		<button className= "tipo-pelicula" /* Estamos devolviendo un elemento de botón (<button>). El atributo className determina qué clase CSS se asignará a este botón. Estamos usando un operador ternario (? :) para decidir la clase. Si esBotonDeClic es true, se asignará la clase "boton-clic". Si es false, se asignará "boton-reiniciar". */
		onClick = {manejarClic} /* Estamos asignando una función al evento onClick del botón. Cuando el usuario haga clic en el botón, se ejecutará la función manejarClic. Esta función debe ser proporcionada por el componente padre cuando se utiliza el componente Boton.*/
		> 
		
			{texto}
		</button >
	)
}
export default Boton; 