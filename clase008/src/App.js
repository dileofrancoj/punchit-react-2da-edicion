import { UserProvider } from "./contexts/user";
import Routes from "./routes/Routes";

function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}

export default App;
