import { memo, useState } from "react";
import PropTypes from "prop-types";

import { InputGroup, FormControl, Form, Button } from "react-bootstrap";

const Search = ({ findCharacters }) => {
  const [character, setCharacter] = useState("");

  const getCharacterNonControlled = (e) => {
    e.preventDefault();
    const [character] = e.target.elements;
    findCharacters(character.value.trim());
  };

  const getCharacters = (e) => {
    // Inputs controlados vs inputs no controlados (no real time)
    e.preventDefault();
    findCharacters(character);
  };

  return (
    <Form
      onSubmit={getCharacterNonControlled}
      className="search-characters__input"
    >
      <InputGroup>
        <FormControl
          placeholder="Personaje..."
          // onChange={(e) => setCharacter(e.target.value)}
          // value={character}
          name="character"
        />
        <Button type="submit">Buscar</Button>
      </InputGroup>
    </Form>
  );
};

Search.propTypes = {
  findCharacters: PropTypes.func.isRequired,
};

export default memo(Search);
