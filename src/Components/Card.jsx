import { NavLink } from "react-router-dom";
import { useEffect, useReducer } from "react";
import styles from "./Card.module.css";
import dentistReducer from "../hooks/dentistReducer";
import { useAppContext } from "../hooks/useAppContext";

const Card = ({ props }) => {
  const [favs, dispatch] = useReducer(dentistReducer, []);


  const {
    state: { favorites },
    // addFavorite,
    // removeFavorite,
  } = useAppContext();
  useEffect(() => {
    console.log("entro", props)
  }, [props]);

  // const [state, dispatch] = useReducer(dentistReducer, []);
  const isFav = favorites.some(fav => fav.id === props.id);
  console.log("IS FAV: ", isFav);
  const changeState = (e) => {
    e.stopPropagation();
    // props["favorite"] = true;
    // Obtener el array actual de favoritos del localStorage
    const favoritos = JSON.parse(localStorage.getItem('favorites')) || [];
    // Agregar un nuevo elemento al array
    favoritos.push(props);
    localStorage.setItem('favorites', JSON.stringify(favoritos));
    dispatch({ type: 'ADD_FAVORITE', payload: favoritos });
    // Actualizar el array de favoritos en el localStorage
    console.log("Cambio de estado", favs);
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
          <NavLink to={`/dentist/${props.id}`}>
            <h5 className={`card-title ${styles.title}`}>{props.name}</h5>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Card;
