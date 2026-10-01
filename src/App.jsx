import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import ItemList from './components/ItemList';
import ListPanel from './components/ListPanel';
import { items } from './data/items';

const STORAGE_KEY = 'mislibros:lista';

function App() {
  const [myList, setMyList] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error('Error al leer localStorage:', error);
      return [];
    }
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(myList));
    } catch (error) {
      console.error('Error al guardar en localStorage:', error);
    }
  }, [myList]);

  useEffect(() => {
    const appName = "Mis Libros Catamarca";
    const total = myList.length;
    document.title = total > 0
      ? `Mi lista (${total}) | ${appName}`
      : appName;
  }, [myList]);

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

  const handleClear = () => {
    const confirmado = confirm("¿Seguro que querés vaciar tu lista?");
    if (confirmado) {
      setMyList([]);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  const handleOpenList = () => setIsPanelOpen(true);
  const handleCloseList = () => setIsPanelOpen(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

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

      {isPanelOpen && (
        <ListPanel
          myList={myList}
          onClose={handleCloseList}
          onRemove={handleRemove}
          onClear={handleClear}
        />
      )}
    </div>
  );
}

export default App;