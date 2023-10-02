Pasos a seguir para hacer deploy local:

npm i
npm run dev

Explicación del proyecto:

Durante este proyecto con la complementación del backend antes explicado, con esta aplicación vamos a manejar las request desde el lado del cliente, permitiendole al mismo poder crearse un usuario, iniciar sesión, buscar sus películas favoritas, guardarlas en favoritos y luego poder visualizarlas en su ruta correspondiente y también poder eliminarlas de su selección.
Para llevar adelante este proyecto utilice React, para manejar utilice redux y react-redux para poder manejarlos desde react. En este estado inicial utilice un array para las películas, un objeto para el usuario, un array de favoritos del usuario que me permite hacer un renderizado de los botones de poner o sacar un like, como asi también las funciones de crear favorito y borrar favorito. Para lograr que React con cada click de usuario se actualicen las películas y sus respectivos crear favorito o borrar, utilice un useEffect que dentro de su array de dependencia le puse que controle el cambio del estado "favorite" que este se actualizaba cada vez que se daba a crear o borrar favorito.
También utilice un customHook con un useEffect para evitar que el usuario al desloguearse no rompa la aplicación, para esto le indique que espere cambios en el estado "user" y que si este no estaba, utilice el hook con el argumento useNavigate('/') para que se redirija al landing y que todo vuelva al comienzo.
Cree un custoom para poder traer las películas de mi backend para evitar cargar de muchas líneas mis componentes.
Para los formularios utilice expresiones regulares para poder validar el envio de información hacia el backend y evitar sorpresas inesperadas. El manejo de errores intente que sea lo mas prolijo posible.
Para los estilos utilice SASS que es un preprocesador de CSS el cual ya había trabajado anteriormente.

Tecnologías utilizadas:
1) React.
2) Redux.
3) React-redux.
4) React-router-dom.
5) SASS.
6) Axios.