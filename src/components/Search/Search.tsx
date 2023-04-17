import { useState } from 'react';

//Props
type SearchProps = {
  handleSearch: (query: string) => void;
};

const Search = ({ handleSearch }: SearchProps) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSearch(query);
  };

  return (
    <div className="w-full mt-5">
      <div className="scrollbar-track">
        <div className="scrollbar-thumb"></div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center mt-0 mx-auto left-0 right-0 text-center mb-3">
          <div className="flex space-x-1 text-white text-3xl font-bold">
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="block w-full bg-white text-green-700 rounded-full px-3 py-2 focus:ring focus:outline-none focus:ring-opacity-40 focus:ring-green-500 font-mono border-zinc-700 border"
            />
            <button type="submit" className="px-4 text-white bg-green-600 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;