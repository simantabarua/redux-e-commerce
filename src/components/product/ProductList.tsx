import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

// Define the type for a product
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function ProductList() {
  // Set the type of products as an array of Product
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const req = await fetch("https://fakestoreapi.com/products");
        const res = await req.json();
        setProducts(res);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, []);

  return (
    <div className="w-full grid grid-flow-row grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 justify-items-start items-start gap-x-1 md:gap-x-2 lg:gap-x-2 gap-y-4">
      {products.map((product: Product, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}
