import Navbar from "../common/Navbar";
// HoC -> withAlgo...  FUNCION
/*

  HoC : Función que recibe un componente y retorna un componente modificado

*/
const withLayout = (Component) => (props) => {
  return (
    <>
      <Navbar />
      <Component {...props} />
    </>
  );
};

export default withLayout;
