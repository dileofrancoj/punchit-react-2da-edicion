import Navbar from "../common/Navbar";
// HoC -> withAlgo...  FUNCION
/*

  HoC : Función que recibe un componente y retorna un componente modificado

*/
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
