import { useDispatch } from "react-redux";
import { useCart } from "../../hooks/useCart";
import { removeCart } from "../../redux/features/cart/cartSlice";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

export const ShoppingPage = () => {
  const cartItems = useCart();
  const dispatch = useDispatch();

  const handleRemoveCart = (id: number) => {
    console.log("clicked", id);
    dispatch(removeCart(id));
  };
  return (
    <>
      <div className="bg-gray-100">
        <div className="px-4 py-12">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full lg:px-10 md:px-6 px-4 py-12 bg-white mx-auto">
            <p className="text-3xl  font-semibold leading-9 text-center text-gray-800 lg:text-4xl">
              Shopping Cart
            </p>
            {/* md device */}
            {cartItems.length === 0 ? (
              <>
                <p className="flex justify-center items-center h-64 text-2xl font-semibold leading-9 text-center text-gray-800 lg:text-4xl ">
                  Your cart is empty
                </p>
              </>
            ) : (
              <>
                {cartItems.length}
                <div className="lg:block hidden">
                  <div className="grid grid-cols-6 mt-8 gap-5">
                    <p className="text-lg font-medium leading-tight text-gray-600 lg:text-xl col-span-2">
                      Product
                    </p>
                    <p className="text-lg font-medium leading-tight text-gray-600 lg:pl-0 pl-28 lg:text-xl">
                      Quantity
                    </p>
                    <p className="text-xl font-medium leading-tight text-gray-600 lg:block hidden">
                      Remove
                    </p>
                    <p className="text-lg font-medium leading-tight text-gray-600 lg:text-xl">
                      Price
                    </p>
                    <p className="text-lg font-medium leading-tight text-gray-600 lg:text-xl">
                      Total
                    </p>
                  </div>
                  {cartItems.map(
                    ({ id, title, image, quantity, price }, index) => (
                      <div key={index}>
                        <hr className="mt-6" />
                        <div className="grid grid-cols-6 mt-8 gap-5">
                          <div className=" ">
                            <img src={image} alt="wooden stool" role="img" />
                          </div>
                          <div className="lg:text-xl col-span-1">
                            <p className="xl:text-2xl lg:text-lg font-semibold leading-normal text-gray-800">
                              {title}
                            </p>
                            <p className="text-sm leading-normal text-gray-600 xl:mt-10 lg:mt-2">
                              Color:{" "}
                              <span className="font-medium"> Red Black</span>
                            </p>
                            <p className="text-sm leading-normal text-gray-600 mt-2">
                              Delivery:{" "}
                              <span className="font-medium"> Time: 2 days</span>
                            </p>
                            <p className="text-base font-medium leading-none hover:underline text-gray-800 cursor-pointer mt-2">
                              See details
                            </p>
                          </div>
                          <div>
                            <div className="flex items-center justify-center w-20 h-10 p-3 space-x-3 border border-gray-300 ">
                              <button
                                aria-label="decrease quantity"
                                className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                              >
                                <FiPlus />
                              </button>
                              <p className="text-base text-gray-800 quantity1 ">
                                {quantity}
                              </p>
                              <button
                                aria-label="decrease quantity"
                                className="text-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 hover:bg-gray-100"
                              >
                                <FiMinus />
                              </button>
                            </div>
                          </div>
                          <div>
                            <button
                              onClick={() => {
                                handleRemoveCart(id);
                              }}
                              className="hover:underline cursor-pointer text-base font-medium text-red-500 mt-2"
                            >
                              Remove
                            </button>
                          </div>
                          <div>
                            <p className="text-base font-semibold leading-none text-gray-800 mt-2">
                              {price} $
                            </p>
                          </div>
                          <div>
                            <p className="text-xl font-medium text-gray-800 mt-2">
                              {price * quantity} $
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </>
            )}

            {/* sm device */}
            <div className="lg:hidden block">
              <div className="mt-6">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/789.png"
                  alt="d"
                  className="lg:hidden md:block hidden"
                />
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/erw3r.png"
                  alt="pro"
                  className="block lg:hidden md:hidden"
                />
                <div className="flex flex-col mt-4">
                  <div className="flex items-center justify-between">
                    <div className="w-full">
                      <div className="flex justify-between">
                        <p className="text-2xl font-semibold leading-normal text-gray-800">
                          Nike Air Force 1
                        </p>
                        <p className="text-xl font-medium text-gray-800 mt-2">
                          $450
                        </p>
                      </div>
                      <p className="text-sm leading-normal text-gray-600 mt-3">
                        Color: <span className="font-medium"> Red Black</span>
                      </p>
                      <p className="text-sm leading-normal text-gray-600 mt-3">
                        Delivery:{" "}
                        <span className="font-medium"> Time: 2 days</span>
                      </p>
                      <p className="text-sm leading-normal text-gray-600 mt-3">
                        Quantity 1:
                      </p>
                    </div>
                  </div>
                  <div className="md:flex justify-between items-center">
                    <div className="flex items-center mt-4 space-x-6">
                      <p className="text-base font-medium leading-none hover:underline text-gray-800 lg:hidden block">
                        See details
                      </p>
                      <p className="text-base font-medium hover:underline text-red-500 cursor-pointer">
                        Remove
                      </p>
                    </div>
                    <div className="flex gap-8 md:mt-0 mt-6">
                      <p className="text-base font-medium leading-none text-gray-800">
                        TOTAL:
                      </p>
                      <p className="text-base font-semibold leading-none text-gray-800">
                        $210
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mt-6" />
            </div>

            <div className="lg:px-10 md:px-6 md:mt-14 lg:mt-10 lg:flex lg:flex-row flex-row-reverse gap-4 justify-end mt-6">
              <button className="flex border border-gray-300 lg:max-w-[296px] w-full justify-center py-3 gap-2 items-center">
                <svg
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.37996 12.5448C6.25329 12.5448 6.12663 12.4981 6.02663 12.3981L1.97996 8.35146C1.78663 8.15812 1.78663 7.83812 1.97996 7.64479L6.02663 3.59812C6.21996 3.40479 6.53996 3.40479 6.73329 3.59812C6.92663 3.79146 6.92663 4.11146 6.73329 4.30479L3.03996 7.99812L6.73329 11.6915C6.92663 11.8848 6.92663 12.2048 6.73329 12.3981C6.63996 12.4981 6.50663 12.5448 6.37996 12.5448Z"
                    fill="#1F2937"
                  />
                  <path
                    d="M13.6663 8.5H2.44629C2.17296 8.5 1.94629 8.27333 1.94629 8C1.94629 7.72667 2.17296 7.5 2.44629 7.5H13.6663C13.9396 7.5 14.1663 7.72667 14.1663 8C14.1663 8.27333 13.9396 8.5 13.6663 8.5Z"
                    fill="#1F2937"
                  />
                </svg>
                <Link
                  to={"/products"}
                  className="text-base font-medium leading-none text-gray-800"
                >
                  Back to shopping
                </Link>
              </button>
              <button className="text-base font-medium border border-gray-300 lg:max-w-[296px] w-full justify-center py-3 gap-2 bg-gray-800 hover:bg-gray-700 transition duration-300 text-white lg:mt-0 md:mt-6 mt-4">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
