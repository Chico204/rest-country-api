import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import CountryPage from './pages/CountryPage.jsx';
import Header from './components/Header.jsx';
import countriesData from './data/countries.json';

function App() {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen">
      <Header toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home countries={countriesData} />} />
   <Route path="/country/:code" element={<CountryPage countries={countriesData} />} />

      </Routes>
    </div>
  );
}

export default App;
