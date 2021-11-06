import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { iProduct } from "../types/products";

export interface iProductProps {
  product: iProduct;
}

const ProductList: React.FC<iProductProps> = ({ product }) => {
  return (
    <Col md={12} className="mt-4 mb-4">
      <Row>
        <Col md={6} style={{ width: "280px" }}>
          <img
            style={{ width: "250px" }}
            src={product.thumbnail}
            alt={product.title}
          />
        </Col>
        <Col md={6}>
          <Row>
            <Link to={`products/${product.id}`}>
              <h4>{product.title}</h4>
            </Link>
          </Row>
          <Row>
            <h5>
              {product.currency_id} ${product.price}
            </h5>
          </Row>
          <Row className="mt-2">
            {product.accepts_mercadopago && (
              <img
                style={{ width: 100, height: 50 }}
                alt="mercadopago"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRles4jof85OhBphP_2uanyatiFJjYgfVX7Jg&usqp=CAU"
              />
            )}
          </Row>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductList;
