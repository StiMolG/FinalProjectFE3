import { useEffect, useState } from "react";
import ScheduleFormModal from "./ScheduleFormModal";
import styles from "./DetailCard.module.css";
import { useParams } from "react-router-dom";
import dentistApi from "../api/dentistApi";

const DetailCard = ({name}) => {

  const params = useParams();
  console.log("PARAMS: ", params);
  const [data, setData] = useState([]);

  const getDentist = async () => {
    const response = await dentistApi.get(params.id);
    setData(response.data);
    console.log("API DENTIST: ", response.data);
  }
  useEffect(() => {
    getDentist();
  }, []);
  return (
    //As instruções que estão com {''} precisam ser 
    //substituídas com as informações que vem da api
    <>
      <h1>Detalle sobre Dentista</h1>
      <section className="card col-sm-12 col-lg-6 container">
        {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
        <div
          className={`card-body row`}
        >
          <div className="col-sm-12 col-lg-6">
            <img
              className="card-img-top"
              src="/images/doctor.jpg"
              alt="doctor placeholder"
            />
          </div>
          <div className="col-sm-12 col-lg-6">
            <ul className="list-group">
              <li className="list-group-item">Nombre: {data.name}</li>
              <li className="list-group-item">
                Email: {data.email}
              </li>
              <li className="list-group-item">
                Teléfono: {data.phone}
              </li>
              <li className="list-group-item">
                Website: {data.website}
              </li>
            </ul>
          </div>
        </div>
      </section>
      <ScheduleFormModal />
    </>
  );
};

export default DetailCard;
