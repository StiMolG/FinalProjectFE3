import { useEffect, useContext } from "react";
import Card from "../Components/Card";
import { AppContext } from "../context/AppContext";

const Home = () => {

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <>
      <h1>{theme}</h1>
      <div className="card-grid container">
        <Card />
      </div>
    </>
  );
};

export default Home;
