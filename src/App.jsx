import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import ListPanel from './components/ListPanel';
import { items } from './data/items';
import useMyList from './hooks/useMyList';
import useToggle from './hooks/useToggle';

function App() {
  // Hook para la lista
  const { list, total, isInList, toggle, remove, clear } = useMyList();

  // Hook para el panel
  const [isPanelOpen, togglePanel, openPanel, closePanel] = useToggle(false);

  // Estado del buscador (no necesita persistencia)
  const [searchTerm, setSearchTerm] = useState('');

  // Efecto: título de la pestaña
  useEffect(() => {
    const appName = "Mis Libros Catamarca";
    document.title = total > 0
      ? `Mi lista (${total}) | ${appName}`
      : appName;
  }, [total]);

  // Input controlado
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Dato derivado: filtrar libros
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handler para vaciar con confirmación
  const handleClear = () => {
    const confirmado = confirm("¿Seguro que querés vaciar tu lista?");
    if (confirmado) {
      clear();
    }
  };

  return (
    <div className="min-h-screen bg-surface">
      <Navbar
        logo="Mis Libros Catamarca"
        count={total}
        onOpenList={openPanel}
      />
      <SearchBar value={searchTerm} onChange={handleSearchChange} />
      <ItemList
        items={filteredItems}
        isInList={isInList}
        onToggle={toggle}
        searchTerm={searchTerm}
      />

      {isPanelOpen && (
        <ListPanel
          myList={list}
          onClose={closePanel}
          onRemove={remove}
          onClear={handleClear}
        />
      )}
    </div>
  );
}

export default App;