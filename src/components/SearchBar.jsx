function SearchBar({ value, onChange }) {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <label htmlFor="search" className="sr-only">
        Buscar libros
      </label>
      <input
        id="search"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Buscar por título o autor..."
        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
    </div>
  );
}

export default SearchBar;