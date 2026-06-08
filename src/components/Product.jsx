function Product({ product }) {
  return (
    <div className="border rounded p-4 flex flex-col items-center gap-2">
      <img
        src={product.image}
        alt={product.title}
        className="h-32 object-contain"
      />
      <h3 className="text-sm font-semibold text-center">{product.title}</h3>
      <p className="text-blue-600 font-bold">${product.price}</p>
    </div>
  );
}
export default Product;
