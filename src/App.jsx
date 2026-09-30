import { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import { items } from './data/items';

function App() {
  // Estados
  const [myList, setMyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Toggle inmutable: agrega si no está, quita si está
  const handleToggle = (item) => {
    setMyList((prev) => {
      const yaEsta = prev.some((i) => i.id === item.id);

      return yaEsta
        ? prev.filter((i) => i.id !== item.id)   // estaba , lo saco
        : [...prev, item];                        // no estaba , lo agrego
    });
  };

  // Input controlado para el buscador
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Handler temporal para abrir el panel y mostrar algo
  const handleOpenList = () => {
    alert("Próximamente: panel de Mi lista");
  };

  // Dato derivado: filtrar libros por título o autor 
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-surface">
      <Navbar
        logo="Mis Libros Catamarca"
        count={myList.length}
        onOpenList={handleOpenList}
      />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <ItemList
        items={filteredItems}
        myList={myList}
        onToggle={handleToggle}
        searchTerm={searchTerm}
      />
    </div>
  );
}

export default App;