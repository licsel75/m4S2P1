function Navbar({ logo, count, onOpenList }) {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-md">
      <nav className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-2xl font-bold text-primary font-display">
          {logo}
        </h1>

        <div className="flex items-center gap-4">
          {/* Contador (solo si hay items) */}
          {count > 0 && (
            <span className="bg-accent text-white text-sm font-bold px-3 py-1 rounded-full">
              {count}
            </span>
          )}

          {/* Botón para abrir la lista */}
          <button
            type="button"
            onClick={onOpenList}
            className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Mi lista
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;