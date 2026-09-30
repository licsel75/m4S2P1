function ItemCard({ item, isInList, onToggle }) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
      {/* Badge "NUEVO" (solo si isNew es true) */}
      {item.isNew && (
        <span className="bg-accent text-white text-xs font-bold px-2 py-1 self-start m-3 rounded">
          NUEVO
        </span>
      )}

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-text mb-1">{item.title}</h3>
        <p className="text-sm text-gray-600 mb-1">{item.author}</p>
        <p className="text-xs text-gray-500 mb-3">
          {item.year} · {item.category}
        </p>

        <div className="flex items-center gap-1 mb-4">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-semibold">{item.rating}</span>
        </div>

        {/* Botón toggle (agregar/quitar) */}
        <button
          type="button"
          onClick={() => onToggle(item)}
          className={`mt-auto px-4 py-2 rounded-lg font-semibold transition-colors ${
            isInList
              ? "bg-green-100 text-green-800 hover:bg-green-200"
              : "bg-primary text-white hover:bg-secondary"
          }`}
        >
          {isInList ? "✓ En mi lista" : "+ Agregar"}
        </button>
      </div>
    </article>
  );
}

export default ItemCard;