import  { useState } from 'react';
import logo from '../images/Logo.svg';
import { Link } from 'react-router-dom';

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
            <Link to="/" className="text-white hover:text-red-400 lg:text-xl font-medium">
              Shop
            </Link>
            
          </li>
          <li>
            <Link to="/orders" className="text-white hover:text-red-400 lg:text-xl font-medium">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/inventory" className="text-white hover:text-red-400 lg:text-xl font-medium">
              Manage Inventory
            </Link>
          </li>
          <li className="lg:mr-4">
            {/* Making spacing responsive for login link */}
            <button>
            <Link to="/login" className="text-white hover:text-blue-600 lg:text-2xl font-medium">
              Login
            </Link>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
