import PropTypes from "prop-types";
import { Col, Card, Button } from "react-bootstrap";

const Character = ({ id, name, image, status, species, created }) => {
  return (
    <Col md={4} sm={12} className="character__separation" key={id}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title className="card-title__color">{name}</Card.Title>
          <Card.Text>
            <>
              Especie : {species}
              Estado: {status}
              Created: {created}
            </>
          </Card.Text>
          <Button variant="primary">Go {id}</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

Character.propTypes = {
  character: PropTypes.shape({
    created: PropTypes.string,
    gender: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    species: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
};

export default Character;
