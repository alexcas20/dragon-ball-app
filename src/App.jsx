
import { NavBar } from "./components/NavBar";
import { AppRouting } from "./routes/AppRouting";

function App() {
  return (
    <>
      <NavBar />
      <main className="bg-sky-100 ">
        <AppRouting/>
      </main>
    
    </>
  );
}

export default App;
