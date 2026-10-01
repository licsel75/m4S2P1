import useLocalStorage from './useLocalStorage';

const STORAGE_KEY = 'mislibros:lista';

function useMyList() {
  const [list, setList, removeFromStorage] = useLocalStorage(STORAGE_KEY, []);

  const toggle = (item) => {
    setList((prev) => {
      const yaEsta = prev.some((i) => i.id === item.id);
      return yaEsta
        ? prev.filter((i) => i.id !== item.id)
        : [...prev, item];
    });
  };

  const remove = (item) => {
    setList((prev) => prev.filter((i) => i.id !== item.id));
  };

  const clear = () => {
    setList([]);
    removeFromStorage();   // ← Usa la función del hook
  };

  const isInList = (item) => list.some((i) => i.id === item.id);
  const total = list.length;

  return { list, total, isInList, toggle, remove, clear };
}

export default useMyList;