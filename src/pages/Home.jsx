// pages/Home.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const Home = ({ countries }) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');

  const filtered = countries.filter(country => {
    const name = country.name?.toLowerCase?.();
    const regionMatch = region ? country.region === region : true;
    return name?.includes(search.toLowerCase()) && regionMatch;
  });

  return (
    <div className="p-6 ">
      <div className="flex flex-col md:flex-row md:justify-between mb-6 gap-4 ">
        <input
          type="text"
          placeholder= "Search for country..." 
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full md:w-1/2 p-2 shadow-md rounded dark:bg-gray-700 dark:text-white"
        />
        <select
          value={region}
          onChange={e => setRegion(e.target.value)}
          className="w-1/2 md:w-1/6 p-2 shadow-md rounded dark:bg-gray-700 dark:text-white"
        >
          <option value="">Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map(country => (
        <Link
  key={country.alpha3Code || country.cca3 || country.name}
  to={`/country/${country.alpha3Code || country.cca3}`}
  className=" rounded shadow hover:shadow-lg transition overflow-hidden"
>
  <img
    src={country.flags?.svg || country.flag}
    alt={country.name}
    className="w-full h-40 object-cover"
  />
  <div className="p-4">
    <h2 className="font-bold text-lg mb-2">{country.name}</h2>
    <p><strong>Population:</strong> {country.population?.toLocaleString()}</p>
    <p><strong>Region:</strong> {country.region}</p>
    <p><strong>Capital:</strong> {country.capital}</p>
  </div>
</Link>

        ))}
      </div>
    </div>
  );
};

export default Home;
