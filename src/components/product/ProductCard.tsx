import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "../../redux/features/cart/cartSlice";
import { Product } from "./ProductList";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    const cartItem: CartItem = {
      id: product.id,
      title: product.title,
      quantity: 1,
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <>
      <div className="flex justify-center space-y-2 md:space-y-3 items-center flex-col bg-white h-[18rem] w-full rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] hover:shadow-md cursor-pointer transition duration-200 ">
        <div className="w-full h-32 2xl:44">
          <img className="h-full w-full object-scale-down" src={product.image} alt={product.title} />
        </div>
        <div className="flex flex-col space-y-1 md:space-y-2">
          <p className="w-28 xl:w-auto text-base font-medium leading-normal text-center text-gray-800">
            {product.title.slice(1,25)}
          </p>
          <p className="text-base font-medium leading-normal text-center text-gray-600">
            ${product.price}
          </p>
        </div>
        <div>
          <div className="px-0 md:px-4 flex flex-wrap">
            <button
              onClick={() => {
                console.log("add");
              }}
              className="mx-1 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-1 md:px-3 py-2 text-[0.5rem] md:text-xs"
            >
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="mx-1 my-2 bg-white transition duration-150 ease-in-out focus:outline-none rounded text-gray-800 border border-gray-300 px-1 md:px-3 py-2 text-[0.5rem] md:text-xs"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
