import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome home</h1>
      <Link to="/tickets">Go to tickets</Link>
    </>
  );
};

export default Home;
