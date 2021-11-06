import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCharacters } from "../redux/charactersDuck";

const Characters = () => {
  const { characters, error, loading } = useSelector(
    (state) => state.characters
  );
  const dispatch = useDispatch();
  console.log(characters);

  useEffect(() => {
    getCharacters()(dispatch);
  }, [dispatch]);
  return (
    <div>
      <h1>Characters</h1>
    </div>
  );
};

export default Characters;
