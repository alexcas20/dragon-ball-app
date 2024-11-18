import { NavBar } from "./components/NavBar";
import { AppRouting } from "./routes/AppRouting";
import { BottomNavigation } from "./components/BottomNavigation";
import { useMediaQuery } from "react-responsive";
import { Footer } from "./pages/Footer/Footer";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile ? <BottomNavigation /> : <NavBar />}
      <div className="flex flex-col min-h-screen">
      <main className="flex-grow bg-slate-900 w-full">
        <AppRouting />
       
      </main>
      </div>
      
      <Footer />
    </>
  );
}

export default App;
