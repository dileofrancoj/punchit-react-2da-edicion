import { Link } from "react-router-dom";

const Products = () => {
  return (
    <>
      <h1>Products</h1>
      <Link to="/products/1">Producto 1</Link>
      <Link to="/products/2">Producto 2</Link>
    </>
  );
};

export default Products;
