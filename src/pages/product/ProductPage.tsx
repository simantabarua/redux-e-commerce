import { useState } from "react";
import ProductList from "../../components/product/ProductList";

export default function ProductPage() {
  const [text, setText] = useState(false);
  const [value, setValue] = useState("Latest");
  const [filter, setfilter] = useState(false);

  const handeText = (value: string) => {
    setValue(value);
    setText(!text);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center bg-gray-100 px-4 md:px-6 py-4 lg:py-5 lg:px-10 xl:px-20">
        <h1 className="text-xl md:text-2xl lg:text-4xl font-semibold leading-5 md:leading-6 lg:leading-9 text-gray-800">
          Shop
        </h1>
        <p className="text-sm md:text-base leading-4 md:leading-none">
          Home / <span className="font-medium">Shop</span>
        </p>
      </div>
      <div className="overflow-y-hidden">
        <div className="flex flex-col justify-center items-center w-full py-12 md:pb-96 lg:pb-12">
          <div className="flex w-full my-12 px-4 md:px-6 lg:px-10 xl:px-20  justify-start items-start ">
            <div className="flex w-full space-y-6 justify-start items-start flex-col ">
              <div className="w-full relative flex justify-start lg:space-x-16 xl:space-x-20">
                <div className="w-full">
                  <div className="flex w-full md:flex-row flex-col-reverse justify-between items-start lg:items-center mb-6">
                    <p className="mt-6 md:mt-3 lg:mt-0 text-base leading-none text-gray-800">
                      Showing 1-9 of 100
                    </p>
                    <div className="flex  justify-between w-full md:w-auto  flex-row md:flex-col md:space-y-6">
                      <div className="bg-gray-100 px-4 py-3 flex justify-end md:justify-between items-center space-x-6">
                        <p className="text-base leading-6 text-gray-600">
                          Sort by:
                        </p>
                        <div className="relative ">
                          <button
                            onClick={() => setText(!text)}
                            className="focus:outline-none space-x-1.5 flex justify-center items-center "
                          >
                            <p className="text-base font-medium leading-none text-gray-600">
                              {value}
                            </p>
                            <svg
                              className={`transform ${
                                text ? "rotate-180" : ""
                              }`}
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="#4B5563"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                          <div
                            className={`w-32 -right-4 mt-6 ${
                              text ? "" : "hidden"
                            }  absolute z-20 mt-2 bg-white shadow-md flex justify-start items-start flex-col`}
                          >
                            <button
                              onClick={() => handeText("Older")}
                              className="w-full text-left text-base px-4 py-2 hover:bg-gray-800 hover:text-white text-gray-800"
                            >
                              Older
                            </button>
                            <button
                              onClick={() => handeText("Latest")}
                              className="w-full text-left text-base px-4 py-2 hover:bg-gray-800 hover:text-white text-gray-800"
                            >
                              Latest
                            </button>
                            <button
                              onClick={() => handeText("last Month")}
                              className="w-full text-left text-base px-4 py-2 hover:bg-gray-800 hover:text-white text-gray-800"
                            >
                              Last Month
                            </button>
                            <button
                              onClick={() => handeText("last Year")}
                              className="w-full text-left text-base px-4 py-2 hover:bg-gray-800 hover:text-white text-gray-800"
                            >
                              last Year
                            </button>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => setfilter(!filter)}
                        className="lg:hidden flex justify-end items-center space-x-2"
                      >
                        <p className="text-base leading-6 text-gray-600">
                          Filters
                        </p>
                        <svg
                          width={16}
                          height={16}
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.24975 14.5C9.16955 14.4999 9.08988 14.487 9.01381 14.4616L6.50912 13.6281C6.36017 13.5781 6.23078 13.4823 6.13933 13.3545C6.04789 13.2268 5.99905 13.0734 5.99975 12.9163V9.19094C5.99906 9.18942 5.99811 9.18805 5.99693 9.18688L0.726622 3.04813C0.609759 2.91198 0.534417 2.74516 0.509542 2.56747C0.484667 2.38979 0.511304 2.20869 0.586289 2.04569C0.661275 1.88269 0.78146 1.74463 0.932575 1.6479C1.08369 1.55118 1.25939 1.49984 1.43881 1.5H14.5622C14.7417 1.49984 14.9174 1.55118 15.0685 1.6479C15.2196 1.74463 15.3398 1.88269 15.4148 2.04569C15.4898 2.20869 15.5164 2.38979 15.4915 2.56747C15.4666 2.74516 15.3913 2.91198 15.2744 3.04813L10.0026 9.1875C10.0015 9.18875 10.0005 9.19012 9.99975 9.19156V13.75C10 13.8486 9.98083 13.9462 9.94324 14.0374C9.90566 14.1285 9.85042 14.2113 9.78072 14.281C9.71102 14.3507 9.62822 14.4059 9.5371 14.4435C9.44598 14.4811 9.34832 14.5003 9.24975 14.5Z"
                            fill="#4B5563"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <ProductList />
                </div>
                {/* filter section start */}
                <div
                  id="dropdown"
                  className={`${
                    filter ? "" : "hidden"
                  } z-40 top-14 md:top-28 absolute rounded-md border lg:border-none lg:static bg-white px-4 md:px-6 pt-6 lg:py-3 lg:pb-0 right-0 lg:px-0 md:right-0 shadow lg:shadow-none w-full md:w-80 lg:flex justify-start items-start flex-col`}
                >
                  <div className="flex justify-between w-full items-start">
                    <p className="text-xl font-semibold leading-5 text-gray-800">
                      Categories
                    </p>
                    <button
                      onClick={() => setfilter(!filter)}
                      aria-label="close"
                      className="lg:hidden"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 6L6 18"
                          stroke="#1F2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6 6L18 18"
                          stroke="#1F2937"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <hr className="w-full mt-8" />
                  <div className="mt-8 flex flex-col justify-start items-start space-y-5">
                    <p className="text-base font-medium leading-4 text-gray-600">
                      All
                    </p>
                    <p className="text-base font-medium leading-4 text-gray-600">
                      Accessories
                    </p>
                    <p className="text-base font-medium leading-4 text-gray-600">
                      Chair
                    </p>
                    <p className="text-base font-medium leading-4 text-gray-600">
                      Decoration
                    </p>
                    <p className="text-base font-medium leading-4 text-gray-600">
                      Furniture
                    </p>
                    <p className="text-base font-medium leading-4 text-gray-600">
                      Table
                    </p>
                  </div>
                  <hr className="w-full my-8" />
                  <div className="flex flex-col justify-start items-start space-y-6">
                    <p className="text-lg font-medium leading-none text-gray-800">
                      Color
                    </p>
                    <div className="grid grid-cols-6 gap-x-8 gap-y-6">
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-yellow-400 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-green-500 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-blue-700 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-yellow-900 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-purple-700 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-pink-600 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-black rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-gray-500 rounded-full" />
                      </button>
                      <button className="focus:ring-1 focus:ring-offset-2 focus:ring-gray-600 rounded-full  ">
                        <div className="p-2 bg-red-600 rounded-full" />
                      </button>
                    </div>
                  </div>
                  <hr className="w-full my-8" />
                  <div className="flex flex-col justify-start items-start space-y-6 ">
                    <p className="text-lg font-medium leading-none text-gray-800">
                      Size
                    </p>
                    <div className="flex justify-start items-start space-x-4">
                      <button className="bg-white border w-8 h-8 focus:bg-gray-800 focus:text-white text-center text-gray-600 rounded-full border-gray-200">
                        <p className="text-sm font-medium leading-none  ">XS</p>
                      </button>
                      <button className="bg-white border w-8 h-8 focus:bg-gray-800 focus:text-white text-center text-gray-600 rounded-full border-gray-200">
                        <p className="text-sm font-medium leading-none  ">S</p>
                      </button>
                      <button className="bg-white border w-8 h-8 focus:bg-gray-800 focus:text-white text-center text-gray-600 rounded-full border-gray-200">
                        <p className="text-sm font-medium leading-none  ">M</p>
                      </button>
                      <button className="bg-white border w-8 h-8 focus:bg-gray-800 focus:text-white text-center text-gray-600 rounded-full border-gray-200">
                        <p className="text-sm font-medium leading-none  ">L</p>
                      </button>
                      <button className="bg-white border w-8 h-8 focus:bg-gray-800 focus:text-white text-center text-gray-600 rounded-full border-gray-200">
                        <p className="text-sm font-medium leading-none  ">XL</p>
                      </button>
                    </div>
                  </div>
                  <hr className="w-full my-8" />
                  <div className="flex flex-col justify-start items-start space-y-6 ">
                    <p className="text-lg font-medium leading-5 text-gray-800">
                      Price
                    </p>
                    <div className="flex flex-col space-y-6">
                      <p className="text-base font-medium leading-4 text-gray-600">
                        $0.00 - $100
                      </p>
                      <p className="text-base font-medium leading-4 text-gray-600">
                        $100 - $200
                      </p>
                      <p className="text-base font-medium leading-4 text-gray-600">
                        $200 - $300
                      </p>
                      <p className="text-base font-medium leading-4 text-gray-600">
                        $300 - $400
                      </p>
                    </div>
                  </div>
                  <hr className="w-full lg:hidden my-8" />
                </div>
                {/* filter section end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
