// 2 tipos de export -> por default ; como constante
import Header from "./components/Header";
import Main from "./components/Main";
import Presentation from "./components/Presentation";

const App = () => {
  return (
    <>
      <Header title="Otro Header 🔥" />
      <Main />
      <Presentation
        nombre="frantuko"
        edad={27}
        casado={false}
        altura={1.8}
        hobbies={["programar", "cross", "criptosumas"]}
      />
    </>
  );
};

export default App;
