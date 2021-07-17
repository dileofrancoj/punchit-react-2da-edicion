import TicketsTable from "./components/TicketsTable";
const tickets = [
  {
    id: 1,
    descripcion: "Descripcion del ticket",
    precio: "700",
    cantidad: 0,
  },
  {
    id: 2,
    descripcion: "Descripcion del ticket 2",
    precio: "800",
    cantidad: 0,
  },
];

const Tickets = () => {
  return (
    <>
      <h2>Tickets</h2>
      <h3>Componente 1</h3>
      <TicketsTable tickets={tickets} />
      <h4>Componente 3</h4>
    </>
  );
};

export default Tickets;
