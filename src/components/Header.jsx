const Header = ({ toggleDarkMode, darkMode }) => (
  <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
    <h1 className="font-bold text-lg">Where in the world?</h1>
    <button onClick={toggleDarkMode} className="text-sm flex items-center gap-1">
      {darkMode ? '☀ Light Mode' : '🌙 Dark Mode'}
    </button>
  </header>
);

export default Header;