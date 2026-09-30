import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import ListPanel from './components/ListPanel';
import { items } from './data/items';

function App() {
  // Estados
  const [myList, setMyList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Efecto: actualizar el título de la pestaña
  useEffect(() => {
    const appName = "Catamarca lee";
    const total = myList.length;

    document.title = total > 0
      ? `Mi lista (${total}) | ${appName}`
      : appName;
  }, [myList]);  // ← Se ejecuta cuando myList cambia

  // Toggle inmutable
  const handleToggle = (item) => {
    setMyList((prev) => {
      const yaEsta = prev.some((i) => i.id === item.id);
      return yaEsta
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item];
    });
  };

  const handleRemove = (item) => {
    setMyList((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleOpenList = () => setIsPanelOpen(true);
  const handleCloseList = () => setIsPanelOpen(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Dato derivado
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.author.toLowerCase().includes(searchTerm.toLowerCase())
    

  );

  return (
    <div className="min-h-screen bg-surface">
      <Navbar
        logo="Catamarca lee"
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

      {isPanelOpen && (
        <ListPanel
          myList={myList}
          onClose={handleCloseList}
          onRemove={handleRemove}
        />
      )}
    </div>
  );
}

export default App;