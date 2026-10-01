function ListPanel({ myList, onClose, onRemove, onClear }) {
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <aside className="bg-white w-full max-w-md h-full flex flex-col shadow-xl">
        {/* Header del panel */}
        <header className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-xl font-bold text-text font-display">
            Mi lista ({myList.length})
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Cerrar"
            className="text-gray-500 hover:text-text text-2xl leading-none"
          >
            ×
          </button>
        </header>

        {/* Contenido del panel */}
        <div className="flex-grow overflow-y-auto p-4">
          {myList.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-gray-600">
                Todavía no agregaste nada, buscá algo arriba 👆
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {myList.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center bg-surface rounded-lg p-3 border border-gray-200"
                >
                  <div className="flex-grow">
                    <p className="font-semibold text-text">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.author}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onRemove(item)}
                    aria-label={`Quitar ${item.title}`}
                    className="ml-3 text-red-500 hover:text-red-700 font-bold text-lg px-2"
                  >
                    ×
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer del panel: botón vaciar (solo si hay items) */}
        {myList.length > 0 && (
          <footer className="p-4 border-t border-gray-200">
            <button
              type="button"
              onClick={onClear}
              className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors"
            >
              Vaciar mi lista
            </button>
          </footer>
        )}
      </aside>
    </div>
  );
}

export default ListPanel;