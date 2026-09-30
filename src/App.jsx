import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import { items } from './data/items';

function App() {
  // Datos temporales (sin estado todavía)
  const myList = [];       // Lista vacía por ahora
  const searchTerm = '';   // Sin búsqueda por ahora

  const handleOpenList = () => {
    alert("Próximamente: panel de Mi lista");
  };

  const handleToggle = (item) => {
    alert(`Toggle: ${item.title}`);
  };

  const handleSearchChange = (e) => {
    alert(`Buscando: ${e.target.value}`);
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar
        logo="Mis Libros Catamarca"
        count={myList.length}
        onOpenList={handleOpenList}
      />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <ItemList
        items={items}
        myList={myList}
        onToggle={handleToggle}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;