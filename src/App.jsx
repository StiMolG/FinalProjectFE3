
import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const { theme } = useContext(AppContext);
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar a classe dark ou light */}
      <div className={`app ${theme ? 'dark' : 'light'}`}>
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
