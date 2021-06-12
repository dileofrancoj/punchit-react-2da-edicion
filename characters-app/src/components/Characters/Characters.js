import PropTypes from "prop-types";
import { Row } from "react-bootstrap";
import Character from "../Character/Character";

const Characters = ({ characters }) => {
  // Componentes de lógica vs componentes de presentacion

  return (
    <Row className="justify-content-center">
      {characters?.length > 0 &&
        characters.map((character) => <Character {...character} />)}
    </Row>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      created: PropTypes.string,
      gender: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string,
    }).isRequired
  ),
};

export default Characters;
