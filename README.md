# Catamarca Ama Leer


## Qué es
Una app de catálogo + lista personal de libros. Permite buscar libros, agregarlos a una lista personal, ver la lista en un panel, y persistir la lista en `localStorage` para que sobreviva al recargar la página.

## Cómo correrlo
```bash
npm install
npm run dev

Uso de IA
Herramientas que usé: ChatGPT para resolver dudas y guiarme en la estructura del proyecto.

Qué generé con IA: La estructura inicial del proyecto y algunas recetas de hooks.

Qué escribí o corregí a mano: Todos los componentes (Navbar, SearchBar, ItemList, ItemCard, ListPanel), los hooks (useLocalStorage, useMyList, useToggle), la lógica de toggle inmutable, el filtro del buscador, los efectos, y los estilos con Tailwind.

Decisiones de estado
myList: vive en useMyList (que usa useLocalStorage por dentro). Es el estado principal de la app.

searchTerm: vive en App.jsx porque solo lo necesita el buscador y el filtro.

isPanelOpen: vive en useToggle porque es un booleano que se abre y cierra.

Datos derivados: filteredItems, isInList, total se calculan, no se guardan en estado.

Lo que me costó
Entender la diferencia entre un useEffect de carga y la inicialización lazy en useState. Al principio usaba un efecto para leer de localStorage, pero me di cuenta de que eso causaba una race condition que borraba la lista. Lo resolví usando inicialización lazy.

Lo que se simplificó con el refactor
App.jsx pasó de tener toda la lógica de localStorage y la lista a solo usar dos hooks (useMyList y useToggle). Ahora App.jsx es mucho más legible y la lógica está separada por responsabilidad. localStorage solo aparece en useLocalStorage.js.

