import { TechProvider } from "./providers/TechContext";
import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import "./styles/index.scss";

function App() {
  return (
    <>
      <UserProvider>
        <TechProvider>
          <RoutesMain />
        </TechProvider>
      </UserProvider>
    </>
  );
}

export default App;
