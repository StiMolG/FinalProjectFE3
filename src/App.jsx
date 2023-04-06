
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { useAppContext } from "./hooks/useAppContext";

function App() {
  const { 
    state: { stateDark } 
  } = useAppContext();
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app ${stateDark ? 'dark' : 'light'}`}>
        <Navbar />
        <main>
          <Outlet/>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
