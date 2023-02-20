import SearchBar from './components/SearchBar';
import SearchImages from './api';
import searchImages from './api';
function App() {
  const handleSubmit = (term) => {
    searchImages(term);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;