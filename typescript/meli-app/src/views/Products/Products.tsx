import React from "react";
import { Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

import ProductList from "../../components/ProductList";
import { useFetch } from "../../hooks/useFetch";
import { iProduct } from "../../interfaces/products";

const Products: React.FC = (): JSX.Element => {
  const [products, loading] = useFetch("search?q=zapatillas&limit=5");
  const { results }: { results: Array<iProduct> } = products;

  console.log(results);
  if (loading) return <h3>Cargando...</h3>;

  return (
    <>
      <Helmet>
        <title>Productos</title>
        <meta charSet="utf-8" />
      </Helmet>

      <Container>
        <Row className="justify-content-center">
          {results?.length > 0 ? (
            results.map((product: iProduct) => (
              <ProductList product={product} />
            ))
          ) : (
            <h3>No hay productos</h3>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Products;
