const RegionFilter = ({ onSelect }) => (
  <select
    onChange={e => onSelect(e.target.value)}
    className="p-3 shadow rounded dark:bg-gray-700 dark:text-white"
  >
    <option value="">Filter by Region</option>
    <option value="Africa">Africa</option>
    <option value="Americas">America</option>
    <option value="Asia">Asia</option>
    <option value="Europe">Europe</option>
    <option value="Oceania">Oceania</option>
  </select>
);

export default RegionFilter;
