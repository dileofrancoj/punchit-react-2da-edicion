const Presentation = ({ nombre, edad, casado, altura }) => {
  return (
    <>
      <h3>Hola mi nombre es {nombre}</h3>
      <h3>Tengo {edad} años</h3>
      <h4>Estoy casado? {casado ? "si, y feliz" : "no y feliz"}</h4>
      <h5>
        Mido: {altura} m {altura < 1.4 && "soy pigmeo"}{" "}
      </h5>
      <h6>bar hablo poco</h6>
    </>
  );
};

export default Presentation;
