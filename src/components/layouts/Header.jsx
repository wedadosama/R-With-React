import { useState } from "react";
import { Link } from "react-router-dom";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className=" bg-[#212529] text-white">
      <div
        className="
      container m-auto flex justify-between items-center p-6"
      >
        <h1 className="text-4xl font-bold">R</h1>
        <nav className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
            <img src="/icons/menu.webp" alt="Menu" className="w-10 h-10" />
          </button>

          <ul
            className={`absolute right-0 bg-[#212529] flex flex-col items-center   transition-all duration-300 ease-in-out ${
              menuOpen ? "top-16 opacity-100" : "top-[-300px] opacity-0"
            } md:static md:flex md:flex-row md:space-x-8 md:space-y-0 md:bg-transparent md:opacity-100`}
          >
            <li>
              <Link to="/" className="hover:text-gray-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-gray-400">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
