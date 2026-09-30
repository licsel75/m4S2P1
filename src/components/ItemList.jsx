import ItemCard from './ItemCard';

function ItemList({ items, myList, onToggle, searchTerm }) {
  // Empty state: búsqueda sin resultados
  if (items.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <p className="text-xl text-gray-600">
          No encontramos nada para <strong>"{searchTerm}"</strong> 🔍
        </p>
        <p className="text-gray-500 mt-2">Probá con otra palabra.</p>
      </div>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item) => {
          // Dato derivado: ¿está en mi lista?
          const isInList = myList.some((i) => i.id === item.id);

          return (
            <ItemCard
              key={item.id}
              item={item}
              isInList={isInList}
              onToggle={onToggle}
            />
          );
        })}
      </div>
    </section>
  );
}

export default ItemList;