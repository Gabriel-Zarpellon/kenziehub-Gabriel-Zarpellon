import { UserProvider } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";

function App() {
  return (
    <>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
    </>
  );
}

export default App;
