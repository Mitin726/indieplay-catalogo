# IndiePlay - Catálogo

Este es el repositorio de nuestro proyecto "IndiePlay - Catálogo", desarrollado como parte de nuestro parcial de Desarrollo Web. En este proyecto, diseñamos y construimos una página web estática enfocada en mostrar un catálogo de videojuegos indie.

## Tecnologías y Herramientas

Para el desarrollo, utilizamos React inicializado con Vite. Nos aseguramos de usar exclusivamente componentes funcionales básicos de React y JavaScript puro para la lógica de renderizado.

## Arquitectura y Componentes

Lo que hicimos fue dividir la interfaz en componentes independientes para mantener una arquitectura limpia y ordenada. Creamos una carpeta específica donde desarrollamos los siguientes archivos:

- Header.jsx: Construimos la barra superior que contiene el título de la plataforma y un botón estático para iniciar sesión.
- Sidebar.jsx: Desarrollamos un menú de navegación lateral con opciones visuales para explorar el catálogo.
- GameCard.jsx: Creamos un componente reutilizable diseñado para recibir propiedades (props) y mostrar la portada, el título, el estudio desarrollador y un botón de acción para cada videojuego.

Finalmente, unimos todos estos componentes en el archivo principal App.jsx. Allí definimos un arreglo con los datos fijos de seis videojuegos y utilizamos el método map de JavaScript para renderizar dinámicamente las seis instancias del componente GameCard dentro de una cuadrícula.

## Diseño y Responsividad

En cuanto al diseño, escribimos código CSS utilizando Flexbox y CSS Grid para estructurar el layout principal (Sidebar a la izquierda, Header arriba y las tarjetas en cuadrícula). Implementamos una paleta de colores oscuros para lograr una estética propia de una plataforma de juegos. 

Además, ajustamos los contenedores y aplicamos media queries para garantizar que la página sea 100% responsive, adaptándose correctamente a dispositivos móviles y solucionando problemas de desbordamiento (scroll horizontal).

## Despliegue

El código fuente está alojado en este repositorio de GitHub y el despliegue de la aplicación lo realizamos a través de Vercel para su visualización pública.

Made with ❤️ by Mitin726