import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import { useProducts } from "../../contexts/ProductsContext";
import ProductList from "../../components/ProductList";
import { iProduct } from "../../types/products";

const ProductsView: React.FC = () => {
  const { loading, productsResults } = useProducts();

  if (loading) return <h2>Cargando...</h2>;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Productos</title>
      </Helmet>
      <Container>
        <Row className="justify-content-center">
          {productsResults?.length > 0 ? (
            productsResults.map((product: iProduct) => (
              <ProductList product={product} />
            ))
          ) : (
            <h3>No hay productos disponibles</h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default ProductsView;
