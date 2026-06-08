import { useState, useEffect } from "react";
import Product from "../components/Product";
function Products() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Products Page</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <Product key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
export default Products;
