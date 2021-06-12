import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.scss";
import Characters from "./components/Characters/Characters";
import Loading from "./components/common/Loading";
import Search from "./components/Search/Search";
import { useFetch } from "./hooks/useFetch";

function App() {
  const [endpoint, setEndpoint] = useState("character");

  const { data, loading, error } = useFetch(endpoint);
  const { results: characters, info } = data;
  console.log(loading);
  const findCharacters = (character) => {
    setEndpoint(`character?name=${character}`);
  };

  if (loading) return <Loading />;
  if (error) return <h3>Ocurrió un error</h3>;

  return (
    <Container className="App">
      <Search findCharacters={findCharacters} />
      <Characters characters={characters} />
    </Container>
  );
}

export default App;
