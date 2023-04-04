import { useEffect, useState } from "react";
import Card from "../Components/Card";
import dentistApi from "../api/dentistApi";

const Home = () => {

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await dentistApi.get();
    setData(response.data);
    console.log("API: ", response.data);
  }
  useEffect(() => {
    getData();
  }, []);


  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        {data.map((item) =>
         (
          <Card name={item.name}/>
        ))}
      </div>
    </>
  );
};

export default Home;
