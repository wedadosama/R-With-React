import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" top-0 left-0 w-full bg-[#212529] text-white">
      <div
        className="
     
      container flex justify-between items-center p-8"
      >
        <h1 className="text-4xl font-bold">R</h1>
        <nav className="relative">
          {}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            <img src="/icons/menu.webp" alt="Menu" className="w-10 h-10" />
          </button>

          {}
          <ul
            className={`absolute right-0 w-64 bg-[#212529] flex flex-col items-center space-y-4 text-2xl py-4 transition-all duration-300 ease-in-out ${
              menuOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0"
            } md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:bg-transparent md:opacity-100`}
          >
            <li>
              <a href="index.html" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-gray-400">
                Portfolio
              </a>
            </li>
            <li>
              <a href="index.html" className="hover:text-gray-400">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
