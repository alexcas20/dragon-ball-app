import { useEffect, useState } from "react";
import { NavBar } from "./components/NavBar";
import { AppRouting } from "./routes/AppRouting";
import { BottomNavigation } from "./components/BottomNavigation";
import { useMediaQuery } from "react-responsive";

function App() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  return (
    <>
      {isMobile ? <BottomNavigation /> : <NavBar />}
      <main className=" bg-slate-100  w-full ">
        <AppRouting />
      </main>
    </>
  );
}

export default App;
