import { Link } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="bg-zinc-800 border-gray-200 px-3 sm:px-6 py-2.5 dark:bg-zinc-800">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to={"/"} className="flex items-center text-white">
          <h3>PHIL - ATM</h3>
        </Link>

        {/* Hamburger menu for mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none focus:text-white"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Nav links */}
        <div className={`lg:flex ${menuOpen ? 'flex' : 'hidden'}`}>
          {/* Add your navigation links here */}
          <Link to={"/"} className="text-white px-4 py-2 hover:bg-gray-600">Home</Link>
          <Link to={"/about"} className="text-white px-4 py-2 hover:bg-gray-600">About</Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
