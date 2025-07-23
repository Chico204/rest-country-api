// pages/CountryPage.jsx
import { useParams, Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from "react-icons/fa";

const CountryPage = ({ countries }) => {
  const { code } = useParams();

  const country = countries.find(
    c => c.alpha3Code?.toLowerCase() === code?.toLowerCase()
  );

  if (!country) {
    return <p className="p-6 text-lg text-red-600">❌ Country not found</p>;
  }

  const borders = country.borders?.map(borderCode =>
    countries.find(c => c.alpha3Code === borderCode)
  ).filter(Boolean);

  return (
    <div className="p-6">
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2  rounded shadow hover:shadow-md"
      >
        <span className='flex justify-between gap-3 align-center'><FaLongArrowAltLeft /> Back</span>
      
      </Link>
      <div className="grid md:grid-cols-2 gap-12">
        <img
          src={country.flags.svg}
          alt={country.name}
          className="w-full h-auto rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{country.name}</h1>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <p><strong>Native Name:</strong> {country.nativeName}</p>
              <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
              <p><strong>Region:</strong> {country.region}</p>
              <p><strong>Sub Region:</strong> {country.subregion}</p>
              <p><strong>Capital:</strong> {country.capital}</p>
            </div>
            <div>
              <p><strong>Top Level Domain:</strong> {country.topLevelDomain?.[0]}</p>
              <p><strong>Currencies:</strong> {country.currencies?.map(c => c.name).join(', ')}</p>
              <p><strong>Languages:</strong> {country.languages?.map(l => l.name).join(', ')}</p>
            </div>
          </div>

          {borders?.length > 0 && (
            <div>
              <h2 className="font-semibold mb-2">Border Countries:</h2>
              <div className="flex flex-wrap gap-2">
                {borders.map(border => (
                  <Link
                    key={border.alpha3Code}
                    to={`/country/${border.alpha3Code}`}
                    className="px-4 py-2  dark:bg-gray-700 rounded shadow-md text-sm hover:shadow-md "
                  >
                    {border.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
