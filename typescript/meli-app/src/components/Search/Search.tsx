import React, { useState } from "react";

import { Col, Row, Form } from "react-bootstrap";
import { useProducts } from "../../contexts/ProductsContext";
// importar mi contexto

const Search: React.FC = () => {
  const { searchProducts } = useProducts();
  const [item, setItem] = useState<string>("");

  const handleSearch = (e: any): void => {
    if (e.keyCode === 13) {
      searchProducts(item);
      setItem("");
    }
  };

  return (
    <Row className="justify-content-center mb-4 mt-4">
      <Col md={6}>
        <Form.Control
          type="text"
          value={item}
          onKeyDown={handleSearch}
          onChange={(e) => setItem(e.target.value.trim())}
          placeholder="buscar producto"
          data-testid="search"
        />
      </Col>
    </Row>
  );
};

export default Search;
