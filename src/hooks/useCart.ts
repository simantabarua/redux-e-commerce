import { useSelector } from "react-redux";
import { CartItem } from "../redux/features/cart/cartSlice";

interface CartState {
  items: CartItem[];
}

export const useCart = () => {
  return useSelector((state: { cart: CartState }) => state.cart.items);
};
