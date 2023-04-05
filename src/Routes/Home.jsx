import { useEffect } from "react";
import Card from "../Components/Card";
// import dentistApi from "../api/dentistApi";
// import dentistReducer from "../hooks/dentistReducer";
// import { AppContext } from "../context/AppContext";
import { useAppContext } from "../hooks/useAppContext";

const Home = () => {

  const { 
    fetchData,
    state: { data, favorites, isFetching }, 
  } = useAppContext();

  console.log("STATE: ", data);
  // const [data, setData] = useState([]);
  // const [dentists, dispatch] = useReducer(dentistReducer, []);

  // const getData = async () => {
  //   const response = await dentistApi.get();
  //   dispatch({ type: 'ADD_DATA', payload: response });
  //   setData(response.data);
  //   console.log("USEREDUCER: ", dentists);
  // }
  useEffect(() => {
    fetchData();
    // getData();
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
