import Clicks from "./Clicks";
import { useFetch } from "./hooks/useFetch";

const APICall = () => {
  const [names, loading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos/"
  );

  return (
    <div>
      <Clicks />
      <h1>Titulos</h1>
      {loading && <h3>Cargando...</h3>}
      {names?.map((name) => (
        <p key={name.id}>{name.title}</p>
      ))}
    </div>
  );
};

export default APICall;
