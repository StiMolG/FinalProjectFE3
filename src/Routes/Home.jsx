import { useEffect } from "react";
import Card from "../Components/Card";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {

  const { 
    fetchData,
    state: { data, favorites, isFetching }, 
  } = useAppContext();

  console.log("STATE: ", data);
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);


  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {
        isFetching ?
        <p>Loading...</p>
        :
        data.map((item) =>
         (
          <Card key={item.id} props={item}/>
        ))}
      </div>
    </>
  );
};

export default Home;
