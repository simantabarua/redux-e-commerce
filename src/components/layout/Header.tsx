import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiChevronRight,
  FiHeart,
  FiSearch,
  FiShoppingBag,
  FiX,
} from "react-icons/fi";
import { SiRedux } from "react-icons/si";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useCart } from "../../hooks/useCart";

export default function Header() {
  const [searchInput, setSearchInput] = useState(true);
  const [mdOptionsToggle, setMdOptionsToggle] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const cart = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`dark:bg-gray-900 ${
        isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
      }`}
    >
      <div>
        <div className="relative">
          {/* For md screen size */}
          <div
            id="md-searchbar"
            className={`${
              mdOptionsToggle ? "hidden" : "flex"
            } bg-white dark:bg-gray-900 lg:hidden py-5 px-6 items-center justify-between`}
          >
            <div className="flex items-center space-x-3 text-gray-800 dark:text-white">
              <div>
                <FiSearch size={20} />
              </div>
              <input
                type="text"
                placeholder="Search for products"
                className="text-sm leading-none dark:text-gray-300 dark:bg-gray-900 text-gray-600 focus:outline-none"
              />
            </div>
            <div className="space-x-6">
              <button
                aria-label="view favourites"
                className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <FiHeart size={20} />
              </button>
              <Link
                to={"shopping-cart"}
                aria-label="go to cart"
                className="relative text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
              >
                <span className="absolute text-center -top-3 left-3 inline-block bg-red-500 h-6 aspect-square rounded-full ">
                  {cart.length}
                </span>
                <FiShoppingBag className="fill-stroke" size={24} />
              </Link>
            </div>
          </div>
          {/* For md screen size */}
          {/* For large screens */}
          <div className="dark:bg-gray-900  bg-gray-50 px-4 lg:pl-9 py-6">
            <div className="container mx-auto flex items-center justify-between">
              <h1
                className="md:w-2/12 cursor-pointer text-gray-800 dark:text-white"
                aria-label="the Crib."
              >
                <Link to={"/"} className="flex items-center gap-2">
                  <SiRedux size={24} /> <span>Redux</span>
                </Link>
              </h1>
              <ul className="hidden w-8/12 md:flex items-center justify-center space-x-8">
                <li>
                  <Link
                    to={"/"}
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/products"}
                    className="dark:text-white text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 hover:underline"
                  >
                    Product
                  </Link>
                </li>
              </ul>
              <div className="md:w-2/12 justify-end flex items-center space-x- xl:space-x-8">
                <div className="hidden lg:flex items-center">
                  <button
                    onClick={() => setSearchInput(!searchInput)}
                    aria-label="search items"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <FiSearch className="fill-stroke" size={24} />
                  </button>
                  <input
                    id="searchInput"
                    type="text"
                    placeholder="search"
                    className={` ${
                      searchInput ? "hidden" : ""
                    } text-sm dark:bg-gray-900 dark:placeholder-gray-300 text-gray-600 rounded ml-1 border border-transparent focus:outline-none focus:border-gray-400 px-1`}
                  />
                </div>
                <div className="hidden lg:flex items-center space-x-4 xl:space-x-8">
                  <button
                    aria-label="view favourites"
                    className="text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <FiHeart className="fill-stroke" size={24} />
                  </button>
                  {/* add to cart */}
                  <Link
                    to={"shopping-cart"}
                    aria-label="go to cart"
                    className="relative text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    <span className="absolute text-center -top-3 left-3 inline-block bg-red-500 h-6 aspect-square rounded-full ">
                      {cart.length}
                    </span>
                    <FiShoppingBag className="fill-stroke" size={24} />
                  </Link>
                </div>
                <div className="flex lg:hidden">
                  <button
                    aria-label="show options"
                    onClick={() => setMdOptionsToggle(!mdOptionsToggle)}
                    className="text-black dark:text-white dark:hover:text-gray-300 hidden md:flex focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                  >
                    <HiBars3CenterLeft size={30} />
                  </button>
                  <div className="flex gap-5 items-center ">
                    <button
                      aria-label="view favourites"
                      className="text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      <FiHeart size={20} />
                    </button>
                    <button
                      aria-label="go to cart"
                      className="relative text-gray-800 dark:hover:text-gray-300 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-800"
                    >
                      <span className="absolute -top-3 left-3 inline-block bg-red-500 h-6 aspect-square rounded-full ">
                        {cart.length}
                      </span>
                      <FiShoppingBag size={20} />
                    </button>
                    <button
                      aria-label="open menu"
                      onClick={() => setShowMenu(true)}
                      className="text-black dark:text-white dark:hover:text-gray-300 md:hidden focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
                    >
                      <HiBars3CenterLeft size={26} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* For small screen */}
          <div
            id="mobile-menu"
            className={`${
              showMenu ? "flex" : "hidden"
            } absolute dark:bg-gray-900 z-10 inset-0 md:hidden bg-white flex-col h-screen w-full `}
          >
            <div
              className={`${
                isSticky ? "fixed top-0 left-0 w-full z-50 shadow-lg" : ""
              } flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-4 p-4 `}
            >
              <div className="flex items-center space-x-3">
                <div>
                  <FiSearch
                    size={24}
                    className="fill-stroke text-gray-800 dark:text-white"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Search for products"
                  className="text-sm dark:bg-gray-900 text-gray-600 placeholder-gray-600 dark:placeholder-gray-300 focus:outline-none"
                />
              </div>
              <button
                onClick={() => setShowMenu(false)}
                aria-label="close menu"
                className="focus:outline-none focus:ring-2 rounded focus:ring-gray-600"
              >
                <FiX
                  size={24}
                  className="fill-stroke text-gray-800 dark:text-white"
                />
              </button>
            </div>
            <div className="mt-6 p-4">
              <ul className="flex flex-col space-y-6">
                <li>
                  <Link
                    to={"/"}
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Home
                    <div>
                      <FiChevronRight
                        size={12}
                        className="fill-stroke text-black dark:text-white"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/product"}
                    className="dark:text-white flex items-center justify-between hover:underline text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800"
                  >
                    Furniture
                    <div>
                      <FiChevronRight
                        size={12}
                        className="fill-stroke text-black dark:text-white"
                      />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
