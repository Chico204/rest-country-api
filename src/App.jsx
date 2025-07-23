// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryPage from './pages/CountryPage';
import countries from './data/countries.json';
import DarkModeToggle from './components/DarkModeToggle';
import { useEffect, useState } from 'react';

const App = () => {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const html = document.documentElement;
    if (dark) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <div>
      <header className="p-6 shadow header flex justify-between items-center">
        <h1 className="text-2xl font-bold"> Where in the world?</h1>
        <DarkModeToggle dark={dark} setDark={setDark} />
      </header>

      <Routes>
        <Route path="/" element={<Home countries={countries} />} />
        <Route path="/country/:code" element={<CountryPage countries={countries} />} />
      </Routes>
    </div>
  );
};

export default App;
