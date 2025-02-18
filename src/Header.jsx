import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center p-6 bg-[#212529] text-white">
      <h1 className="text-4xl font-bold">R</h1>
      <nav>
        {}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none"
        >
          <img src="/icons/menu.webp" alt="Menu" className="w-10 h-10" />
        </button>

        {}
        <ul
          className={`absolute top-16 left-0 w-full bg-[#212529] flex flex-col items-center space-y-4 text-2xl py-4 transition-all duration-300 ease-in-out ${
            menuOpen ? "block" : "hidden"
          } md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:bg-transparent`}
        >
          <li>
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
