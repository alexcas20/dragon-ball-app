
import { NavBar } from "./components/NavBar";
import { Characters } from "./pages/Characters/Characters";

function App() {
  return (
    <>
      <NavBar />
      <main className="bg-sky-100 ">
        <Characters/>
      </main>
    
    </>
  );
}

export default App;
