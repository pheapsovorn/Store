import { useSearchParams } from 'react-router-dom';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q'); 

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-900">
        Search Results for: <span className="text-indigo-600">"{query}"</span>
      </h1>
      <p className="mt-4 text-gray-600">
        (Here is where you will display the products that match the search query)
      </p>
    </div>
  );
};

export default SearchResults;