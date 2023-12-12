import  { useState } from 'react';
import logo from '../images/Logo.svg';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };


  return (
    <nav className="bg-gray-800 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg lg:text-xl ml-2 mr-5">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="lg:hidden cursor-pointer mr-5" onClick={toggleMenu}>
          {/* Styling the menu icon */}
          <div className="text-white">&#9776;</div>
        </div>
        <ul className={`lg:flex ${isMenuOpen ? 'flex' : 'hidden'} mt-4 lg:mt-0 space-x-4`}>
          <li>
            <a href="#" className="text-white hover:text-red-400 lg:text-xl font-medium">
              Order
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-400 lg:text-xl font-medium">
              Order Review
            </a>
          </li>
          <li>
            <a href="#" className="text-white hover:text-red-400 lg:text-xl font-medium">
              Manage Inventory
            </a>
          </li>
          <li className="lg:mr-4">
            {/* Making spacing responsive for login link */}
            <button>
            <a href="#" className="text-white hover:text-blue-600 lg:text-2xl font-medium">
              Login
            </a>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
