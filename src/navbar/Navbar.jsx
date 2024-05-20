import { Link } from "react-router-dom";
import { FaHome, FaUser, FaShoppingCart, FaSignOutAlt } from "react-icons/fa";
import SearchBar from "../SearchBar/Searchbar";

const Navbars = () => {
  const navList = (
    <ul className="flex space-x-3 text-white font-medium text-md px-5 ">
      <li>
        <Link to={"/"}>
          <FaHome /> Home
        </Link>
      </li>

      <li>
        <Link to={"/"}>
          <FaUser /> Kushal
        </Link>
      </li>
      <li>
        <Link to={"/"}>
          <FaShoppingCart /> Cart
        </Link>
      </li>
      <li>
        <Link to={"/"}>
          <FaSignOutAlt /> Logout
        </Link>
      </li>
    </ul>
  );
  return (
    <nav className="bg-blue-900 sticky top-0">
      <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
        <div className="left py-3 lg:py-0">
          <Link to={"/"}>
            <h2 className="font-bold text-white text-2xl text-center">
              E-Commerce
            </h2>
          </Link>
        </div>

        <div className="right flex items-center space-x-5 mb-4 lg:mb-0 mx-auto">
          <SearchBar />
          {navList}
        </div>
      </div>
    </nav>
  );
};

export default Navbars;
