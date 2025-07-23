import { MdOutlineDarkMode,  MdOutlineLightMode } from "react-icons/md";

const DarkModeToggle = ({ dark, setDark }) => {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="px-4 py-2  rounded shadow hover:shadow-lg"
    >
      {dark ? <MdOutlineDarkMode/> :<  MdOutlineLightMode/> }
    </button>
  );
};

export default DarkModeToggle;
