import { AuthProvider } from "./contexts/Auth";
import Routes from "./routes/";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
