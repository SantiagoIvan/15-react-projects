Hago un fetch de una lista de tours cuando se renderiza por primera vez el componente (y solo esa vez, useEffect)

Muestro la lista dinamica, agregando en cada item un boton para eliminar de la lista a ese item
Para ello pase como prop ua referencia a esa funcion desde el padre a los hijos en el momento de su montaje
Tambien, mientras se esté realizando el get de los datos, muestro Loading hasta finalizar.
Tambien, al abstraer la logica de fetch data, puedo mostrar la lista tanto al renderizar la pagina como cuando me quedo sin items y apreto refresh.
