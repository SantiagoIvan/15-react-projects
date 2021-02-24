Encargue al componente Jobs de renderizar la botonera con los jobs disponibles del chabon y la descripcion de cada uno.
Luego con conditional rendering uno se fija de mostrar el Loading antes de que cargue toda la data para que cuando finalice el fetch, puedan renderizarse los componentes y mostrar correctamente la información.
Luego para saber cual job renderizar de toda la lista, mantuve el estado del index(inicialmente en 0) que estaba renderizado actualmente, y que cada boton se encargue de dirigirse a un item en especifico.
