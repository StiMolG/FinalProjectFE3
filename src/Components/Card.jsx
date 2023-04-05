import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { AppContext } from "../context/AppContext";
import { useContext } from "react";

const Card = ({id, name}) => {

  const { favs, toggleFavs } = useContext(AppContext);

  const changeState = () => {
    toggleFavs()
    console.log("Cambio de estado", id, favs)
  }
  return (
    <>
      {/* //Na linha seguinte deverá ser feito um teste se a aplicação
        // está em dark mode e deverá utilizar o css correto */}
      <div className={`card`}>
        <img src="/images/heart.png" alt="heart" className={styles.favButton} onClick={changeState}/>
        <img
          className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder"
        />
        <div className={`card-body ${styles.CardBody}`}>
          {/* Na linha seguinte o link deverá utilizar a matricula, nome e sobrenome do dentista
          que vem da API */}
          <NavLink to={`/dentist/${id}`}>
            <h5 className={`card-title ${styles.title}`}>{name}</h5>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
