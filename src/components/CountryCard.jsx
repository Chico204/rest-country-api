import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  return (
    <Link to={`/country/${country.cca3}`}>
      <div className="bg-white dark:bg-gray-700 rounded shadow hover:shadow-lg transition">
        <img src={country.flags.svg} alt={country.name.common} className="w-full h-40 object-cover rounded-t" />
        <div className="p-4">
          <h2 className="font-bold text-lg">{country.name.common}</h2>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
          <p><strong>Region:</strong> {country.region}</p>
          <p><strong>Capital:</strong> {country.capital?.[0]}</p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
