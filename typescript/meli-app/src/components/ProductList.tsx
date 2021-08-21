import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iProduct } from "../interfaces/products";

export interface iProductProps {
  product: iProduct;
}

const ProductList: React.FC<iProductProps> = ({ product }) => {
  return (
    <Col md={12}>
      <Row>
        <Col md={6}>
          <img
            style={{ width: "200px" }}
            src={product.thumbnail}
            alt={product.title}
          />
        </Col>
        <Col md={6}>
          <Link to="products/1">
            <h5>{product.title}</h5>
          </Link>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductList;
