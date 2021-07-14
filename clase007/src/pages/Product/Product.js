const Product = ({ match }) => {
  return (
    <>
      <h1>Product Page</h1>
      <h2>Se solicita info del producto: {match.params.id}</h2>
    </>
  );
};

export default Product;
